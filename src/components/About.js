import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function About() {
  return (
    <section id="about" className="section">
      <h2 className="head-about">About Me</h2>
      <div className="about-content">
        <img src="/assets/About.png" alt="Ravi Gupta" className="headshot" />
        <p>Hi, I’m Ravi Gupta, I recently completed my degree and have gained hands-on experience in programming languages such as Javascript, SQL, and Python. With a strong foundation in these areas, I’m passionate about solving real-world challenges and developing innovative solutions. I am currently seeking opportunities to apply my skills in software development and AI to contribute to cutting-edge technologies and create impactful software.</p>
        <p>My ambition is to build a successful career as a software engineer, continuously growing my expertise across diverse domains. As a highly motivated learner and a strong team player, I thrive on new challenges and am eager to contribute my skills to impactful projects.</p>
      </div>
      <div className="social-about">
              <a href="https://www.linkedin.com/in/ravi07gupta/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Ravigupta9968" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
    </section>
  );
}

export default About;