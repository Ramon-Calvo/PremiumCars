'use server'

import { createClient } from '@/utils/supabase/server'

export interface ContactInput {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ActionResult {
  success: boolean
  error?: string
}

export async function submitContact(input: ContactInput): Promise<ActionResult> {
  const { name, email, phone, subject, message } = input

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: 'Nombre, email y mensaje son obligatorios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'El formato del email no es válido.' }
  }

  if (phone) {
    const phoneRegex = /^(?:\+?34)?[6789]\d{8}$/
    const phoneCleaned = phone.replace(/[\s\-().]/g, '')
    if (!phoneRegex.test(phoneCleaned)) {
      return { success: false, error: 'El formato del teléfono no es válido (debe ser un móvil o fijo español).' }
    }
  }

  // ── Supabase (best-effort) ─────────────────────────────────────────────
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const supabase = await createClient()
      const { error: insertError } = await supabase.from('contact_messages').insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        subject: subject.trim(),
        message: message.trim(),
      })
      if (insertError) console.error('[submitContact] insert error:', insertError)
    } catch (dbErr) {
      console.error('[submitContact] db error:', dbErr)
    }
  }

  try {
    // ── Email (best-effort) ───────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        const adminEmail = process.env.ADMIN_EMAIL ?? 'info@autospremium.com'
        const fromEmail = process.env.EMAIL_FROM ?? 'notificaciones@reportmotor.es'

        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[Contacto] ${subject} — ${name}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          `,
        })

        // Auto-reply to customer
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: 'Hemos recibido tu mensaje — ReportMotor Sales',
          html: `
            <h2>Hola ${name},</h2>
            <p>Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo en menos de <strong>24 horas</strong>.</p>
            <p>Si necesitas una respuesta más rápida, puedes contactarnos por WhatsApp o llamarnos al <strong>604 955 023</strong>.</p>
            <br>
            <p>Un saludo,<br><strong>Equipo ReportMotor Sales</strong></p>
          `,
        })
      } catch (emailErr) {
        console.error('[submitContact] email error:', emailErr)
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[submitContact] unexpected error:', err)
    return { success: false, error: 'Error interno. Por favor, inténtalo de nuevo.' }
  }
}
