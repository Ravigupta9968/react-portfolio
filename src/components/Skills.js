import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPython, FaJs, FaDatabase, FaGitAlt, FaChevronLeft, FaChevronRight, FaReact, FaRobot, FaJava, FaHtml5, FaCss3, FaCode, FaLaptopCode, } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';  

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsContainerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(152); 

  const skills = [
    { icon: <FaPython />, name: 'Python', level: 90 },
    { icon: <FaJava />, name: 'Java', level: 85 },
    { icon: <FaJs />, name: 'JavaScript', level: 70 },
    { icon: <FaRobot />, name: 'AI/ML', level: 85 },
    { icon: <FaReact />, name: 'React', level: 80 },
    { icon: <SiTypescript />, name: 'TypeScript', level: 80 },
    { icon: <SiTailwindcss  />, name: 'Tailwind', level: 80 },
    { icon: <FaHtml5 />, name: 'HTML5', level: 90 },
    { icon: <FaCss3 />, name: 'CSS3', level: 90 },
    { icon: <FaCode />, name: 'OOPS', level: 70 },
    { icon: <FaDatabase />, name: 'SQL', level: 90 },
    { icon: <FaLaptopCode />, name: 'DSA', level: 80 },
    { icon: <FaGitAlt />, name: 'Git', level: 80 }, // add more skills as needed
  ];

  const updateItemWidth = useCallback(() => {
    const width = window.innerWidth > 768 ? 198 : 152; // Desktop: 150px + 3rem (48px), Mobile: 120px + 2rem (32px)
    setItemWidth(width);
    console.log('Item width updated to:', width); 
  }, []);

  const getMaxIndex = useCallback(() => {
    if (!skillsContainerRef.current?.parentElement) return 0;
    const containerWidth = skillsContainerRef.current.parentElement.offsetWidth;
    const max = Math.max(0, Math.ceil((skills.length * itemWidth - containerWidth) / itemWidth));
    console.log('Max index:', max, 'Container width:', containerWidth);
    return max;
  }, [skills.length, itemWidth]);

  const updateSlider = useCallback(() => {
    if (!skillsContainerRef.current) return;
    const maxIndex = getMaxIndex();
    const clampedIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    setCurrentIndex(clampedIndex);
    skillsContainerRef.current.style.transform = `translateX(-${clampedIndex * itemWidth}px)`;
    console.log('Slider updated - Index:', clampedIndex, 'Translate:', -clampedIndex * itemWidth); 
  }, [currentIndex, getMaxIndex, itemWidth]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = Math.max(prev - 1, 0);
      console.log('Prev clicked - New index:', newIndex);  
      return newIndex;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = Math.min(prev + 1, getMaxIndex());
      console.log('Next clicked - New index:', newIndex);  
      return newIndex;
    });
  }, [getMaxIndex]);

  const handleTouchStart = useCallback((e) => {
    skillsContainerRef.current.touchStartX = e.touches[0].clientX;
    console.log('Touch start:', skillsContainerRef.current.touchStartX);  
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!skillsContainerRef.current) return;
    const diff = skillsContainerRef.current.touchStartX - e.touches[0].clientX;
    skillsContainerRef.current.style.transform = `translateX(-${currentIndex * itemWidth + diff}px)`;
    console.log('Touch move - Diff:', diff);  
  }, [currentIndex, itemWidth]);

  const handleTouchEnd = useCallback((e) => {
    if (!skillsContainerRef.current) return;
    const diff = skillsContainerRef.current.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentIndex(prev => {
        const newIndex = Math.min(Math.max(prev + (diff > 0 ? 1 : -1), 0), getMaxIndex());
        console.log('Touch end - New index:', newIndex);  
        return newIndex;
      });
    }
    updateSlider();
  }, [updateSlider, getMaxIndex]);

  const handleClick = useCallback((e) => {
    if (!skillsContainerRef.current) return;
    const rect = skillsContainerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    setCurrentIndex(prev => {
      const newIndex = clickX < rect.width / 2 ? prev - 1 : prev + 1;
      const clampedIndex = Math.min(Math.max(newIndex, 0), getMaxIndex());
      console.log('Click - New index:', clampedIndex);  
      return clampedIndex;
    });
  }, [getMaxIndex]);

  useEffect(() => {
    updateItemWidth();
    updateSlider();
    window.addEventListener('resize', () => {
      updateItemWidth();
      updateSlider();
    });
    return () => window.removeEventListener('resize', updateSlider);
  }, [updateSlider, updateItemWidth]);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-slider">
        <button
          className="slider-arrow left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous skills"
        >
          <FaChevronLeft />
        </button>
        <div
          className="skills-container"
          ref={skillsContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
        >
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="slider-arrow right"
          onClick={handleNext}
          disabled={currentIndex >= getMaxIndex()}
          aria-label="Next skills"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Skills;