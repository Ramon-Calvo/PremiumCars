import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, TrendingUp, Clock, Shield, Banknote, Car, Star, Phone } from 'lucide-react'
import SellForm from './SellForm'

export const metadata: Metadata = {
  title: 'Vender mi coche · Tasación gratuita en 24h',
  description:
    'Vende tu coche de forma rápida, segura y al mejor precio con ReportMotor Sales. Tasación gratuita en 24 horas, sin publicar anuncios ni perder el tiempo.',
  openGraph: {
    title: 'Vende tu coche rápido y al mejor precio | ReportMotor Sales',
    description: 'Tasación gratuita en 24 horas, pago inmediato. Sin publicar anuncios ni perder el tiempo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vender mi coche | ReportMotor Sales',
  },
}

const BENEFITS = [
  {
    icon: Banknote,
    title: 'Mejor precio del mercado',
    desc: 'Comparamos tu coche con cientos de transacciones recientes para ofrecerte una tasación justa y competitiva.',
  },
  {
    icon: Clock,
    title: 'Proceso en 48 horas',
    desc: 'Desde que envías el formulario hasta que tienes el dinero en cuenta pueden pasar menos de dos días.',
  },
  {
    icon: Shield,
    title: 'Sin sorpresas ni deducciones',
    desc: 'El precio acordado es el que recibes. Nos encargamos de toda la gestión documental y de la transferencia.',
  },
  {
    icon: TrendingUp,
    title: 'Sin publicar anuncios',
    desc: 'No tendrás que lidiar con particulares, visitas a deshoras ni negociaciones incómodas. Nosotros compramos directamente.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Rellena el formulario',
    desc: 'Indica la marca, modelo, año, kilómetros y estado de tu vehículo. Tarda menos de 2 minutos.',
  },
  {
    num: '02',
    title: 'Recibe tu tasación',
    desc: 'Un asesor especializado analizará los datos y te enviará una oferta en menos de 24 horas.',
  },
  {
    num: '03',
    title: 'Acordamos la recogida',
    desc: 'Si aceptas la oferta, recogemos el coche en tu domicilio o puedes traerlo a nuestras instalaciones.',
  },
  {
    num: '04',
    title: 'Cobras al momento',
    desc: 'Transferencia bancaria inmediata en el mismo acto de entrega de llaves. Sin esperas.',
  },
]

const REVIEWS = [
  { name: 'Carlos M.', text: 'Vendí mi Seat León en 3 días y sin regateos. El precio fue el que me ofrecieron desde el principio.', stars: 5 },
  { name: 'Laura P.', text: 'Tenía miedo de que me bajasen el precio en el último momento. Para nada, todo tal cual lo acordamos.', stars: 5 },
  { name: 'Javier R.', text: 'Proceso muy rápido. Me llamaron al día siguiente de mandar el formulario.', stars: 5 },
]

export default function VenderPage() {
  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-900 grid-dot-pattern-dark pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 rounded-full mb-6">
                <Car className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-semibold text-orange-300 uppercase tracking-wide">
                  Vende tu coche
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
                Tu coche, al{' '}
                <span className="text-orange-400">mejor precio</span>
                <br />sin complicaciones
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Tasación gratuita en menos de 24 horas. Sin anuncios, sin visitas de particulares,
                sin regateos. Tú pones el precio mínimo, nosotros mejoramos la oferta.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '+2.500', label: 'Coches comprados' },
                  { value: '24h', label: 'Respuesta garantizada' },
                  { value: '★ 4.9', label: 'Valoración vendedores' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Benefits quick list */}
              <ul className="space-y-2">
                {[
                  'Tasación sin compromiso',
                  'Gestión de la documentación incluida',
                  'Pago inmediato en la entrega',
                  'Recogida a domicilio gratuita',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – Form */}
            <div>
              <SellForm />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Cómo funciona</h2>
            <p className="text-slate-500 mt-2">4 pasos sencillos para vender tu coche</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="relative">
                <div className="text-5xl font-black text-blue-100 leading-none mb-3">{num}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              ¿Por qué vender con ReportMotor?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Lo que dicen nuestros vendedores</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {REVIEWS.map(({ name, text, stars }) => (
              <div key={name} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                <p className="text-xs font-semibold text-slate-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">¿Tienes dudas? Llámanos</h2>
          <p className="text-blue-200 mb-8">
            Nuestro equipo te asesora sin compromiso de lunes a sábado de 9h a 19h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34604955023"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              604 955 023
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
