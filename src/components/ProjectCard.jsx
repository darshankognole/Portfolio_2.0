
import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      <div className="projectImage">
        <span className="project-image-label">PROJECT</span>
      </div>

      <div className="project-card-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech-stack">
          {project.techStack?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </article>
  )
}

export default ProjectCard
