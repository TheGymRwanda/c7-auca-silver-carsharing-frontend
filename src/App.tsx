import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import CarsPage from './components/CarsPage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="min-h-screen bg-[#265e78]">
      <CarsPage />
    </main>
  )
}

export default App
