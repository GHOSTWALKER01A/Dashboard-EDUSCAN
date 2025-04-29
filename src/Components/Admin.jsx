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
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="./attendence">Attendance</Link></li>
            <li> <Link to="./schedules">Schedules</Link></li>
            <li><Link to="./management">Managment</Link></li>
            <li><Link to="./users">Users</Link></li>
            <li><Link to="./analytics">Analytics</Link></li>
            <li><Link>Settings</Link></li>
        </ul>
        <button className="theme-toggle" onClick={Toggletheme}>{Lighttheme ? 'Switch to Night' : 'Switch to Light'}</button>
    </div>

    
    
    </>
  )
}

export default Admin