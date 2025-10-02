import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Navbar from './components/Navbar'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-teal-600 max-w-[430px] mx-auto">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col gap-6 sm:gap-8 py-6 sm:py-10 px-4 sm:px-6">
        <div className="max-w-sm mx-auto w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Hello to CarSharing
          </h1>
          <p className="text-white text-sm sm:text-base mb-2">
            If you can read this, you have successfully started the base frontend repository!
          </p>
          <p className="text-white text-sm sm:text-base">
            Happy coding!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
