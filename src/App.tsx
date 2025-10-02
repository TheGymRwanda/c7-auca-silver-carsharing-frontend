import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { HomePage } from './components/homePage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-[#265e78]">
      <HomePage />
    </div>
  )
}

export default App
