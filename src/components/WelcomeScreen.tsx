import { ReactElement } from 'react'
import Button from '@/UI/Button'

interface WelcomeScreenProps {
  onShowLogin: () => void
}

export default function WelcomeScreen({ onShowLogin }: WelcomeScreenProps): ReactElement {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-24 overflow-hidden">
      <h1 className="mt-10 flex flex-col font-lora text-5xl text-white sm:text-6xl">
        <span className="font-lora font-bold ">MONI</span>
        <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
      </h1>
      <p className="text-lg text-white sm:text-xl">
        Start sharing your Monis
        <br />
        with the world
      </p>
      <Button
        onClick={onShowLogin}
        variant="primary"
        size="lg"
        className="mt-8 w-full"
        aria-label="Show login form"
      >
        Login
      </Button>
    </div>
  )
}
