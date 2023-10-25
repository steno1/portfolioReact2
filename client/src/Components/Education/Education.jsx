import "./education.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { EducationData } from "../../data"
import { FcDepartment } from "react-icons/fc";
import React from 'react'

const Education = () => {
  const colors= [
    "#26577C",
    "#9A4444"
  ]

  return (
    <div className="container" id="Education">
        <div className="section-title">
<h2>Education</h2>
        </div>

        <VerticalTimeline lineColor="green"> 
        {EducationData.map((data, index)=>( 
  
          <VerticalTimelineElement key={index}
            className="vertical-timeline-element--work"  
            contentStyle={{ background: colors[index], color: '#fff' }}  
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}  
            date={data.year}
            dateClassName="myDate" 
            iconStyle={{ background: colors[index], color: '#fff' }}  
        icon={<FcDepartment/>}
          >
            <h5 className="vertical-timeline-element-title" style={{marginBottom:"5px", textAlign:"center"}}>{data.name}</h5>  {/* Adding a title with inline styles. */}
            <h6 className="vertical-timeline-element-subtitle" style={{marginBottom:"5px", textAlign:"center"}}>{data.degree}</h6>  {/* Adding a subtitle with inline styles. */}
            
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      
    </div>
  )
}

export default Education
