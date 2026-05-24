'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'

const BRANDS = [
  'Todas las marcas', 'Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Mercedes-Benz',
  'Opel', 'Peugeot', 'Renault', 'SEAT', 'Skoda', 'Toyota', 'Volkswagen', 'Volvo',
]
const FUELS = ['Todos', 'Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP']
const PRICES = [
  { label: 'Cualquier precio', value: '' },
  { label: 'Hasta 10.000 €', value: '10000' },
  { label: 'Hasta 15.000 €', value: '15000' },
  { label: 'Hasta 20.000 €', value: '20000' },
  { label: 'Hasta 30.000 €', value: '30000' },
]
const YEARS = [
  { label: 'Cualquier año', value: '' },
  { label: '2023 o más nuevo', value: '2023' },
  { label: '2021 o más nuevo', value: '2021' },
  { label: '2019 o más nuevo', value: '2019' },
  { label: '2017 o más nuevo', value: '2017' },
]

export default function VehicleFilters({ total }: { total: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const marca = searchParams.get('marca') ?? ''
  const combustible = searchParams.get('combustible') ?? ''
  const precio = searchParams.get('precio') ?? ''
  const anyo = searchParams.get('anyo') ?? ''

  const hasFilters = !!(marca || combustible || precio || anyo)

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (!value || value === 'Todas las marcas' || value === 'Todos') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  const clearAll = () => router.push(pathname, { scroll: false })

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-slate-700">Filtros</span>
          <span className="text-xs text-slate-400">
            ({total} vehículo{total !== 1 ? 's' : ''})
          </span>
        </div>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-red-500 transition-colors"
          >
            <X className="w-3 h-3" />
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Marca */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Marca</label>
          <select
            value={marca || 'Todas las marcas'}
            onChange={(e) => updateParam('marca', e.target.value)}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Combustible */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Combustible</label>
          <select
            value={combustible || 'Todos'}
            onChange={(e) => updateParam('combustible', e.target.value)}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {FUELS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>

        {/* Precio máximo */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Precio máximo</label>
          <select
            value={precio}
            onChange={(e) => updateParam('precio', e.target.value)}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {PRICES.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
          </select>
        </div>

        {/* Año mínimo */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Año mínimo</label>
          <select
            value={anyo}
            onChange={(e) => updateParam('anyo', e.target.value)}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {YEARS.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
          </select>
        </div>
      </div>

      {/* Active filter chips */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100">
          {marca && marca !== 'Todas las marcas' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
              {marca}
              <button onClick={() => updateParam('marca', '')} className="hover:text-blue-900">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {combustible && combustible !== 'Todos' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
              {combustible}
              <button onClick={() => updateParam('combustible', '')} className="hover:text-blue-900">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {precio && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
              Hasta {parseInt(precio).toLocaleString('es-ES')} €
              <button onClick={() => updateParam('precio', '')} className="hover:text-blue-900">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {anyo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
              Desde {anyo}
              <button onClick={() => updateParam('anyo', '')} className="hover:text-blue-900">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
