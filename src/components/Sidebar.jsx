import React from "react";
import {BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle} from "react-icons/bi"
import "../styles/sidebar.css"
const Sidebar = () =>{
    return(
        <div className="menu">
            <div className="logo">
                <BiBookAlt className="icon"/>
                <h2>COB Dashboard</h2>
            </div>

            <div className="menu--list">
                <a href="#" className="item">
                    <BiHome className="icon"/>
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiTask className="icon"/>
                    Users
                </a>
                <a href="#" className="item">
                    <BiSolidReport className="icon"/>
                    Department
                </a>
                <a href="#" className="item">
                    <BiStats className="icon"/>
                    Stats
                </a>
                <a href="#" className="item">
                    <BiMessage className="icon"/>
                    Message
                </a>
                <a href="#" className="item">
                    <BiHelpCircle className="icon"/>
                    Help
                </a>
            </div>
        </div>
    )
}

export default Sidebar;