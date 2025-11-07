import { useMemo } from 'react'
import { useCars } from '@/hooks/useCars'
import useAuth from '@/hooks/useAuth'
import CarCard from '@/UI/CarCard'

export default function MyCars() {
  const { cars, users, carTypes, loading, error } = useCars()
  const { user } = useAuth()

  const myCarsWithDetails = useMemo(() => {
    if (!user) return []

    return cars
      .filter(car => car.ownerId === user.id)
      .map(car => {
        const owner = users.find(u => u.id === car.ownerId)
        const carType = carTypes.find(type => type.id === car.carTypeId)

        return {
          id: car.id,
          name: car.name,
          owner: owner?.name || 'Unknown',
          type: carType?.name || 'Unknown',
          image: carType?.imageUrl || '',
          info: car.info,
        }
      })
  }, [cars, users, carTypes, user])

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-sm text-center text-white">
        <p>Loading your cars...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-sm text-center text-white">
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        My Cars
      </h1>

      {myCarsWithDetails.length === 0 ? (
        <div className="text-center text-white">
          <p>You don&apos;t have any cars yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {myCarsWithDetails.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}
