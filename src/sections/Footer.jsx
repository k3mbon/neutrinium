// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src="/path/to/your/logo.png" alt="Neutrinium Logo" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/open-source">Open Source</a></li>
            <li><a href="/academic">Academic</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/paypal">Paypal</a></li>
            <li><a href="/bitcoin">Bitcoin</a></li>
            <li><a href="/bank-transfer">Bank Transfer</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help Center</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms And Conditions</a></li>
            <li><a href="/license-agreement">License Agreement</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Neutrinium {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
