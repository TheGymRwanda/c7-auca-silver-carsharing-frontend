import { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'
import useAuth from '@/hooks/useAuth'
import LoadingSpinner from './LoadingSpinner'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement {
  const { isAuthenticated, isLoading, user } = useAuth()

  // Debug authentication state
  console.log('ProtectedRoute Debug:', { isAuthenticated, isLoading, user })

  if (isLoading) {
    console.log('ProtectedRoute: Still loading...')
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" className="text-white" />
      </div>
    )
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Not authenticated, redirecting to login')
    return <Navigate to={AppRoutes.login} replace />
  }

  console.log('ProtectedRoute: Authenticated, rendering children')

  return <>{children}</>
}
