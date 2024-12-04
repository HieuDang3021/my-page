import React from 'react'
import { ProjectsData } from '../data/ProjectsData'
import '../style_sheet/projects.css'

export default function Projects() {
  return (
    <section className='projects-container' id='projects' >
        <h2 className='projects-title' >Projects</h2>
        <div className='projects'>
            {ProjectsData.map((project, id) => {
                return <div className='project-container' key={id} > 
                    <img src={project.image} className='project-img' alt="" />
                    <h3 className='project-title' >{project.title}</h3>
                    <p className='project-description' >{project.description}</p>
                    <ul className='project-skills' >
                        {project.skills.map((skill, id) => {
                            return <li className='project-skill' key={id}>{skill}</li>
                        })}
                    </ul>
                </div>
            }) }
        </div>
    </section>
  )
}
