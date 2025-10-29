import { NewCarDto, CarDto } from './api'
import { apiUrl } from './apiUrl'
import { getAuthToken } from './auth'

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export const submitCarData = async (carData: NewCarDto): Promise<ApiResponse<CarDto>> => {
  try {
    const response = await fetch(`${apiUrl}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(carData),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.message || `HTTP ${response.status}: ${response.statusText}`,
      }
    }

    const data = await response.json()
    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    }
  }
}
