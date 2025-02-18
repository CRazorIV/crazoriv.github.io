import { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Yuri from '../assets/yuri.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="image-grid">
          <div className="image-container">
            {[Yuri, Yuri, Yuri, Yuri].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Yuri Kuvalja ${index + 1}`}
                className="profile-img"
              />
            ))}
          </div>
        </div>

        <div className="about-text">
          <h2>About me</h2>
          
          <p>I am Yuri Kuvalja, 17 years old and passionate about programming. Whether at school or in my free time, I spend every day learning and improving my skills. I enjoy working on challenging projects and continuously developing myself in the world of code.</p>
          
          <p>I'm passionate about bringing ideas to life through my own projects, where I get to challenge myself, apply my skills, and turn creativity into something tangible. Each project is an opportunity to grow, learn, and push the boundaries of what I can achieve!</p>
          
          <Link to="/projects" className="work-button">See my work</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
