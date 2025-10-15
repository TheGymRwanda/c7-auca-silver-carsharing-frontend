import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import CarIcon from '../assets/CarIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { styles } from '../utils/styles'

interface MenuItemsProps {
  closeMenu: () => void
}

export default function MenuItems({ closeMenu }: MenuItemsProps) {
  return (
    <div className="flex flex-col">
      <div className="flex-1 py-2 ">
        <div className="px-4">
          <Link to={AppRoutes.bookCar} className={styles.menuLink} onClick={closeMenu}>
            <CarsIcon className={styles.iconWhite} />
            <span className={styles.textBase}>Book A Car</span>
          </Link>

          <Link to={AppRoutes.myBookings} className={styles.menuLink} onClick={closeMenu}>
            <ListIcon className={styles.iconWhite} />
            <span className={styles.textBase}>My Bookings</span>
          </Link>
        </div>

        <div className="mx-4 my-3 border-t border-gray-700"></div>

        <div className="mb-4 px-4">
          <div className="mb-3 text-base font-semibold text-white">My cars</div>

          <Link to={AppRoutes.cars} className={styles.menuLink} onClick={closeMenu}>
            <CarIcon className={styles.iconWhite} />
            <span className={styles.textBase}>See My Cars</span>
          </Link>

          <Link to={AppRoutes.myCarsBookings} className={styles.menuLink} onClick={closeMenu}>
            <ListIcon className={styles.iconWhite} />
            <span className={styles.textBase}>My Car&apos;s Bookings</span>
          </Link>

          <Link to={AppRoutes.addCar} className={styles.menuLink} onClick={closeMenu}>
            <CarPlusIcon className={styles.iconWhite} />
            <span className={styles.textBase}>Add New Car</span>
          </Link>
        </div>

        <div className="mx-4 my-3 border-t border-gray-700"></div>

        <div className="px-4">
          <Link to={AppRoutes.logout} className={styles.menuLink} onClick={closeMenu}>
            <LogoutIcon className={styles.textWhite} />
            <span className={styles.textBase}>Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
