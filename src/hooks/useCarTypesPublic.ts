import { CarTypeDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import useAxios from 'axios-hooks'

export default function useCarTypesPublic() {
  return useAxios<CarTypeDto[]>(`${apiUrl}/car-types`)
}