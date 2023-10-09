import ProjectList from './ProjectList';
import React from 'react'
import projectData from '../../ProjectData'

const Project = () => {
    console.log(projectData);
  return (
    <div className="container">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="row">
        {projectData.map((project) => (
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
            key={project.id}
          >
           <ProjectList {...project}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
