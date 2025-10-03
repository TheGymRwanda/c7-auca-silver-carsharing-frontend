import React from 'react'
import Button from './Button'
import ErrorMsgIcon from '../../assets/ErrorMsgIcon'

export default function ErroPage(): React.ReactElement {
  return (
    <div
      className="mx-auto flex flex-col items-center justify-center gap-y-7 px-4 py-12
                    text-center font-lora sm:px-6 sm:py-16 md:px-8
                    md:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-32"
    >
      <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        OOOOOPS!
      </h1>
      <ErrorMsgIcon />
      <p className="text-base font-medium text-white sm:text-base md:text-lg lg:text-xl">
        Something went wrong.
        <br /> We will solve your issue soon.
      </p>
      <Button />
    </div>
  )
}
