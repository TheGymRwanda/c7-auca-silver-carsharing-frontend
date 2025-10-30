import Button from '@/UI/Button'
import Input from '@/UI/Input'
import { LoginCredentials } from '@/types/auth_types'

interface LoginFormProps {
  formData: LoginCredentials
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  error: string | null
  isFormValid: boolean
}

export default function LoginForm({
  formData,
  onInputChange,
  onSubmit,
  isLoading,
  error,
  isFormValid,
}: LoginFormProps) {
  return (
    <div className="max-h-96 w-full translate-y-0 opacity-100 transition-all duration-500 ease-in-out">
      <h1 className="my-16 flex flex-col font-lora text-5xl text-white sm:text-6xl">
        <span className="font-lora font-bold ">MONI</span>
        <span className="font-lora text-5xl italic sm:text-6xl">Share</span>
      </h1>
      <h1 className="mb-8 flex flex-col font-lora text-3xl text-white sm:text-4xl">
        <span className="font-lora font-bold">Login</span>
      </h1>

      <form onSubmit={onSubmit} className="space-y-6" noValidate>
        <div className="relative">
          <label htmlFor="username" className="sr-only">
            Username or email address
          </label>
          <Input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={onInputChange}
            placeholder="Username / e-mail"
            required
            disabled={isLoading}
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
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onInputChange}
            placeholder="Password"
            required
            disabled={isLoading}
            aria-describedby="password-help"
            autoComplete="current-password"
          />
          <div id="password-help" className="sr-only">
            Enter your password
          </div>
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/50 bg-red-500/20 p-3" role="alert">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isLoading}
          disabled={!isFormValid}
          className="mt-8 w-full"
          aria-label="Submit login form"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  )
}
