import { createContext, useEffect, ReactNode } from 'react'

import type { AuthContextType } from '@/types/auth_types'
import { useTokenRefresh } from '@/hooks/useTokenRefresh'
import { useAuthOperations } from '@/hooks/useAuthOperations'

export interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const { state, checkAuthentication, refreshToken, login, register, logout, cleanError } =
    useAuthOperations()

  // Debug auth state
  console.log('AuthContext State:', state)

  useTokenRefresh({
    isAuthenticated: state.isAuthenticated,
    refreshToken,
    logout,
  })

  useEffect(() => {
    console.log('AuthContext: Checking authentication on mount')
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
