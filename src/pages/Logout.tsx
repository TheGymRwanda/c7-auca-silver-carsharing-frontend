import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(AppRoutes.cars, { replace: true })
  }, [navigate])

  return (
    <div className="mx-auto w-full max-w-sm text-center text-white">
      <p className="text-sm sm:text-base">Logging out...</p>
    </div>
  )
}
