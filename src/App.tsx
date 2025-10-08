import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarsPage from './components/CarsPage'
import CarDetailsPage from './components/CarDetailsPage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <Router>
      <main className="min-h-screen bg-[#265e78]">
        <Routes>
          <Route path="/" element={<CarsPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:carId" element={<CarDetailsPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
