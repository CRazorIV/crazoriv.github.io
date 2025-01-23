import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies = [], imageUrl, liveUrl }) => {
    return (
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                
                <div className="project-tech-stack">
                    {technologies?.map((tech, index) => (
                        <img key={index} src={tech} alt={`${tech} icon`} className="tech-icon" />
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
                
                <a href={liveUrl} className="visit-project">Visit project</a>
            </div>
            
            <div className="project-image">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    );
};

export default ProjectCard;
