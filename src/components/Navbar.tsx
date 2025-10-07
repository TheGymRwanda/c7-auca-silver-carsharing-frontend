import { ReactElement, useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import Logo from '../assets/Logo'
import CarIcon from '../assets/CarIcon'
import CarPlusIcon from '../assets/CarPlusIcon'

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`relative mx-auto w-full max-w-[430px] rounded-b-[30px] bg-gray-900 shadow-lg`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <button
              onClick={handleMenuClick}
              className="-ml-3 rounded-lg px-3 py-2 text-base font-medium text-white transition-colors hover:text-gray-300 active:bg-gray-800 sm:text-lg"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="-mb-2 mt-8 rounded-b-full bg-gray-900 px-4 py-2 pb-4 shadow-lg sm:px-6">
              <Link
                to={AppRoutes.home}
                className="flex items-center justify-center text-white transition-colors hover:text-gray-300"
                aria-label="Home"
              >
                <Logo className="size-7 sm:size-8" />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to={AppRoutes.profile}
              className="rounded-lg p-3 text-white transition-colors hover:text-gray-300 active:bg-gray-800"
              aria-label="Profile"
            >
              <ProfileIcon className="size-6 sm:size-7" />
            </Link>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className="top-18 bg-primary-light fixed left-2 z-50 mx-auto mt-4 w-2/3 max-w-[430px] translate-x-0 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out">
            <div className="flex flex-col">
              <div className="flex-1 py-2">
                <div className="px-4">
                  <Link
                    to={AppRoutes.bookCar}
                    className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    <CarsIcon color="white" className="size-5" />
                    <span className="text-base">Book A Car</span>
                  </Link>

                  <Link
                    to={AppRoutes.myBookings}
                    className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    <ListIcon color="white" className="size-5" />
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
                    <CarIcon color="white" className="size-5" />
                    <span className="text-base">See My Cars</span>
                  </Link>

                  <Link
                    to={AppRoutes.myCarsBookings}
                    className="flex items-center space-x-3 py-3 text-white transition-colors hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    <ListIcon color="white" className="size-5" />
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
          </div>
        </>
      )}
    </>
  )
}
