import React from "react";
import {FaUserFriends, FaSchool } from "react-icons/fa";
import {TbListDetails} from "react-icons/tb"

const Card = () => {
    const courses = [
        {
            title: 'Institute Details',
            icon: <TbListDetails/>,
        },
        {
            title: 'Department',
            duration: '2 Hours',
            icon: <FaSchool/>,
        },
        {
            title: 'User',
            duration: '2 Hours',
            icon: <FaUserFriends/>,
        },
    ]
    return (
        <div className="card--container">
            {courses.map((item) => (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2> {item.title} </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card