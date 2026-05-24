'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34600000000'
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Me interesa un vehículo de ReportMotor Sales. ¿Podéis ayudarme?'
)

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
      style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl animate-ping opacity-30 bg-green-400" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </motion.a>
  )
}
