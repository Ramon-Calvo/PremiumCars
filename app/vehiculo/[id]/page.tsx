import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Fuel,
  Settings,
  Calendar,
  Gauge,
  MapPin,
  Users,
  DoorOpen,
  Zap,
  CheckCircle,
} from 'lucide-react'
import TrustWidget from '@/components/ui/TrustWidget'
import FinanceCalculator from '@/components/ecommerce/FinanceCalculator'
import StickyBar from './StickyBar'
import ReserveDesktop from './ReserveDesktop'
import CarViewer3DClient from './CarViewer3DClient'
import { DEMO_VEHICLES, getVehicleById } from '@/lib/demo-data'
import type { Vehicle } from '@/types'


async function getVehicle(id: string): Promise<Vehicle | null> {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import('@/utils/supabase/server')
      const supabase = await createClient()
      const { data } = await supabase.from('vehicles').select('*').eq('id', id).single()
      if (data) return data as Vehicle
    }
  } catch {
    // Fall back to demo data
  }
  return getVehicleById(id) ?? null
}

export async function generateStaticParams() {
  return DEMO_VEHICLES.map((v) => ({ id: v.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const vehicle = await getVehicle(id)
  if (!vehicle) return { title: 'Vehículo no encontrado' }

  const title = `${vehicle.brand} ${vehicle.model}${vehicle.version ? ' ' + vehicle.version : ''} · ${vehicle.year}`
  const description = `${vehicle.brand} ${vehicle.model}${vehicle.version ? ' ' + vehicle.version : ''}, ${vehicle.year}, ${vehicle.kilometers.toLocaleString('es-ES')} km. ${vehicle.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}.`
  const image = vehicle.images?.[0] ?? 'https://www.reportmotor.es/og-default.jpg'

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${vehicle.brand} ${vehicle.model}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

const DGT_BADGE_COLOR: Record<string, string> = {
  '0': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  ECO: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  C: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  B: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default async function VehiculoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const vehicle = await getVehicle(id)

  if (!vehicle) notFound()

  const hasDiscount = vehicle.original_price && vehicle.original_price > vehicle.price
  const discountPct = hasDiscount
    ? Math.round(((vehicle.original_price! - vehicle.price) / vehicle.original_price!) * 100)
    : 0

  const specs = [
    { icon: Calendar, label: 'Año', value: String(vehicle.year) },
    { icon: Gauge, label: 'Kilómetros', value: vehicle.kilometers.toLocaleString('es-ES') + ' km' },
    { icon: Fuel, label: 'Combustible', value: vehicle.fuel_type },
    { icon: Settings, label: 'Cambio', value: vehicle.transmission },
    ...(vehicle.horsepower ? [{ icon: Zap, label: 'Potencia', value: `${vehicle.horsepower} CV` }] : []),
    ...(vehicle.doors ? [{ icon: DoorOpen, label: 'Puertas', value: String(vehicle.doors) }] : []),
    ...(vehicle.seats ? [{ icon: Users, label: 'Plazas', value: String(vehicle.seats) }] : []),
    ...(vehicle.owners ? [{ icon: Users, label: 'Propietarios', value: String(vehicle.owners) }] : []),
  ]

  const vehicleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `${vehicle.brand} ${vehicle.model}${vehicle.version ? ' ' + vehicle.version : ''}`,
    brand: { '@type': 'Brand', name: vehicle.brand },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    description: vehicle.description ?? undefined,
    image: vehicle.images?.[0] ?? undefined,
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: vehicle.kilometers,
      unitCode: 'KMT',
    },
    fuelType: vehicle.fuel_type,
    vehicleTransmission: vehicle.transmission,
    ...(vehicle.horsepower ? { vehicleEngine: { '@type': 'EngineSpecification', enginePower: { '@type': 'QuantitativeValue', value: vehicle.horsepower, unitCode: 'BHP' } } } : {}),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: vehicle.price,
      availability: vehicle.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
      seller: { '@type': 'AutoDealer', name: 'ReportMotor Sales' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleJsonLd) }}
      />
      <div className="pt-20 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 mt-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/vehiculos" className="hover:text-blue-600 transition-colors">Coches</Link>
            <span>/</span>
            <span className="text-slate-700">{vehicle.brand} {vehicle.model}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* ─── LEFT COLUMN (3/5) ─── */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Main image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.images?.[0] ?? 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop&q=80'}
                  alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                {/* DGT Badge */}
                {vehicle.dgt_label && (
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${DGT_BADGE_COLOR[vehicle.dgt_label] ?? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'}`}>
                      Etiqueta {vehicle.dgt_label === '0' ? 'CERO' : vehicle.dgt_label}
                    </span>
                  </div>
                )}
                {hasDiscount && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-500 text-white">
                      -{discountPct}%
                    </span>
                  </div>
                )}
              </div>

              {/* Image gallery (secondary) */}
              {vehicle.images?.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {vehicle.images.slice(1, 5).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <Image src={img} alt={`${vehicle.brand} ${vehicle.model} - Vista ${i + 2} de ${vehicle.images.length}`} fill sizes="200px" className="object-cover hover:scale-105 transition-transform cursor-pointer" />
                    </div>
                  ))}
                </div>
              )}

              {/* 3D Viewer */}
              <CarViewer3DClient
                images={vehicle.images ?? []}
                brand={vehicle.brand}
                model={vehicle.model}
              />

              {/* Description */}
              {vehicle.description && (
                <div className="card-light p-6">
                  <h2 className="font-bold text-slate-900 mb-3">Descripción del vehículo</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">{vehicle.description}</p>
                </div>
              )}

              {/* Specs table */}
              <div className="card-light p-6">
                <h2 className="font-bold text-slate-900 mb-4">Características técnicas</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center gap-2 text-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span className="text-xs text-slate-400">{label}</span>
                      <span className="text-sm font-semibold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="card-light p-6">
                <h2 className="font-bold text-slate-900 mb-4">Incluido en el precio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Historial DGT verificado',
                    'Inspección de 200 puntos',
                    'Sin cargas ni embargos',
                    'Garantía 12 meses',
                    'Documentación completa',
                    'Entrega a domicilio',
                    'Asesor personal asignado',
                    'ITV en vigor',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <TrustWidget />
            </div>

            {/* ─── RIGHT COLUMN (2/5) ─── */}
            <div className="lg:col-span-2 flex flex-col gap-5 sticky top-20 self-start overflow-y-auto max-h-[calc(100vh-5.5rem)]">
              {/* Price card */}
              <div className="card-light p-6">
                <div className="mb-4">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-0.5">
                    {vehicle.brand}
                  </p>
                  <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-1">
                    {vehicle.model}
                  </h1>
                  {vehicle.version && (
                    <p className="text-sm text-slate-500">{vehicle.version}</p>
                  )}
                </div>

                {/* Price */}
                <div className="mb-5">
                  {hasDiscount && (
                    <p className="text-sm text-slate-400 line-through mb-0.5">
                      {vehicle.original_price!.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                    </p>
                  )}
                  <p className="text-4xl font-black text-slate-900">
                    {vehicle.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                  </p>
                  {vehicle.monthly_fee && (
                    <p className="text-orange-500 font-semibold mt-1">
                      desde {vehicle.monthly_fee}€/mes
                    </p>
                  )}
                </div>

                {/* Location */}
                {vehicle.location && (
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-5">
                    <MapPin className="w-4 h-4" />
                    {vehicle.location}
                  </div>
                )}

                {/* Reserve button (desktop) */}
                <div className="hidden md:block">
                  <ReserveDesktop
                    carId={vehicle.id}
                    price={vehicle.price}
                    monthlyFee={vehicle.monthly_fee}
                    isAvailable={vehicle.status === 'available'}
                  />
                </div>

                {/* Contact */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34604955023'}?text=${encodeURIComponent(`Hola, me interesa el ${vehicle.brand} ${vehicle.model} (ref. ${vehicle.id})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 flex items-center justify-center gap-2 rounded-xl border border-slate-200 hover:border-green-400 hover:bg-green-50 text-sm text-slate-500 hover:text-green-700 transition-all"
                  >
                    <span className="text-green-500 text-lg">●</span>
                    Consultar por WhatsApp
                  </a>
                  <a
                    href="tel:+34604955023"
                    className="w-full py-3 flex items-center justify-center gap-2 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-sm text-slate-500 hover:text-blue-700 transition-all"
                  >
                    Llamar: 604 955 023
                  </a>
                </div>
              </div>

              {/* Finance calculator */}
              <FinanceCalculator basePrice={vehicle.price} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <StickyBar
        carId={vehicle.id}
        price={vehicle.price}
        monthlyFee={vehicle.monthly_fee}
        brand={vehicle.brand}
        model={vehicle.model}
        isAvailable={vehicle.status === 'available'}
      />
    </>
  )
}


