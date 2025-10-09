import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useCars from '../hooks/useCars'
import useUsers from '../hooks/useUsers'
import useCarTypes from '../hooks/useCarTypes'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'

interface CarWithDetails {
  id: number
  name: string
  owner: string
  type: string
  image: string
  info?: string
}

const CarsPage: React.FC = () => {
  const [{ data: carsData, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: usersData, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypesData, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

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

  const CarCard: React.FC<{ car: CarWithDetails }> = ({ car }) => (
    <div className="car-card flex gap-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-xl sm:gap-6 sm:p-8">
      {/* Car Image  */}
      <div className="flex shrink-0 items-center">
        <img
          src={car.image}
          alt={car.name}
          className="h-24 w-32 rounded-lg object-cover sm:h-28 sm:w-36 lg:h-32 lg:w-40"
        />
      </div>

      {/* Car Details  */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{car.name}</h2>
          <div className="flex items-center gap-3 text-white">
            <ProfileIcon className="size-6 text-white" />
            <span className="text-lg font-medium">{car.owner}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <div className="size-6 text-white">
              <CarsIcon />
            </div>
            <span className="text-lg font-medium">{car.type}</span>
          </div>
        </div>

        <div className="mt-6 border-t border-white/20 pt-4">
          <Link
            to={`/cars/${car.id}`}
            className="text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="cars-container mx-auto max-w-7xl space-y-6 p-6 font-serif">
      <h1 className="text-center text-3xl font-bold text-white">ALL CARS</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}

export default CarsPage
