import { Link } from 'react-router-dom'

import { AppRoutes } from '@/types/app_routes'
import useAuth from '@/hooks/useAuth'

export default function HomePage() {
  const { user } = useAuth()
  return (
    <div className="flex w-full items-center justify-center px-4 py-20 sm:px-6">
      <div className="flex w-full max-w-xs flex-col items-center rounded-lg px-6 py-10 text-center sm:max-w-sm">
        <h1 className="mb-2 flex flex-col font-lora text-5xl text-white sm:text-6xl">
          <span className="font-lora font-bold ">MONI</span>
          <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
        </h1>
        <p className="mb-8 mt-6 text-lg text-white sm:text-xl">
          Hello {user?.name || 'User'}!
          <br />
          What are you up to today?
        </p>
        <Link
          to={AppRoutes.cars}
          className="mb-6 block w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-cyan-800 sm:text-lg"
        >
          Book Car
        </Link>
        <span className="mb-4 text-white">or</span>
        <Link
          to={AppRoutes.myCars}
          className="mb-3 block w-full rounded-full border border-white px-6 py-3 text-center text-base text-white sm:text-lg"
        >
          See My Cars
        </Link>
        <Link
          to={AppRoutes.myBookings}
          className="block w-full rounded-full border border-white px-6 py-3 text-center text-base text-white sm:text-lg"
        >
          See My Bookings
        </Link>
      </div>
    </div>
  )
}
