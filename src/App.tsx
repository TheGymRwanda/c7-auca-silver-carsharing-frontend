import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { Routes, Route, Navigate, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/types'

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

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function ConditionalNavbar() {
  const location = useLocation()

  return location.pathname === AppRoutes.login ? <LoginNavbar /> : <Navbar />
}

function App() {
  return (
    <Router>
      {/* <main className="min-h-screen bg-[#265e78]">
        <Routes>
          <Route path="/" element={<CarsPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:carId" element={<CarDetailsPage />} />
        </Routes>
      </main> */}
      <div className="mx-auto max-w-[430px] bg-primary-dark">
        <ConditionalNavbar />
        <main>
          <Routes>
            <Route path={AppRoutes.login} element={<LoginPage />} />
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
            <Route path={AppRoutes.notFound} element={<Navigate to={AppRoutes.login} replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
