import type { Metadata } from 'next'
import { Star, Shield, Truck, Clock, ChevronRight, Zap, TrendingDown, Car } from 'lucide-react'
import HeroSearch from '@/components/ui/HeroSearch'
import CarCard from '@/components/ui/CarCard'
import TrustWidget from '@/components/ui/TrustWidget'
import { DEMO_VEHICLES } from '@/lib/demo-data'
import type { Vehicle } from '@/types'

export const metadata: Metadata = {
  title: 'ReportMotor Sales | Coches de Segunda Mano Certificados',
  description:
    'Más de 14.000 vehículos certificados con historial DGT verificado. Financiación en 30 minutos y entrega a domicilio en toda España.',
}

const STATS = [
  { value: '14.000+', label: 'Vehículos en stock' },
  { value: '★ 4.9', label: 'Valoración Google' },
  { value: '200', label: 'Puntos de control' },
  { value: '24h', label: 'Entrega a domicilio' },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: Car,
    title: 'Busca tu coche',
    description: 'Más de 14.000 vehículos certificados. Filtra por marca, precio, combustible o etiqueta DGT.',
  },
  {
    step: '02',
    icon: Shield,
    title: 'Reserva por 150€',
    description: 'Reserva online en segundos. Sin visitar el concesionario. Si cambias de opinión, te devolvemos el depósito.',
  },
  {
    step: '03',
    icon: Zap,
    title: 'Financia en 30 min',
    description: 'Pre-aprobación sin afectar tu historial crediticio. TIN desde 6,99%. Hasta 84 meses de plazo.',
  },
  {
    step: '04',
    icon: Truck,
    title: 'Recibe en casa',
    description: 'Entrega a domicilio en toda la península. Inspección final incluida. Documentación preparada.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Carlos M.',
    location: 'Madrid',
    rating: 5,
    text: 'Compré mi VW Golf en menos de 48 horas desde que lo vi online. La entrega fue puntual y el coche estaba impecable. Sin sorpresas ocultas, tal y como lo anunciaban.',
  },
  {
    name: 'Laura P.',
    location: 'Barcelona',
    rating: 5,
    text: 'La calculadora de financiación fue muy útil para saber exactamente qué iba a pagar. El proceso fue 100% online y sin estrés. ¡Totalmente recomendable!',
  },
  {
    name: 'Javier R.',
    location: 'Valencia',
    rating: 5,
    text: 'Llevaba meses buscando un Toyota RAV4 Hybrid. Aquí lo encontré certificado, con historial DGT verificado y a buen precio. El servicio postventa es excepcional.',
  },
]

async function getFeaturedVehicles(): Promise<Vehicle[]> {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import('@/utils/supabase/server')
      const supabase = await createClient()
      const { data } = await supabase
        .from('vehicles')
        .select('*')
        .eq('status', 'available')
        .order('created_at', { ascending: false })
        .limit(9)
      if (data && data.length > 0) return data as Vehicle[]
    }
  } catch {
    // Fall back to demo data
  }
  return DEMO_VEHICLES.slice(0, 9)
}

export default async function HomePage() {
  const vehicles = await getFeaturedVehicles()

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-900">
        {/* Background effects */}
        <div className="absolute inset-0 grid-dot-pattern-dark" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                Certificados · Verificados · Garantizados
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white">
              Tu próximo coche,{' '}
              <span className="text-gradient-emerald">sin sorpresas.</span>
            </h1>

              <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Más de{' '}
              <span className="text-white font-semibold">14.000 vehículos</span> certificados con
              historial DGT verificado. Financiación en{' '}
              <span className="text-white font-semibold">30 minutos</span> y entrega a domicilio en
              toda España.
            </p>

            {/* Search */}
            <HeroSearch />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-gradient-emerald">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED CARS ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold mb-2">
                Selección destacada
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ofertas del momento</h2>
            </div>
            <a
              href="/vehiculos"
              className="hidden sm:flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <CarCard key={v.id} vehicle={v} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <a
              href="/vehiculos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-blue-300 rounded-xl text-sm text-slate-600 hover:text-blue-600 transition-all"
            >
              Ver todos los coches <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold mb-2">
              Compra con confianza
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Tu seguridad, nuestra prioridad
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              Cada vehículo pasa por un proceso de verificación exhaustivo antes de llegar a ti.
            </p>
          </div>
          <TrustWidget />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="como-funciona" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold mb-2">
              Proceso de compra
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Comprar un coche nunca fue tan fácil
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="relative">
                {/* Connector line */}
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-300/50 to-transparent -translate-x-6 last:hidden z-0" />

                <div className="card-dark p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-3xl font-black text-blue-200 font-mono">{step}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/como-funciona"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Saber más sobre el proceso <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-blue-600 uppercase tracking-widest font-semibold mb-2">
                ¿Por qué elegirnos?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                La diferencia está en los detalles
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { icon: TrendingDown, title: 'Ahorra hasta el 40%', desc: 'Respecto al precio de un coche nuevo equivalente. Misma calidad, menor coste.' },
                  { icon: Shield, title: '15 días de prueba', desc: 'Si el coche no cumple tus expectativas, lo devuelves sin preguntas. Tu dinero de vuelta.' },
                  { icon: Clock, title: 'Financiación en 30 min', desc: 'Pre-aprobación sin consultar CIRBE. Respuesta inmediata y sin papeleo.' },
                  { icon: Truck, title: 'Entrega en 24-48h', desc: 'Red logística propia que cubre toda la península ibérica.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sell CTA card */}
            <div className="bg-blue-700 border border-orange-500/30 rounded-3xl p-8 relative overflow-hidden shadow-lg">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs text-orange-300 uppercase tracking-widest font-semibold mb-3">
                ¿Tienes un coche para vender?
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">
                Tasación online en 2 minutos
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Obtén el mejor precio por tu vehículo actual. Sin visitas, sin esperas. Transferencia
                el mismo día.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {['Mejor precio garantizado', 'Transferencia el mismo día', 'Trámites incluidos'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-4 h-4 rounded-full bg-orange-500/30 border border-orange-500/50 flex items-center justify-center text-[0.6rem] text-orange-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contacto"
                className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Tasar mi coche gratis →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Opiniones verificadas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-sm">4.9 sobre 5 · más de 2.800 reseñas Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, location, rating, text }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div className="flex mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{name}</p>
                    <p className="text-xs text-slate-400">{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para encontrar tu coche perfecto?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            14.000 vehículos esperando. Todos certificados. Todos verificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/vehiculos"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all text-lg shadow-sm hover:shadow-orange-300/30"
            >
              Ver todos los coches →
            </a>
            <a
              href="/contacto"
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-all text-lg"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
