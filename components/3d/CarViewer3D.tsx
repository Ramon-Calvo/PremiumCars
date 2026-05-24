'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF, Html, useProgress, Environment } from '@react-three/drei'
import { Rotate3D } from 'lucide-react'

// Pre-carga Draco comprimido
function CarModel({ url }: { url: string }) {
  const { scene } = useGLTF(url, true)
  return <primitive object={scene} dispose={null} />
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
        <span className="text-xs text-zinc-400 font-mono">{Math.round(progress)}%</span>
      </div>
    </Html>
  )
}

interface CarViewer3DProps {
  modelUrl?: string
  height?: string
}

export default function CarViewer3D({ modelUrl, height = '420px' }: CarViewer3DProps) {
  if (!modelUrl) {
    return (
      <div
        style={{ height }}
        className="w-full rounded-2xl bg-[#111111] border border-[#2a2a2a] flex flex-col items-center justify-center gap-3"
      >
        <Rotate3D className="w-8 h-8 text-zinc-600" />
        <p className="text-xs text-zinc-600">Vista 3D no disponible para este vehículo</p>
      </div>
    )
  }

  return (
    <div
      style={{ height }}
      className="w-full rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#2a2a2a] relative"
    >
      <Canvas
        camera={{ position: [0, 0.5, 3.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0d0d0d']} />

        <Suspense fallback={<Loader />}>
          <Stage
            environment="city"
            intensity={0.6}
            adjustCamera={false}
            shadows="contact"
          >
            <CarModel url={modelUrl} />
          </Stage>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.8}
            makeDefault
          />
        </Suspense>
      </Canvas>

      {/* Controls hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
        <Rotate3D className="w-3.5 h-3.5 text-zinc-400" />
        <span className="text-[0.65rem] text-zinc-400">Arrastra para rotar</span>
      </div>
    </div>
  )
}
