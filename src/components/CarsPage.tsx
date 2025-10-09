import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useCars from '../hooks/useCars'
import useUsers from '../hooks/useUsers'
import useCarTypes from '../hooks/useCarTypes'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import { CarWithDetails } from '../types'

function CarCard({ car }: { car: CarWithDetails }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex">
        <div className="w-1/2">
          <img src={car.image} alt={car.name} className="size-full object-contain" />
        </div>

        <div className="flex w-1/2 flex-col justify-around pl-4">
          <div className="mb-4">
            <h2 className="text-xxl font-bold text-white">{car.name}</h2>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white">
              <ProfileIcon className="size-4 text-white" />
              <span className="text-md">{car.owner}</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <CarsIcon className="size-4" />
              <span className="text-sm">{car.type}</span>
            </div>
          </div>

          <div className="mt-4">
            <Link
              to={`/cars/${car.id}`}
              className="text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
            >
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CarsPage() {
  const navigate = useNavigate()
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

  return (
    <div className="min-h-screen p-4 font-serif">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="flex-1 text-center text-2xl font-bold text-white">ALL CARS</h1>
        <div className="w-6"></div>
      </div>

      {/* Cars Grid */}
      <div className="space-y-4">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
