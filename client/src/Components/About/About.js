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
I'm Onu Princeley Toochukwu, a dedicated Full Stack Developer with a deep passion for creating exceptional web experiences, particularly within the MERN stack. My journey in web development has been a thrilling adventure, marked by the creation of diverse projects, ranging from robust user management systems to engaging eCommerce platforms.

Armed with a solid foundation in programming fundamentals and proficiency in an array of technologies, including JavaScript, HTML, CSS, React, Redux, Node.js, MongoDB, and more, I stand ready to embark on my professional journey as a web developer. My enthusiasm for crafting digital solutions is boundless, and I'm unwavering in my belief that I can make meaningful contributions to any industry or agency.

I'm eagerly seeking a dynamic team where I can apply my skills and continue to learn and grow. Let's join forces and embark on a journey to create something extraordinary together.
</p>
</div>
</div>

     </div>
    </div>
  )
}

export default About
