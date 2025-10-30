import { CarDto, UserDto, CarTypeDto } from '@/utils/api'
import { apiUrl } from '@/utils/apiUrl'
import useAxios from 'axios-hooks'
import useAuth from './useAuth'
import { useMemo } from 'react'

export function useCarData() {
  const { user } = useAuth()
  const token = user?.token

  const headers = useMemo(
    () =>
      token
        ? {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
          }
        : {},
    [token],
  )

  const carsResult = useAxios<CarDto[]>({
    headers,
    url: `${apiUrl}/cars`,
  })

  const usersResult = useAxios<UserDto[]>({
    headers,
    url: `${apiUrl}/users`,
  })

  const carTypesResult = useAxios<CarTypeDto[]>({
    headers,
    url: `${apiUrl}/car-types`,
  })

  return {
    cars: carsResult,
    users: usersResult,
    carTypes: carTypesResult,
  }
}
