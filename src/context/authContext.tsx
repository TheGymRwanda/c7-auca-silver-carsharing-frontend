import { createContext, useEffect, ReactNode } from 'react'

import type { AuthContextType } from '@/types/auth_types'

import { useAuthOperations } from '@/hooks/useAuthOperations'

export interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const { state, checkAuthentication, login, register, logout, cleanError } = useAuthOperations()

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
