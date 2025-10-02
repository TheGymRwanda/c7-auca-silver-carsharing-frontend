import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Button from './components/Button'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-1/2 flex-col gap-8 py-10">
      <h1 className="text-4xl font-bold">Hello to CarSharing</h1>
      <p>If you can read this, you have successfully started the base frontend repository!</p>
      <p>Happy coding!</p>
      <Button variant="primary" loading={true} size="md">
        Button
      </Button>
      <Button variant="secondary" size="md">
        Button
      </Button>
      <Button variant="ghost" size="md">
        Button
      </Button>
      <Button variant="outlineWhite" size="md">
        Button
      </Button>
      <Button variant="outlineTeal" size="md">
        Button
      </Button>
    </main>
  )
}

export default App
