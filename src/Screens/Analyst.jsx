import React from 'react'
import Admin from '../Components/Admin'
import "./Analyst.css"

const Analyst = () => {
  return (
    <>
    <Admin/>
     <div class="main-content">
    
        <div class="header">
            <h1>Analytics</h1>
            <div class="user-info">Admin: Jane Doe</div>
        </div>

        
        <div class="card">
            <h3>Summary (October 2023)</h3>
            <div class="dashboard-grid">
                <div>
                    <p>Total Users: 270</p>
                    <p>Attendance Rate: 94%</p>
                </div>
                <div>
                    <p>Classes Conducted: 120</p>
                    <p>Average Class Size: 25</p>
                </div>
            </div>
        </div>

        
        <div className="card filters">
            <select>
                <option>Time Period: All</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
            </select>
            <select>
                <option>Class: All</option>
                <option>Math 101</option>
                <option>Science 102</option>
            </select>
            <select>
                <option>Role: All</option>
                <option>Student</option>
                <option>Teacher</option>
            </select>
            {/* <input type="text" placeholder="Search by metric"> */}
            <input type="text" placeholder='Search by metric' />
        </div>

        
        <div className="card">
            <h3>Attendance by Class</h3>
            <div className="graph-container">Bar Chart Placeholder: Math 101 (95%), Science 102 (88%), History 103 (92%)</div>
        </div>

        <div className="card">
            <h3>User Role Distribution</h3>
            <div className="graph-container">Pie Chart Placeholder: Students (92.6%, 250), Teachers (5.6%, 15), Admins (1.8%, 5)</div>
        </div>

        <div className="card">
            <h3>Attendance Trends (Last 7 Days)</h3>
            <div className="graph-container">Line Chart Placeholder: Oct 1 (92%), Oct 2 (95%), Oct 3 (90%), Oct 4 (97%), Oct 5 (94%), Oct 6 (93%), Oct 7 (96%)</div>
        </div>

    
        <button className="export-button">Export Analytics</button>
    </div>
    
    </>
  )
}

export default Analyst