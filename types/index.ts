export interface Vehicle {
  id: string
  brand: string
  model: string
  version: string | null
  year: number
  kilometers: number
  price: number
  original_price: number | null
  monthly_fee: number | null
  fuel_type: 'Gasolina' | 'Diésel' | 'Híbrido' | 'Eléctrico' | 'GLP'
  transmission: 'Manual' | 'Automático'
  color: string | null
  location: string | null
  description: string | null
  dgt_label: '0' | 'ECO' | 'C' | 'B' | null
  images: string[]
  model_3d_url: string | null
  status: 'available' | 'reserved' | 'sold'
  created_at: string
  horsepower?: number
  doors?: number
  seats?: number
  owners?: number
  itv_until?: string
}

export interface Reservation {
  id: string
  car_id: string
  monthly_fee: number
  deposit: number
  status: 'pending' | 'confirmed' | 'cancelled'
  customer_name?: string
  customer_email?: string
  customer_phone?: string
  created_at: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
