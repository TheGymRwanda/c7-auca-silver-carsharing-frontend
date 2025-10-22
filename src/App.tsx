import { useEffect } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes } from './types'

import HomePage from './components/homePage'
import Navbar from './components/Navbar'
import CarsPage from './components/CarsPage'
import CarDetailsPage from './components/CarDetailsPage'
import AddCar from './pages/AddCar'
import BookCar from './pages/BookCar'
import Logout from './pages/Logout'
import MyBookings from './pages/MyBookings'
import MyCars from './pages/MyCars'
import MyCarsBookings from './pages/MyCarsBookings'
import Profile from './pages/Profile'

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
      <div
        className="relative mx-auto h-screen max-w-[430px] md:max-w-none overflow-x-hidden"
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
    </Router>
  )
}

export default App
