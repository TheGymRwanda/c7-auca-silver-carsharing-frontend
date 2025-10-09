import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-20">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-xs flex-col items-center text-center">
          <h1 className="mb-2 flex flex-col font-lora text-5xl text-white">
            <span className="font-lora font-bold">MONI</span>
            <span className="font-lora text-5xl italic">Share</span>
          </h1>
          <p className="mb-8 mt-6 text-lg text-white">
            Hello Manuela!
            <br />
            What are you up to today?
          </p>
          <Link
            to={AppRoutes.bookCar}
            className="mb-6 block w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-cyan-800"
          >
            Book Car
          </Link>
          <span className="mb-4 text-white">or</span>
          <Link
            to={AppRoutes.cars}
            className="mb-3 block w-full rounded-full border border-white px-6 py-3 text-center text-base text-white"
          >
            See My Cars
          </Link>
          <button className="w-full rounded-full border border-white px-6 py-3 text-base text-white">
            See My Bookings
          </button>
        </div>
      </div>
    </div>
  )
}
