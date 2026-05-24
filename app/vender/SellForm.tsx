'use client'

import { useState, useTransition } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const FUEL_OPTIONS = ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP', 'Otro']
const TRANSMISSION_OPTIONS = ['Manual', 'Automático']

export default function SellForm() {
  const [isPending, startTransition] = useTransition()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    year: '',
    km: '',
    fuel: FUEL_OPTIONS[0],
    transmission: TRANSMISSION_OPTIONS[0],
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      await new Promise((r) => setTimeout(r, 1000))
      setSent(true)
    })
  }

  if (sent) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">¡Solicitud recibida!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          Un asesor revisará los datos de tu vehículo y te contactará en menos de 24 horas con una valoración sin compromiso.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
      <p className="text-sm font-semibold text-slate-700">Cuéntanos sobre tu coche</p>

      {/* Datos personales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Nombre *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Teléfono *</label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="600 000 000"
            className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Email *</label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="border-t border-slate-100 pt-3">
        <p className="text-xs font-medium text-slate-500 mb-3">Datos del vehículo</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Marca *</label>
            <input
              required
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Ej. Volkswagen"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Modelo *</label>
            <input
              required
              name="model"
              value={form.model}
              onChange={handleChange}
              placeholder="Ej. Golf"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Año *</label>
            <input
              required
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="2019"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Kilómetros *</label>
            <input
              required
              name="km"
              value={form.km}
              onChange={handleChange}
              placeholder="85.000"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Combustible</label>
            <select
              name="fuel"
              value={form.fuel}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {FUEL_OPTIONS.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Cambio</label>
            <select
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {TRANSMISSION_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Notas adicionales</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Estado del coche, extras, reparaciones recientes..."
          className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        {isPending ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {isPending ? 'Enviando...' : 'Solicitar valoración gratuita'}
      </button>

      <p className="text-xs text-center text-slate-400">
        Sin compromiso. Respuesta en menos de 24 horas.
      </p>
    </form>
  )
}
