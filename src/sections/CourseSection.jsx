// src/components/CourseSection.js
import React from 'react';
import '../styles/CourseSection.css'; // Import the CSS file for styling

const courses = [
  { title: 'Physics', icon: '🔬' }, // Replace with actual icons or image paths
  { title: 'Chemistry', icon: '🧪' },
  { title: 'Biology', icon: '🧬' },
  { title: 'Math', icon: '➕' },
];

const CourseSection = () => {
  return (
    <section className="course-section">
      <h1 className="section-title">Our Courses</h1>
      <div className="card-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="card-icon">{course.icon}</div>
            <h2 className="card-title">{course.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
