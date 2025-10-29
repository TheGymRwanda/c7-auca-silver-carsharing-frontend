import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '@/assets/ProfileIcon'
import CarsIcon from '@/assets/CarsIcon'
import { CarWithDetails } from '@/types/cardetails_type'
import { styles } from '@/utils/styles'
import Button from './Button'
import DeleteCarDialog from '@/components/DeleteCarDialog'
import { deleteCar } from '@/utils/deleteCar'

interface CarCardProps {
  car: CarWithDetails
  onRefresh?: () => void
  onDeleteSuccess?: (message: string) => void
}

export default function CarCard({ car, onRefresh, onDeleteSuccess }: CarCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleDeleteConfirm = async () => {
    await deleteCar(car.id)
    onRefresh?.()
    onDeleteSuccess?.('Car deleted successfully!')
  }
  return (
    <div className={`${styles.cardContainer} md:flex md:h-full md:flex-col`}>
      <div className="mb-4 flex md:flex-col">
        <div className="w-1/2 md:mb-4 md:w-full">
          <img
            src={car.image}
            alt={car.name}
            className="size-full object-contain md:h-48 md:w-full"
          />
        </div>

        <div className="flex w-1/2 flex-col justify-around pl-4 md:w-full md:flex-1 md:pl-0">
          <div className="mb-4">
            <h2 className="break-words text-xxl font-bold text-white">{car.name}</h2>{' '}
          </div>

          <div className="space-y-2">
            <div className={styles.cardRow}>
              <ProfileIcon className="size-4 text-white" />
              <span className="text-md md:text-sm">{car.owner}</span>
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
      <Button
        variant="outlineWhite"
        size="sm"
        className="w-full !border-yellow-400 !text-yellow-400 hover:!bg-yellow-400 hover:!text-black md:mt-auto"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        Delete
      </Button>

      <DeleteCarDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
        carName={car.name}
      />
    </div>
  )
}
