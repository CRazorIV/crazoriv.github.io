import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="logo" onClick={() => scrollToSection('home')}>
        MijnPortfolio
      </div>
      
      <div className="menu">
        <span className="nav-item" onClick={() => scrollToSection('about')}>Over Mij</span>
        <Link to="/projects">Projecten</Link>
        <span className="nav-item" onClick={() => scrollToSection('contact')}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
