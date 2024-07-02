import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.tsx'
import Start from './pages/start.tsx'
import Personal from './pages/personal.tsx';
import '@radix-ui/themes/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Route for index page */}
        <Route path="/personal" element={<Personal />} /> { /* New route for personal.tsx */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);