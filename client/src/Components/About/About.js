import "./About.css"

import React from 'react'
import profilePics from "../Images/princeley.jpg"

const About = () => {
  return (
    <div className="container about-section">
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Pellentesque placerat ante a hendrerit pharetra. Nam vitae ex 
a augue malesuada efficitur. Vivamus turpis tortor, pellentesque
 eget pharetra eu, tristique id lacus. Donec at nunc nec neque 
 auctor viverra ac ut odio. Proin dictum tellus vel feugiat tristique.
  Crasnon nulla sit amet diam tincidunt dapibus. Nullam a nunc risus.
</p>
</div>
</div>

     </div>
    </div>
  )
}

export default About
