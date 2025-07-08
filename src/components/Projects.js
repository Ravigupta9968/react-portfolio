import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [// add your projects and github link
    { title: 'Weather App Using React.Js', desc: 'A dynamic web application that provides real-time weather updates for any location. Ideal for showcasing front-end development skills and API integration expertise.', img: '/assets/project1.png',alt:'Project Image', github: 'https://github.com/ #/Weather-app_using_React-js' },
    { title: 'Attendance System Using Face Recognition', desc: 'Developed a Face Recognition Attendance System using Python, OpenCV, and machine learning. It automates attendance tracking through real-time facial recognition, reducing manual effort, boosting processing speed.', img: '/assets/project2.png', alt:'Project Image', github: 'https://github.com/ #/face-recognition-attendance-system' },
    { title: 'House Price Prediction', desc: 'Developed a House Price Prediction model using Python, Pandas, Scikit-learn, and Linear Regression. Enhanced prediction accuracy through robust data preprocessing and feature engineering.', img: '/assets/project3.png', alt:'Project Image', github: 'https://github.com/ #/House_Price_Prediction'},
    { title: 'Counter Parking Space', desc: 'Counter Parking Space system using Python, OpenCV, and image processing techniques. The project accurately counts parked cars and identifies available parking spots in real-time.', img: '/assets/project4.jpg', alt:'Project Image', github: 'https://github.com/ #/Counter-Parking-Space'},
    { title: 'Online Payment Fraud Detection', desc: 'Developed a robust Online Payment Fraud Detection system using Python, machine learning, Flask, Jupyter Notebook. The system leverages data analysis, feature engineering, and predictive models to detect fraudulent transactions in real-time.', img: '/assets/project5.jpeg', alt:'Project Image', github: 'https://github.com/ #/Payments-Online-Fraud-Detection'},
    { title: 'Movie Recommendation system', desc: 'Developed a Movie Recommendation System using collaborative and content-based filtering to provide personalized movie suggestions.', img: '/assets/project6.png', alt:'Project Image', github: 'https://github.com/ #/Movie_Recommendation_system' },
    { title: 'Calculator Using Python', desc: 'Built a functional calculator using Tkinter in Python, featuring arithmetic operations, advanced functions like square and square root, and error handling.', img: '/assets/project7.jpeg', alt:'Project Image', github: 'https://github.com/ #/Calculator' },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub  <FaGithub/></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;