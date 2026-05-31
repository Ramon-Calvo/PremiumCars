import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Fuel, Settings, Calendar, Gauge } from 'lucide-react'
import type { Vehicle } from '@/types'

interface CarCardProps {
  vehicle: Vehicle
  priority?: boolean
}

const DGT_BADGE: Record<string, string> = {
  '0': 'badge-dgt-0',
  ECO: 'badge-dgt-eco',
  C: 'badge-dgt-c',
  B: 'badge-dgt-b',
}

function formatKm(km: number) {
  return km.toLocaleString('es-ES') + ' km'
}

function formatPrice(price: number) {
  return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function CarCard({ vehicle, priority = false }: CarCardProps) {
  const hasDiscount = vehicle.original_price && vehicle.original_price > vehicle.price
  const discountPct = hasDiscount
    ? Math.round(((vehicle.original_price! - vehicle.price) / vehicle.original_price!) * 100)
    : 0

  const imageSrc = vehicle.images?.[0] ?? 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80'

  return (
    <Link href={`/vehiculo/${vehicle.id}`} className="group block">
      <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50">
        {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={imageSrc}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {vehicle.dgt_label && (
              <span className={DGT_BADGE[vehicle.dgt_label] ?? 'badge-dgt-c'}>
                {vehicle.dgt_label === '0' ? 'CERO' : vehicle.dgt_label}
              </span>
            )}
            {hasDiscount && discountPct > 0 && (
              <span className="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-red-500 text-white uppercase tracking-wide">
                -{discountPct}%
              </span>
            )}
          </div>

          {/* Status badge */}
          {vehicle.status === 'reserved' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-amber-500 text-white font-bold px-4 py-2 rounded-xl text-sm">
                Reservado
              </span>
            </div>
          )}
          {vehicle.status === 'sold' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-red-600 text-white font-bold px-4 py-2 rounded-xl text-sm">
                Vendido
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Prices */}
          <div className="mb-3">
            {hasDiscount && (
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs text-zinc-500 line-through">
                  {formatPrice(vehicle.original_price!)}
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-slate-900">{formatPrice(vehicle.price)}</span>
              {vehicle.monthly_fee && (
                <span className="text-sm text-orange-500 font-medium">
                  desde {vehicle.monthly_fee}€/mes
                </span>
              )}
            </div>
          </div>

          {/* Model */}
          <div className="mb-3">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-0.5">
              {vehicle.brand}
            </p>
            <h3 className="font-bold text-slate-900 text-lg leading-tight">
              {vehicle.model}
            </h3>
            {vehicle.version && (
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{vehicle.version}</p>
            )}
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {vehicle.year}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Gauge className="w-3.5 h-3.5 text-slate-400" />
              {formatKm(vehicle.kilometers)}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Fuel className="w-3.5 h-3.5 text-slate-400" />
              {vehicle.fuel_type}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Settings className="w-3.5 h-3.5 text-slate-400" />
              {vehicle.transmission}
            </div>
          </div>

          {/* Location + CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            {vehicle.location && (
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                {vehicle.location}
              </div>
            )}
            <span className="ml-auto text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              Ver detalles →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
