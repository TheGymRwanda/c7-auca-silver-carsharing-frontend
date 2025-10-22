import { CarDto, UserDto, CarTypeDto } from '@/utils/api'
import { apiUrl } from '@/utils/apiUrl'
import { getAuthToken } from '@/utils/auth'
import useAxios from 'axios-hooks'

export function useCarData() {
  const carsResult = useAxios<CarDto[]>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/cars`,
  })

  const usersResult = useAxios<UserDto[]>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/users`,
  })

  const carTypesResult = useAxios<CarTypeDto[]>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/car-types`,
  })

  return {
    cars: carsResult,
    users: usersResult,
    carTypes: carTypesResult,
  }
}
