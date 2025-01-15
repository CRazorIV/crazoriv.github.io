import './Hero.css';
import Yuri from '../assets/yuri.png';
import pythonIcon from '../assets/Frame.png';
import mysqlIcon from '../assets/Frame(1).png';
import reactIcon from '../assets/Frame(2).png';
import jsIcon from '../assets/Frame(3).png';
import nodeIcon from '../assets/Frame(4).png';
import phpIcon from '../assets/Frame(5).png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-and-image">
          <div className="hero-text">
            <h1>Hi, my name is</h1>
            <h2>Yuri Kuvalja</h2>
            <h3>I'm a \programmer</h3>
          </div>
          
          <div className="hero-image">
            <img src={Yuri} alt="Yuri Kuvalja" />
            <div className="dot-pattern">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>
            <div className="curved-lines">
              <div className="line blue"></div>
              <div className="line green"></div>
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
      </div>
    </section>
  );
};

export default Hero;
