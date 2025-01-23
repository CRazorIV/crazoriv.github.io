import { useEffect } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import Yuri from '../assets/yuri.png';
import pythonIcon from '../assets/Frame.png';
import mysqlIcon from '../assets/Frame(1).png';
import reactIcon from '../assets/Frame(2).png';
import jsIcon from '../assets/Frame(3).png';
import nodeIcon from '../assets/Frame(4).png';
import phpIcon from '../assets/Frame(5).png';
// Import your arrow SVGs
import blueArrow from '../assets/blue-arrow.svg';  // Update with your actual file name
import greenArrow from '../assets/green-arrow.svg'; // Update with your actual file name
import purpleArrow from '../assets/purple-arrow.svg'; // Update with your actual file name

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<span class="green-text">Developer</span>',
        '<span class="purple-text">Developer</span>'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      html: true,
      onStringTyped: (arrayPos) => {
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
          cursor.className = `typed-cursor ${arrayPos === 0 ? 'green-cursor' : 'purple-cursor'}`;
        }
      }
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-and-image">
          <div className="hero-text">
            <h1>Hi, my name is</h1>
            <h2>Yuri Kuvalja</h2>
            <h3>
              I'm a <span className="typed-text"></span>
            </h3>
          </div>
          
          <div className="hero-image">
            <img src={Yuri} alt="Yuri Kuvalja" className="profile-image" />
            <img src={blueArrow} alt="" className="arrow blue-arrow-top" />
            <img src={greenArrow} alt="" className="arrow green-arrow" />
            <img src={blueArrow} alt="" className="arrow blue-arrow-bottom" />
          </div>
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
    </section>
  );
};

export default Hero;