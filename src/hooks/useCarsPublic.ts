import { CarDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import useAxios from 'axios-hooks'

export default function useCarsPublic() {
  return useAxios<CarDto[]>(`${apiUrl}/cars`)
}