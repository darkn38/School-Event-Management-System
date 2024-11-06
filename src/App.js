import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import CreatePage from './components/CreatePage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    // Check localStorage when the app loads to set initial logged-in state
    useEffect(() => {
        const storedLoginState = localStorage.getItem('loggedIn');
        if (storedLoginState === 'true') {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true'); // Save the login state
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('loggedIn'); // Remove the login state from localStorage
    };

    return (
        <Router>
            <Routes>
                {/* Login Page Route */}
                <Route 
                    path="/login" 
                    element={loggedIn ? <HomePage logout={handleLogout} /> : <LoginPage setLoggedIn={handleLogin} />} 
                />

                {/* Protected Routes with Navbar */}
                {loggedIn && (
                    <>
                        <Route 
                            path="/home" 
                            element={<><Navbar logout={handleLogout} /><HomePage logout={handleLogout} /></>} 
                        />
                        <Route 
                            path="/events" 
                            element={<><Navbar logout={handleLogout} /><EventsPage /></>} 
                        />
                        <Route 
                            path="/about" 
                            element={<><Navbar logout={handleLogout} /><AboutPage /></>} 
                        />
                        <Route 
                            path="/create" 
                            element={<><Navbar logout={handleLogout} /><CreatePage /></>} 
                        />
                        <Route 
                            path="/contact" 
                            element={<><Navbar logout={handleLogout} /><ContactPage /></>} 
                        />
                    </>
                )}

                {/* Default Route Redirect */}
                <Route 
                    path="/" 
                    element={loggedIn ? <HomePage logout={handleLogout} /> : <LoginPage setLoggedIn={handleLogin} />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
