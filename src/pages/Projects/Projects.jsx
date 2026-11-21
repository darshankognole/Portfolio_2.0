
import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { useProjectStore } from '../../stores/useProjectsStore'
import './Projects.css'

const Projects = () => {
  const projects = useProjectStore((state) => state.projects)

  return (
    <section className="projects">

      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Explore some of the applications I've developed.</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects
