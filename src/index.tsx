import './index.css'

import App from '@/App'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import AuthContextProvider from '@/context/authContext'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
)
