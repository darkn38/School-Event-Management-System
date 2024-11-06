import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Our Event Management Platform!</h1>
                    <p>Your one-stop solution for managing and attending exciting events.</p>
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
