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
    <div className="bg-[#265e78] min-h-screen">
      <HomePage />
    </div>
  )
}

export default App
