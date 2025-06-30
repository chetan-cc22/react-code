import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tp from './Tp.jsx'


function MApp() {
  return (
    <div style={{ color: 'white', backgroundColor: 'black', height: '100vh' }}>
      <h1>Namaskar Bhausaheb</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MApp />
  </StrictMode>,
)
