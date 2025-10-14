import { CarDto } from '../utils/api'
import { apiUrl } from '../utils/apiUrl'
import { getAuthToken } from '../utils/auth'
import useAxios from 'axios-hooks'

export default function useCarById(carId: string | number) {
  return useAxios<CarDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/cars/${carId}`,
  })
}
