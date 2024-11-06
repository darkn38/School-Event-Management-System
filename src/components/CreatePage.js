import React, { useState } from 'react';
import './CreatePage.css'; // Link to CSS file

const CreateEventPage = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Event Created!');
    };

    return (
        <div className="create-event-page">
            <section className="create-event-content">
                <h1>Create New Event</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Event Location"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                    />
                    <textarea
                        placeholder="Event Description"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    ></textarea>
                    <button type="submit">Create Event</button>
                </form>
            </section>
        </div>
    );
};

export default CreateEventPage;
