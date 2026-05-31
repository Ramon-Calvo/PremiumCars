'use client'

import { useState } from 'react'
import { flushSync } from 'react-dom'
import { submitFinanceRequest } from '@/app/actions/submitFinanceRequest'
import { CheckCircle, AlertCircle, Loader2, CreditCard, Phone, MessageCircle, BadgeCheck, Building2 } from 'lucide-react'

const TIN = 6.99

function calcMonthly(principal: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0
  const r = TIN / 12 / 100
  const f = Math.pow(1 + r, months)
  return (principal * r * f) / (f - 1)
}

function fmt(n: number) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

const BANKS = ['Santander Consumer', 'BBVA', 'Cetelem']

const TERM_OPTIONS = [
  { value: '12', label: '12 meses' },
  { value: '24', label: '24 meses' },
  { value: '36', label: '36 meses' },
  { value: '48', label: '48 meses' },
  { value: '60', label: '60 meses' },
  { value: '72', label: '72 meses' },
  { value: '84', label: '84 meses' },
]

const EMPLOYMENT_OPTIONS = [
  { value: 'asalariado', label: 'Asalariado / empleado por cuenta ajena' },
  { value: 'autonomo', label: 'Autónomo' },
  { value: 'pensionista', label: 'Pensionista / jubilado' },
  { value: 'otro', label: 'Otro' },
]

const inputCls =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'

export default function FinanceRequestForm() {
  const [step, setStep] = useState<'form' | 'checking' | 'result'>('form')
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleInterest: '',
    amount: '',
    term: '60',
    employment: '',
    notes: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setResult(null)
    flushSync(() => setStep('checking')) // fuerza render inmediato antes del await
    const started = Date.now()
    const res = await submitFinanceRequest(form)
    const elapsed = Date.now() - started
    if (elapsed < 2500) await new Promise((r) => setTimeout(r, 2500 - elapsed))
    if (res.success) {
      setStep('result')
    } else {
      setStep('form')
      setResult(res)
    }
  }

  // ── Checking screen ───────────────────────────────────────────────────────
  if (step === 'checking') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-10 flex flex-col items-center text-center gap-6 shadow-sm min-h-[420px] justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin" />
          <CreditCard className="absolute inset-0 m-auto w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Analizando tu perfil…</h3>
          <p className="text-slate-500 text-sm">Consultando condiciones con nuestras entidades colaboradoras</p>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {BANKS.map((bank, i) => (
            <div key={bank} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-2.5">
              <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-sm text-slate-600 flex-1">{bank}</span>
              <Loader2 className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDelay: `${i * 0.3}s` }} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── Result screen ─────────────────────────────────────────────────────────
  if (step === 'result') {
    const principal = form.amount ? Math.max(0, parseFloat(form.amount) || 0) : 0
    const months = parseInt(form.term)
    const monthly = calcMonthly(principal, months)
    const totalPaid = monthly * months
    const totalInterest = totalPaid - principal
    const firstName = form.name.split(' ')[0]

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Green header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-5 text-white">
          <div className="flex items-center gap-3 mb-1">
            <CheckCircle className="w-6 h-6" />
            <span className="font-bold text-lg">¡Buenas noticias, {firstName}!</span>
          </div>
          <p className="text-green-100 text-sm">Tu perfil es compatible con financiación. Un asesor te confirma en 30 min.</p>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* Cuota estimada */}
          {principal > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-600 uppercase tracking-widest font-medium mb-1">
                Cuota mensual estimada
              </p>
              <p className="text-4xl font-black text-slate-900">
                {fmt(monthly)}
                <span className="text-base font-normal text-slate-400">/mes</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                TIN {TIN}% · {months} meses · Capital {fmt(principal)}
              </p>
            </div>
          )}

          {/* Bancos */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Entidades consultadas
            </p>
            <div className="flex flex-col gap-1.5">
              {BANKS.map((bank) => (
                <div key={bank} className="flex items-center gap-2 text-sm text-slate-700">
                  <BadgeCheck className="w-4 h-4 text-green-500 shrink-0" />
                  {bank}
                </div>
              ))}
            </div>
          </div>

          {/* Resumen */}
          {principal > 0 && (
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Total intereses</span>
                <span className="text-slate-700">{fmt(totalInterest)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-slate-700">Total a pagar</span>
                <span className="text-slate-900">{fmt(totalPaid)}</span>
              </div>
            </div>
          )}

          {/* Próximo paso */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-2">
              Próximo paso
            </p>
            <p className="text-sm text-slate-700">
              Tu asesor personal te llamará al <strong>{form.phone}</strong> en menos de{' '}
              <strong>30 minutos</strong> para confirmar las condiciones definitivas.
            </p>
          </div>

          {/* Documentación necesaria */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-2">
              Prepara tu documentación
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                'DNI por ambas caras',
                'Informe de vida laboral actualizado',
                'Dos últimas nóminas',
                'Certificado de titularidad bancaria',
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto directo */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+34604955023"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llamar ahora
            </a>
            <a
              href="https://wa.me/34604955023?text=Hola%2C%20acabo%20de%20solicitar%20financiaci%C3%B3n%20online"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-sm font-medium text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <p className="text-[0.65rem] text-slate-400 text-center leading-relaxed">
            Cuota orientativa. TIN {TIN}%. TAE variable según condiciones del cliente. Sujeto a
            aprobación de la entidad financiera. Sin consulta a CIRBE.
          </p>
        </div>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-slate-900 text-lg">Solicitar financiación</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {/* Nombre + Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
              className={inputCls}
              disabled={false}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="600 000 000"
              required
              className={inputCls}
              disabled={false}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1.5 block">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            className={inputCls}
            disabled={false}
          />
        </div>

        {/* Vehículo de interés + Importe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Vehículo de interés
            </label>
            <input
              name="vehicleInterest"
              value={form.vehicleInterest}
              onChange={handleChange}
              placeholder="Ej: BMW Serie 3, SUV gasolina…"
              className={inputCls}
              disabled={false}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Importe aproximado (€)
            </label>
            <input
              name="amount"
              type="number"
              min="1000"
              max="150000"
              value={form.amount}
              onChange={handleChange}
              placeholder="Ej: 15000"
              className={inputCls}
              disabled={false}
            />
          </div>
        </div>

        {/* Plazo + Situación laboral */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Plazo deseado <span className="text-red-500">*</span>
            </label>
            <select
              name="term"
              value={form.term}
              onChange={handleChange}
              required
              className={inputCls}
              disabled={false}
            >
              {TERM_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">
              Situación laboral <span className="text-red-500">*</span>
            </label>
            <select
              name="employment"
              value={form.employment}
              onChange={handleChange}
              required
              className={inputCls}
              disabled={false}
            >
              <option value="" disabled>Selecciona tu situación</option>
              {EMPLOYMENT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notas */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1.5 block">
            Comentarios adicionales
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Cuéntanos cualquier detalle relevante (presupuesto, urgencia, etc.)"
            rows={3}
            className={`${inputCls} resize-none`}
            disabled={false}
          />
        </div>

        {/* Error */}
        {result?.error && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {result.error}
          </div>
        )}

        <button
          type="submit"
          disabled={false}
          className="flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          Solicitar consulta gratuita →
        </button>

        <p className="text-[0.65rem] text-slate-400 text-center leading-relaxed">
          Sin compromiso · Respuesta en 30 minutos · Sin impacto en tu historial crediticio
        </p>
      </form>
    </div>
  )
}
