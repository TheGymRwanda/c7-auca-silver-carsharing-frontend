import { useEffect } from 'react'
import { useCarContext } from '@/context/carContext'

const useCarById = (carId: string | number) => {
  const { state, loadData } = useCarContext()

  useEffect(() => {
    loadData()
  }, [])

  const car = state.cars.find(c => c.id === Number(carId))

  const owner = state.users.find(user => user.id === car?.ownerId)
  const carType = state.carTypes.find(type => type.id === car?.carTypeId)

  return {
    car,
    owner,
    carType,
    loading: state.loading,
    error: state.error,
  }
}

export default useCarById
