import React, { useEffect } from 'react';
import '../styles/AboutUs.css'; // Import the CSS file


const AboutUs = () => {

  useEffect(()=>{
    document.title='About Us | Neutrinium'
  })

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-description">
        Our community is composed of professional educators from various branches of science such as biology, physics, chemistry, math, and engineering. We share a common goal: to make STEM learning fun, interactive, and accessible for everyone. Regardless of financial barriers, anyone with time and consistency can benefit from our work. We are not driven by profit, fame, or recognition; our sole intention is to uplift and enhance the quality of life through education. Our motto is: <strong>"From Community, For Community."</strong>
      </p>

      <div className="cards-container">
        <div className="card">
          <h2>Community</h2>
          <p>
            Our community consists of passionate educators who work together to make a positive impact. Each member brings their expertise from fields like biology, chemistry, physics, mathematics, and engineering, ensuring a comprehensive approach to STEM education.
          </p>
        </div>

        <div className="card">
          <h2>Goals</h2>
          <p>
            Our goal is simple: to make learning accessible and enjoyable for everyone. We believe that with consistency and time, anyone can grasp the fundamentals of STEM without worrying about financial limitations. Our purpose is to build a better future, not for personal gain, but for the community.
          </p>
        </div>

        <div className="card">
          <h2>Development</h2>
          <p>
            This project is open-source and welcomes contributions from developers and educators alike. All of our code, resources, and materials are freely available on GitHub. We believe in the power of open collaboration to improve educational tools and resources for everyone. You can view the source code and contribute to the project on our GitHub repository: 
            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
