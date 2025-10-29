import { ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes as AppRoutePaths } from '@/types/app_routes'

import HomePage from '@/components/homePage'
import CarsPage from '@/components/CarsPage'
import CarDetailsPage from '@/components/CarDetailsPage'
import AddCar from '@/pages/AddCar'
import BookCar from '@/pages/BookCar'
import Logout from '@/pages/Logout'
import MyBookings from '@/pages/MyBookings'
import MyCars from '@/pages/MyCars'
import MyCarsBookings from '@/pages/MyCarsBookings'
import Profile from '@/pages/Profile'
import LoginPage from '@/pages/LoginPage'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path={AppRoutePaths.login} element={<LoginPage />} />
      <Route
        path={AppRoutePaths.home}
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.cars}
        element={
          <ProtectedRoute>
            <CarsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.carDetails}
        element={
          <ProtectedRoute>
            <CarDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.profile}
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.bookCar}
        element={
          <ProtectedRoute>
            <BookCar />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.myBookings}
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.myCars}
        element={
          <ProtectedRoute>
            <MyCars />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.myCarsBookings}
        element={
          <ProtectedRoute>
            <MyCarsBookings />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.addCar}
        element={
          <ProtectedRoute>
            <AddCar />
          </ProtectedRoute>
        }
      />
      <Route
        path={AppRoutePaths.logout}
        element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={AppRoutePaths.login} replace />} />
    </Routes>
  )
}
