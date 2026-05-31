'use client'

import dynamic from 'next/dynamic'

const CarViewer3D = dynamic(() => import('@/components/3d/CarViewer3D'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl bg-[#0f0f0f] border border-[#1e1e1e] flex items-center justify-center"
      style={{ height: '420px' }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-xs text-slate-500">Cargando vista 360°...</span>
      </div>
    </div>
  ),
})

interface CarViewer3DClientProps {
  images: string[]
  brand: string
  model: string
}

export default function CarViewer3DClient({ images, brand, model }: CarViewer3DClientProps) {
  return <CarViewer3D images={images} brand={brand} model={model} />
}
