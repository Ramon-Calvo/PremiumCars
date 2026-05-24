'use client'

import { useState, useTransition } from 'react'
import { reserveCar } from '@/app/actions/reserveCar'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

interface StickyBarProps {
  carId: string
  price: number
  monthlyFee: number | null
  brand: string
  model: string
  isAvailable: boolean
}

export default function StickyBar({ carId, price, monthlyFee, brand, model, isAvailable }: StickyBarProps) {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleReserve = () => {
    if (!isAvailable) return
    startTransition(async () => {
      const result = await reserveCar({
        carId,
        monthlyFee: monthlyFee ?? Math.round(price / 60),
      })
      if (result.success) {
        setStatus('success')
      } else {
        setErrorMsg(result.error ?? 'Error desconocido')
        setStatus('error')
      }
    })
  }

  const formattedPrice = price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  })

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg px-4 py-3 pb-safe">
        {status === 'success' ? (
          <div className="flex items-center gap-2 justify-center text-blue-600 py-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">¡Reservado! Te contactaremos en breve.</span>
          </div>
        ) : (
          <>
            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs text-red-400 mb-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400 truncate">
                {brand} {model}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-slate-900">{formattedPrice}</span>
                  {monthlyFee && (
                    <span className="text-xs text-orange-500">desde {monthlyFee}€/mes</span>
                  )}
                </div>
              </div>
              <button
                onClick={handleReserve}
                disabled={isPending || !isAvailable}
                className="shrink-0 px-5 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center gap-2 text-sm shadow-sm"
              >
                {isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : !isAvailable ? (
                  'No disponible'
                ) : (
                  'Reservar · 150€'
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
