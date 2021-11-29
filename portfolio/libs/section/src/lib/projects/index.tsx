import './projects.module.scss'
import { ProjectSection, ProjectProps } from "../project"
import React from "react"

/* eslint-disable-next-line */
export interface ProjectsProps
{
  projects: ProjectProps[]
}

export const ProjectsSection = ({
  projects
}: ProjectsProps) => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((project) => (
            <ProjectSection
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
