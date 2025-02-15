import { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close menu after clicking
    if (location.pathname !== '/') {
      // If we're not on the homepage, navigate there first
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If we're already on homepage, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add this function to handle regular link clicks
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo" onClick={handleLogoClick}>
        Yuri Kuvalja
      </Link>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'line active' : 'line'}></span>
        <span className={isOpen ? 'line active' : 'line'}></span>
        <span className={isOpen ? 'line active' : 'line'}></span>
      </div>

      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <span className="nav-item" onClick={() => scrollToSection('about')}>About Me</span>
        <Link to="/projects" onClick={handleProjectsClick}>Projects</Link>
        <span className="nav-item" onClick={() => scrollToSection('contact')}>Contact</span>
        <a 
          href={`${import.meta.env.BASE_URL}Yuri_Kuvalja_CV.pdf`}
          className="cv-button" 
          download="Yuri_Kuvalja_CV.pdf"
          onClick={handleLinkClick}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
