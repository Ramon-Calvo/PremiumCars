import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ReservationState {
  reservedCarId: string | null
  isReserving: boolean
  reservationSuccess: boolean
  setReserving: (id: string) => void
  setSuccess: () => void
  reset: () => void
}

export const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      reservedCarId: null,
      isReserving: false,
      reservationSuccess: false,
      setReserving: (id) => set({ reservedCarId: id, isReserving: true, reservationSuccess: false }),
      setSuccess: () => set({ isReserving: false, reservationSuccess: true }),
      reset: () => set({ reservedCarId: null, isReserving: false, reservationSuccess: false }),
    }),
    {
      name: 'rm-reservation',
      storage: createJSONStorage(() => sessionStorage),
      // Only persist the reservation result, not transient loading state
      partialize: (state) => ({
        reservedCarId: state.reservedCarId,
        reservationSuccess: state.reservationSuccess,
      }),
    }
  )
)
