import { FaCalendarAlt,FaHandPointRight} from 'react-icons/fa';
import React from 'react';

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education & Experience</h2>
      <div className="edu-exp-container">
        <div className="edu-exp-column">
          <h3>Education</h3>
          <p></p>
          <p></p>
          <div className="education-item">
            <h4>Bachelor's in Computer Science (AI)</h4>
            <p>ABES Institute of Technology</p>
            <p><FaCalendarAlt/> 2020 - <FaCalendarAlt/> 2024</p>
            <p>AKTU University</p>
            <p><strong>Key Achievements :</strong></p><p><FaHandPointRight/> Innovate India Coding Championship (2022) – Reached Round 2 and successfully completed the second challenge.</p><p><FaHandPointRight/> Participated tech workshops and hackathons at the university, fostering a culture of innovation.</p>
            <p> <FaHandPointRight/> NGO Work: Member of Light De Literacy, contributing to educational initiatives for underprivileged students and guided them in academics.</p>
          </div>
          <div className="education-item">
            <h4>Intermediate</h4>
            <p>Bloom Public Sr. Sec. School</p>
            <p><FaCalendarAlt/> 2018 - <FaCalendarAlt/> 2020</p>
            <p>CBSE Board</p>
            <p><strong>Key Achievements :</strong></p>
            <p><FaHandPointRight/> Achieved excellent scores in Mathematics & Science, demonstrating strong analytical skills.</p> <p> <FaHandPointRight/> Community Service & Volunteering – Participated in awareness campaigns and social initiatives during school.</p>
            <p> <FaHandPointRight/> Leadership Role: Managed and guided fellow students in academic and extracurricular activities.</p>
          </div>
        </div>
        <div className="edu-exp-column1">
          <h3>Job Experience</h3>
          <p></p>
          <p></p>
         
          <div className="education-item">
            <h4>Programmer</h4>
            <p>Aptara Corporation </p>
            <p>Noida, Uttar Pradesh, India</p>
            <p> <FaCalendarAlt/>  June 2024 - <FaCalendarAlt/> Feb 2025</p>
            <p><strong>Responsibilities:</strong><p> <FaHandPointRight/> Worked closely with developers, designers, and QA teams to ensure software met 95% of client specifications, improving overall product quality. </p><p> <FaHandPointRight/> Conducted unit and integration testing to ensure software stability, reducing post-deployment defects by 15%. </p><p><FaHandPointRight/> Implemented Git for version control, ensuring codebase stability and scalability through effective branching, merging, and collaboration with team members.</p></p>
          </div>
          <div className="education-item">
            <h4>Data Analytics</h4>
            <p>TechnoHacks EduTech - Remote</p>
            <p><FaCalendarAlt/>  Aug 2023 - <FaCalendarAlt/> Sept 2023</p>
            <p><strong>Responsibilities:</strong></p><p><FaHandPointRight/> Used Power BI/Python/SQL to create interactive dashboards and visualizations for business intelligence.</p><p> <FaHandPointRight/> Collected, cleaned, and analyzed large datasets to identify trends and insights.</p><p><FaHandPointRight/> Developed a data-driven report that improved business decision-making.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;