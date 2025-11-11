import { useState, useCallback } from 'react'
import axios from 'axios'
import type { AuthState, User, LoginCredentials } from '@/types/auth_types'

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
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/`, credentials)
  return response.data
}

const fetchUserDetails = async (token: string): Promise<Pick<User, 'id' | 'name'>> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const useAuthOperations = () => {
  const [state, setState] = useState<AuthState>(initialState)

  const checkAuthentication = useCallback(async () => {
    try {
      const storedUser = sessionStorage.getItem('user')
      if (!storedUser) {
        setState(unauthenticatedState)
        return
      }

      const user = JSON.parse(storedUser)
      if (!user?.token) {
        sessionStorage.removeItem('user')
        setState(unauthenticatedState)
        return
      }

      if (isTokenExpired(user.token)) {
        sessionStorage.removeItem('user')
        setState(unauthenticatedState)
      } else {
        setState(authenticatedState(user))
      }
    } catch (error) {
      sessionStorage.removeItem('user')
      setState(unauthenticatedState)
    }
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      const userData = await authRequest(credentials)

      if (!userData?.token) {
        throw new Error('Invalid response from server')
      }

      try {
        const userDetails = await fetchUserDetails(userData.token)
        const completeUserData = { ...userData, ...userDetails }
        sessionStorage.setItem('user', JSON.stringify(completeUserData))
        setState(authenticatedState(completeUserData))
      } catch (detailsError) {
        sessionStorage.setItem('user', JSON.stringify(userData))
        setState(authenticatedState(userData))
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed'
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }))
      throw error
    }
  }

  const register = login

  const logout = useCallback(() => {
    sessionStorage.removeItem('user')
    setState(unauthenticatedState)
  }, [])

  const cleanError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  return {
    state,
    checkAuthentication,
    login,
    register,
    logout,
    cleanError,
  }
}
