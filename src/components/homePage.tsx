import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../types'
import { BrandTitle, BodyLarge, TextBase } from '../utils/Typography'
import { styles } from '../utils/styles'

export default function HomePage(): ReactElement {
  return (
    <>
      <div className="flex w-full items-center justify-center px-4 py-20 sm:px-6">
        <div className="flex w-full max-w-xs flex-col items-center rounded-lg px-6 py-10 text-center sm:max-w-sm">
          <h1 className="mb-2 flex flex-col font-lora text-5xl text-white sm:text-6xl">
            <span className="font-lora font-bold ">MONI</span>
            <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
          </h1>
          <p className="mb-8 mt-6 text-lg text-white sm:text-xl">
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
          </button>
          <button className="mb-3 w-full rounded-full border border-white px-6 py-3 text-base text-white sm:text-lg">
            See My Bookings
          </button>
          </Link>
          <button className={styles.outlineButton}>See My Bookings</button>
        </div>
      </div>
    </div>
  )
}
