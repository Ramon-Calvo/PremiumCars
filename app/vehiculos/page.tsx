import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import { Suspense } from 'react'
import CarCard from '@/components/ui/CarCard'
import VehicleFilters from './VehicleFilters'
import { DEMO_VEHICLES } from '@/lib/demo-data'
import type { Vehicle } from '@/types'

export const metadata: Metadata = {
  title: 'Coches en venta',
  description:
    'Explora nuestro catálogo de vehículos de segunda mano certificados con historial DGT verificado y garantía incluida.',
  openGraph: {
    title: 'Coches de segunda mano certificados | ReportMotor Sales',
    description: 'Catálogo completo de coches de ocasión certificados. Historial DGT verificado, garantía 12 meses y financiación inmediata.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo de coches | ReportMotor Sales',
  },
}

async function getVehicles(): Promise<Vehicle[]> {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import('@/utils/supabase/server')
      const supabase = await createClient()
      const { data } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false })
      if (data?.length) return data as Vehicle[]
    }
  } catch {
    // Fall back to demo data
  }
  return DEMO_VEHICLES
}

export default async function VehiculosPage({
  searchParams,
}: {
  searchParams: Promise<{ marca?: string; combustible?: string; precio?: string; anyo?: string }>
}) {
  const { marca, combustible, precio, anyo } = await searchParams
  const allVehicles = await getVehicles()

  const maxPrice = precio ? parseInt(precio) : Infinity
  const minYear = anyo ? parseInt(anyo) : 0

  const vehicles = allVehicles.filter((v) => {
    if (marca && marca !== 'Todas las marcas' && v.brand.toLowerCase() !== marca.toLowerCase()) return false
    if (combustible && combustible !== 'Todos' && v.fuel_type.toLowerCase() !== combustible.toLowerCase()) return false
    if (maxPrice !== Infinity && v.price > maxPrice) return false
    if (minYear > 0 && v.year < minYear) return false
    return true
  })

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
            Coches en venta
          </h1>
          <p className="text-slate-400 text-sm">
            {allVehicles.length} vehículos en stock · todos certificados y con garantía
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters — wrapped in Suspense because useSearchParams requires it */}
          <Suspense fallback={null}>
            <VehicleFilters total={vehicles.length} />
          </Suspense>

          {vehicles.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Search className="w-7 h-7 text-slate-400" />
              </div>
              <p className="text-slate-900 font-semibold">No se encontraron vehículos</p>
              <p className="text-sm text-slate-500">Intenta cambiar los filtros de búsqueda</p>
              <a href="/vehiculos" className="text-sm text-blue-600 hover:text-blue-700">
                Ver todos los coches →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, i) => (
                <CarCard key={vehicle.id} vehicle={vehicle} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

