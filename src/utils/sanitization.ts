import { FuelType, NewCarDto } from './api'
import { FormData } from '../hooks/useNewCarForm'

export const sanitizeString = (input: string): string =>
  input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .replace(/\s+/g, ' ') // Normalize whitespace

export const sanitizeNumber = (input: string): number | null => {
  const trimmed = input.trim()
  if (!trimmed) return null

  const parsed = parseInt(trimmed, 10)
  return isNaN(parsed) ? null : parsed
}

export const sanitizeLicensePlate = (input: string): string | null => {
  const cleaned = input
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9\s-]/g, '') // Only allow letters, numbers, spaces, and hyphens
    .replace(/\s+/g, ' ')

  return cleaned || null
}

export const transformFormDataToApi = (formData: FormData, userId: number): NewCarDto => {
  if (!formData.carTypeId) {
    throw new Error('Car type is required')
  }
  if (!formData.fuelType) {
    throw new Error('Fuel type is required')
  }

  return {
    name: sanitizeString(formData.name),
    userId,
    carTypeId: formData.carTypeId,
    horsepower: sanitizeNumber(formData.horsepower),
    info: formData.info ? sanitizeString(formData.info) : null,
    plate: formData.licensePlate ? sanitizeLicensePlate(formData.licensePlate) : null,
    fuelType: formData.fuelType,
  }
}

export const validateApiData = (data: NewCarDto): string[] => {
  const errors: string[] = []

  if (!data.name || data.name.length < 2) {
    errors.push('Invalid car name')
  }

  if (!data.carTypeId || data.carTypeId <= 0) {
    errors.push('Invalid car type')
  }

  if (!data.fuelType || !Object.values(FuelType).includes(data.fuelType)) {
    errors.push('Invalid fuel type')
  }

  if (data.horsepower !== null && (data.horsepower <= 0 || data.horsepower > 2000)) {
    errors.push('Invalid horsepower value')
  }

  return errors
}
