import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import profileIcon from '../images/user.png';

const Navbar = ({ logout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userRole, setUserRole] = useState(null); // Store the role state locally
    const navigate = useNavigate();

    useEffect(() => {
        // Check localStorage for the role and set the state accordingly
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []); // This effect runs only once on component mount

    const handleLogout = () => {
        logout(); // Call logout function from props
        localStorage.removeItem('userRole'); // Remove role from localStorage
        localStorage.removeItem('isAdmin'); // Remove isAdmin flag from localStorage
        localStorage.setItem('loggedIn', 'false'); // Set loggedIn to false in localStorage
        navigate('/login'); // Redirect to login page after logout
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMyAccount = () => {
        navigate('/profile'); // Redirect to profile page
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo">
                    <img src={require('../images/logo.png')} alt="Logo" className="logo-img" />
                </div>
                <div className="nav-links">
                    <Link to="/home">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/create">Create</Link>
                    <Link to="/contact">Contact Us</Link>
                    {/* Conditionally render Admin link if userRole is 'Admin' */}
                    {userRole === 'Admin' && (
                        <Link to="/admin">Admin</Link>
                    )}
                </div>
                <div className="profile-section">
                    <img
                        src={profileIcon}
                        alt="Profile"
                        className="profile-icon"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <button onClick={handleMyAccount} className="dropdown-item">
                                <i className="icon-user"></i> My Account
                            </button>
                            <button onClick={handleLogout} className="dropdown-item">
                                <i className="icon-logout"></i> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
