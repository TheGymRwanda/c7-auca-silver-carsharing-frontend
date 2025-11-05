import { useParams, Link } from 'react-router-dom'

import { useCarById } from '@/hooks/useCarById'
import { useCarActions } from '@/hooks/useCarActions'
import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import CarDetails from '@/components/CarDetails'
import Button from '@/UI/Button'
import { H1, H2 } from '@/utils/Typography'
import { styles } from '@/utils/styles'

export default function CarDetailsPage() {
  const { carId } = useParams<{ carId: string }>()
  const { car, owner, carType, loading, error } = useCarById(carId || '')
  const { retry } = useCarActions()

  if (loading) return <div className={styles.centerText}>Loading car details...</div>
  if (error) {
    return (
      <div className={styles.centerText}>
        <p>Error: {error}</p>
        <Button onClick={retry} variant="primary" className="mt-4">
          Retry
        </Button>
      </div>
    )
  }
  if (!car) return <div className={styles.centerText}>Car not found</div>

  return (
    <div className={styles.fullHeightContainer}>
      <div className={`mb-4 ${styles.flexBetween}`}>
        <Link to="/cars" className={styles.backLink}>
          <ChevronBackIcon className="size-5" />
        </Link>
        <H2>DETAILS</H2>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center space-y-8 md:space-y-12 lg:space-y-16">
        <div className="flex w-full justify-center">
          <img
            src={carType?.imageUrl || 'https://via.placeholder.com/400'}
            alt={car.name}
            className="h-44 w-60 rounded-lg object-contain md:h-64 md:w-full md:max-w-2xl lg:h-80 lg:max-w-3xl"
          />
        </div>

        <div className="w-full max-w-xs space-y-6 px-4 md:max-w-4xl md:space-y-8 lg:space-y-10">
          <H1 className="text-center md:text-2xl lg:text-3xl">{car.name}</H1>
          <div className="mt-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
            <CarDetails car={car} owner={owner} carType={carType} />
          </div>
        </div>
      </div>
    </div>
  )
}
