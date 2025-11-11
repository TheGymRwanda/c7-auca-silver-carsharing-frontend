import { NewCarDto, CarDto } from './api'
import { apiUrl } from './apiUrl'
import { getAuthToken } from './auth'

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  messages?: string[]
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

      let error = `HTTP ${response.status}: ${response.statusText}`
      let messages: string[] | undefined

      if (typeof errorData?.message === 'string') {
        error = errorData.message
      } else if (Array.isArray(errorData?.message)) {
        messages = errorData.message.filter((m: unknown) => typeof m === 'string')
        if (messages && messages.length > 0) {
          error = messages.join(', ')
        }
      } else if (Array.isArray(errorData?.errors)) {
        const collected: string[] = []
        for (const err of errorData.errors) {
          if (err?.constraints && typeof err.constraints === 'object') {
            collected.push(...Object.values(err.constraints as Record<string, string>))
          }
        }
        if (collected.length > 0) {
          messages = collected
          error = collected.join(', ')
        }
      }

      return {
        success: false,
        error,
        messages,
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
