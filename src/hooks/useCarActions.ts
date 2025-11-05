import { useCarActions as useCarActionsContext } from '@/context/carContext'

export const useCarActions = () => {
  const { createCar, deleteCar, clearError, retryLoad } = useCarActionsContext()

  return {
    createCar,
    deleteCar,
    clearError,
    retry: retryLoad,
  }
}
