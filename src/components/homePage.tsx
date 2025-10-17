import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import { BrandTitle, BodyLarge, TextBase } from '../utils/Typography'
import { styles } from '../utils/styles'

export default function HomePage(): ReactElement {
  return (
    <div className={`${styles.centerContainer} pt-20`}>
      <div className={`${styles.centerContent} px-4 md:px-8`}>
        <div
          className={`${styles.flexCol} mx-auto w-full max-w-xs items-center text-center md:max-w-md lg:max-w-lg xl:max-w-xl`}
        >
          <BrandTitle className="mb-2 flex flex-col sm:flex-row sm:gap-x-3 md:mb-4">
            <span className="text-4xl font-bold sm:text-5xl">MONI</span>
            <span className="text-4xl italic sm:text-5xl">Share</span>
          </BrandTitle>
          <BodyLarge className="mb-8 mt-6 text-lg md:mb-10 md:mt-8 md:text-xl lg:mb-12 lg:mt-10 lg:text-2xl">
            Hello Manuela!
            <br />
            What are you up to today?
          </BodyLarge>
          <Link
            to={AppRoutes.bookCar}
            className={`mb-6 md:mb-8 lg:mb-10 ${styles.primaryButton} md:text-md md:px-4`}
          >
            Book Car
          </Link>
          <TextBase className="mb-6 md:text-lg">or</TextBase>
          <div className="w-full sm:grid sm:grid-cols-2 sm:gap-x-3 sm:text-base">
            <Link
              to={AppRoutes.cars}
              className={`mb-3 md:mb-4 lg:mb-6 ${styles.secondaryButton} md:text-md whitespace-nowrap sm:w-auto sm:flex-1 sm:text-base md:p-4 md:px-8`}
            >
              See My Cars
            </Link>
            <Link
              to={AppRoutes.myBookings}
              className={`mb-3 md:mb-4 lg:mb-6 ${styles.outlineButton} md:text-md whitespace-nowrap sm:w-auto sm:flex-1 sm:text-base md:p-4 md:px-8`}
            >
              See My Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
