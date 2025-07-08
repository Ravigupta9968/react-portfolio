import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Chatbot from './Chatbot';

function App() {
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'night') setNightMode(true);
  }, []);

  const toggleMode = () => {
    setNightMode(!nightMode);
    localStorage.setItem('mode', !nightMode ? 'night' : 'day');
  };

  return (
    <div className={`app ${nightMode ? 'night-mode' : ''}`}>
      <Navbar nightMode={nightMode} toggleMode={toggleMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Profile />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;