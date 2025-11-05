import { useCarActions as useCarActionsContext } from '@/context/carContext'

export const useCarActions = () => {
  const { createCar, deleteCar, clearError } = useCarActionsContext()

  return {
    createCar,
    deleteCar,
    clearError,
  }
}
