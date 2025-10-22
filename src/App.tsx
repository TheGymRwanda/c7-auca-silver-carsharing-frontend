import { useEffect } from 'react'
import { configure } from 'axios-hooks'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'
import useAuth from '@/hooks/useAuth'

import HomePage from '@/components/homePage'
import Navbar from '@/components/Navbar'
import CarsPage from '@/components/CarsPage'
import CarDetailsPage from '@/components/CarDetailsPage'
import AddCar from '@/pages/AddCar'
import BookCar from '@/pages/BookCar'
import Logout from '@/pages/Logout'
import MyBookings from '@/pages/MyBookings'
import MyCars from '@/pages/MyCars'
import MyCarsBookings from '@/pages/MyCarsBookings'
import Profile from '@/pages/Profile'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App() {
  const { isAuthenticated, isLoading, error, login } = useAuth()

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !error) {
      login({ username: 'Silver', password: 'beatrice-PW' })
    }
  }, [isAuthenticated, isLoading, error, login])

  if (isLoading) {
    return (
      <div
        className="flex h-screen items-center justify-center"
        style={{ backgroundColor: '#265e78' }}
      >
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: 'primary-dark' }}>
      <div className="relative h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="px-4 sm:px-6 md:px-8 lg:px-12">
          <Routes>
            <Route path={AppRoutes.home} element={<HomePage />} />
            <Route path={AppRoutes.cars} element={<CarsPage />} />
            <Route path={AppRoutes.carDetails} element={<CarDetailsPage />} />
            <Route path={AppRoutes.profile} element={<Profile />} />
            <Route path={AppRoutes.bookCar} element={<BookCar />} />
            <Route path={AppRoutes.myBookings} element={<MyBookings />} />
            <Route path={AppRoutes.myCars} element={<MyCars />} />
            <Route path={AppRoutes.myCarsBookings} element={<MyCarsBookings />} />
            <Route path={AppRoutes.addCar} element={<AddCar />} />
            <Route path={AppRoutes.logout} element={<Logout />} />
            <Route path={AppRoutes.notFound} element={<Navigate to={AppRoutes.home} replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
