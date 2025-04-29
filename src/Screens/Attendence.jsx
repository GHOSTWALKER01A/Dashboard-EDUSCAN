import React from 'react'

import "./Attendence.css"
import Admin from '../Components/Admin'



const Attendence = () => {
  return (
    <>
    <Admin/>
    <div class="main-content">
        <div class="header">
            <h1>Attendance Records</h1>
            <div class="user-info">Admin: Jane Doe</div>
        </div>

        <div class="card">
            <h3>Summary (Today)</h3>
            <p>Total Present: 120</p>
            <p>Total Absent: 10</p>
            <p>Total Late: 5</p>
        </div>

        <div class="card filters">
            <select>
                <option>Date: All</option>
                <option>2023-10-01</option>
                <option>2023-10-02</option>
            </select>
            <select>
                <option>Class: All</option>
                <option>Math 101</option>
                <option>Science 102</option>
            </select>
            <select>
                <option>Student: All</option>
                <option>John Doe</option>
                <option>Emma Johnson</option>
            </select>
            {/* <input type="text" placeholder="Search by name or ID"> */}
            <input type="text" placeholder='Search by name or Registration no' />
        </div>

        <div className="card">
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Math 101</td>
                        <td>2023-10-01</td>
                        <td>9:00 AM</td>
                        <td>Present</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Emma Johnson</td>
                        <td>Science 102</td>
                        <td>2023-10-01</td>
                        <td>10:00 AM</td>
                        <td>Absent</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Michael Lee</td>
                        <td>Math 101</td>
                        <td>2023-10-01</td>
                        <td>9:05 AM</td>
                        <td>Late</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="card">
            <h3>Attendance Trends (Last 5 Days)</h3>
            <div className="attendance-graph">Line Chart Placeholder: 92%, 95%, 90%, 97%, 94%</div>
        </div>

        <button className="mark-attendance">Mark Attendance</button>
    </div>
    
    </>
  )
}

export default Attendence