import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call logout function from props
        navigate('/login'); // Redirect to login page after logout
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
                </div>
                {/* Logout Button placed at the rightmost side */}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
