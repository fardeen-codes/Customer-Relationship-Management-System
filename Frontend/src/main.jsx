import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './authContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</AuthContextProvider>
)
