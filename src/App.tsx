import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import ErroPage from './components/errorPage/ErrorPage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div className="mx-auto flex min-h-screen bg-[#265e78]">
      <ErroPage />
    </div>
  )
}

export default App
