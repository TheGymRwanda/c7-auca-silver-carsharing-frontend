import { useEffect } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes } from './types'

import HomePage from './components/homePage'
import Navbar from './components/Navbar'
import CarsPage from './components/CarsPage'
import CarDetailsPage from './components/CarDetailsPage'
import Navbar from './components/Navbar'
import { AppRoutes } from './types'
import HomePage from './components/homePage'
import AddCar from './pages/AddCar'
import BookCar from './pages/BookCar'
import Cars from './pages/Cars'
import Logout from './pages/Logout'
import MyBookings from './pages/MyBookings'
import MyCars from './pages/MyCars'
import MyCarsBookings from './pages/MyCarsBookings'
import Profile from './pages/Profile'

import Profile from './pages/Profile'
import BookCar from './pages/BookCar'
import MyBookings from './pages/MyBookings'
import MyCars from './pages/MyCars'
import MyCarsBookings from './pages/MyCarsBookings'
import AddCar from './pages/AddCar'
import Logout from './pages/Logout'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App() {
  useEffect(() => {
    const devToken = import.meta.env.VITE_DEV_TOKEN
    if (devToken && !localStorage.getItem('token')) {
      localStorage.setItem('token', devToken)
    }
  }, [])

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
        <Navbar />
        <main>
          <Routes>
            <Route path={AppRoutes.home} element={<HomePage />} />
            <Route path={AppRoutes.cars} element={<Cars />} />
            <Route path={AppRoutes.profile} element={<Profile />} />
            <Route path={AppRoutes.bookCar} element={<BookCar />} />
            <Route path={AppRoutes.myBookings} element={<MyBookings />} />
            <Route path={AppRoutes.myCars} element={<MyCars />} />
            <Route path={AppRoutes.myCarsBookings} element={<MyCarsBookings />} />
            <Route path={AppRoutes.addCar} element={<AddCar />} />
            <Route path={AppRoutes.logout} element={<Logout />} />
            <Route path="*" element={<Navigate to={AppRoutes.home} replace />} />
          </Routes>
        </main>
      </div>
    </Router>
    <div
      className="relative mx-auto h-screen max-w-[430px] overflow-x-hidden"
      style={{ backgroundColor: '#265e78' }}
    >
      <Navbar />
      <main>
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
  )
}

export default App
