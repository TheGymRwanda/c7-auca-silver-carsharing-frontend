import React, { useState } from 'react'
import { ReactElement } from 'react'
import Button from '../components/Button'

export default function LoginPage(): ReactElement {
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
              <p className="text-lg text-white sm:text-xl">
                Start sharing your Monis
                <br />
                with the world
              </p>
              <Button
                onClick={handleLoginClick}
                variant="primary"
                size="lg"
                fullWidth
                className="mt-8"
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
            <h1 className="mb-8 flex flex-col font-lora text-3xl text-white sm:text-4xl">
              <span className="font-lora font-bold">Login</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="relative">
                <label htmlFor="username" className="sr-only">
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username / e-mail"
                  className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  required
                  aria-describedby="username-help"
                  autoComplete="username"
                />
                <div id="username-help" className="sr-only">
                  Enter your username or email address
                </div>
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full rounded-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  required
                  aria-describedby="password-help"
                  autoComplete="current-password"
                />
                <div id="password-help" className="sr-only">
                  Enter your password
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                variant="primary"
                size="lg"
                fullWidth={true}
                className="mt-8"
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
