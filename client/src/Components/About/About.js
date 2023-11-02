import "./About.css"

import React from 'react'
import profilePics from "../Images/steno.jpg"

const About = () => {
  return (
    <div className="container about-section" id="about">
     <div className="row">
<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
<div className="about-image">
<img src={profilePics} 
alt=" profile pics"/>
</div>
</div>

<div className="col-xl-6 col col-lg-6 col-md-12 col-sm-12">
<div className="about-details">
  <div className="about-title">
<h3>About me</h3>
  </div>
<p> 
I'm Onu Princeley Toochukwu, a dedicated Full Stack Developer driven by an unwavering passion for crafting exceptional web experiences, especially within the dynamic MERN stack. My journey in web development has been an exhilarating adventure, marked by the creation of diverse projects, ranging from robust user management systems to captivating eCommerce platforms.

Armed with a rock-solid foundation in programming fundamentals and mastery of an array of cutting-edge technologies, including JavaScript, HTML, CSS, React, Redux, Node.js, MongoDB, and more, I'm poised to launch my professional journey as a web developer. My enthusiasm for building digital solutions knows no bounds, and I am steadfast in my belief that I can make significant contributions to any industry or organization.

I'm on the lookout for a dynamic team where I can put my skills to work, continuing to learn and grow. Let's unite forces and embark on a remarkable journey to create something extraordinary together.
</p>
</div>
</div>

     </div>
    </div>
  )
}

export default About
