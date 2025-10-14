import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import { BrandTitle, BodyLarge, TextBase } from '../utils/Typography'
import { styles } from '../utils/styles'

export default function HomePage(): ReactElement {
  return (
    <div className={`${styles.centerContainer} pt-20`}>
      <div className={styles.centerContent}>
        <div className={`${styles.flexCol} ${styles.maxWidthContainer} items-center text-center`}>
          <BrandTitle className="mb-2 flex flex-col">
            <span className="font-bold">MONI</span>
            <span className="italic">Share</span>
          </BrandTitle>
          <BodyLarge className="mb-8 mt-6">
            Hello Manuela!
            <br />
            What are you up to today?
          </BodyLarge>
          <Link to={AppRoutes.bookCar} className={`mb-6 ${styles.primaryButton}`}>
            Book Car
          </Link>
          <TextBase className="mb-4">or</TextBase>
          <Link to={AppRoutes.cars} className={`mb-3 ${styles.secondaryButton}`}>
            See My Cars
          </Link>
          <button className={styles.outlineButton}>See My Bookings</button>
        </div>
      </div>
    </div>
  )
}
