import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { useProjectStore } from '../../../../../Protfolio react learning/portfolio/src/store/useProjectStore'
import './Projects.css'

const Projects = () => {
  const projects = useProjectStore((state) => state.projects)

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
