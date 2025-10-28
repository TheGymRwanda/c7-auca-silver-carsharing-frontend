import React, { useState } from 'react'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import ProfileIcon from '@/assets/ProfileIcon'
import KeyIcon from '@/assets/KeyIcon'

export default function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleLoginClick = () => {
    setShowLoginForm(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="flex w-full items-center justify-center sm:px-6">
        <div className="flex w-full max-w-xs flex-col items-center rounded-lg text-center sm:max-w-sm">
          {!showLoginForm && (
            <div className="w-full overflow-hidden flex flex-col items-center justify-between gap-24">
              <h1 className="flex flex-col font-lora text-5xl text-white sm:text-6xl mt-10">
                <span className="font-lora font-bold ">MONI</span>
                <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
              </h1>
              <p className="text-md text-white sm:text-xl">
                Start sharing your Monis
                <br />
                with the world
              </p>
              <Button
                onClick={handleLoginClick}
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                aria-label="Show login form"
              >
                Login
              </Button>
            </div>
          )}

          <div
            className={`w-full transition-all duration-500 ease-in-out transform ${
              showLoginForm
                ? 'opacity-100 translate-y-0 max-h-96'
                : 'opacity-0 -translate-y-8 max-h-0 overflow-hidden'
            }`}
            role="region"
            aria-label="Login form"
            aria-expanded={showLoginForm}
          >
            <h1 className="flex flex-col font-lora text-5xl text-white sm:text-6xl my-16">
              <span className="font-lora font-bold ">MONI</span>
              <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
            </h1>
            <h1 className="mb-8 flex flex-col font-lora text-xl text-white sm:text-2xl">
              <span className="font-lora font-bold">Login</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="relative">
                <label htmlFor="username" className="sr-only">
                  Username or email address
                </label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username / e-mail"
                  required
                  aria-describedby="username-help"
                  autoComplete="username"
                  leftIcon={<ProfileIcon className="w-5 h-5" />}
                />
                <div id="username-help" className="sr-only">
                  Enter your username or email address
                </div>
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  aria-describedby="password-help"
                  autoComplete="current-password"
                  leftIcon={<KeyIcon className="w-5 h-5" />}
                />
                <div id="password-help" className="sr-only">
                  Enter your password
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                aria-label="Submit login form"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
