import About from './Components/About/About'
import Project from './Components/projects/Project'
import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import TechStack from './Components/TechStack/TechStack'
import Testimonial from './Components/Testimonial/testimonial'
import WorkExperience from './Components/WorkExperience/WorkExperience'
const App = () => {
  return (
 <>
 <Sidebar/>
 <About/>
 <TechStack/>
 <Project/>
 <WorkExperience/>
 <Testimonial/>

 
 
 </>
  )
}

export default App
