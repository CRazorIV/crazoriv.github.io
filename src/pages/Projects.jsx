import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-page">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={{
              problem: project.problem,
              solution: project.solution
            }}
            technologies={project.technologies}
            imageUrl={project.image}
            liveUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 