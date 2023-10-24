import "./workexperience.css"
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { FcEngineering } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import React from 'react'
import WorkData from "../../WorkExperienceData"

const WorkExperience = () => {  // Defining a functional component named 'WorkExperience'.
    const colors=[  // Defining an array named 'colors' containing two color codes.
        "#004225",
        "#331D2C"
    ]
    const icons = [  // Defining an array named 'icons' containing two React components (icons).
        <FcEngineering />,
        <FcFactory />   
      ];
  return (
    <div className="container" id="work"> 

     <div className="section-title"> 
        <h2>Work Experience</h2>  
     </div>
     <VerticalTimeline lineColor="green">  {/* Creating a Vertical Timeline component with a prop 'lineColor' set to "green". */}
        {WorkData.map((data, index)=>(  // Mapping through the 'WorkData' array.
  
          <VerticalTimelineElement key={index}  // Creating a Vertical Timeline Element with a unique 'key'.
            className="vertical-timeline-element--work"  // Adding a class name to the element.
            contentStyle={{ background: colors[index], color: '#fff' }}  // Setting inline styles for the content.
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}  // Setting inline styles for the content arrow.
            date={data.year}  // Setting the date for the timeline element.
            dateClassName="myDate"  // Adding a class name to the date.
            iconStyle={{ background: colors[index], color: '#fff' }}  // Setting inline styles for the icon.
            icon={icons[index]}  // Adding an icon component to the element.
          >
            <h5 className="vertical-timeline-element-title" style={{marginBottom:"5px", textAlign:"center"}}>{data.companyName}</h5>  {/* Adding a title with inline styles. */}
            <h6 className="vertical-timeline-element-subtitle" style={{marginBottom:"5px", textAlign:"center"}}>{data.Position}</h6>  {/* Adding a subtitle with inline styles. */}
            <p>
              {data.des}  {/* Displaying the job description. */}
            </p>
            <div className="row">  {/* Creating a row. */}
              {data.techSkills.map((techSkill, index)=>(  // Mapping through the 'techSkills' array.
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>  {/* Creating columns within the row. */}
                  <div className="tech-used-in-project" key={index}>  {/* Creating a div with a class name. */}
                    <p className="pButton" style={{backgroundColor:"black", width:"96px", fontSize:"12px"}}>{techSkill.techName}</p>  {/* Adding a styled paragraph element. */}
                  </div>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default WorkExperience  // Exporting the 'WorkExperience' component as the default export.
