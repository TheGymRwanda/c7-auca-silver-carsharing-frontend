export function getAuthToken(): string | null {
  try {
    const user = sessionStorage.getItem('user')
    if (!user) return null
    const userData = JSON.parse(user)
    return userData.token || null
  } catch {
    return null
  }
}
