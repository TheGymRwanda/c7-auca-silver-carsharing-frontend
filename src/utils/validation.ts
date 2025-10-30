import { FuelType } from './api'

export interface ValidationError {
  field: string
  message: string
}

export interface FormValidation {
  name: string
  carTypeId: number | null
  licensePlate: string
  horsepower: string
  fuelType: FuelType | null
  info: string
}

export const validateField = (field: keyof FormValidation, value: unknown): string | null => {
  switch (field) {
    case 'name':
      if (!value || (typeof value === 'string' && value.trim().length === 0))
        return 'Car name is required'
      if (typeof value === 'string' && value.trim().length < 2)
        return 'Car name must be at least 2 characters'
      if (typeof value === 'string' && value.trim().length > 50)
        return 'Car name must be less than 50 characters'
      return null

    case 'carTypeId':
      if (!value) return 'Car type is required'
      return null

    case 'licensePlate':
      if (value && typeof value === 'string' && value.length > 15)
        return 'License plate must be less than 15 characters'
      return null

    case 'horsepower':
      if (value && (isNaN(Number(value)) || Number(value) < 1 || Number(value) > 2000)) {
        return 'Horsepower must be between 1 and 2000'
      }
      return null

    case 'fuelType':
      if (!value) return 'Fuel type is required'
      return null

    case 'info':
      if (value && typeof value === 'string' && value.length > 200)
        return 'Additional info must be less than 200 characters'
      return null

    default:
      return null
  }
}

export const validateForm = (formData: FormValidation): Record<string, string> => {
  const errors: Record<string, string> = {}

  Object.keys(formData).forEach(key => {
    const field = key as keyof FormValidation
    const error = validateField(field, formData[field])
    if (error) {
      errors[field] = error
    }
  })

  return errors
}
