import { Link } from 'react-router-dom'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import { CarWithDetails } from '../types'
import { styles } from '../utils/styles'

interface CarCardProps {
  car: CarWithDetails
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className="flex">
        <div className="w-1/2">
          <img src={car.image} alt={car.name} className="size-full object-contain" />
        </div>

        <div className="flex w-1/2 flex-col justify-around pl-4">
          <div className="mb-4">
            <h2 className="text-xxl font-bold text-white">{car.name}</h2>
          </div>

          <div className="space-y-2">
            <div className={styles.cardRow}>
              <ProfileIcon className="size-4 text-white" />
              <span className="text-md">{car.owner}</span>
            </div>

            <div className={styles.cardRow}>
              <CarsIcon className="size-4" />
              <span className="text-sm">{car.type}</span>
            </div>
          </div>

          <div className="mt-4">
            <Link to={`/cars/${car.id}`} className={styles.detailsLink}>
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
