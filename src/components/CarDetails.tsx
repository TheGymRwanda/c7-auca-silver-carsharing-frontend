import classNames from 'classnames'
import ProfileIcon from '@/assets/ProfileIcon'
import HorseIcon from '@/assets/HorseIcon'
import FuelIcon from '@/assets/FuelIcon'
import CarsIcon from '@/assets/CarsIcon'
import LicensePlateIcon from '@/assets/LicensePlateIcon'
import AlertIcon from '@/assets/AlertIcon'
import { CarDto, UserDto, CarTypeDto } from '@/utils/api'
import { styles } from '@/utils/styles'
import { TextLarge } from '@/utils/Typography'

interface CarDetailsProps {
  car: CarDto
  owner?: UserDto
  carType?: CarTypeDto
}

export default function CarDetails({ car, owner, carType }: CarDetailsProps) {
  return (
    <>
      <div
        className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
      >
        <ProfileIcon className="size-6 text-white md:size-7" />
        <TextLarge className="md:text-xl lg:text-2xl"> {owner?.name || 'Unknown'}</TextLarge>
      </div>
      <div
        className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
      >
        <div className="size-6 text-white md:size-7">
          <CarsIcon />
        </div>
        <TextLarge className="md:text-xl lg:text-2xl"> {carType?.name || 'Unknown'}</TextLarge>
      </div>
      {car.licensePlate && (
        <div
          className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
        >
          <LicensePlateIcon className="size-6 text-white md:size-7" />
          <TextLarge className="md:text-xl lg:text-2xl"> {car.licensePlate}</TextLarge>
        </div>
      )}
      {car.horsepower && (
        <div
          className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
        >
          <div className="size-6 text-white md:size-7">
            <HorseIcon />
          </div>
          <TextLarge className="md:text-xl lg:text-2xl"> {car.horsepower} HP</TextLarge>
        </div>
      )}
      <div
        className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
      >
        <FuelIcon className="size-6 text-white md:size-7" />
        <TextLarge className="md:text-xl lg:text-2xl"> {car.fuelType}</TextLarge>
      </div>
      {car.info && (
        <div
          className={classNames(styles.detailRow, 'mb-4 space-y-2 text-left md:mb-0 md:space-y-0')}
        >
          <div className="size-6 text-white md:size-7">
            <AlertIcon />
          </div>
          <TextLarge className="md:text-xl lg:text-2xl"> {car.info}</TextLarge>
        </div>
      )}
    </>
  )
}
