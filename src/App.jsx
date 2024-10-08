import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Your Home component
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import OpenSource from './pages/OpenSource';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/open-source" element={<OpenSource />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
