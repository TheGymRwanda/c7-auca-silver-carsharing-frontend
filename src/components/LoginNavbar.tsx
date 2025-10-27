import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { AppRoutes } from '@/types/app_routes'
import Logo from '@/assets/Logo'
import { buttonBase } from '@/utils/buttonBase'

export default function LoginNavbar(): ReactElement {
  return (
    <nav className={`relative mx-auto w-full max-w-[430px] rounded-b-[30px] bg-gray-900 shadow-lg`}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="mb-2 mt-8 rounded-b-full bg-gray-900 px-4 py-2 pb-4 shadow-lg sm:mb-0 sm:px-6">
            <Link
              to={AppRoutes.home}
              className={`flex items-center justify-center ${buttonBase}`}
              aria-label="Home"
            >
              <Logo className="size-7 sm:size-8" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
