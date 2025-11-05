import { useCarContext } from '@/context/carContext'

export const useCarActions = () => {
  const { createCar, deleteCar, clearError } = useCarContext()

  return {
    createCar,
    deleteCar,
    clearError,
  }
}
