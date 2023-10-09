import "./techStack.css"

import { colors, data } from "../../data"

import React from 'react'
import { useState } from "react"

const TechStack = () => {
    const [loadMoreTech, setLoadMoreTech]=useState(8)
    const loadMore=()=>{

       setLoadMoreTech((prev)=>prev+3) 
    }

  return (
    <div className="container techStack-section">
    <div className="section-title">

<h2>Tech Stack</h2>

    </div>
    <div className="row">
{data.slice(0,loadMoreTech).map((item, index)=>(
<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
    <div className={index===0?"tech-content-marked":"tech-content"}>
<span className="tech-number" style={{backgroundColor:colors[index]}}>
{index+1}

</span>
    <p>{item.name}</p>

    </div>

</div>
))}

    </div>
    {loadMoreTech >= data.length? null :(
 <span className="load-more-tech-stack" onClick={loadMore}>
 Load More...
 
 </span>
    )}
   
    </div>
  )
}

export default TechStack
