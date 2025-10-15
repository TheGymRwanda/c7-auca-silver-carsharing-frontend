import { useParams, Link } from 'react-router-dom'

import useCarById from '../hooks/useCarById'
import { useCarData } from '../hooks/useCarData'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import CarDetails from './CarDetails'
import { H1, H2 } from '../utils/Typography'
import { styles } from '../utils/styles'

export default function CarDetailsPage() {
  const { carId } = useParams<{ carId: string }>()
  const [{ data: car, loading: carLoading, error: carError }] = useCarById(carId || '')
  const {
    users: [{ data: users }],
    carTypes: [{ data: carTypes }],
  } = useCarData()

  if (carLoading) return <div className={styles.loadingText}>Loading car details...</div>
  if (carError)
    return (
      <div className={styles.errorText}>
        Error: {carError.message}
        <br />
        Status: {carError.response?.status}
      </div>
    )
  if (!car) return <div className={styles.errorText}>Car not found</div>

  const owner = users?.find(user => user.id === car.ownerId)
  const carType = carTypes?.find(type => type.id === car.carTypeId)

  return (
    <div className={styles.fullHeightContainer}>
      <div className={`mb-4 ${styles.flexBetween}`}>
        <Link to="/cars" className={styles.backLink}>
          <ChevronBackIcon className="size-5" />
        </Link>
        <H2>DETAILS</H2>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center space-y-8">
        <div className={styles.flexCenter}>
          <img
            src={carType?.imageUrl || 'https://via.placeholder.com/400'}
            alt={car.name}
            className="h-44 w-60 rounded-lg object-contain"
          />
        </div>

        <div className={`${styles.maxWidthContainer} space-y-6 px-4`}>
          <H1 className="text-left">{car.name}</H1>
          <div className="mt-6">
            <CarDetails car={car} owner={owner} carType={carType} />
          </div>
        </div>
      </div>
    </div>
  )
}
