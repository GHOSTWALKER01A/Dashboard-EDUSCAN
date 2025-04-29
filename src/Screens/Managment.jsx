import React from 'react'

const Managment = () => {
  return (
    <>
    
   
    {/* <!-- Main Content --> */}
    <div class="main-content">
        {/* <!-- Header --> */}
        <div class="header">
            <h1>Admin Dashboard</h1>
            <div class="user-info">Admin: Jane Doe</div>
        </div>

        {/* <!-- Management Section --> */}
        <div class="section">
            <h2>Management</h2>
            <div class="card">
                {/* <!-- Academic Materials --> */}
                <div class="management-panel">
                    <div class="panel-header">
                        <h3>Academic Materials</h3>
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="panel-content">
                        <div class="resources-grid">
                            <div class="resource-item">
                                <p>Math 101 Notes</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                            <div class="resource-item">
                                <p>Science 102 Slides</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                            <div class="resource-item">
                                <p>History 103 Guide</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                        </div>
                        <button class="action-button">Upload New Material</button>
                    </div>
                </div>

                {/* <!-- Previous Year Papers --> */}
                <div class="management-panel">
                    <div class="panel-header">
                        <h3>Previous Year Papers</h3>
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="panel-content">
                        <div class="resources-grid">
                            <div class="resource-item">
                                <p>Math 101 - 2022</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                            <div class="resource-item">
                                <p>Science 102 - 2022</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                            <div class="resource-item">
                                <p>History 103 - 2021</p>
                                <a href="#">View</a> | <a href="#">Edit</a>
                            </div>
                        </div>
                        <button class="action-button">Upload New Paper</button>
                    </div>
                </div>

                {/* <!-- Leave Applications --> */}
                <div class="management-panel">
                    <div class="panel-header">
                        <h3>Leave Applications</h3>
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="panel-content">
                        <table class="leave-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Leave Type</th>
                                    <th>Date</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>Sick Leave</td>
                                    <td>2023-10-10</td>
                                    <td>Flu</td>
                                    <td>Pending</td>
                                    <td><a href="#">Approve</a> | <a href="#">Reject</a></td>
                                </tr>
                                <tr>
                                    <td>Emma Johnson</td>
                                    <td>Personal Leave</td>
                                    <td>2023-10-12</td>
                                    <td>Family Event</td>
                                    <td>Approved</td>
                                    <td><a href="#">View</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- Doubt Submissions --> */}
                <div class="management-panel">
                    <div class="panel-header">
                        <h3>Doubt Submissions</h3>
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="panel-content">
                        <table class="doubt-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Doubt</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Michael Lee</td>
                                    <td>Math 101</td>
                                    <td>Question on integrals</td>
                                    <td>Pending</td>
                                    <td><a href="#">Respond</a> | <a href="#">Archive</a></td>
                                </tr>
                                <tr>
                                    <td>Sarah Patel</td>
                                    <td>Science 102</td>
                                    <td>Clarification on chemical bonds</td>
                                    <td>Resolved</td>
                                    <td><a href="#">View</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- Events Handling --> */}
                <div class="management-panel">
                    <div class="panel-header">
                        <h3>Manage Events</h3>
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="panel-content">
                        <div class="events-grid">
                            <div class="event-card">
                                <h4>Science Fair 2023</h4>
                                <p>Date: October 15, 2023</p>
                                <p>Time: 10:00 AM - 3:00 PM</p>
                                <p>Location: Main Hall</p>
                                <a href="#" class="action-button" style="display: inline-block;">Edit</a>
                            </div>
                            <div class="event-card">
                                <h4>Parent-Teacher Meeting</h4>
                                <p>Date: October 20, 2023</p>
                                <p>Time: 2:00 PM - 5:00 PM</p>
                                <p>Location: Conference Room</p>
                                <a href="#" class="action-button" style="display: inline-block;">Edit</a>
                            </div>
                            <div class="event-card">
                                <h4>Cultural Fest</h4>
                                <p>Date: November 5, 2023</p>
                                <p>Time: 9:00 AM - 6:00 PM</p>
                                <p>Location: College Grounds</p>
                                <a href="#" class="action-button" style="display: inline-block;">Edit</a>
                            </div>
                        </div>
                        <button class="action-button">Add New Event</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Managment
