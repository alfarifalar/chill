import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/style.css'
import { HeroUIProvider } from '@heroui/react'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <StrictMode>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </StrictMode>
  </BrowserRouter>
)
