import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-16">My work</h2>
            <div className="space-y-24">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects; 