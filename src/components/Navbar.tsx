import { useState, useRef, useEffect } from 'react'
import ProfileIcon from '@/assets/ProfileIcon'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@/types'
import Logo from '@/assets/Logo'
import { buttonBase } from '@/utils/buttonBase'
import MenuItems from '@/components/MenuItems'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <>
      <nav className="relative w-full bg-gray-900 shadow-lg">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="md:h-18 flex h-16 items-center justify-between lg:h-20">
            <div className="relative" ref={menuRef}>
              <button
                onClick={handleMenuClick}
                className={`rounded-lg px-3 py-2 text-base font-medium lg:hidden ${buttonBase}`}
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>

              <Link
                to={AppRoutes.home}
                className={`hidden items-center lg:flex ${buttonBase}`}
                aria-label="Home"
              >
                <Logo className="size-9" />
              </Link>

              {isMenuOpen && (
                <div
                  className="
                    absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-2xl bg-primary-light shadow-2xl transition-all duration-300 ease-in-out lg:hidden"
                >
                  <MenuItems closeMenu={closeMenu} />
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <div className="mb-2 mt-8 rounded-b-full bg-gray-900 px-4 py-2 pb-4 shadow-lg sm:px-6 lg:hidden">
                <Link
                  to={AppRoutes.home}
                  className={`flex items-center justify-center ${buttonBase}`}
                  aria-label="Home"
                >
                  <Logo className="size-7 sm:size-8 md:size-9" />
                </Link>
              </div>

              <div className="hidden items-center space-x-6 lg:flex">
                <Link to={AppRoutes.home} className={`text-base ${buttonBase}`}>
                  Home
                </Link>
                <Link to={AppRoutes.cars} className={`text-base ${buttonBase}`}>
                  Cars
                </Link>
                <Link to={AppRoutes.myBookings} className={`text-base ${buttonBase}`}>
                  My Bookings
                </Link>
                <Link to={AppRoutes.myCars} className={`text-base ${buttonBase}`}>
                  My Cars
                </Link>
                <Link to={AppRoutes.addCar} className={`text-base ${buttonBase}`}>
                  Add Car
                </Link>
                <Link to={AppRoutes.myCarsBookings} className={`text-base ${buttonBase}`}>
                  My Car&apos;s Bookings
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <Link
                to={AppRoutes.profile}
                className={`rounded-lg p-2 sm:p-3 ${buttonBase}`}
                aria-label="Profile"
              >
                <ProfileIcon className="size-6 sm:size-7 md:size-8" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
