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

export const useAuthOperations = () => {
  const [state, setState] = useState<AuthState>(initialState)

  const checkAuthentication = async () => {
    try {
      const storedUser = sessionStorage.getItem('user')
      console.log('Stored user from sessionStorage:', storedUser)
      const user = storedUser ? JSON.parse(storedUser) : null
      console.log('Parsed user:', user)

      if (user && user.token) {
        const tokenExpired = isTokenExpired(user.token)
        console.log('Token expired?', tokenExpired)
        if (tokenExpired) {
          console.log('Token expired, clearing session')
          sessionStorage.removeItem('user')
          setState(unauthenticatedState)
        } else {
          console.log('Token valid, setting authenticated state')
          setState(authenticatedState(user))
        }
      } else {
        console.log('No user or token found, setting unauthenticated')
        setState(unauthenticatedState)
      }
    } catch {
      console.log('Error checking authentication, clearing session')
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
      sessionStorage.setItem('user', JSON.stringify(userData))
      setState(authenticatedState(userData))
    } catch (error_) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error_ instanceof Error ? error_.message : 'Login failed',
      }))
    }
  }

  const register = async (credentials: LoginCredentials) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      const userData = await authRequest(credentials)
      sessionStorage.setItem('user', JSON.stringify(userData))
      setState(authenticatedState(userData))
    } catch (error_) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error_ instanceof Error ? error_.message : 'Registration failed',
      }))
    }
  }

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
