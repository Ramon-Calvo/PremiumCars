'use server'

import { createClient } from '@/utils/supabase/server'

export interface SellRequestInput {
  name: string
  phone: string
  email: string
  brand: string
  model: string
  year: string
  km: string
  fuel: string
  transmission: string
  notes?: string
}

export interface ActionResult {
  success: boolean
  error?: string
}

export async function submitSellRequest(input: SellRequestInput): Promise<ActionResult> {
  const { name, phone, email, brand, model, year, km, fuel, transmission, notes } = input

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !brand?.trim() || !model?.trim() || !year || !km) {
    return { success: false, error: 'Por favor, completa todos los campos obligatorios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'El formato del email no es válido.' }
  }

  const phoneRegex = /^(?:\+?34)?[6789]\d{8}$/
  const phoneCleaned = phone.replace(/[\s\-().]/g, '')
  if (!phoneRegex.test(phoneCleaned)) {
    return { success: false, error: 'El formato del teléfono no es válido (debe ser un móvil o fijo español).' }
  }

  const yearNum = parseInt(year)
  const kmNum = parseInt(km)

  if (isNaN(yearNum) || yearNum < 1990 || yearNum > new Date().getFullYear()) {
    return { success: false, error: 'El año del vehículo no es válido.' }
  }

  if (isNaN(kmNum) || kmNum < 0) {
    return { success: false, error: 'Los kilómetros no son válidos.' }
  }

  // ── Supabase (best-effort) ─────────────────────────────────────────────
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const supabase = await createClient()
      const { error: insertError } = await supabase.from('sell_requests').insert({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        brand: brand.trim(),
        model: model.trim(),
        year: yearNum,
        km: kmNum,
        fuel,
        transmission,
        notes: notes?.trim() || null,
      })
      if (insertError) console.error('[submitSellRequest] insert error:', insertError)
    } catch (dbErr) {
      console.error('[submitSellRequest] db error:', dbErr)
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
          subject: `[Venta] ${brand} ${model} (${year}) — ${name}`,
          html: `
            <h2>Nueva solicitud de venta de vehículo</h2>
            <h3>Datos del contacto</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Datos del vehículo</h3>
            <p><strong>Marca:</strong> ${brand}</p>
            <p><strong>Modelo:</strong> ${model}</p>
            <p><strong>Año:</strong> ${year}</p>
            <p><strong>Kilómetros:</strong> ${parseInt(km).toLocaleString('es-ES')} km</p>
            <p><strong>Combustible:</strong> ${fuel}</p>
            <p><strong>Transmisión:</strong> ${transmission}</p>
            ${notes ? `<p><strong>Notas:</strong> ${notes}</p>` : ''}
          `,
        })

        // Auto-reply to customer
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: 'Hemos recibido tu solicitud de venta — ReportMotor Sales',
          html: `
            <h2>Hola ${name},</h2>
            <p>Hemos recibido los datos de tu <strong>${brand} ${model} (${year})</strong> correctamente.</p>
            <p>Un asesor revisará la información y te contactará en menos de <strong>24 horas</strong> con una valoración sin compromiso.</p>
            <br>
            <p>Un saludo,<br><strong>Equipo ReportMotor Sales</strong></p>
          `,
        })
      } catch (emailErr) {
        console.error('[submitSellRequest] email error:', emailErr)
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[submitSellRequest] unexpected error:', err)
    return { success: false, error: 'Error interno. Por favor, inténtalo de nuevo.' }
  }
}
