import "./SidebarList.css"

import { FcAbout } from "react-icons/fc";
import {FcAddDatabase} from "react-icons/fc";
import {FcAdvertising} from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcHome } from "react-icons/fc"
import {FcLibrary} from "react-icons/fc";
import { FcParallelTasks } from "react-icons/fc";
import { FcStackOfPhotos } from "react-icons/fc";
import React from 'react'
import profileImage from "../../Images/princeley.jpg"

const SidebarList = ({expandSideBar}) => {
  return (
    <>
    {expandSideBar?(
         <div className="navbar-items">
         <div className="sidebar-profile-pic">
 <img src={profileImage} alt="profilepics"/>
         </div>
         <ul>
<li className="nav-item">
 <FcHome size={25}/> Home
</li>
<li className="nav-item">
<FcAbout/> About
</li>
<li className="nav-item">
 <FcBriefcase/>Work Experience
</li>
<li className="nav-item">
 <FcStackOfPhotos/>Tech Stack
</li>
<li className="nav-item">
 <FcLibrary/> Education
</li>
<li className="nav-item">
 <FcAddDatabase/>Projects
</li>
<li className="nav-item">
  <FcAdvertising/>Testimonial
</li>
<li className="nav-item">
 <FcContacts/>Contacts
</li>

          </ul>
 
     </div>
    ):(
        <div className="navbar-items-only-icons">
                 <ul>
<li className="nav-item">
 <FcHome size={25}/> 
</li>
<li className="nav-item">
<FcAbout/> 
</li>
<li className="nav-item">
 <FcParallelTasks/>
</li>
<li className="nav-item">
 <FcStackOfPhotos/>
</li>
<li className="nav-item">
 <FcLibrary/> 
</li>
<li className="nav-item">
 <FcAddDatabase/>
</li>
<li className="nav-item">
  <FcAdvertising/>
</li>
<li className="nav-item">
 <FcContacts/>
</li>

          </ul>
          
        </div>
    )}
   
    </>
  )
}

export default SidebarList
