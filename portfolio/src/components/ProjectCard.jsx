import React from 'react';

const ProjectCard = ({ project, isReversed }) => {
    return (
        <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} gap-8 mb-16`}>
            {/* Project Image */}
            <div className="w-1/2">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[300px] object-cover rounded-lg"
                />
            </div>

            {/* Project Info */}
            <div className="w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                        {project.technologies.map((tech, index) => (
                            <img 
                                key={index}
                                src={`/path/to/${tech}-icon.svg`}
                                alt={tech}
                                className="w-6 h-6"
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Problem:</h4>
                    <p className="text-gray-300">{project.problem}</p>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300">{project.solution}</p>
                </div>

                <a 
                    href={project.projectUrl}
                    className="self-start px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                >
                    Visit project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
