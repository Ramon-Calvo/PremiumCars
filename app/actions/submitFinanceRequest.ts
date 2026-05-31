'use server'

import { createClient } from '@/utils/supabase/server'

export interface FinanceRequestInput {
  name: string
  phone: string
  email: string
  vehicleInterest?: string
  amount?: string
  term: string
  employment: string
  notes?: string
}

export interface ActionResult {
  success: boolean
  error?: string
}

export async function submitFinanceRequest(input: FinanceRequestInput): Promise<ActionResult> {
  const { name, phone, email, vehicleInterest, amount, term, employment, notes } = input

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !term || !employment) {
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

  const validTerms = ['12', '24', '36', '48', '60', '72', '84']
  if (!validTerms.includes(term)) {
    return { success: false, error: 'El plazo seleccionado no es válido.' }
  }

  const validEmployment = ['asalariado', 'autonomo', 'pensionista', 'otro']
  if (!validEmployment.includes(employment)) {
    return { success: false, error: 'La situación laboral seleccionada no es válida.' }
  }

  const amountNum = amount ? parseFloat(amount.replace(/[.,]/g, '')) : null
  if (amount && (isNaN(amountNum!) || amountNum! <= 0)) {
    return { success: false, error: 'El importe introducido no es válido.' }
  }

  // ── Supabase (best-effort) ─────────────────────────────────────────────
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const supabase = await createClient()
      const { error: insertError } = await supabase.from('finance_requests').insert({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        vehicle_interest: vehicleInterest?.trim() || null,
        amount: amountNum,
        term: parseInt(term),
        employment,
        notes: notes?.trim() || null,
      })
      if (insertError) console.error('[submitFinanceRequest] insert error:', insertError)
    } catch (dbErr) {
      console.error('[submitFinanceRequest] db error:', dbErr)
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

        const employmentLabel: Record<string, string> = {
          asalariado: 'Asalariado / empleado por cuenta ajena',
          autonomo: 'Autónomo',
          pensionista: 'Pensionista / jubilado',
          otro: 'Otro',
        }

        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[Financiación] Solicitud de ${name} — ${term} meses`,
          html: `
            <h2>Nueva solicitud de financiación</h2>
            <h3>Datos del contacto</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Datos de la financiación</h3>
            ${vehicleInterest ? `<p><strong>Vehículo de interés:</strong> ${vehicleInterest}</p>` : ''}
            ${amountNum ? `<p><strong>Importe aproximado:</strong> ${amountNum.toLocaleString('es-ES')} €</p>` : ''}
            <p><strong>Plazo deseado:</strong> ${term} meses</p>
            <p><strong>Situación laboral:</strong> ${employmentLabel[employment]}</p>
            ${notes ? `<p><strong>Comentarios:</strong> ${notes}</p>` : ''}
          `,
        })

        // Auto-reply to customer
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: 'Hemos recibido tu solicitud de financiación — ReportMotor Sales',
          html: `
            <h2>Hola ${name},</h2>
            <p>Hemos recibido tu solicitud de financiación correctamente.</p>
            <p>Un asesor financiero revisará tu perfil y te contactará en menos de <strong>30 minutos</strong> (en horario laboral) con las condiciones disponibles.</p>
            <p>Recuerda que la consulta es gratuita y <strong>no afecta a tu historial crediticio</strong>.</p>
            <br>
            <p>Si tienes cualquier duda urgente, llámanos al <strong>604 955 023</strong>.</p>
            <br>
            <p>Un saludo,<br><strong>Equipo ReportMotor Sales</strong></p>
          `,
        })
      } catch (emailErr) {
        console.error('[submitFinanceRequest] email error:', emailErr)
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[submitFinanceRequest] unexpected error:', err)
    return { success: false, error: 'Error inesperado. Inténtalo de nuevo más tarde.' }
  }
}
