import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CreditCard, CheckCircle, Clock, Shield, TrendingDown,
  Calculator, Phone, ChevronRight, Star, Percent,
} from 'lucide-react'
import FinanceRequestForm from './FinanceRequestForm'

export const metadata: Metadata = {
  title: 'Financiación · Aprobación en 30 minutos',
  description:
    'Financia tu coche de segunda mano con ReportMotor Sales. Aprobación en 30 minutos, sin papeles innecesarios, cuota desde 99 €/mes.',
}

const ADVANTAGES = [
  {
    icon: Clock,
    title: 'Aprobación en 30 minutos',
    desc: 'Resolución inmediata con las principales entidades financieras de España.',
  },
  {
    icon: Percent,
    title: 'Tipos de interés competitivos',
    desc: 'Acceso a las mejores condiciones del mercado gracias a nuestros acuerdos con bancos colaboradores.',
  },
  {
    icon: Shield,
    title: 'Sin vinculaciones',
    desc: 'No tienes que contratar seguros ni productos adicionales para acceder a la financiación.',
  },
  {
    icon: TrendingDown,
    title: 'Entrada flexible desde 0€',
    desc: 'Puedes financiar hasta el 100% del valor del vehículo según tu perfil.',
  },
  {
    icon: Calculator,
    title: 'Simulador online',
    desc: 'Calcula tu cuota mensual en segundos desde la ficha de cualquier vehículo, sin compromiso.',
  },
  {
    icon: CheckCircle,
    title: 'Gestión 100% incluida',
    desc: 'Nos encargamos de todos los trámites. Tú solo firmas y te llevas el coche.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Elige tu coche',
    desc: 'Selecciona el vehículo del catálogo y usa el simulador de cuotas para ver las opciones de financiación.',
  },
  {
    num: '02',
    title: 'Solicita la financiación',
    desc: 'Rellena el formulario online. Para el estudio necesitarás: DNI por ambas caras, informe de vida laboral, dos últimas nóminas y certificado de titularidad bancaria.',
  },
  {
    num: '03',
    title: 'Aprobación inmediata',
    desc: 'En menos de 30 minutos recibirás la respuesta de la entidad financiera con las condiciones definitivas.',
  },
  {
    num: '04',
    title: 'Firma y recibe el coche',
    desc: 'Firma el contrato digitalmente o en nuestras oficinas y programa la entrega a domicilio.',
  },
]

const FAQ = [
  {
    q: '¿Qué documentación necesito?',
    a: 'Para realizar el estudio de financiación necesitamos: DNI por ambas caras, informe de vida laboral actualizado, las dos últimas nóminas y certificado de titularidad bancaria. Tu asesor te guiará paso a paso para facilitarlos.',
  },
  {
    q: '¿Cuál es el plazo mínimo y máximo?',
    a: 'Ofrecemos plazos de 12 a 84 meses, adaptados a la antigüedad del vehículo y al importe financiado.',
  },
  {
    q: '¿Puedo amortizar anticipadamente?',
    a: 'Sí. La amortización anticipada total o parcial está permitida en cualquier momento, con una comisión máxima del 1% según la Ley de Contratos de Crédito al Consumo.',
  },
  {
    q: '¿Financiáis con ASNEF o incidencias?',
    a: 'Trabajamos con entidades que estudian perfiles especiales. Consúltanos tu caso sin compromiso.',
  },
  {
    q: '¿Puedo solicitar financiación si soy autónomo?',
    a: 'Por supuesto. Los autónomos pueden financiar con la declaración de renta de los dos últimos ejercicios y los movimientos bancarios recientes.',
  },
]

const EXAMPLE_CARS = [
  { brand: 'Volkswagen Golf', price: 15900, years: 5, monthly: 289, rate: 6.9 },
  { brand: 'SEAT León', price: 12500, years: 4, monthly: 249, rate: 6.9 },
  { brand: 'BMW Serie 1', price: 22900, years: 6, monthly: 379, rate: 6.9 },
]

export default function FinanciacionPage() {
  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-900 grid-dot-pattern-dark pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full mb-6">
            <CreditCard className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
              Financiación fácil y rápida
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Aprobación en{' '}
            <span className="text-orange-400">30 minutos</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Sin papeles innecesarios, sin vinculaciones y con los mejores tipos de interés del
            mercado. Financia hasta el 100% de tu coche y empieza a conducirlo hoy.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { value: '30 min', label: 'Aprobación media' },
              { value: '84 meses', label: 'Plazo máximo' },
              { value: '0€', label: 'Entrada mínima' },
              { value: 'Desde 99€', label: 'Cuota mensual' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehiculos"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-sm"
            >
              Buscar mi coche →
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué financiar con nosotros?</h2>
            <p className="text-slate-500 mt-2">Trabajamos con las principales entidades financieras de España</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex gap-4">
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

      {/* How it works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Cómo solicitar financiación</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num}>
                <div className="text-5xl font-black text-blue-100 leading-none mb-3">{num}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example rates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Ejemplos de financiación</h2>
            <p className="text-slate-500 mt-2 text-sm">
              Ejemplos orientativos. TAE 6,9% anual. Sujeto a aprobación crediticia.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-50 text-xs text-slate-600 uppercase tracking-wide">
                <tr>
                  <th className="text-left px-4 py-3">Vehículo</th>
                  <th className="text-left px-4 py-3">Precio</th>
                  <th className="text-left px-4 py-3">Plazo</th>
                  <th className="text-left px-4 py-3">TIN</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-900">Cuota/mes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {EXAMPLE_CARS.map(({ brand, price, years, monthly, rate }) => (
                  <tr key={brand} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-800">{brand}</td>
                    <td className="px-4 py-3 text-slate-600">{price.toLocaleString('es-ES')} €</td>
                    <td className="px-4 py-3 text-slate-600">{years * 12} meses</td>
                    <td className="px-4 py-3 text-slate-600">{rate}%</td>
                    <td className="px-4 py-3 font-bold text-blue-700">{monthly} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Financiación sujeta a la aprobación de la entidad. Importe total del crédito, TAE, coste
            total y condiciones definitivas se comunicarán antes de la firma del contrato.
          </p>
        </div>
      </section>

      {/* Finance Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                Consulta gratuita
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                ¿Quieres saber qué financiación <span className="text-orange-500">puedes obtener?</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Rellena el formulario y un asesor financiero te llamará en menos de 30 minutos
                con las condiciones reales para tu perfil. Sin consulta a CIRBE, sin compromiso.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  'Respuesta en 30 minutos en horario laboral',
                  'Sin impacto en tu historial crediticio (sin consulta a CIRBE)',
                  'Financiación con Santander Consumer, BBVA y Cetelem',
                  'Desde 0 € de entrada. Plazos de 12 a 84 meses',
                  'TIN desde 6,99%. TAE variable según perfil',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Documentación necesaria */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Documentación necesaria</p>
                <ul className="flex flex-col gap-2">
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
                <p className="text-xs text-slate-400 mt-3">Tu asesor te guiará para facilitarlos de forma sencilla.</p>
              </div>
            </div>
            {/* Right: form */}
            <FinanceRequestForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            ¿Listo para estrenar tu próximo coche?
          </h2>
          <p className="text-blue-200 mb-8">
            Nuestros asesores te ayudan a encontrar la financiación que mejor se adapta a tu
            situación. Consulta gratuita, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehiculos"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all"
            >
              Ver coches disponibles
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+34604955023"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              604 955 023
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
