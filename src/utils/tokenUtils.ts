interface JWTPayload {
  exp?: number
  [key: string]: unknown
}

export const parseJWT = (token: string): JWTPayload | null => {
  try {
    if (!token || typeof token !== 'string') return null

    const parts = token.split('.')
    if (parts.length !== 3) return null

    const base64Url = parts[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.warn('Failed to parse JWT token:', error)
    return null
  }
}

export const isTokenExpired = (token: string): boolean => {
  if (!token) return true

  const payload = parseJWT(token)
  if (!payload?.exp || typeof payload.exp !== 'number') return true

  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}
