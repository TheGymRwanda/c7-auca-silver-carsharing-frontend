import { useEffect } from 'react'
import { useCarState, useCarActions } from '@/context/carContext'

export const useCars = () => {
  const state = useCarState()
  const { loadData, retryLoad } = useCarActions()

  useEffect(() => {
    if (!state.error) {
      loadData()
    }
  }, [loadData, state.error])

  return {
    cars: state.cars,
    carTypes: state.carTypes,
    users: state.users,
    loading: state.loading,
    error: state.error,
    retry: retryLoad,
  }
}
