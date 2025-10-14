import { useMemo } from 'react'

import { useCarData } from '../hooks/useCarData'
import CarCard from '../UI/CarCard'
import PageHeader from './PageHeader'

export default function CarsPage() {
  const {
    cars: [{ data: carsData, loading: carsLoading, error: carsError }],
    users: [{ data: usersData, loading: usersLoading, error: usersError }],
    carTypes: [{ data: carTypesData, loading: carTypesLoading, error: carTypesError }],
  } = useCarData()

  const cars = useMemo(() => {
    if (!carsData || !usersData || !carTypesData) return []

    return carsData.map(car => {
      const owner = usersData.find(user => user.id === car.ownerId)
      const carType = carTypesData.find(type => type.id === car.carTypeId)

      return {
        id: car.id,
        name: car.name,
        owner: owner?.name || 'Unknown',
        type: carType?.name || 'Unknown',
        image: carType?.imageUrl || 'https://via.placeholder.com/150',
        info: car.info,
      }
    })
  }, [carsData, usersData, carTypesData])

  if (carsLoading || usersLoading || carTypesLoading) {
    return <div className="p-4 text-center font-serif">Loading cars...</div>
  }

  if (carsError || usersError || carTypesError) {
    return (
      <div className="p-4 text-center font-serif text-red-600">
        Error loading data: {carsError?.message || usersError?.message || carTypesError?.message}
      </div>
    )
  }

  if (cars.length === 0) {
    return <div className="p-4 text-center font-serif">No cars available</div>
  }

  return (
    <div className="min-h-screen p-4 font-serif">
      <PageHeader title="ALL CARS" />

      <div className="space-y-4">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
