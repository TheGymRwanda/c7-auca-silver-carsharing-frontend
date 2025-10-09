import { ReactElement, useState, useRef, useEffect } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import Logo from '../assets/Logo'
import MenuItems from './MenuItems'

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

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
        <div
          ref={menuRef}
          className="absolute left-2 z-50 mx-auto mt-7 w-2/3 max-w-[430px] translate-x-0 rounded-2xl bg-primary-light shadow-2xl transition-transform duration-300 ease-in-out"
        >
          <MenuItems closeMenu={closeMenu} />
        </div>
      )}
    </>
  )
}
