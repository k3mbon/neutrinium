// src/pages/Home.js
import React from 'react';
import WelcomeSection from '../sections/WelcomeSection';
import CourseSection from '../sections/CourseSection';


const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <CourseSection/>
      {/* Other components and content */}
    </div>
  );
};

export default Home;
