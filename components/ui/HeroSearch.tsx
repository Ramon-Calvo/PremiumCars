'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ChevronDown } from 'lucide-react'

const BRANDS = ['Todas las marcas', 'Audi', 'BMW', 'Citroën', 'Ford', 'Hyundai', 'Kia', 'Mercedes-Benz', 'Nissan', 'Opel', 'Peugeot', 'Renault', 'SEAT', 'Skoda', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo']
const FUELS = ['Cualquier combustible', 'Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP']
const MAX_PRICES = [
  { label: 'Sin límite de precio', value: '' },
  { label: 'Hasta 10.000€', value: '10000' },
  { label: 'Hasta 15.000€', value: '15000' },
  { label: 'Hasta 20.000€', value: '20000' },
  { label: 'Hasta 25.000€', value: '25000' },
  { label: 'Hasta 30.000€', value: '30000' },
  { label: 'Hasta 40.000€', value: '40000' },
]

interface SelectFieldProps {
  label: string
  value: string
  options: string[] | { label: string; value: string }[]
  onChange: (v: string) => void
  icon?: React.ReactNode
}

function SelectField({ label, value, options, onChange, icon }: SelectFieldProps) {
  return (
    <div className="relative flex-1 min-w-0">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
          {icon}
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className={`w-full h-12 ${icon ? 'pl-9' : 'pl-4'} pr-8 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer transition-colors`}
      >
        {options.map((opt) => {
          const val = typeof opt === 'string' ? opt : opt.value
          const lbl = typeof opt === 'string' ? opt : opt.label
          return (
            <option key={val} value={val}>
              {lbl}
            </option>
          )
        })}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
    </div>
  )
}

export default function HeroSearch() {
  const router = useRouter()
  const [brand, setBrand] = useState('')
  const [fuel, setFuel] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams()
    if (brand && brand !== 'Todas las marcas') params.set('brand', brand)
    if (fuel && fuel !== 'Cualquier combustible') params.set('fuel', fuel)
    if (maxPrice) params.set('price', maxPrice)
    router.push(`/vehiculos${params.toString() ? `?${params.toString()}` : ''}`)
  }, [brand, fuel, maxPrice, router])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div
      className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-slate-900/20"
      onKeyDown={handleKeyDown}
    >
      <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
        ¿Qué coche buscas?
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <SelectField
          label="Marca"
          value={brand}
          options={BRANDS}
          onChange={setBrand}
        />
        <SelectField
          label="Combustible"
          value={fuel}
          options={FUELS}
          onChange={setFuel}
        />
        <SelectField
          label="Precio máximo"
          value={maxPrice}
          options={MAX_PRICES}
          onChange={setMaxPrice}
        />
        <button
          onClick={handleSearch}
          className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm hover:shadow-orange-200"
        >
          <Search className="w-4 h-4" />
          Buscar
        </button>
      </div>

      {/* Quick filters */}
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-200">
        {['Eléctrico', 'Híbrido', 'SUV', 'Menos de 15.000€', 'KM0', 'Premium'].map((tag) => (
          <button
            key={tag}
            onClick={() => router.push(`/vehiculos?q=${encodeURIComponent(tag)}`)}
            className="text-xs text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 transition-all"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
