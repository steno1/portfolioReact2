import "./app.css"

import About from './Components/About/About'
import Contact from './Components/contact/Contact'
import Education from "./Components/Education/Education"
import NavBarMobile from "./Components/NavBarMobile"
import Project from './Components/projects/Project'
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import Sidebar from './Components/Sidebar/Sidebar'
import TechStack from './Components/TechStack/TechStack'
import Testimonial from './Components/Testimonial/testimonial'
import WorkExperience from './Components/WorkExperience/WorkExperience'

const App = () => {
  return (
    <>
 < div className="container-fluid">
 <Sidebar/>
 <NavBarMobile/>
 <About/>
 <TechStack/>
 <Project/>
 <WorkExperience/>
<Education/>
 <Testimonial/>
 <Contact/>
 <ScrollToTop   className="scroll-to-top" smooth={true}
  style={{borderRadius:"50%", backgroundColor:"black"}} 
 color="white" height='20' width='20' top={600} />
 
 </div>
  
  </>
  )
}

export default App
