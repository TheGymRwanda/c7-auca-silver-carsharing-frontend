import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '@/assets/ProfileIcon'
import CarsIcon from '@/assets/CarsIcon'
import Button from '@/UI/Button'
import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog'
import { styles } from '@/utils/styles'

interface CarWithDetails {
  id: number
  name: string
  owner: string
  type: string
  image: string
  info?: string
}

interface CarCardProps {
  car: CarWithDetails
  onDelete?: (carId: number, carName: string) => Promise<void>
}

export default function CarCard({ car, onDelete }: CarCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/cars/${car.id}`)
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDeleteDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDeleteDialogOpen(false)
  }

  const handleDeleteConfirm = async () => {
    if (onDelete) {
      try {
        await onDelete(car.id, car.name)
        setIsDeleted(true)
        setIsDeleteDialogOpen(false)
      } catch (error) {
        setIsDeleteDialogOpen(false)
        throw error
      }
    }
  }
  // Don't render the card if it's been deleted and dialog is closed
  if (isDeleted && !isDeleteDialogOpen) {
    return null
  }

  return (
    <div
      className={`${styles.cardContainer} cursor-pointer transition-colors hover:bg-white/5 md:flex md:h-full md:flex-col ${isDeleted ? 'opacity-50' : ''}`}
      onClick={handleCardClick}
    >
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

      {onDelete && (
        <Button
          variant="outlineWhite"
          size="sm"
          className="w-full !border-yellow-400 !text-yellow-400 hover:!bg-yellow-400 hover:!text-black md:mt-auto"
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      )}

      {isDeleteDialogOpen && (
        <DeleteConfirmationDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleDialogClose}
          onConfirm={handleDeleteConfirm}
          carName={car.name}
        />
      )}
    </div>
  )
}
