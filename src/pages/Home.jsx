// src/pages/Home.js
import React from 'react';
import WelcomeSection from '../sections/WelcomeSection';
import CourseSection from '../sections/CourseSection';
import PartnersSection from '../sections/PartnersSection';
import GetStartedSection from '../sections/GetStartedSection';
import Footer from '../sections/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section id="welcome" className="section">
        <WelcomeSection />
      </section>
      <section id="courses" className="section">
        <CourseSection />
      </section>
      <section id="partners" className="section">
        <PartnersSection />
      </section>
      <section id="get-started" className="section">
        <GetStartedSection />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
