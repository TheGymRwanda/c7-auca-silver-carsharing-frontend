import { useEffect, useCallback } from 'react'
import { useCarState, useCarActions } from '@/context/carContext'

export const useCars = () => {
  const state = useCarState()
  const { loadData } = useCarActions()

  const memoizedLoadData = useCallback(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    memoizedLoadData()
  }, [memoizedLoadData])

  return {
    cars: state.cars,
    carTypes: state.carTypes,
    users: state.users,
    loading: state.loading,
    error: state.error,
    loadData,
  }
}
