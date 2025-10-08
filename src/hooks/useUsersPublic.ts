import { UserDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import useAxios from 'axios-hooks'

export default function useUsersPublic() {
  return useAxios<UserDto[]>(`${apiUrl}/users`)
}
