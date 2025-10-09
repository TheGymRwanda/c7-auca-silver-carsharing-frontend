import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import CarIcon from '../assets/CarIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'

interface MenuItemsProps {
  closeMenu: () => void
}

export default function MenuItems({ closeMenu }: MenuItemsProps): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="flex-1 py-2">
        <div className="px-4">
          <Link
            to={AppRoutes.bookCar}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <CarsIcon className="size-5" />
            <span className="text-base">Book A Car</span>
          </Link>

          <Link
            to={AppRoutes.myBookings}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <ListIcon className="size-5" />
            <span className="text-base">My Bookings</span>
          </Link>
        </div>

        <div className="mx-4 my-3 border-t border-gray-700"></div>

        <div className="mb-4 px-4">
          <div className="mb-3 text-base font-semibold text-white">My cars</div>

          <Link
            to={AppRoutes.myCars}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <CarIcon className="size-5" />
            <span className="text-base">See My Cars</span>
          </Link>

          <Link
            to={AppRoutes.myCarsBookings}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <ListIcon className="size-5" />
            <span className="text-base">My Car&apos;s Bookings</span>
          </Link>

          <Link
            to={AppRoutes.addCar}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <CarPlusIcon className="size-5" />
            <span className="text-base">Add New Car</span>
          </Link>
        </div>

        <div className="mx-4 my-3 border-t border-gray-700"></div>

        <div className="px-4">
          <Link
            to={AppRoutes.logout}
            className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
            onClick={closeMenu}
          >
            <LogoutIcon />
            <span className="text-base">Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
