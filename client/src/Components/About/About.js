import "./About.css"

import React from 'react'
import profilePics from "../Images/princeley.jpg"

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
<p> I'm Onu Princeley Toochukwu, a passionate Full Stack Developer specializing in the MERN stack.

My journey in web development has led me to create a diverse range of projects, including user management systems, eCommerce platforms, etc. Armed with a strong grasp of the fundamentals and proficiency in technologies such as JavaScript, HTML, CSS, React, Redux, Node.js,etc. And MongoDB, I'm ready to embark on my professional journey as a web developer.

My excitement for crafting digital experiences knows no bounds, and I'm confident in my ability to contribute effectively in an industry or agency setting. I'm eager to bring my enthusiasm and skills to a dynamic team, where I can continue to learn and grow.

Let's collaborate and create something extraordinary together.
</p>
</div>
</div>

     </div>
    </div>
  )
}

export default About
