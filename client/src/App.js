import About from './Components/About/About'
import Project from './Components/projects/Project'
import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import TechStack from './Components/TechStack/TechStack'

const App = () => {
  return (
 <>
 <Sidebar/>
 <About/>
 <TechStack/>
 <Project/>
 </>
  )
}

export default App
