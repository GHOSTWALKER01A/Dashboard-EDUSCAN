import React from 'react'

import "./Schedules.css"



const Schedules = () => {
  return (
    <>
     <div className="main-content">
        
        <div className="header">
            <h1>Class Schedules</h1>
            <div className="user-info">Admin: Jane Doe</div>
        </div>

        
        <div className="card">
            <h3>Summary (Today, 2023-10-02)</h3>
            <p>Total Classes: 15</p>
            <p>Active Teachers: 12</p>
            <p>Rooms Occupied: 10</p>
        </div>

        
        <div className="card filters">
            <select>
                <option>Date: All</option>
                <option>2023-10-02</option>
                <option>2023-10-03</option>
            </select>
            <select>
                <option>Teacher: All</option>
                <option>Ms. Adams</option>
                <option>Mr. Brooks</option>
            </select>
            <select>
                <option>Subject: All</option>
                <option>Math</option>
                <option>Science</option>
            </select>
            {/* <input type="text" placeholder="Search by class or room"> */}
            <input type="text" placeholder='Search by class or room' />
        </div>

        
        <div className="card">
            <h3>Today's Schedule</h3>
            <div className="schedule-grid">
                <div className="schedule-card">
                    <h4>Period 1</h4>
                    <p>Time: 9:00 AM - 10:00 AM</p>
                    <p>Teacher: Ms. Adams</p>
                    <p>Subject: Math 101</p>
                    <p>Room: A-101</p>
                    <p><a href="#">Edit</a> | <a href="#">Delete</a></p>
                </div>
                <div className="schedule-card">
                    <h4>Period 2</h4>
                    <p>Time: 10:00 AM - 11:00 AM</p>
                    <p>Teacher: Mr. Brooks</p>
                    <p>Subject: Science 102</p>
                    <p>Room: B-204</p>
                    <p><a href="#">Edit</a> | <a href="#">Delete</a></p>
                </div>
                <div className="schedule-card">
                    <h4>Period 3</h4>
                    <p>Time: 11:00 AM - 12:00 PM</p>
                    <p>Teacher: Dr. Chen</p>
                    <p>Subject: History 103</p>
                    <p>Room: A-102</p>
                    <p><a href="#">Edit</a> | <a href="#">Delete</a></p>
                </div>
                <div className="schedule-card">
                    <h4>Period 4</h4>
                    <p>Time: 1:00 PM - 2:00 PM</p>
                    <p>Teacher: Ms. Patel</p>
                    <p>Subject: English 104</p>
                    <p>Room: C-301</p>
                    <p><a href="#">Edit</a> | <a href="#">Delete</a></p>
                </div>
            </div>
        </div>

        
        <div className="action-buttons">
            <button className="add-schedule">Add New Schedule</button>
            <button className="export-schedule">Export Schedule</button>
        </div>
    </div>
    
    </>
  )
}

export default Schedules