import React,{useState} from 'react'
import {Link } from 'react-router-dom'


import "./Admin.css"



const Admin = () => {

    const [Lighttheme,setLighttheme] = useState(false)

    const Toggletheme = ()=>{
    setLighttheme(!Lighttheme);
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', !Lighttheme ? 'light' : 'dark');
    }
    
  return (
    <>
     <div className="sidebar">
        <div className="logo">EduScan</div>
        <ul>
            <li><a href="dashboard.jsx">Dashboard</a></li>
            <li><Link to="./Attendence">Attendance</Link></li>
            <li><a href="schedules.html">Schedules</a></li>
            <li><a href="Managment.html">Managment</a></li>
            <li><a href="users.html">Users</a></li>
            <li><a href="analytics.html">Analytics</a></li>
            <li><a href="settings.html">Settings</a></li>
        </ul>
        <button className="theme-toggle" onClick={Toggletheme}>{Lighttheme ? 'Switch to Night' : 'Switch to Light'}</button>
    </div>

    
    
    </>
  )
}

export default Admin