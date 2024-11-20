import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Your Home component
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import OpenSource from './pages/OpenSource';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import Pricing from './pages/Pricing';
import LicenseAgreement from './pages/LicenseAgreement';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/license-agreement" element={<LicenseAgreement />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
