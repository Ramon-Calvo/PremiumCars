import Link from 'next/link'
import { Car, Search, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Car className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg text-slate-900">
          Report<span className="text-orange-500">Motor</span>
        </span>
      </Link>

      {/* Big 404 */}
      <div className="relative mb-6">
        <p className="text-[10rem] font-black text-slate-100 leading-none select-none">404</p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center">
            <Search className="w-9 h-9 text-blue-400" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-slate-900 mb-2">Página no encontrada</h1>
      <p className="text-slate-500 max-w-sm leading-relaxed mb-10">
        La dirección que buscas no existe o ha cambiado. Puede que hayas seguido un enlace antiguo.
      </p>

      {/* Quick links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all"
        >
          <Home className="w-4 h-4" />
          Ir al inicio
        </Link>
        <Link
          href="/vehiculos"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all"
        >
          <Car className="w-4 h-4" />
          Ver coches disponibles
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl transition-all"
        >
          Contactar
        </Link>
      </div>
    </div>
  )
}
