import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ReviewProvider } from './components/ReviewContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewProvider>
      <App />
    </ReviewProvider>
  </StrictMode>,
)
