'use client'

import dynamic from 'next/dynamic'

const CarViewer3D = dynamic(() => import('@/components/3d/CarViewer3D'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl bg-[#111111] border border-[#2a2a2a] flex items-center justify-center"
      style={{ height: '420px' }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-xs text-slate-500">Cargando visor 3D...</span>
      </div>
    </div>
  ),
})

export default function CarViewer3DClient({ modelUrl }: { modelUrl: string }) {
  return <CarViewer3D modelUrl={modelUrl} />
}
