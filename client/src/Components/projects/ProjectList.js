import "./project.css"

import {FcCollapse, FcExpand} from "react-icons/fc"

import React from 'react'
import { useState } from "react"

const ProjectList = ({name, des, projectLink, gitHubLink, techUsed}) => {
  
    const [show, setShow]=useState(false);
    const handleShowAndCollapse=()=>{
        setShow(!show)
    }
    return (
    <div className={show?"project-list-opened":"project-list"} onClick={handleShowAndCollapse}>
    <div className='title-and-collapse-option'>
        <h4>{name}</h4>
        <p className="fcExpand">{show?<FcCollapse size={20}/>
        :<FcExpand size={20}/>}</p>
   
    </div>
    <div>
{show?(<p className="des">{des}</p>):
    (<p className="des">{des.substring(0,150)}...<span className="more">Read more</span></p>)}
    </div>
    

    <div className="row">
        {techUsed && techUsed.map((tech, index)=>(
<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
<div className="tech-used-in-project ">
<p >{tech.techName}</p>

</div>

</div>
        ))}
<div>
<div className="live-demo-button">
  <a href={projectLink} className="demo-button">Live Demo</a>
  <a href={gitHubLink} className="github-button">GitHub</a>
</div>




</div>

    </div>
    </div>
  )
}

export default ProjectList
