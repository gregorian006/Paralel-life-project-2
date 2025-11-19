// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/home';

function App() {
  return (
    <Router>
      {/* Navbar ditaruh di sini agar selalu muncul di atas halaman apapun */}
      <Navbar />
      
      <div className="pt-20"> {/* Padding-top agar konten tidak tertutup Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Nanti tambah route lain di sini, misal: */}
          {/* <Route path="/chat" element={<ChatPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;