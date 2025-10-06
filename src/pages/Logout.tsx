import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../types'

export default function Logout(): ReactElement {
  const navigate = useNavigate()

  useEffect(() => {
    // Placeholder for clearing auth
    navigate(AppRoutes.cars, { replace: true })
  }, [navigate])

  return (
    <div className="max-w-sm mx-auto w-full text-center text-white">
      <p className="text-sm sm:text-base">Logging out...</p>
    </div>
  )
}


