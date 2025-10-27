import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { AppRoutes } from '@/types/app_routes'
import { LoginCredentials } from '@/types/auth_types'

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginCredentials>({ username: '', password: '' })
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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(formData)
  }

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    isFormValid: formData.username && formData.password,
  }
}
