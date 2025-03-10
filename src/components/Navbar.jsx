import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import twitterIcon from '../assets/twitter.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          href="/Yuri_Kuvalja_curriculum_vitae.pdf"
          className="cv-button" 
          download="Yuri_Kuvalja_curriculum_vitae.pdf"
          onClick={handleLinkClick}
        >
          Download CV
        </a>

        {/* Mobile Footer - Only render on mobile/tablet */}
        {isMobile && (
          <div className="mobile-footer">
            <div className="social-links">
              <a 
                href="https://github.com/crazoriv" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yuri-kuvalja-25595330b/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
              <a 
                href="mailto:yuri.kuvalja@proton.me"
                aria-label="Email"
              >
                <img src={emailIcon} alt="Email" className="social-icon" />
              </a>
              <a 
                href="https://x.com/Yk_civIV"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
            </div>
            <p className="copyright">© 2024 Yuri Kuvalja. All rights reserved.</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
