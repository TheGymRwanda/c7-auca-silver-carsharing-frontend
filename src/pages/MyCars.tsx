import { useState, useMemo } from 'react'
import { useCarData } from '@/hooks'
import CarCard from '@/UI/CarCard'
import { CarWithDetails } from '@/types/cardetails_type'

export default function MyCars() {
  const { cars, users, carTypes } = useCarData()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const myCarsWithDetails = useMemo(() => {
    if (!cars[0]?.data || !users[0]?.data || !carTypes[0]?.data) return []

    const token = localStorage.getItem('token')
    let currentUserId: number | null = null
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        currentUserId = payload.userId || payload.id
      } catch {
        currentUserId = null
      }
    }

    return cars[0].data
      .filter(car => car.ownerId === currentUserId)
      .map(car => {
        const owner = users[0].data?.find(user => user.id === car.ownerId)
        const carType = carTypes[0].data?.find(type => type.id === car.carTypeId)

        return {
          id: car.id,
          name: car.name,
          owner: owner?.name || 'Unknown',
          type: carType?.name || 'Unknown',
          image: carType?.imageUrl || '',
          info: car.info,
        } as CarWithDetails
      })
  }, [cars[0]?.data, users[0]?.data, carTypes[0]?.data])

  const handleRefresh = () => {
    cars[1]()
  }

  const handleDeleteSuccess = (message: string) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  if (cars[0]?.loading || users[0]?.loading || carTypes[0]?.loading) {
    return (
      <div className="mx-auto w-full max-w-sm text-center text-white">
        <p>Loading your cars...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        My Cars
      </h1>

      {successMessage && (
        <div className="mb-4 rounded-lg bg-green-600 p-3 text-center text-white">
          {successMessage}
        </div>
      )}

      {myCarsWithDetails.length === 0 ? (
        <div className="text-center text-white">
          <p>You don&apos;t have any cars yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {myCarsWithDetails.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onRefresh={handleRefresh}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))}
        </div>
      )}
    </div>
  )
}
