import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './Screens/Dashboard.jsx'
import Attendence from './Screens/Attendence.jsx'
import Schedules from './Screens/Schedules.jsx'
import Managment from './Screens/Managment.jsx'
import User from './Screens/User.jsx'
import Analyst from './Screens/Analyst.jsx'







const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/attendence" element={<Attendence/>}/>
      <Route path="/schedules" element={<Schedules/>}/>
      <Route path="/management" element={<Managment/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/analytics" element={<Analyst/>}/>
      {/* <Route path="/settings" element={<Se/>}/> */}
    </Routes>

   </Router>
    
    </>
  )
}

export default App