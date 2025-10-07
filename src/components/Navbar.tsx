import { ReactElement, useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import PlusIcon from '../assets/PlusIcon'
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
        className={`bg-gray-900 w-full max-w-[430px] mx-auto rounded-b-[30px] relative shadow-lg`}
      >
        <div className="flex justify-between items-center h-16 px-4 sm:px-6">
          <div className="flex items-center">
            <button
              onClick={handleMenuClick}
              className="text-white text-base sm:text-lg font-medium hover:text-gray-300 transition-colors py-2 px-3 -ml-3 rounded-lg active:bg-gray-800"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-900 rounded-b-full mt-8 px-4 sm:px-6 py-2 pb-4 -mb-2 shadow-lg">
              <Link
                to={AppRoutes.cars}
                className="flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                aria-label="Cars"
              >
                <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to={AppRoutes.profile}
              className="p-3 text-white hover:text-gray-300 transition-colors rounded-lg active:bg-gray-800"
              aria-label="Profile"
            >
              <ProfileIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className="fixed top-18 left-2 w-2/3 max-w-[430px] mx-auto mt-4 bg-primary-light transform transition-transform duration-300 ease-in-out z-50 rounded-2xl translate-x-0 shadow-2xl">
            <div className="flex flex-col">
              <div className="flex-1 py-2">
                <div className="px-4">
                  <Link
                    to={AppRoutes.bookCar}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    <CarsIcon color="white" className="w-5 h-5" />
                    <span className="text-base">Book A Car</span>
                  </Link>

                  <Link
                    to={AppRoutes.myBookings}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    <ListIcon color="white" className="w-5 h-5" />
                    <span className="text-base">My Bookings</span>
                  </Link>
                </div>

                <div className="border-t border-gray-700 my-3 mx-4"></div>

                <div className="px-4 mb-4">
                  <div className="text-white font-semibold text-base mb-3">My cars</div>

                  <Link
                    to={AppRoutes.myCars}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    <CarIcon color="white" className="w-5 h-5" />
                    <span className="text-base">See My Cars</span>
                  </Link>

                  <Link
                    to={AppRoutes.myCarsBookings}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    <ListIcon color="white" className="w-5 h-5" />
                    <span className="text-base">My Car's Bookings</span>
                  </Link>

                  <Link
                    to={AppRoutes.addCar}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    <CarPlusIcon />
                    <span className="text-base">Add New Car</span>
                  </Link>
                </div>

                <div className="border-t border-gray-700 my-3 mx-4"></div>

                <div className="px-4">
                  <Link
                    to={AppRoutes.logout}
                    className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
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
