import { Link, useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
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

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        MyPortfolio
      </Link>
      
      <div className="menu">
        <span className="nav-item" onClick={() => scrollToSection('about')}>About Me</span>
        <Link to="/projects">Projects</Link>
        <span className="nav-item" onClick={() => scrollToSection('contact')}>Contact</span>
        <Link to="/cv" className="cv-button">Download CV</Link>
      </div>
    </nav>
  );
};

export default Navbar;
