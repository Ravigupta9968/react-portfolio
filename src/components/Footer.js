import React from 'react';
import { FaLinkedin, FaGithub, FaLaptopCode} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div className="footer-p">
      <p>2025 ©  Ravi Gupta. All rights reserved.</p>
      <p></p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://Twitter.com/#" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="#add link" target="_blank" rel="noopener noreferrer"><FaLaptopCode /></a>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>↑</button>
    </footer>
  );
}

export default Footer;