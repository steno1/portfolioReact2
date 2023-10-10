import "./styles.css"

import React from 'react';
import WorkData from "../../WorkExperienceData";

const WorkExperience = () => {
  
  return (
    <>
   <div className="section-title">
                <h2>Work Experience</h2>
            </div>
    <div className="container my-5 position-relative z-neg1" 
    
    style={{ zIndex: -1 }}>
      <div className="row">
        {WorkData.map((item, index)=>(

<div className="col-md-6" key={index}>
<div className="card mb-4">
  <div className="card-body">
    <h3 className="card-title">{item.companyName}</h3>
    <h5 className="card-subtitle mb-2 " style={{color:"green",
textAlign:"center"}}>{item.Position}</h5>
    <p className="card-text">
   {item.des}
    </p>
  </div>
</div>
</div>

        ))}
    

      </div>
    </div>
    </>
  );
};

export default WorkExperience;
