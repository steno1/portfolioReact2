// Importing CSS styles for SidebarList component

import "./SidebarList.css"

import { FcAbout } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcHome } from "react-icons/fc"
import { FcLibrary } from "react-icons/fc";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link } from 'react-scroll';
import React from 'react'
import profileImage from "../../Images/princeley.jpg"

// Defining the SidebarList component as a functional component
const SidebarList = ({ expandSideBar }) => {
  return (
    <>
      {/* Conditional rendering based on the value of expandSideBar prop */}
      {expandSideBar ? (
        // Rendered when expandSideBar is true
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            {/* Displaying the profile picture */}
            <img src={profileImage} alt="profilepics" />
          </div>
          <ul>
            {/* List of navigation items with icons and text */}
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true}>
                {/* Home icon */}
                <FcHome size={25}/> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true}>
                {/* About icon */}
                <FcAbout/> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="work" spy={true} smooth={true}>
                {/* Work Experience icon */}
                <FcBriefcase/> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tech" spy={true} smooth={true}>
                {/* Tech Stack icon */}
                <FcStackOfPhotos/> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Education" spy={true} smooth={true}>
                {/* Education icon */}
                <FcLibrary/> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Projects" spy={true} smooth={true}>
                {/* Projects icon */}
                <FcAddDatabase/> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Testimonials" spy={true} smooth={true}>
                {/* Testimonials icon */}
                <FcAdvertising/> Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" spy={true} smooth={true}>
                {/* Contacts icon */}
                <FcContacts/> Contacts
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        // Rendered when expandSideBar is false
        <div className="navbar-items-only-icons">
          <ul>
            {/* List of navigation items with icons only */}
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true}>
                {/* Home icon */}
                <FcHome size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true}>
                {/* About icon */}
                <FcAbout/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="work" spy={true} smooth={true}>
                {/* Work Experience icon */}
                <FcBriefcase/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tech" spy={true} smooth={true}>
                {/* Tech Stack icon */}
                <FcStackOfPhotos/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Education" spy={true} smooth={true}>
                {/* Education icon */}
                <FcLibrary/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Projects" spy={true} smooth={true}>
                {/* Projects icon */}
                <FcAddDatabase/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Testimonials" spy={true} smooth={true}>
                {/* Testimonials icon */}
                <FcAdvertising/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" spy={true} smooth={true}>
                {/* Contacts icon */}
                <FcContacts/>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

// Exporting SidebarList component as the default export
export default SidebarList
