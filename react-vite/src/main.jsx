import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tp from './Tp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tp />
  </StrictMode>,
)
