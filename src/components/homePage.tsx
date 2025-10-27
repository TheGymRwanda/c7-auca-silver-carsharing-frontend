import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@/types'

export default function HomePage(): React.ReactElement {
  return (
    <>
      {/* Navbar goes here */}
      <div className="flex w-full items-center justify-center px-4 py-20 sm:px-6">
        <div className="flex w-full max-w-xs flex-col items-center rounded-lg px-6 py-10 text-center sm:max-w-sm">
          <h1 className="mb-2 flex flex-col font-lora text-5xl text-white sm:text-6xl">
            <span className="font-lora font-bold ">MONI</span>
            <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
          </h1>
          <p className="mb-8 mt-6 text-lg text-white sm:text-xl">
            Hello Manuela!
            <br />
            What are you up to today?
          </p>
          {/* Primary button */}
          <button className="mb-6 w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-cyan-800 sm:text-lg">
            Book Car
          </button>
          <span className="mb-4 text-white">or</span>
          {/* Outlined buttons */}
          <button className="mb-3 w-full rounded-full border border-white px-6 py-3 text-base text-white sm:text-lg">
            See My Cars
          </button>
          <button className="mb-3 w-full rounded-full border border-white px-6 py-3 text-base text-white sm:text-lg">
            See My Bookings
          </button>
          <Link
            to={AppRoutes.login}
            className="w-full rounded-full border border-white px-6 py-3 text-center text-base text-white transition-colors duration-200 hover:bg-white hover:text-primary-dark sm:text-lg"
          >
            Login
          </Link>
        </div>
      </div>
      {/* User/account icon can be placed here */}
    </>
  )
}
