import { apiUrl } from '@/utils/apiUrl'
import { getAuthToken } from '@/utils/auth'

export const deleteCar = async (id: number): Promise<void> => {
  const response = await fetch(`${apiUrl}/cars/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  })

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('You can only delete your own cars.')
    }
    if (response.status === 404) {
      throw new Error('Car not found.')
    }
    throw new Error('Could not delete car.')
  }
}
