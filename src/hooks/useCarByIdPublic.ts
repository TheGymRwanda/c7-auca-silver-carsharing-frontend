import { CarDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import useAxios from 'axios-hooks'

export default function useCarByIdPublic(carId: string | number) {
  return useAxios<CarDto>(`${apiUrl}/cars/${carId}`)
}
