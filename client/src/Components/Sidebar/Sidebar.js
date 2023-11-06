// Importing a CSS file for styling.

import "./Sidebar.css"

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import Home from "../Home/Home";
import React from 'react'
import SidebarList from "./SidebarList/SidebarList";
import { useState } from "react";

// Importing specific icons from the react-icons library.

// Defining a functional component named Sidebar.
const Sidebar = () => {
    // Declaring a state variable expandSideBar and its setter setExpandSideBar using the useState hook.
    const [expandSideBar, setExpandSideBar]=useState(false)

    // Declaring a function handleExpandClick which toggles the value of expandSideBar.
    const handleExpandClick=()=>{
        setExpandSideBar(!expandSideBar)
    }

    // Returning JSX elements to render.
    return (
        <div className="container-fluid sidebar-section">
            <div className={expandSideBar?"sidebar-expand sidebar":"sidebar"}>
          <div className="icon-for-sidebar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
         {/* Conditional rendering based on expandSideBar value */}
       {expandSideBar ? (<BsChevronLeft size={30}/>) :
        (<BsChevronRight size={30}/>)}
                    </p>
                </div>
                <SidebarList expandSideBar={expandSideBar}/>
                
                </div>
                <div className="container">
                   <Home/>
            </div>
        </div>
    )
}

// Exporting Sidebar as the default export of this module.
export default Sidebar
