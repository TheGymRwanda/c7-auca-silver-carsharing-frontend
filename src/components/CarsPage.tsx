import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useCars } from '@/hooks/useCars'
import CarCard from '@/UI/CarCard'
import PageHeader from '@/components/PageHeader'
import Button from '@/UI/Button'
import { AppRoutes } from '@/types/app_routes'
import { styles } from '@/utils/styles'

export default function CarsPage() {
  const { cars, users, carTypes, loading, error } = useCars()

  const transformedCars = useMemo(
    () =>
      cars.map(car => {
        const owner = users.find(user => user.id === car.ownerId)
        const carType = carTypes.find(type => type.id === car.carTypeId)

        return {
          id: car.id,
          name: car.name,
          owner: owner?.name || 'Unknown',
          type: carType?.name || 'Unknown',
          image: carType?.imageUrl || 'https://via.placeholder.com/150',
          info: car.info,
        }
      }),
    [cars, users, carTypes],
  )

  if (loading) {
    return <div className={styles.centerText}>Loading cars...</div>
  }

  if (error) {
    return <div className={styles.centerText}>Error: {error}</div>
  }

  if (transformedCars.length === 0) {
    return <div className={styles.centerText}>No cars available</div>
  }

  return (
    <>
      <div className={styles.pageContainer}>
        <PageHeader title="ALL CARS" />

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3">
          {transformedCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="fixed inset-x-0 bottom-0 w-full p-4" style={{ backgroundColor: '#265e78' }}>
          <div className="mx-auto max-w-[430px] md:max-w-none">
            <Link to={AppRoutes.addCar}>
              <Button variant="primary" className="w-full">
                Add new car
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
