import pythonIcon from '../assets/Frame.png';
import mysqlIcon from '../assets/Frame(1).png';
import reactIcon from '../assets/Frame(2).png';
import jsIcon from '../assets/Frame(3).png';
import nodeIcon from '../assets/Frame(4).png';
import phpIcon from '../assets/Frame(5).png';
import Yuri from '../assets/yuri.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, my name is</h1>
          <h2>Yuri Kuvalja</h2>
          <h3>I'm a \programmer</h3>
        </div>
        
        <div className="hero-image-container">
          <div className="dot-pattern">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
          <div className="hero-image">
            <img src={Yuri} alt="Yuri Kuvalja" />
          </div>
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
    </section>
  );
};

export default Hero;
