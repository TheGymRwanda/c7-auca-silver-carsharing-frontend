import axios from 'axios'
import type { CarTypeDto } from '@/utils/api'

import { getAuthToken } from '@/utils/auth'

const createHeaders = () => ({
  Authorization: `Bearer ${getAuthToken()}`,
  'Content-Type': 'application/json',
})

export const carTypeService = {
  getAll: async (): Promise<CarTypeDto[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/car-types`, {
      headers: createHeaders(),
    })
    return response.data
  },

  getById: async (id: number): Promise<CarTypeDto> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/car-types/${id}`, {
      headers: createHeaders(),
    })
    return response.data
  },
}
