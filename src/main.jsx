// File entry point aplikasi React
// Mengimpor StrictMode untuk membantu mendeteksi potensi masalah pada aplikasi
import { StrictMode } from 'react'
// Mengimpor createRoot dari react-dom/client untuk rendering aplikasi
import { createRoot } from 'react-dom/client'
// Mengimpor file CSS utama aplikasi
import './styles/main.css'
// Mengimpor komponen utama App
import App from './App.jsx'

// Melakukan render komponen App ke elemen dengan id 'root' menggunakan StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
