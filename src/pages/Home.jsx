import React, { useState } from 'react';
import '../styles/Home.css'; // Ensure this is the correct path to your CSS file
import videoBg from '../assets/bg.mp4';
import Neutrinium from '../assets/logo.png'; // Adjust the path if needed
import wmImage from '../assets/wm.png'; // Adjust the path if needed
import FundamentalPhysics from '../assets/fundamental-physics.svg'; // Adjust the path if needed
import PhysicalWave from '../assets/physical-wave.svg'; // Adjust the path if needed
import Electrodynamics from '../assets/electrodynamics.svg'; // Adjust the path if needed
import ClassicalMechanics from '../assets/classical-mechanics.svg'; // Adjust the path if needed
import ModernPhysics from '../assets/modern-physics.svg'; // Adjust the path if needed
import NuclearPhysics from '../assets/nuclear-physics.svg'; // Adjust the path if needed
import QuantumPhysics from '../assets/quantum-mechanics.svg'; // Adjust the path if needed

const Home = () => {
  const [activeTab, setActiveTab] = useState('Physics');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Physics':
        return (
          <div className="tab-content">
            <div className="sub-tab">
              <img src={FundamentalPhysics} alt="Fundamental Physics" />
              <span>Fundamental Physics</span>
            </div>
            <div className="sub-tab">
              <img src={ClassicalMechanics} alt="Classical Mechanics" />
              <span>Classical Mechanics</span>
            </div>
            <div className="sub-tab">
              <img src={PhysicalWave} alt="Physical Wave" />
              <span>Physical Wave</span>
            </div>
            <div className="sub-tab">
              <img src={NuclearPhysics} alt="Particle & Nuclear Physics" />
              <span>Particle & Nuclear Physics</span>
            </div>
            <div className="sub-tab">
              <img src={Electrodynamics} alt="Electrodynamics" />
              <span>Electrodynamics</span>
            </div>
            <div className="sub-tab">
              <img src={ModernPhysics} alt="Modern Physics" />
              <span>Modern Physics</span>
            </div>
            <div className="sub-tab">
              <img src={QuantumPhysics} alt="Quantum Mechanics" />
              <span>Quantum Mechanics</span>
            </div>
          </div>
        );
      case 'Chemistry':
        return (
          <div className="tab-content">
            <div className="sub-tab">
              <img src="/path/to/icon8.jpg" alt="Organic Chemistry" />
              <span>Organic Chemistry</span>
            </div>
          </div>
        );
      case 'Biology':
        return (
          <div className="tab-content">
            <div className="sub-tab">
              <img src="/path/to/icon9.jpg" alt="Organic Biology" />
              <span>Organic Biology</span>
            </div>
          </div>
        );
      case 'Math':
        return (
          <div className="tab-content">
            <div className="sub-tab">
              <img src="/path/to/icon10.jpg" alt="Calculus" />
              <span>Calculus</span>
            </div>
            <div className="sub-tab">
              <img src="/path/to/icon11.jpg" alt="Mathematical Physics" />
              <span>Mathematical Physics</span>
            </div>
            <div className="sub-tab">
              <img src="/path/to/icon12.jpg" alt="Linear Algebra" />
              <span>Linear Algebra</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="home-container">
      
      <section className="welcome-section">
        <div className="text-container">
          <h1>Welcome to <span className="gradient-text">Neutrinium</span></h1>
          <p>
            At Neutrinium, we are dedicated to empowering self-learners with the tools and resources to master STEM subjects. Our platform offers a comprehensive range of educational materials, interactive lessons, and engaging activities to help you excel in science, technology, engineering, and mathematics.
          </p>
          <p>
            Join our community and start your journey towards STEM mastery today!
          </p>
        </div>
        <div className="image-container">
          <img src={Neutrinium} alt="Neutrinium" />
        </div>
      </section>

      <section className="sponsor-section">
        <h2>Our Sponsors</h2>
        <div className="sponsor-container">
          <a href="https://sponsor1.com" target="_blank" rel="noopener noreferrer">
            <img src={wmImage} alt="Sponsor 1" />
          </a>
          <a href="https://sponsor2.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/sponsor2-logo.jpg" alt="Sponsor 2" />
          </a>
          <a href="https://sponsor3.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/sponsor3-logo.jpg" alt="Sponsor 3" />
          </a>
          {/* Add more sponsor images and links as needed */}
        </div>
      </section>

      <section className="perspective-section">
        <div className="gif-container">
          <img src="/path/to/your/gif.gif" alt="Learning Perspective" />
        </div>
        <div className="description-container">
          <h2>Learning by <span className="gradient-text">See</span>ing from <span className="gradient-text">Different</span> <span className="gradient-text">Perspectives</span></h2>
          <p>
            Discover how viewing problems and solutions from various angles can enhance your understanding and mastery of STEM subjects. Our interactive tools and visual aids are designed to provide you with a deeper insight into complex concepts, helping you to see the bigger picture and solve challenges more effectively.
          </p>
        </div>
      </section>

      <section className="course-section">
        <div className="tabs">
          <button className={activeTab === 'Physics' ? 'active' : ''} onClick={() => setActiveTab('Physics')}>Physics</button>
          <button className={activeTab === 'Chemistry' ? 'active' : ''} onClick={() => setActiveTab('Chemistry')}>Chemistry</button>
          <button className={activeTab === 'Biology' ? 'active' : ''} onClick={() => setActiveTab('Biology')}>Biology</button>
          <button className={activeTab === 'Math' ? 'active' : ''} onClick={() => setActiveTab('Math')}>Math</button>
        </div>
        {renderTabContent()}
      </section>

      <section className="get-started-section">
        <div className="get-started-text">
          <h2>Get Started with Your Learning Journey!</h2>
          <p>
            Dive into our comprehensive resources and start mastering your favorite STEM subjects. Whether you're just beginning or looking to advance your knowledge, we have everything you need to succeed.
          </p>
          <button className="study-now-button">Study Now</button>
        </div>
        <div className="get-started-image">
          <img src="/path/to/get-started-image.jpg" alt="Get Started" />
        </div>
      </section>
    </div>
  );
};

export default Home;
