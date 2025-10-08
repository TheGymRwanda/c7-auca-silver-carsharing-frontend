import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useCarById from '../hooks/useCarById'
import useUsers from '../hooks/useUsers'
import useCarTypes from '../hooks/useCarTypes'
import ProfileIcon from '../assets/ProfileIcon'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'
import CarsIcon from '../assets/CarsIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import AlertIcon from '../assets/AlertIcon'
import { CarDto, UserDto, CarTypeDto } from '../util/api'

const CarDetails: React.FC<{ car: CarDto; owner?: UserDto; carType?: CarTypeDto }> = ({
  car,
  owner,
  carType,
}) => (
  <div className="space-y-4 text-left">
    <div className="flex items-center gap-3 text-white">
      <ProfileIcon className="h-6 w-6 text-white" />
      <span className="text-lg"> {owner?.name || 'Unknown'}</span>
    </div>
    <div className="flex items-center gap-3 text-white">
      <div className="h-6 w-6 text-white">
        <CarsIcon />
      </div>
      <span className="text-lg"> {carType?.name || 'Unknown'}</span>
    </div>
    {car.licensePlate && (
      <div className="flex items-center gap-3 text-white">
        <LicensePlateIcon className="h-6 w-6 text-white" />
        <span className="text-lg"> {car.licensePlate}</span>
      </div>
    )}
    {car.horsepower && (
      <div className="flex items-center gap-3 text-white">
        <div className="h-6 w-6 text-white">
          <HorseIcon />
        </div>
        <span className="text-lg"> {car.horsepower} HP</span>
      </div>
    )}
    <div className="flex items-center gap-3 text-white">
      <FuelIcon className="h-6 w-6 text-white" />
      <span className="text-lg"> {car.fuelType}</span>
    </div>
    <div className="flex items-center gap-3 text-white">
      <div className="h-6 w-6 text-white">
        <AlertIcon />
      </div>
      <span className="text-lg font-bold">No smoking</span>
    </div>
  </div>
)

const CarDetailsPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>()
  const [{ data: car, loading: carLoading, error: carError }] = useCarById(carId || '')
  const [{ data: users }] = useUsers()
  const [{ data: carTypes }] = useCarTypes()

  if (carLoading)
    return <div className="p-4 text-center font-serif text-white">Loading car details...</div>
  if (carError)
    return (
      <div className="p-4 text-center font-serif text-red-400">
        Error: {carError.message}
        <br />
        Status: {carError.response?.status}
      </div>
    )
  if (!car) return <div className="p-4 text-center font-serif text-red-400">Car not found</div>

  const owner = users?.find(user => user.id === car.ownerId)
  const carType = carTypes?.find(type => type.id === car.carTypeId)

  return (
    <div className="mx-auto max-w-4xl p-6 font-serif">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/cars" className="inline-flex items-center gap-2 text-white hover:text-white">
          <ChevronBackIcon className="h-5 w-5" />
        </Link>
        <h2 className="text-2xl font-bold text-white">DETAILS</h2>
        <div className="w-8"></div>
      </div>
      <div className="p-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex justify-center">
            <img
              src={carType?.imageUrl || 'https://via.placeholder.com/400'}
              alt={car.name}
              className="h-48 w-72 rounded-lg object-cover"
            />
          </div>
          <div className="w-full space-y-6">
            <h1 className=" text-3xl font-semibold text-white">{car.name}</h1>
            <CarDetails car={car} owner={owner} carType={carType} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsPage
