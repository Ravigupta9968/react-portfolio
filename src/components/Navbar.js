import React, { useState } from 'react';
import { FaBars, FaSun, FaMoon, FaTimes } from 'react-icons/fa'; // Added FaTimes

function Navbar({ nightMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${nightMode ? 'night-mode' : ''}`}>
      <div className="logo">Ravi Gupta</div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between close and hamburger */}
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#education" onClick={toggleMenu}>Education</a></li>
        <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
        <li><a href="#profile" onClick={toggleMenu}>Contact</a></li>
      </ul>
      <div className="mode-toggle">
        <FaSun />
        <label className="switch">
          <input type="checkbox" checked={nightMode} onChange={toggleMode} />
          <span className="slider"></span>
        </label>
        <FaMoon />
      </div>
    </nav>
  );
}

export default Navbar;