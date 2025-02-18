import { useState } from 'react';
import './About.css';
import { Link, useNavigate } from 'react-router-dom';
import Yuri from '../assets/yuri.png';
import { FaServer, FaDatabase, FaReact, FaTasks } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();

  const skills = [
    {
      title: "Backend",
      icon: <FaServer />,
      description: "Building robust server-side applications with Python, Node.js, and PHP",
      color: "#8A2BE2"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      description: "Designing and managing MySQL databases with efficient queries and structures",
      color: "#FF4444"
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      description: "Creating responsive and interactive UIs with React, JavaScript, and modern CSS",
      color: "#2196F3"
    },
    {
      title: "Scrum & Agile",
      icon: <FaTasks />,
      description: "Working with agile methodologies to ensure efficient project delivery",
      color: "#FF69B4"
    }
  ];

  const handleProjectsClick = (e) => {
    e.preventDefault();
    navigate('/projects');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
          
          <Link to="/projects" className="work-button" onClick={handleProjectsClick}>See my work</Link>
        </div>
      </div>

      <div className="about-separator"></div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index}
            style={{"--hover-color": skill.color}}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
