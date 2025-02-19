import './SkillCards.css';
import { FaServer, FaDatabase, FaReact, FaTasks } from 'react-icons/fa';

const SkillCards = () => {
  const skills = [
    {
      title: "Backend",
      icon: <FaServer />,
      description: "Building robust server-side applications with Python, Node.js, and PHP",
      color: "#54b3d6"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      description: "Designing and managing MySQL databases with efficient queries and structures",
      color: "#2ecc71"
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      description: "Creating responsive and interactive UIs with React, JavaScript, and modern CSS",
      color: "#e74c3c"
    },
    {
      title: "Scrum & Agile",
      icon: <FaTasks />,
      description: "Working with agile methodologies to ensure efficient project delivery",
      color: "#f39c12"
    }
  ];

  return (
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
  );
};

export default SkillCards; 