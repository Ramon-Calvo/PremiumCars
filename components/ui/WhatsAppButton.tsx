import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34604955023'
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Me interesa un vehículo de ReportMotor Sales. ¿Podéis ayudarme?'
)

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-24 md:bottom-6 left-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg
        hover:scale-110 active:scale-95 transition-transform duration-200
        [animation:wa-pop-in_0.4s_cubic-bezier(0.34,1.56,0.64,1)_1.5s_both]"
      style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl animate-ping opacity-30 bg-green-400" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </a>
  )
}
