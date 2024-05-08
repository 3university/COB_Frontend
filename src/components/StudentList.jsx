import React from "react";
import "../styles/studentList.css"
import Image1 from "../assets/Image1.jpg"

const StudentList = () =>{
    const teachers = [
        {
        image: Image1,
        name: 'Prof. Jhone Doe',
        duration: '20 hours lesson',
        cost: '100',
    },
]
    return(
        <div className="teacher--list">
            <div className="list--header">
                <h2>Students</h2>
                {/* <select>
                    <option value="english">English</option>
                </select> */}
            </div>
            
        </div>
    )
}

export default StudentList