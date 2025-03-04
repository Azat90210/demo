// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configure } from 'mobx'
import { StoreProvider } from './store/StoreProvider'
import './index.css'
import App from './App'
import { HeroUIProvider } from '@heroui/react'

configure({
  enforceActions: 'never',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <HeroUIProvider>
        <main className="bg-background ligth">
          <App />
        </main>
      </HeroUIProvider>
    </StoreProvider>
  </StrictMode>
)
