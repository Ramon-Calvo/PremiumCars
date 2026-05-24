import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Car, Shield, Zap, Truck, CheckCircle, Clock, Phone, FileText,
  Search, CreditCard, MapPin, Star, ChevronRight, HelpCircle,
  BadgeCheck, RefreshCw, HeartHandshake, Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cómo funciona · Compra tu coche en 4 pasos',
  description:
    'Descubre cómo comprar un coche de segunda mano certificado con ReportMotor Sales: busca, reserva online, financia en 30 minutos y recibe en casa.',
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    step: '01',
    icon: Search,
    title: 'Busca y elige tu coche',
    summary: 'Más de 14.000 vehículos. Filtra a tu medida.',
    color: 'blue',
    details: [
      'Utiliza los filtros por marca, modelo, precio, combustible, etiqueta DGT y más.',
      'Cada vehículo muestra precio final sin letra pequeña: precio contado y cuota mensual orientativa.',
      'Fotos reales de alta resolución tomadas en nuestras instalaciones.',
      'Historial DGT verificado incluido en la ficha: propietarios anteriores, kilómetros reales y cargas.',
      'Visualización 3D disponible en modelos seleccionados.',
    ],
    cta: { href: '/vehiculos', label: 'Ver todos los coches' },
  },
  {
    step: '02',
    icon: Shield,
    title: 'Reserva online por solo 150 €',
    summary: 'Sin visitar el concesionario. Con garantía de devolución.',
    color: 'blue',
    details: [
      'Reserva 100 % online en menos de 2 minutos desde cualquier dispositivo.',
      'El depósito de 150 € bloquea el vehículo para ti durante 72 horas.',
      'Si cambias de opinión por cualquier motivo, te devolvemos íntegramente el depósito.',
      'Recibirás confirmación por email y SMS inmediatamente.',
      'Un asesor personal te contactará en menos de 1 hora para acompañarte en el proceso.',
    ],
    cta: null,
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Financia en 30 minutos',
    summary: 'Pre-aprobación sin afectar tu historial crediticio.',
    color: 'orange',
    details: [
      'TIN desde 6,99 % TAE. Plazos de 12 a 84 meses según tu perfil.',
      'Pre-aprobación inmediata sin consulta a CIRBE (no afecta a tu historial crediticio).',
      'Financiación con entidades bancarias líderes: Santander Consumer, BBVA y Cetelem.',
      'También puedes pagar al contado, transferencia o combinar financiación parcial.',
      'Calculadora de cuotas disponible en la ficha de cada vehículo antes de reservar.',
    ],
    cta: { href: '/contacto', label: 'Hablar con un asesor financiero' },
  },
  {
    step: '04',
    icon: Truck,
    title: 'Recibe el coche en casa',
    summary: 'Entrega en toda la península. Documentación incluida.',
    color: 'blue',
    details: [
      'Entrega a domicilio en 24–72 h en toda la Península Ibérica. Sin coste adicional.',
      'Inspección final de 200 puntos antes de la entrega. Si algo no cuadra, no enviamos.',
      'El transportista te llama 30 minutos antes de la llegada.',
      'Documentación tramitada: transferencia de titularidad, ITV vigente y seguro temporal.',
      '7 días de prueba: si no estás satisfecho, recogemos el coche sin preguntas.',
    ],
    cta: null,
  },
]

const GUARANTEES = [
  {
    icon: BadgeCheck,
    title: 'Inspección de 200 puntos',
    desc: 'Cada vehículo supera una revisión mecánica, eléctrica y estética exhaustiva realizada por nuestros técnicos certificados.',
  },
  {
    icon: FileText,
    title: 'Historial DGT verificado',
    desc: 'Comprobamos kilómetros, titulares previos, cargas, embargos e ITV directamente con la DGT antes de publicar el vehículo.',
  },
  {
    icon: RefreshCw,
    title: '7 días para cambiar de opinión',
    desc: 'Si el coche no cumple tus expectativas durante los 7 primeros días, lo recogemos y gestionamos la devolución.',
  },
  {
    icon: Award,
    title: 'Garantía de 12 meses',
    desc: 'Todos los vehículos incluyen 12 meses de garantía mecánica. Ampliable hasta 24 meses con nuestro plan Plus.',
  },
  {
    icon: HeartHandshake,
    title: 'Asesor personal',
    desc: 'Desde la reserva hasta la entrega, un asesor dedicado resuelve todas tus dudas por teléfono, WhatsApp o email.',
  },
  {
    icon: Shield,
    title: 'Sin cargos ocultos',
    desc: 'El precio que ves es el precio que pagas. Gestión incluida, sin "preparación del vehículo" ni extras sorpresa.',
  },
]

const FAQ = [
  {
    q: '¿Puedo ver el coche antes de comprarlo?',
    a: 'Sí. Aunque el proceso es 100 % online, puedes solicitar una visita presencial a nuestras instalaciones en Madrid o pedir una videollamada con el asesor para ver el vehículo en tiempo real.',
  },
  {
    q: '¿Qué pasa si el coche no llega en las condiciones descritas?',
    a: 'En ese caso activa tu derecho de devolución en 7 días. Recogemos el vehículo a nuestro cargo y te reembolsamos el importe íntegro en un plazo máximo de 5 días laborables.',
  },
  {
    q: '¿Puedo financiar solo una parte y el resto al contado?',
    a: 'Sí, admitimos financiación parcial. Puedes aportar la entrada que desees y financiar el resto. El asesor te ayudará a calcular la opción más ventajosa según tu situación.',
  },
  {
    q: '¿Cuánto tarda la entrega a domicilio?',
    a: 'Entre 24 y 72 horas hábiles desde la firma del contrato. En casos de vehículos fuera de Madrid capital puede extenderse hasta 5 días laborables.',
  },
  {
    q: '¿La garantía cubre todo tipo de averías?',
    a: 'La garantía estándar de 12 meses cubre motor, caja de cambios, dirección y sistemas eléctricos principales. Consulta el clausulado completo en tu contrato o con tu asesor.',
  },
  {
    q: '¿Puedo vender mi coche actual a ReportMotor?',
    a: 'Sí. Ofrecemos tasación online gratuita y recogida a domicilio. Puedes venderlo de forma independiente o descontarlo como entrada en la compra de tu nuevo vehículo.',
  },
]

const STATS = [
  { value: '14.000+', label: 'Vehículos en stock' },
  { value: '4.9★', label: 'Valoración Google' },
  { value: '30 min', label: 'Financiación aprobada' },
  { value: '48 h', label: 'Entrega media' },
]

// ─── Componente ───────────────────────────────────────────────────────────────

export default function ComoFuncionaPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-slate-900 grid-dot-pattern-dark pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Proceso de compra
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Compra tu coche en{' '}
            <span className="text-orange-400">4 pasos</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Sin visitas innecesarias, sin papeleo complicado. Todo el proceso desde el sofá de tu
            casa, con un asesor personal a tu lado en cada momento.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PASOS DETALLADOS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {STEPS.map(({ step, icon: Icon, title, summary, details, cta }, idx) => (
              <div
                key={step}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Visual side */}
                <div className={idx % 2 === 1 ? '[direction:ltr]' : ''}>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 min-h-[240px]">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-6xl font-black text-blue-100 font-mono leading-none">
                      {step}
                    </span>
                    <p className="text-sm text-slate-500 text-center">{summary}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className={idx % 2 === 1 ? '[direction:ltr]' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-widest">
                      Paso {step}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">{title}</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  {cta && (
                    <Link
                      href={cta.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      {cta.label} <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GARANTÍAS ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
              Tu tranquilidad, nuestra prioridad
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Lo que incluye cada compra
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GUARANTEES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
            <p className="text-slate-500 mt-2 text-sm">
              ¿Tienes dudas? Aquí resolvemos las más habituales.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 text-sm mb-2 flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed pl-5">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            ¿No encuentras respuesta a tu pregunta?{' '}
            <Link href="/contacto" className="text-blue-600 hover:underline font-medium">
              Contacta con nosotros
            </Link>
          </p>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-blue-200 mb-8">
            Más de 14.000 vehículos certificados esperando. Reserva en 2 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/vehiculos"
              className="px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all"
            >
              Ver todos los coches →
            </Link>
            <Link
              href="/contacto"
              className="px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-all"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
