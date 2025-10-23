import { useState } from 'react'
import { FuelType } from '../utils/api'

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

  const handleInputChange = (field: keyof FormData, value: string | number | FuelType | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return {
    formData,
    handleInputChange,
    handleSubmit,
  }
}
