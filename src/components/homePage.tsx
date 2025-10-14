import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import { BrandTitle, BodyLarge, TextBase } from '../utils/Typography'

export default function HomePage(): ReactElement {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-20">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-xs flex-col items-center text-center">
          <BrandTitle className="mb-2 flex flex-col">
            <span className="font-bold">MONI</span>
            <span className="italic">Share</span>
          </BrandTitle>
          <BodyLarge className="mb-8 mt-6">
            Hello Manuela!
            <br />
            What are you up to today?
          </BodyLarge>
          <Link
            to={AppRoutes.bookCar}
            className="mb-6 block w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-cyan-800"
          >
            Book Car
          </Link>
          <TextBase className="mb-4">or</TextBase>
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
