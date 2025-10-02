import React from 'react'

export function HomePage(): React.ReactElement {
  return (
    <>
      {/* Navbar goes here */}
      <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-xs sm:max-w-sm w-full rounded-lg py-10 px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-6xl text-white mb-2 flex flex-col font-lora">
            <span className="font-lora font-bold ">MONI</span>
            <span className="text-5xl sm:text-6xl italic font-lora">Share</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 mt-6">
            Hello Manuela!
            <br />
            What are you up to today?
          </p>
          {/* Primary button */}
          <button className="bg-white text-cyan-800 font-semibold rounded-full py-3 px-6 text-base sm:text-lg w-full mb-6">
            Book Car
          </button>
          <span className="text-white mb-4">or</span>
          {/* Outlined buttons */}
          <button className="border border-white text-white rounded-full py-3 px-6 text-base sm:text-lg w-full mb-3">
            See My Cars
          </button>
          <button className="border border-white text-white rounded-full py-3 px-6 text-base sm:text-lg w-full">
            See My Bookings
          </button>
        </div>
      </div>
      {/* User/account icon can be placed here */}
    </>
  )
}
