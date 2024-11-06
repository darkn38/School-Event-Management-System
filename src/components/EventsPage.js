import React, { useState } from 'react';
import './EventsPage.css'; // Link to the EventsPage CSS file

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const events = [
        { id: 1, name: 'Event 1', date: '2024-11-15', location: 'New York', description: 'An exciting event in New York!' },
        { id: 2, name: 'Event 2', date: '2024-12-01', location: 'Los Angeles', description: 'Join us in Los Angeles for an unforgettable experience.' },
        { id: 3, name: 'Event 3', date: '2024-12-10', location: 'San Francisco', description: 'A must-attend event in San Francisco.' },
    ];

    // Handle selecting an event for registration
    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    // Handle user registration
    const handleRegistration = (e) => {
        e.preventDefault();
        if (selectedEvent && userInfo.name && userInfo.email) {
            // Normally, this data would be sent to a backend API for saving registration info
            alert(`Registration for ${selectedEvent.name} is successful!`);
        } else {
            alert("Please fill in all details.");
        }
    };

    // Simulate a successful payment (payment gateway integration like Stripe could go here)
    const handlePayment = () => {
        if (selectedEvent) {
            setPaymentSuccess(true);
            alert(`Payment for ${selectedEvent.name} was successful!`);
        } else {
            alert("Select an event to pay for.");
        }
    };

    return (
        <div className="events-page">
            <section className="events-header">
                <h1>Upcoming Events</h1>
            </section>

            <div className="events-content">
                {/* Left side - Events list */}
                <section className="events-list">
                    {events.map((event) => (
                        <div className="event-card" key={event.id} onClick={() => handleEventSelect(event)}>
                            <h2>{event.name}</h2>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </section>

                {/* Right side - Registration & Payment */}
                {selectedEvent && !paymentSuccess && (
                    <section className="payment-section">
                        <h2>Register for {selectedEvent.name}</h2>
                        <form onSubmit={handleRegistration}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={userInfo.name}
                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={userInfo.email}
                                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                required
                            />
                            <button type="submit">Register</button>
                        </form>

                        <button className="payment-button" onClick={handlePayment}>Make Payment</button>
                    </section>
                )}

                {paymentSuccess && (
                    <section className="payment-success">
                        <h2>Your registration for {selectedEvent.name} is complete!</h2>
                        <p>We look forward to seeing you at the event.</p>
                    </section>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
