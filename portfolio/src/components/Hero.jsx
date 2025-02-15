import { useEffect } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import Yuri from '../assets/yuri.png';
// Using your existing icon files
import pythonIcon from '../assets/Frame.png';      // Python
import mysqlIcon from '../assets/Frame(1).png';    // MySQL
import reactIcon from '../assets/Frame(2).png';    // React
import jsIcon from '../assets/Frame(3).png';       // JavaScript
import nodeIcon from '../assets/Frame(4).png';     // Node.js
import phpIcon from '../assets/Frame(5).png';      // PHP
import blueArrow from '../assets/blue-arrow.svg';
import greenArrow from '../assets/green-arrow.svg';

const Hero = () => {
  // ... rest of the component code ...

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-and-image">
          {/* ... hero text and image ... */}
        </div>

        <div className="tech-stack">
          <img src={pythonIcon} alt="Python" />
          <img src={mysqlIcon} alt="MySQL" />
          <img src={reactIcon} alt="React" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={nodeIcon} alt="Node.js" />
          <img src={phpIcon} alt="PHP" />
        </div>
      </div>
      
      <div className="scroll-indicator" 
           onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
           aria-label="Scroll to About section">
        ↓↓
      </div>
    </section>
  );
};

export default Hero; 