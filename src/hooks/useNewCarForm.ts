import { useState } from 'react'
import { FuelType } from '../utils/api'
import { validateField, validateForm } from '../utils/validation'

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

  const handleInputChange = (field: keyof FormData, value: string | number | FuelType | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors(prev => ({ ...prev, [field]: error || '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formErrors = validateForm(formData)
    setErrors(formErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
  }

  return {
    formData,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
  }
}
