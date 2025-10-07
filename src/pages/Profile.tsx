import { ReactElement } from 'react'

export default function Profile(): ReactElement {
  return (
    <div className="mx-auto w-full max-w-sm text-center text-white">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">Profile</h1>
      <p className="text-sm sm:text-base">This is the Profile page.</p>
    </div>
  )
}
