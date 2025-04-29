import React,{Usestate} from 'react'

import "./Dashboard.css"
import Admin from '../Components/Admin'

const Dashboard = () => {
  return (
    <>
    <Admin/>
    <div className="main-content">
        <div className="header">
            <h1>Dashboard Overview</h1>
            <div className="user-info">Admin:<b>RoY</b></div>
        </div>

        <div className="dashboard-grid">
            <div className="card">
                <h3>Total Students</h3>
                <p>250</p>
            </div>
            <div className="card">
                <h3>Total Teachers</h3>
                <p>20</p>
            </div>
            <div className="card">
                <h3>Classes Today</h3>
                <p>15</p>
            </div>
            <div className="card">
                <h3>Attendance Rate</h3>
                <p>95%</p>
            </div>
        </div>

        <div className="card">
            <h3>Recent Activity</h3>
            <p>Teacher X updated schedule at 8:45 AM</p>
            <p>Student Y marked present at 9:00 AM</p>
        </div>

        <div className="card">
            <h3>Attendance Trends</h3>
            <div className="attendance-graph">Line Chart Placeholder (Daily Attendance: 92%, 95%, 90%, 97%, 94%)</div>
        </div>
    </div>
    
    </>
  )
}

export default Dashboard