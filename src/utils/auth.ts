import { isTokenExpired } from '@/utils/tokenUtils'

export function getAuthToken(): string | null {
  try {
    const user = sessionStorage.getItem('user')
    if (!user) return null
    const userData = JSON.parse(user)
    const token = userData.token || null

    if (token && isTokenExpired(token)) {
      return null
    }

    return token
  } catch {
    return null
  }
}

export function getStoredUser() {
  try {
    const user = sessionStorage.getItem('user')
    return user ? JSON.parse(user) : null
  } catch {
    return null
  }
}
