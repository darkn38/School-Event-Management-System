import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional: You can style the sidebar in a separate CSS file

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Admin Panel</h2>
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <Link to="/admin" className="sidebar-link">Dashboard</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/admin/events" className="sidebar-link">Events</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/admin/reminders" className="sidebar-link">Reminders</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/admin/users" className="sidebar-link">Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
