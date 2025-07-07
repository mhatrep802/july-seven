import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HowItWorks from './pages/HowItWorks';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);