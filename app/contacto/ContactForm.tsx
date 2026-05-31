'use client'

import { useState, useTransition } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { submitContact } from '@/app/actions/submitContact'

const SUBJECT_OPTIONS = [
  'Consulta sobre un vehículo',
  'Tasación de mi coche',
  'Información de financiación',
  'Garantía y postventa',
  'Otro',
]

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
  })

  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)

    startTransition(async () => {
      const result = await submitContact(form)
      if (result.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: SUBJECT_OPTIONS[0], message: '' })
      } else {
        setStatus('error')
        setErrorMsg(result.error ?? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
      }
    })
  }

  if (status === 'success') {
    return (
      <div className="card-light p-8 flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-blue-600" />
        </div>
          <h3 className="text-xl font-bold text-slate-900">¡Mensaje enviado!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          Nos pondremos en contacto contigo en menos de 24 horas. También puedes
          contactarnos por WhatsApp para una respuesta más rápida.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-light p-6 sm:p-8 flex flex-col gap-5">
      <h2 className="text-xl font-bold text-white">Envíanos un mensaje</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs text-slate-500 font-medium mb-1.5">
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isPending}
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs text-slate-500 font-medium mb-1.5">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={isPending}
            value={form.phone}
            onChange={handleChange}
            placeholder="600 000 000"
            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs text-slate-500 font-medium mb-1.5">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isPending}
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs text-slate-500 font-medium mb-1.5">
          Asunto *
        </label>
        <select
          id="subject"
          name="subject"
          disabled={isPending}
          value={form.subject}
          onChange={handleChange}
          className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer disabled:opacity-60"
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-slate-500 font-medium mb-1.5">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isPending}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-60"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg ?? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        {isPending ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar mensaje
          </>
        )}
      </button>

        <p className="text-[0.65rem] text-slate-400 text-center">
        Al enviar este formulario aceptas nuestra{' '}
        <a href="/privacidad" className="underline hover:text-zinc-400">
          política de privacidad
        </a>
        .
      </p>
    </form>
  )
}
