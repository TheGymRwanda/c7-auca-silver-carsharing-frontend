import { useContext } from 'react'
import { AuthContextType } from '@/types/auth_types'
import { AuthContext } from '@/context/authContext'

export default function useAuth(): AuthContextType {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
