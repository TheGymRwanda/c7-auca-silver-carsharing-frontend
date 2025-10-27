interface JWTPayload {
  exp?: number
  [key: string]: unknown
}

export const parseJWT = (token: string): JWTPayload | null => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch {
    return null
  }
}

export const isTokenExpired = (token: string): boolean => {
  const payload = parseJWT(token)
  if (!payload || !payload.exp) return true

  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}

export const getTokenExpiry = (token: string): number => {
  const payload = parseJWT(token)
  return payload?.exp ? payload.exp * 1000 : 0
}

export const shouldRefreshToken = (token: string): boolean => {
  const payload = parseJWT(token)
  if (!payload || !payload.exp) return false

  const currentTime = Math.floor(Date.now() / 1000)
  const timeUntilExpiry = payload.exp - currentTime

  // Refresh if token expires in less than 5 minutes (300 seconds)
  return timeUntilExpiry < 300 && timeUntilExpiry > 0
}
