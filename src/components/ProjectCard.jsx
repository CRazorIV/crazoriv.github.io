import './ProjectCard.css';
import PropTypes from 'prop-types';  // Add PropTypes for the linter

// Import tech icons
import pythonIcon from '../assets/Frame.png';
import mysqlIcon from '../assets/Frame(1).png';
import reactIcon from '../assets/Frame(2).png';
import jsIcon from '../assets/Frame(3).png';
import nodeIcon from '../assets/Frame(4).png';
import phpIcon from '../assets/Frame(5).png';
import cssIcon from '../assets/Frame(9).png';
import htmlIcon from '../assets/Frame(10).png';

// Map technology names to their icons
const techIcons = {
  'Python': pythonIcon,
  'MySQL': mysqlIcon,
  'React': reactIcon,
  'JavaScript': jsIcon,
  'Node.js': nodeIcon,
  'PHP': phpIcon,
  'HTML': htmlIcon,
  'CSS': cssIcon
};

const ProjectCard = ({ title, description, technologies = [], imageUrl, liveUrl }) => {
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        // Calculate rotation based on cursor position
        const tiltX = (y - 0.5) * 10;  // -5 to 5 degrees
        const tiltY = (x - 0.5) * -10;  // -5 to 5 degrees
        
        e.currentTarget.style.transform = 
            `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };

    return (
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                
                <div className="project-tech-stack">
                    {technologies?.map((tech, index) => (
                        <div key={index} className="tech-stack-item">
                            <img 
                                src={techIcons[tech]} 
                                alt={`${tech} icon`} 
                                className="tech-icon"
                            />
                            <div className="tech-stack-tooltip">{tech}</div>
                        </div>
                    ))}
                </div>

                <div className="project-description">
                    <div className="problem">
                        <h4>Problem:</h4>
                        <p>{description.problem}</p>
                    </div>
                    
                    <div className="solution">
                        <h4>Solution:</h4>
                        <p>{description.solution}</p>
                    </div>
                </div>
                
                <a href={liveUrl} className="visit-project">Visit Project</a>
            </div>
            
            <div 
                className="project-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img 
                    src={imageUrl} 
                    alt={title} 
                    draggable="false"
                />
            </div>
        </div>
    );
};

// Add PropTypes for the linter
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
        problem: PropTypes.string.isRequired,
        solution: PropTypes.string.isRequired
    }).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    imageUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired
};

export default ProjectCard;
