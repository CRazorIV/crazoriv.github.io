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
            {/* Create dot pattern grid */}
            {[...Array(15)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
          <div className="hero-image">
            <img src="/path-to-your-image.jpg" alt="Yuri Kuvalja" />
          </div>
        </div>
      </div>
      
      <div className="tech-stack">
        <img src="/python-logo.png" alt="Python" />
        <img src="/mysql-logo.png" alt="MySQL" />
        <img src="/react-logo.png" alt="React" />
        <img src="/js-logo.png" alt="JavaScript" />
        <img src="/node-logo.png" alt="Node.js" />
        <img src="/php-logo.png" alt="PHP" />
      </div>
    </section>
  );
};

export default Hero;
