'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface CarViewer3DProps {
  images?: string[]
  brand?: string
  model?: string
  height?: string
}

export default function CarViewer3D({
  images = [],
  brand = '',
  model = '',
  height = '420px',
}: CarViewer3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [hintVisible, setHintVisible] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const accumulatedDragRef = useRef(0)

  const total = images.length

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate || total <= 1) return
    autoRotateRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 2200)
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    }
  }, [autoRotate, total])

  // Hide hint after interaction
  useEffect(() => {
    if (hasInteracted) {
      const t = setTimeout(() => setHintVisible(false), 3000)
      return () => clearTimeout(t)
    }
  }, [hasInteracted])

  const stopAutoRotate = useCallback(() => {
    setAutoRotate(false)
    setHasInteracted(true)
    if (autoRotateRef.current) clearInterval(autoRotateRef.current)
  }, [])

  const goTo = useCallback((idx: number) => {
    setCurrentIndex(((idx % total) + total) % total)
  }, [total])

  const prev = useCallback(() => { stopAutoRotate(); goTo(currentIndex - 1) }, [currentIndex, goTo, stopAutoRotate])
  const next = useCallback(() => { stopAutoRotate(); goTo(currentIndex + 1) }, [currentIndex, goTo, stopAutoRotate])

  const restartAutoRotate = useCallback(() => {
    setAutoRotate(true)
    setCurrentIndex(0)
  }, [])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    stopAutoRotate()
    setIsDragging(true)
    setDragStartX(e.clientX)
    accumulatedDragRef.current = 0
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    const delta = e.clientX - dragStartX
    setDragDelta(delta)
    const threshold = 60
    const newAccumulated = accumulatedDragRef.current + (e.clientX - dragStartX)
    if (Math.abs(delta) >= threshold) {
      const steps = Math.floor(Math.abs(delta) / threshold)
      const dir = delta > 0 ? -1 : 1
      goTo(currentIndex + dir * steps)
      setDragStartX(e.clientX)
      accumulatedDragRef.current = 0
    } else {
      accumulatedDragRef.current = newAccumulated
    }
  }, [isDragging, dragStartX, currentIndex, goTo])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setDragDelta(0)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoRotate()
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const delta = e.touches[0].clientX - dragStartX
    const threshold = 60
    if (Math.abs(delta) >= threshold) {
      const dir = delta > 0 ? -1 : 1
      goTo(currentIndex + dir)
      setDragStartX(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setDragDelta(0)
  }

  if (total === 0) {
    return (
      <div
        style={{ height }}
        className="w-full rounded-2xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#2a2a2a] flex flex-col items-center justify-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center">
          <RotateCcw className="w-7 h-7 text-zinc-600" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-zinc-500">Vista 360° no disponible</p>
          <p className="text-xs text-zinc-700 mt-1">No hay imágenes para este vehículo</p>
        </div>
      </div>
    )
  }

  const prevIdx = ((currentIndex - 1) + total) % total
  const nextIdx = (currentIndex + 1) % total
  // CSS skew for drag feedback
  const skewX = isDragging ? Math.max(-8, Math.min(8, dragDelta / 15)) : 0

  return (
    <div
      ref={containerRef}
      style={{ height: isFullscreen ? '100dvh' : height }}
      className={`w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#060606] border border-[#1e1e1e] relative select-none ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Prev image (left ghost) */}
      {total > 1 && (
        <div
          className="absolute inset-y-0 left-0 w-1/4 opacity-25 blur-sm pointer-events-none overflow-hidden"
          style={{ transform: `skewY(0deg) translateX(-15%)` }}
        >
          <Image
            src={images[prevIdx]}
            alt={`${brand} ${model} vista anterior`}
            fill
            sizes="25vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      {/* Main image */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `skewX(${skewX}deg) scale(${isDragging ? 1.02 : 1})`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Image
          src={images[currentIndex]}
          alt={`${brand} ${model} - Vista 360° ${currentIndex + 1} de ${total}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0}
          draggable={false}
        />
        {/* Dark vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Next image (right ghost) */}
      {total > 1 && (
        <div
          className="absolute inset-y-0 right-0 w-1/4 opacity-25 blur-sm pointer-events-none overflow-hidden"
          style={{ transform: `translateX(15%)` }}
        >
          <Image
            src={images[nextIdx]}
            alt={`${brand} ${model} vista siguiente`}
            fill
            sizes="25vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <RotateCcw className="w-3 h-3 text-white/80" />
          </div>
          <span className="text-[0.65rem] font-semibold text-white/80 uppercase tracking-widest">
            Vista 360°
          </span>
        </div>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-auto"
        >
          <Maximize2 className="w-3.5 h-3.5 text-white/80" />
        </button>
      </div>

      {/* Prev/Next buttons */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {/* Image dots + counter */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 pb-3 px-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
        {/* Dots */}
        {total > 1 && total <= 12 && (
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoRotate(); goTo(i) }}
                className={`rounded-full transition-all pointer-events-auto ${
                  i === currentIndex
                    ? 'w-4 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-[0.6rem] text-white/60 font-mono">
            {currentIndex + 1} / {total}
          </span>
          {!autoRotate && (
            <button
              onClick={restartAutoRotate}
              className="flex items-center gap-1 text-[0.6rem] text-white/50 hover:text-white/80 transition-colors pointer-events-auto"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              Auto
            </button>
          )}
        </div>
      </div>

      {/* Drag hint */}
      {hintVisible && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <span className="text-lg">👆</span>
            <span className="text-xs text-white/70 font-medium">Arrastra para rotar</span>
          </div>
        </div>
      )}
    </div>
  )
}
