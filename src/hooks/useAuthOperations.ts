import { useState } from 'react'
import type { AuthState, User, LoginCredentials } from '@/types/auth_types'
import { apiUrl } from '@/utils/apiUrl'
import { isTokenExpired } from '@/utils/tokenUtils'

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
}

const authenticatedState = (user: User): AuthState => ({
  user,
  isAuthenticated: true,
  isLoading: false,
  error: null,
})

const unauthenticatedState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

const authRequest = async (credentials: LoginCredentials): Promise<User> => {
  const response = await fetch(`${apiUrl}/auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    throw new Error(`Request failed!`)
  }

  return response.json()
}

const refreshTokenRequest = async (token: string): Promise<User> => {
  const response = await fetch(`${apiUrl}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Token refresh failed')
  }

  return response.json()
}

const fetchUserDetails = async (token: string): Promise<Pick<User, 'id' | 'name'>> => {
  const response = await fetch(`${apiUrl}/auth/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user details')
  }

  return response.json()
}

export const useAuthOperations = () => {
  const [state, setState] = useState<AuthState>(initialState)

  const checkAuthentication = async () => {
    try {
      const storedUser = sessionStorage.getItem('user')
      const user = storedUser ? JSON.parse(storedUser) : null

      if (user && user.token) {
        const tokenExpired = isTokenExpired(user.token)

        if (tokenExpired) {
          sessionStorage.removeItem('user')
          setState(unauthenticatedState)
        } else {
          setState(authenticatedState(user))
        }
      } else {
        setState(unauthenticatedState)
      }
    } catch {
      sessionStorage.removeItem('user')
      setState({ ...unauthenticatedState, error: 'Failed to restore session' })
    }
  }

  const refreshToken = async () => {
    try {
      const storedUser = sessionStorage.getItem('user')
      const user = storedUser ? JSON.parse(storedUser) : null

      if (!user || !user.token) {
        throw new Error('No token to refresh')
      }

      const refreshedUser = await refreshTokenRequest(user.token)
      sessionStorage.setItem('user', JSON.stringify(refreshedUser))
      setState(authenticatedState(refreshedUser))
    } catch (error) {
      sessionStorage.removeItem('user')
      setState({ ...unauthenticatedState, error: 'Session expired' })
      throw error
    }
  }

  const login = async (credentials: LoginCredentials) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      const userData = await authRequest(credentials)

      try {
        const userDetails = await fetchUserDetails(userData.token)
        const completeUserData = { ...userData, ...userDetails }
        sessionStorage.setItem('user', JSON.stringify(completeUserData))
        setState(authenticatedState(completeUserData))
      } catch {
        sessionStorage.setItem('user', JSON.stringify(userData))
        setState(authenticatedState(userData))
      }
    } catch (error_) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error_ instanceof Error ? error_.message : 'Login failed',
      }))
    }
  }

  const register = login

  const logout = () => {
    sessionStorage.removeItem('user')
    setState(unauthenticatedState)
  }

  const cleanError = () => {
    setState(prev => ({ ...prev, error: null }))
  }

  return {
    state,
    checkAuthentication,
    refreshToken,
    login,
    register,
    logout,
    cleanError,
  }
}
