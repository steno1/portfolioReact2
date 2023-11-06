import ProjectList from './ProjectList';
import React from 'react'
import projectData from '../../ProjectData'

// Define a functional component named `Project`.
const Project = () => {


    // The component renders JSX.
    return (
        <div className="container" id="projects">
            <div className="section-title">
                <h2>Projects</h2>
            </div>

            <div className="row">
                {/* Map over the `projectData` array and render a `ProjectList` component for each project. */}
                {projectData.map((project, index) => (
                    <div
             className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                        key={index}
                    >
     {/* Render the `ProjectList` component and pass the `project` object as props. */}
                        <ProjectList {...project}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Export the `Project` component as the default export of this module.
export default Project
