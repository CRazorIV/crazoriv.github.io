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
import htmlIcon from '../assets/Frame(10).png';
import cssIcon from '../assets/Frame(9).png';
import blueArrow from '../assets/blue-arrow.svg';
import greenArrow from '../assets/green-arrow.svg';

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
              I&apos;m a <span className="typed-text"></span>
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
          <div className="tech-stack-item">
            <img src={htmlIcon} alt="HTML" />
            <span className="tech-stack-tooltip">HTML</span>
          </div>
          <div className="tech-stack-item">
            <img src={cssIcon} alt="CSS" />
            <span className="tech-stack-tooltip">CSS</span>
          </div>
          <div className="tech-stack-item">
            <img src={pythonIcon} alt="Python" />
            <span className="tech-stack-tooltip">Python</span>
          </div>
          <div className="tech-stack-item">
            <img src={mysqlIcon} alt="MySQL" />
            <span className="tech-stack-tooltip">MySQL</span>
          </div>
          <div className="tech-stack-item">
            <img src={reactIcon} alt="React" />
            <span className="tech-stack-tooltip">React</span>
          </div>
          <div className="tech-stack-item">
            <img src={jsIcon} alt="JavaScript" />
            <span className="tech-stack-tooltip">JavaScript</span>
          </div>
          <div className="tech-stack-item">
            <img src={nodeIcon} alt="Node.js" />
            <span className="tech-stack-tooltip">Node.js</span>
          </div>
          <div className="tech-stack-item">
            <img src={phpIcon} alt="PHP" />
            <span className="tech-stack-tooltip">PHP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;