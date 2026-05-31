'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

interface ReserveCarInput {
  carId: string
  monthlyFee: number
  customerName?: string
  customerEmail?: string
  customerPhone?: string
}

interface ReserveCarResult {
  success: boolean
  reservationId?: string
  error?: string
}

export async function reserveCar(input: ReserveCarInput): Promise<ReserveCarResult> {
  const { carId, monthlyFee, customerName, customerEmail, customerPhone } = input

  if (!carId || !monthlyFee || monthlyFee <= 0) {
    return { success: false, error: 'Datos de reserva incompletos.' }
  }

  try {
    const supabase = await createClient()

    // Verify the vehicle exists and is available
    const { data: vehicle, error: vehicleError } = await supabase
      .from('vehicles')
      .select('id, status, brand, model')
      .eq('id', carId)
      .single()

    if (vehicleError || !vehicle) {
      return { success: false, error: 'Vehículo no encontrado.' }
    }

    if (vehicle.status !== 'available') {
      return { success: false, error: 'Este vehículo ya no está disponible.' }
    }

    // Insert reservation
    const { data: reservation, error: insertError } = await supabase
      .from('reservations')
      .insert({
        car_id: carId,
        monthly_fee: Math.round(monthlyFee),
        deposit: 150,
        status: 'pending',
        customer_name: customerName ?? null,
        customer_email: customerEmail ?? null,
        customer_phone: customerPhone ?? null,
      })
      .select('id')
      .single()

    if (insertError) {
      console.error('[reserveCar] insert error:', insertError)
      return { success: false, error: 'Error al procesar la reserva. Inténtalo de nuevo.' }
    }

    // Update vehicle status to reserved
    const { error: updateError } = await supabase
      .from('vehicles')
      .update({ status: 'reserved' })
      .eq('id', carId)

    if (updateError) {
      console.error('[reserveCar] update error:', updateError)
      // Reservation was created — don't fail, just log
    }

    revalidatePath(`/vehiculo/${carId}`)
    revalidatePath('/')

    // Send email notifications if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        const adminEmail = process.env.ADMIN_EMAIL ?? 'info@autospremium.com'
        const fromEmail = process.env.EMAIL_FROM ?? 'notificaciones@reportmotor.es'

        // Notify admin
        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[Reserva] ${vehicle.brand} ${vehicle.model} — ${customerName ?? 'Cliente'}`,
          html: `
            <h2>Nueva reserva recibida</h2>
            <p><strong>Vehículo:</strong> ${vehicle.brand} ${vehicle.model}</p>
            <p><strong>ID Reserva:</strong> ${reservation.id}</p>
            ${customerName ? `<p><strong>Cliente:</strong> ${customerName}</p>` : ''}
            ${customerEmail ? `<p><strong>Email:</strong> ${customerEmail}</p>` : ''}
            ${customerPhone ? `<p><strong>Teléfono:</strong> ${customerPhone}</p>` : ''}
            <p><strong>Depósito:</strong> 150 €</p>
            <p><strong>Cuota estimada:</strong> ${Math.round(monthlyFee)} €/mes</p>
          `,
        })

        // Confirm to customer if email provided
        if (customerEmail) {
          await resend.emails.send({
            from: fromEmail,
            to: customerEmail,
            subject: `Reserva confirmada — ${vehicle.brand} ${vehicle.model}`,
            html: `
              <h2>Hola${customerName ? ` ${customerName}` : ''},</h2>
              <p>Tu reserva del <strong>${vehicle.brand} ${vehicle.model}</strong> ha sido registrada correctamente.</p>
              <p><strong>Número de reserva:</strong> ${reservation.id}</p>
              <p><strong>Depósito:</strong> 150 € (reembolsable)</p>
              <p>Un asesor se pondrá en contacto contigo en breve para confirmar los próximos pasos.</p>
              <br>
              <p>Un saludo,<br><strong>Equipo ReportMotor Sales</strong></p>
            `,
          })
        }
      } catch (emailErr) {
        // Email is non-critical — log but don't fail the action
        console.error('[reserveCar] email error:', emailErr)
      }
    }

    return { success: true, reservationId: reservation.id }
  } catch (err) {
    console.error('[reserveCar] unexpected error:', err)
    return { success: false, error: 'Error interno. Por favor, inténtalo de nuevo.' }
  }
}
