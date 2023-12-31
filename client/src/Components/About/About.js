import './About.css';

import React, { useState } from 'react';

import profilePics from '../Images/steno.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const fullText = `I'm Onu Princeley Toochukwu, a Full Stack Developer, passionate about crafting exceptional web experiences, particularly within the MERN stack. My journey in web development has led me to create diverse projects, from user management systems to eCommerce platforms. With a strong foundation in programming and in technologies like JavaScript, HTML, CSS, React, Redux, Node.js, MongoDB, and more, I'm ready to launch my career as a web developer. My enthusiasm for building digital solutions knows no bounds, and I'm eager to make valuable contributions to any industry or organization. I'm seeking a dynamic team where I can apply my skills, learn, and grow. Let's join forces and embark on an extraordinary journey to create something remarkable together.`;

  const truncatedText = showMore ? fullText : fullText.slice(0, 200);

  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={profilePics} alt="profile pics" />
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h3>About me</h3>
            </div>
            <p>
              {truncatedText}
              {!showMore && fullText.length > 200 && (
                <span onClick={toggleShowMore} className="read-more" style={{color:"blue", padding:"10px"}}>
                  ...Read More
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
