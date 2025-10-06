import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppRoutes } from './types'
import Cars from './pages/Cars'
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

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-primary-dark max-w-[430px] mx-auto">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col gap-6 sm:gap-8 py-6 sm:py-10 px-4 sm:px-6">
        <Routes>
          <Route path={AppRoutes.cars} element={<Cars />} />
          <Route path={AppRoutes.profile} element={<Profile />} />
          <Route path={AppRoutes.bookCar} element={<BookCar />} />
          <Route path={AppRoutes.myBookings} element={<MyBookings />} />
          <Route path={AppRoutes.myCars} element={<MyCars />} />
          <Route path={AppRoutes.myCarsBookings} element={<MyCarsBookings />} />
          <Route path={AppRoutes.addCar} element={<AddCar />} />
          <Route path={AppRoutes.logout} element={<Logout />} />
          <Route path="*" element={<Navigate to={AppRoutes.cars} replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
