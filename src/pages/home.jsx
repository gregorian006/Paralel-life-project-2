import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import AIFeature from './pages/ai'; // halaman ai nanti

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ai" element={<AIFeature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
