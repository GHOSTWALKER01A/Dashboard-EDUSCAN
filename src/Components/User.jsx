import React from 'react'

import "./User.css"







const User = () => {
  return (
    <>
    <div class="main-content">
    
        <div classname="header">
            <h1>User Management</h1>
            <div classname="user-info">Admin: Jane Doe</div>
        </div>

        
        <div classname="card">
            <h3>User Summary</h3>
            <p>Total Users: 270</p>
            <p>Students: 250</p>
            <p>Teachers: 15</p>
            <p>Admins: 5</p>
        </div>

    
        <div className="card filters">
            <select>
                <option>Role: All</option>
                <option>Student</option>
                <option>Teacher</option>
                <option>Admin</option>
            </select>
            <select>
                <option>Status: All</option>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            {/* <input type="text" placeholder="Search by name or email"> */}
            <input type="text" placeholder='Search by Name or Email' />
        </div>


        <div className="card">
            <h3>User List</h3>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Student</td>
                        <td>john.doe@example.com</td>
                        <td>Active</td>
                        <td>2023-10-02 08:30 AM</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Emma Johnson</td>
                        <td>Teacher</td>
                        <td>emma.johnson@example.com</td>
                        <td>Active</td>
                        <td>2023-10-02 07:45 AM</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Michael Lee</td>
                        <td>Student</td>
                        <td>michael.lee@example.com</td>
                        <td>Inactive</td>
                        <td>2023-09-30 09:00 AM</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Sarah Patel</td>
                        <td>Admin</td>
                        <td>sarah.patel@example.com</td>
                        <td>Active</td>
                        <td>2023-10-02 09:15 AM</td>
                        <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        <div className="action-buttons">
            <button className="add-user">Add New User</button>
            <button className="export-users">Export Users</button>
        </div>
    </div>
    
    </>
  )
}

export default User