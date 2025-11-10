import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { AppRoutes } from '@/types/app_routes'
import { LoginCredentials } from '@/types/auth_types'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 6

const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email)

const validateLoginForm = (credentials: LoginCredentials): string | null => {
  const { username, password } = credentials

  if (!username?.trim()) return 'Username or email is required'
  if (!password?.trim()) return 'Password is required'

  if (username.includes('@') && !isValidEmail(username)) {
    return 'Please enter a valid email address'
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
  }

  return null
}

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginCredentials>({ username: '', password: '' })
  const [validationError, setValidationError] = useState<string | null>(null)
  const { login, isAuthenticated, isLoading, error, cleanError } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(AppRoutes.home, { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) cleanError()
    if (validationError) setValidationError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErr = validateLoginForm(formData)
    if (validationErr) {
      setValidationError(validationErr)
      return
    }

    setValidationError(null)
    try {
      await login(formData)
    } catch (error) {
      // Error is handled by the auth context
    }
  }

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isLoading,
    error: validationError || error,
    isFormValid: Boolean(
      formData.username.trim() && formData.password.trim() && !validationError && !error,
    ),
  }
}
