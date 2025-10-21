import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DrawerProvider from './context/DrawerProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </StrictMode>,
)
