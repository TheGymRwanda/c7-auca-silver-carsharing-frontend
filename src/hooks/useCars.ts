import { useEffect } from 'react'
import { useCarContext } from '@/context/carContext'

export const useCars = () => {
  const { state, loadData } = useCarContext()

  useEffect(() => {
    loadData()
  }, [])

  return {
    cars: state.cars,
    carTypes: state.carTypes,
    users: state.users,
    loading: state.loading,
    error: state.error,
    loadData,
  }
}
