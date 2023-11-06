import "./project.css"

import { FcCollapse, FcExpand } from "react-icons/fc"

import React from 'react'
import { useState } from "react"

// Define a functional component named `ProjectList` which takes props as an argument.
const ProjectList = ({ name, des, projectLink, gitHubLink, techUsed }) => {

    // Using the `useState` hook to create a state variable `show` and a function `setShow` to update it.
    const [show, setShow] = useState(false);

    // Define a function `handleShowAndCollapse` which toggles the value of `show` when called.
    const handleShowAndCollapse = () => {
        setShow(!show)
    }

    // The component renders JSX.
    return (
        <div className={show ? "project-list-opened" : "project-list"} 
             onClick={handleShowAndCollapse}>

            <div className='title-and-collapse-option'>
                {/* Render the `name` prop in an `h4` element. */}
                <h4>{name}</h4>
                <p className="fcExpand">
                    {/* Conditional rendering of icons based on the value of `show`. */}
         {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
                </p>
            </div>

            <div>
                {show ? (
                    // Render the full `des` if `show` is true.
                    <p className="des">{des}</p>
                ) : (
                    // Render a truncated `des` with a "Read more" link if `show` is false.
                    <p className="des">{des.substring(0, 150)}...<span className="more">Read more</span></p>
                )}
            </div>

            <div className="row">
                {/* Map over the `techUsed` prop and render a list of technologies. */}
                {techUsed && techUsed.map((tech, index) => (
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
                        <div className="tech-used-in-project">
                            
                        </div>
                    </div>
                ))}

                <div>
                    <div className="live-demo-button">
                        {/* Render Live Demo and GitHub links. */}
                        <a href={projectLink} className="demo-button">Live Demo</a>
                        <a href={gitHubLink} className="github-button">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export the `ProjectList` component as the default export of this module.
export default ProjectList
