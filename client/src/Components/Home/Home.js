import React, { useState } from 'react';

import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import myCv from './Resume.pdf';

const Home = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const mobileNavStyle = {
    display: isMobileNavVisible ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <h1>Hi, I'm a </h1>
        <h2 style={{ color: 'white' }}>
          <Typewriter
            options={{
              strings: [
                'Full Stack Software Developer',
                'MERN Stack Developer',
                'React Developer',
                'Web Developer',
                'Javascript Developer',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriter',
              cursorClassName: 'typewriter-cursor',
            }}
            className="typewriter-text"
          />
        </h2>
        <div>
          <button className="btn2" style={{ backgroundColor: 'white', color: 'black', margin: '10px', cursor: 'pointer' }}>
            <a
              href={myCv}
              download="Onu Princeley Toochukwu Resume"
              style={{
                textDecoration: 'none',
                color: 'black',
                display: 'block',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '16px',
                textAlign: 'center',
              
              }}
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="d-md-none">
        <button
  className="mobile-nav-toggle"
  style={{
    position: 'relative', // Set to relative
    float: 'right', // Float the button to the right
    zIndex: '999',
    marginTop: '-130px', // Add margin-top to position it at the top
  }}
  onClick={toggleMobileNav}
>
  ☰
</button>

          <div className="mobile-nav" style={mobileNavStyle}>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
            <Link to="#about" spy={true} smooth={true}>
              About
            </Link>
            <Link to="tech" spy={true} smooth={true}>
              Tech
            </Link>
            <Link to="#projects" spy={true} smooth={true}>
              Projects
            </Link>
            <Link to="#works" spy={true} smooth={true}>
              Work Experience
            </Link>
            <Link to="education" spy={true} smooth={true}>
              Education
            </Link>
            <Link to="contacts" spy={true} smooth={true}>
              Contact Me
            </Link>
            {/* Add more mobile navigation links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
