import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con ReportMotor Sales. Estamos disponibles por teléfono, email y WhatsApp para ayudarte a encontrar tu coche o tasar el tuyo.',
}

const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '910 123 456',
    href: 'tel:+34910123456',
    description: 'Atención personalizada de lunes a sábado',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+34 600 000 000',
    href: `https://wa.me/34600000000?text=${encodeURIComponent('¡Hola! Me gustaría recibir más información.')}`,
    description: 'Respuesta en menos de 1 hora',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hola@reportmotor.es',
    href: 'mailto:hola@reportmotor.es',
    description: 'Respondemos en menos de 24 horas',
  },
  {
    icon: MapPin,
    title: 'Dirección',
    value: 'C/ Gran Vía 28, 28013 Madrid',
    href: 'https://maps.google.com',
    description: 'También con presencia en Barcelona y Valencia',
  },
]

const HOURS = [
  { day: 'Lunes – Viernes', time: '9:00 – 20:30h' },
  { day: 'Sábado', time: '9:00 – 20:30h' },
  { day: 'Domingo', time: '10:00 – 14:00h' },
]

const FAQ_ITEMS = [
  {
    q: '¿Puedo ver el coche antes de comprarlo?',
    a: 'Sí. Disponemos de centros de visualización en Madrid, Barcelona y Valencia donde puedes ver e inspeccionar el vehículo. También ofrecemos entrega a domicilio para que lo veas en tu casa.',
  },
  {
    q: '¿Cuánto tiempo tarda la financiación?',
    a: 'La pre-aprobación es inmediata y sin consultar tu historial crediticio. La aprobación definitiva llega en menos de 30 minutos durante el horario de atención.',
  },
  {
    q: '¿Puedo vender mi coche actual?',
    a: 'Absolutamente. Realizamos tasaciones gratuitas online y también aceptamos tu coche como parte del pago por otro vehículo de nuestro stock.',
  },
  {
    q: '¿Qué garantía tienen los vehículos?',
    a: 'Todos los vehículos incluyen garantía mínima de 12 meses. Ampliable hasta 3 años mediante nuestro plan de garantía extendida.',
  },
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-dot-pattern-dark opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs text-blue-300 uppercase tracking-widest font-semibold mb-3">
            Estamos aquí para ayudarte
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contacta con nosotros</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tienes una duda, quieres tasar tu coche o necesitas asesoramiento personalizado. Estamos
            disponibles por varios canales.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: info cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, title, value, href, description }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-light p-5 flex items-start gap-4 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">{title}</p>
                    <p className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {value}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{description}</p>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="card-light p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-semibold text-slate-900">Horario de atención</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {HOURS.map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-slate-500">{day}</span>
                      <span className="text-slate-900 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} className="card-light p-5">
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
