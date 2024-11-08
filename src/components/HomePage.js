import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get userRole from localStorage and set it in state
        const role = localStorage.getItem('userRole');
        console.log('Role from localStorage:', role);  // Add this for debugging
        setUserRole(role);
    }, []);

    const goToAdmin = () => {
        navigate('/admin');
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Our Event Management Platform!</h1>
                    <p>Your one-stop solution for managing and attending exciting events.</p>
                    {/* Show the button only if the user is an admin */}
                    {userRole && userRole === 'Admin' &&(
                        <button onClick={goToAdmin}>Go to Admin Page</button> // Admin button
                    )}
                </div>
            </section>

            {/* Popular Events Section */}
            <section className="popular-events">
                <h2>Popular Events</h2>
                <div className="event-cards">
                    <div className="event-card event1">
                        <p>Event 1</p>
                    </div>
                    <div className="event-card event2">
                        <p>Event 2</p>
                    </div>
                    <div className="event-card event3">
                        <p>Event 3</p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="event-cards">
                    <div className="event-card event4">
                        <p>Upcoming Event 1</p>
                    </div>
                    <div className="event-card event5">
                        <p>Upcoming Event 2</p>
                    </div>
                    <div className="event-card event6">
                        <p>Upcoming Event 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
