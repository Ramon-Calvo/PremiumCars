'use client'

import { useState, useTransition } from 'react'
import { reserveCar } from '@/app/actions/reserveCar'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

interface ReserveDesktopProps {
  carId: string
  price: number
  monthlyFee: number | null
  isAvailable: boolean
}

export default function ReserveDesktop({ carId, price, monthlyFee, isAvailable }: ReserveDesktopProps) {
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
        setErrorMsg(result.error ?? 'Error al reservar')
        setStatus('error')
      }
    })
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 justify-center py-4 text-blue-600 bg-blue-50 rounded-xl border border-blue-200">
        <CheckCircle className="w-5 h-5" />
        <span className="font-semibold text-sm">¡Reservado! Te contactaremos en breve.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 rounded-xl px-3 py-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}
      <button
        onClick={handleReserve}
        disabled={isPending || !isAvailable}
        className="w-full h-14 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-sm hover:shadow-orange-200"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Procesando...
          </>
        ) : !isAvailable ? (
          'No disponible'
        ) : (
          'Reservar por 150€'
        )}
      </button>
      <p className="text-xs text-zinc-600 text-center">
        Depósito reembolsable si cambias de opinión en 48h
      </p>
    </div>
  )
}
