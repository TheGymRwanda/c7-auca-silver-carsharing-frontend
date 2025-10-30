import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'
import useAuth from '@/hooks/useAuth'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Logout() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    logout()
    navigate(AppRoutes.login, { replace: true })
  }, [logout, navigate])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center text-white">
        <LoadingSpinner size="lg" className="mx-auto mb-4 text-white" />
        <p className="text-sm sm:text-base">Logging out...</p>
      </div>
    </div>
  )
}
