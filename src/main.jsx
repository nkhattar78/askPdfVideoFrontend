// Global server URL for API calls
// export const ServerURL = "http://localhost:8000";
export const ServerURL = "https://askpdfvideo-dvfjcqd0hzbvd4f4.canadacentral-01.azurewebsites.net";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
