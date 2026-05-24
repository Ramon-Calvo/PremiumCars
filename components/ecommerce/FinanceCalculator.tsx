'use client'

import { useState, useMemo } from 'react'
import { Calculator, Info } from 'lucide-react'

const TIN = 6.99

function calculateMonthly(principal: number, months: number): number {
  if (principal <= 0) return 0
  const r = TIN / 12 / 100
  const factor = Math.pow(1 + r, months)
  return (principal * r * factor) / (factor - 1)
}

function formatCurrency(n: number) {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

const TERM_OPTIONS = [12, 24, 36, 48, 60, 72, 84]

interface FinanceCalculatorProps {
  basePrice: number
}

export default function FinanceCalculator({ basePrice }: FinanceCalculatorProps) {
  const minDown = 0
  const maxDown = Math.floor(basePrice * 0.6)
  const defaultDown = Math.round(basePrice * 0.2)

  const [downPayment, setDownPayment] = useState(defaultDown)
  const [months, setMonths] = useState(60)

  const principal = Math.max(0, basePrice - downPayment)
  const monthly = useMemo(() => calculateMonthly(principal, months), [principal, months])
  const totalPaid = useMemo(() => monthly * months + downPayment, [monthly, months, downPayment])
  const totalInterest = useMemo(() => totalPaid - basePrice, [totalPaid, basePrice])

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <Calculator className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Calculadora de Financiación</h3>
      </div>

      {/* Monthly payment highlight */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-center">
        <p className="text-xs text-orange-600 uppercase tracking-widest font-medium mb-1">
          Cuota mensual estimada
        </p>
        <p className="text-4xl font-bold text-slate-900">
          {formatCurrency(monthly)}
          <span className="text-base font-normal text-slate-400">/mes</span>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          TIN {TIN}% · {months} meses
        </p>
      </div>

      {/* Entrada slider */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-slate-500 font-medium">Entrada</label>
          <span className="text-sm font-bold text-slate-900">{formatCurrency(downPayment)}</span>
        </div>
        <input
          type="range"
          min={minDown}
          max={maxDown}
          step={500}
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          aria-label="Entrada"
          className="w-full"
        />
        <div className="flex justify-between mt-1">
          <span className="text-[0.65rem] text-slate-400">{formatCurrency(minDown)}</span>
          <span className="text-[0.65rem] text-slate-400">{formatCurrency(maxDown)}</span>
        </div>
      </div>

      {/* Plazo selector */}
      <div className="mb-5">
        <p className="text-sm text-slate-500 font-medium mb-2">Plazo</p>
        <div className="grid grid-cols-7 gap-1">
          {TERM_OPTIONS.map((t) => (
            <button
              key={t}
              onClick={() => setMonths(t)}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                months === t
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {t}m
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="border-t border-slate-200 pt-4 flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Capital financiado</span>
          <span className="text-slate-900 font-medium">{formatCurrency(principal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Total intereses</span>
          <span className="text-slate-700">{formatCurrency(totalInterest)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Total a pagar</span>
          <span className="text-slate-900 font-semibold">{formatCurrency(totalPaid)}</span>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="flex items-start gap-1.5 mt-4">
        <Info className="w-3.5 h-3.5 text-slate-300 mt-0.5 shrink-0" />
        <p className="text-[0.65rem] text-slate-400 leading-relaxed">
          Simulación orientativa. TIN {TIN}%. Sujeto a aprobación de la entidad financiera. TAE
          variable según condiciones del cliente. Oferta válida para residentes en España.
        </p>
      </div>
    </div>
  )
}
