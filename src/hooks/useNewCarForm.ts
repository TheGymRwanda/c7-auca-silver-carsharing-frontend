import { useState } from 'react'
import { FuelType } from '@/utils/api'
import { validateField, validateForm } from '@/utils/validation'
import { transformFormDataToApi, validateApiData } from '@/utils/sanitization'
import { submitCarData } from '@/utils/apiSubmission'
import useAuth from './useAuth'

export interface FormData {
  name: string
  carTypeId: number | null
  licensePlate: string
  horsepower: string
  fuelType: FuelType | null
  info: string
}

export const fuelTypeOptions = [
  { value: FuelType.PETROL, label: 'Petrol' },
  { value: FuelType.DIESEL, label: 'Diesel' },
  { value: FuelType.ELECTRIC, label: 'Electric' },
]

export function useNewCarForm() {
  const { user } = useAuth()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    carTypeId: null,
    licensePlate: '',
    horsepower: '',
    fuelType: null,
    info: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | number | FuelType | null) => {
    let sanitizedValue = value

    if (typeof value === 'string' && (field === 'name' || field === 'info')) {
      sanitizedValue = value.replace(/[<>]/g, '')
    }

    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors(prev => ({ ...prev, [field]: error || '' }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      carTypeId: null,
      licensePlate: '',
      horsepower: '',
      fuelType: null,
      info: '',
    })
    setErrors({})
    setTouched({})
    setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formErrors = validateForm(formData)
    setErrors(formErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    if (Object.keys(formErrors).length === 0 && user) {
      setIsSubmitting(true)

      try {
        const apiData = transformFormDataToApi(formData, user.id)

        const apiErrors = validateApiData(apiData)
        if (apiErrors.length > 0) {
          setErrors({ submit: apiErrors.join(', ') })
          return
        }

        const result = await submitCarData(apiData)

        if (result.success) {
          setIsSuccess(true)
          setErrors({})
          setTimeout(() => {
            resetForm()
          }, 3000)
        } else {
          setErrors({ submit: result.error || 'Failed to create car' })
        }
      } catch (error) {
        setErrors({ submit: 'Network error occurred' })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    handleInputChange,
    handleBlur,
    handleSubmit,
    resetForm,
  }
}
