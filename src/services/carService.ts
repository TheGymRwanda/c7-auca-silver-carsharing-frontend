import axios from 'axios'
import type { CarDto, NewCarDto, ChangeCarStateDto } from '@/utils/api'
import { apiUrl } from '@/utils/apiUrl'
import { getAuthToken } from '@/utils/auth'

const createHeaders = () => ({
  Authorization: `Bearer ${getAuthToken()}`,
  'Content-Type': 'application/json',
})

export const carService = {
  getAll: async (): Promise<CarDto[]> => {
    const response = await axios.get(`${apiUrl}/cars`, {
      headers: createHeaders(),
    })
    return response.data
  },

  getById: async (id: number): Promise<CarDto> => {
    const response = await axios.get(`${apiUrl}/cars/${id}`, {
      headers: createHeaders(),
    })
    return response.data
  },

  create: async (carData: NewCarDto): Promise<CarDto> => {
    const response = await axios.post(`${apiUrl}/cars`, carData, {
      headers: createHeaders(),
    })
    return response.data
  },

  update: async (id: number, carData: Partial<CarDto> | ChangeCarStateDto): Promise<CarDto> => {
    const response = await axios.patch(`${apiUrl}/cars/${id}`, carData, {
      headers: createHeaders(),
    })
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${apiUrl}/cars/${id}`, {
      headers: createHeaders(),
    })
  },
}
