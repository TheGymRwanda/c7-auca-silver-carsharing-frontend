import { useState } from 'react'
import { ReactElement } from 'react'
import { useLoginForm } from '@/hooks/useLoginForm'
import LoginForm from '@/components/LoginForm'
import WelcomeScreen from '@/components/WelcomeScreen'

export default function LoginPage(): ReactElement {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const { formData, handleInputChange, handleSubmit, isLoading, error, isFormValid } =
    useLoginForm()

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="flex w-full items-center justify-center sm:px-6">
        <div className="flex w-full max-w-xs flex-col items-center rounded-lg text-center sm:max-w-sm">
          {!showLoginForm ? (
            <WelcomeScreen onShowLogin={() => setShowLoginForm(true)} />
          ) : (
            <LoginForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              error={error}
              isFormValid={isFormValid}
            />
          )}
        </div>
      </div>
    </div>
  )
}
