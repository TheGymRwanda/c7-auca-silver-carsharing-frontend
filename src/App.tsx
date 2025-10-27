import React, { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { Routes, Route, Navigate, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'

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
import LoginNavbar from './components/LoginNavbar'
import LoginPage from './pages/LoginPage'
import AuthContextProvider from '@/context/authContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import { setupApiInterceptors } from '@/utils/apiInterceptors'
import useAuth from '@/hooks/useAuth'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function ConditionalNavbar(): ReactElement {
  const location = useLocation()

  if (location.pathname === AppRoutes.login) {
    return <LoginNavbar />
  }

  return <Navbar />
}

function AppContent(): ReactElement {
  const { logout } = useAuth()

  // Setup API interceptors with auth context
  React.useEffect(() => {
    const refreshTokenFn = async () => {
      // This will be handled by the auth context's token refresh
      throw new Error('Token refresh handled by context')
    }

    setupApiInterceptors(refreshTokenFn, logout)
  }, [logout])

  return (
    <div className="mx-auto min-h-screen bg-primary-dark">
      <ConditionalNavbar />
      <main>
        <Routes>
          <Route path={AppRoutes.login} element={<LoginPage />} />
          <Route
            path={AppRoutes.home}
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.cars}
            element={
              <ProtectedRoute>
                <CarsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.carDetails}
            element={
              <ProtectedRoute>
                <CarDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.profile}
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.bookCar}
            element={
              <ProtectedRoute>
                <BookCar />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.myBookings}
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.myCars}
            element={
              <ProtectedRoute>
                <MyCars />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.myCarsBookings}
            element={
              <ProtectedRoute>
                <MyCarsBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.addCar}
            element={
              <ProtectedRoute>
                <AddCar />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.logout}
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={AppRoutes.login} replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App(): ReactElement {
  return (
    <AuthContextProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthContextProvider>
  )
}

export default App
