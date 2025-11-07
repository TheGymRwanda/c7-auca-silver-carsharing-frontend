import { useEffect, useMemo } from 'react'
import { useCarState, useCarActions } from '@/context/carContext'

export const useCarById = (carId: string | number) => {
  const state = useCarState()
  const { loadData } = useCarActions()

  useEffect(() => {
    if (!state.error) {
      loadData()
    }
  }, [loadData, state.error])

  const carData = useMemo(() => {
    const car = state.cars.find(c => c.id === Number(carId))
    const owner = state.users.find(user => user.id === car?.ownerId)
    const carType = state.carTypes.find(type => type.id === car?.carTypeId)

    return { car, owner, carType }
  }, [state.cars, state.users, state.carTypes, carId])

  return {
    ...carData,
    loading: state.loading,
    error: state.error,
  }
}
