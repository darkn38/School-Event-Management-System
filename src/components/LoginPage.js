import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

const LoginPage = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = { emailAddress: email, password: password };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', user);

            if (response.status === 200) {
                setLoggedIn(); // Call setLoggedIn when login is successful
                navigate('/home'); // Redirect to home page after login
            }
        } catch (error) {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </form>
                </div>

                <div className="login-right">
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
