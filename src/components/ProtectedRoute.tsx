import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'
import useAuth from '@/hooks/useAuth'
import LoadingSpinner from './LoadingSpinner'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" className="text-white" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.login} replace />
  }

  return children
}
