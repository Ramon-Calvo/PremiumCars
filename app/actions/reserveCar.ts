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

    return { success: true, reservationId: reservation.id }
  } catch (err) {
    console.error('[reserveCar] unexpected error:', err)
    return { success: false, error: 'Error interno. Por favor, inténtalo de nuevo.' }
  }
}
