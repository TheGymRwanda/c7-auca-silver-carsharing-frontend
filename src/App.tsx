import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { configure } from 'axios-hooks'
import { useLocation, BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from '@/types/app_routes'

import Navbar from '@/components/Navbar'
import LoginNavbar from '@/components/LoginNavbar'
import AuthContextProvider from '@/context/authContext'
import AppRoutesComponent from '@/components/AppRoutes'
import { setupApiInterceptors } from '@/utils/apiInterceptors'
import useAuth from '@/hooks/useAuth'

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

function AppContent() {
  const { logout } = useAuth()

  useEffect(() => {
    const refreshTokenFn = async () => {
      throw new Error('Token refresh handled by context')
    }
    setupApiInterceptors(refreshTokenFn, logout)
  }, [logout])

  return (
    <div className="mx-auto min-h-screen bg-primary-dark">
      <ConditionalNavbar />
      <main>
        <AppRoutesComponent />
      </main>
      <ToastContainer position="top-right" theme="colored" newestOnTop closeOnClick pauseOnHover />
    </div>
  )
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthContextProvider>
  )
}

export default App
