import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({project}) => {

  return (
    <div className="project-card">
      <div className='projectImage'></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.tech && (
        <ul>
          {project.tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul> 
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard