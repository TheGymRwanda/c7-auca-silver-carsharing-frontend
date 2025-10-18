import { createContext, useState, useEffect, ReactNode } from 'react'

import type { AuthContextType, User, LoginCredentials, AuthState } from '@/types/auth_types'
import { apiUrl } from '@/utils/apiUrl'

export interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

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

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>(initialState)

  const checkAuthentication = async () => {
    try {
      const storedUser = sessionStorage.getItem('user')
      const user = storedUser ? JSON.parse(storedUser) : null
      setState(user ? authenticatedState(user) : unauthenticatedState)
    } catch {
      setState({ ...unauthenticatedState, error: 'Failed to restore session' })
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

  useEffect(() => {
    checkAuthentication()
  }, [])

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    register,
    cleanError,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
