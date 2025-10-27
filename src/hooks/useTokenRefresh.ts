import { useEffect, useRef } from 'react'
import { shouldRefreshToken, getTokenExpiry } from '../utils/tokenUtils'
import { getAuthToken } from '../utils/auth'

interface UseTokenRefreshProps {
  isAuthenticated: boolean
  refreshToken: () => Promise<void>
  logout: () => void
}

export const useTokenRefresh = ({
  isAuthenticated,
  refreshToken,
  logout,
}: UseTokenRefreshProps) => {
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null)

  const clearRefreshTimer = () => {
    if (refreshTimerRef.current) {
      clearTimeout(refreshTimerRef.current)
      refreshTimerRef.current = null
    }
  }

  const scheduleTokenRefresh = () => {
    clearRefreshTimer()

    const token = getAuthToken()
    if (!token) return

    if (shouldRefreshToken(token)) {
      // Refresh immediately if token needs refresh
      refreshToken().catch(() => logout())
      return
    }

    const expiry = getTokenExpiry(token)
    const now = Date.now()
    const timeUntilRefresh = expiry - now - 5 * 60 * 1000 // 5 minutes before expiry

    if (timeUntilRefresh > 0) {
      refreshTimerRef.current = setTimeout(() => {
        refreshToken().catch(() => logout())
      }, timeUntilRefresh)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      scheduleTokenRefresh()
    } else {
      clearRefreshTimer()
    }

    return () => clearRefreshTimer()
  }, [isAuthenticated])

  return { scheduleTokenRefresh, clearRefreshTimer }
}
