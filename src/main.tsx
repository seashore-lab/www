import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@fontsource-variable/dm-sans/index.css'
import '@fontsource/crimson-pro/index.css'
import '@fontsource/jetbrains-mono/index.css'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create the router
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
