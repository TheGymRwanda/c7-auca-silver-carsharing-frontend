import ProfileIcon from '../assets/ProfileIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'
import CarsIcon from '../assets/CarsIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import AlertIcon from '../assets/AlertIcon'
import { CarDto, UserDto, CarTypeDto } from '../utils/api'
import { styles } from '../utils/styles'
import { TextLarge } from '../utils/Typography'

interface CarDetailsProps {
  car: CarDto
  owner?: UserDto
  carType?: CarTypeDto
}

export default function CarDetails({ car, owner, carType }: CarDetailsProps) {
  return (
    <div className="space-y-2 text-left">
      <div className={styles.detailRow}>
        <ProfileIcon className={styles.iconContainer} />
        <TextLarge> {owner?.name || 'Unknown'}</TextLarge>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.iconContainer}>
          <CarsIcon />
        </div>
        <TextLarge> {carType?.name || 'Unknown'}</TextLarge>
      </div>
      {car.licensePlate && (
        <div className={styles.detailRow}>
          <LicensePlateIcon className={styles.iconContainer} />
          <TextLarge> {car.licensePlate}</TextLarge>
        </div>
      )}
      {car.horsepower && (
        <div className={styles.detailRow}>
          <div className={styles.iconContainer}>
            <HorseIcon />
          </div>
          <TextLarge> {car.horsepower} HP</TextLarge>
        </div>
      )}
      <div className={styles.detailRow}>
        <FuelIcon className={styles.iconContainer} />
        <TextLarge> {car.fuelType}</TextLarge>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.iconContainer}>
          <AlertIcon />
        </div>
        <TextLarge className="font-bold">No smoking</TextLarge>
      </div>
    </div>
  )
}
