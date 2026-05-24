import { create } from 'zustand'

interface ReservationState {
  reservedCarId: string | null
  isReserving: boolean
  reservationSuccess: boolean
  setReserving: (id: string) => void
  setSuccess: () => void
  reset: () => void
}

export const useReservationStore = create<ReservationState>((set) => ({
  reservedCarId: null,
  isReserving: false,
  reservationSuccess: false,
  setReserving: (id) => set({ reservedCarId: id, isReserving: true, reservationSuccess: false }),
  setSuccess: () => set({ isReserving: false, reservationSuccess: true }),
  reset: () => set({ reservedCarId: null, isReserving: false, reservationSuccess: false }),
}))
