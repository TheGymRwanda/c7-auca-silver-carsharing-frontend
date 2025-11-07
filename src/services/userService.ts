import axios from 'axios'
import type { UserDto } from '@/utils/api'
import { apiUrl } from '@/utils/apiUrl'
import { getAuthToken } from '@/utils/auth'

const createHeaders = () => ({
  Authorization: `Bearer ${getAuthToken()}`,
  'Content-Type': 'application/json',
})

export const userService = {
  getAll: async (): Promise<UserDto[]> => {
    const response = await axios.get(`${apiUrl}/users`, {
      headers: createHeaders(),
    })
    return response.data
  },

  getById: async (id: number): Promise<UserDto> => {
    const response = await axios.get(`${apiUrl}/users/${id}`, {
      headers: createHeaders(),
    })
    return response.data
  },
}
