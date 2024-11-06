// src/components/User.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; // Importing the CSS file for styling

const User = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ firstName: '', lastName: '', emailAddress: '', role: '', password: '' });
    const [editMode, setEditMode] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    const apiUrl = 'http://localhost:8080/api/users'; // Ensure this is correct

    // Fetch users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(apiUrl);
            console.log(response.data); // Log the fetched users
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Create or update user
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await axios.put(`${apiUrl}/${currentUserId}`, user);
            } else {
                await axios.post(apiUrl, user);
            }
            setUser({ firstName: '', lastName: '', emailAddress: '', role: '', password: '' });
            setEditMode(false);
            fetchUsers();
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    // Edit user
    const handleEdit = (user) => {
        setUser({ 
            firstName: user.firstName, 
            lastName: user.lastName, 
            emailAddress: user.emailAddress, 
            role: user.role,
            password: '' // Optionally keep password empty on edit
        });
        setEditMode(true);
        setCurrentUserId(user.userID); // Change to user.userID
    };

    // Delete user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/${id}`);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="user-container">
            <h2>User Management</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={user.emailAddress}
                    onChange={(e) => setUser({ ...user, emailAddress: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    required={!editMode} // Require password only when adding a new user
                />
                <button type="submit" className="submit-button">
                    {editMode ? 'Update User' : 'Add User'}
                </button>
            </form>
            <div className="user-list">
                <h3>Existing Users</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.userID} className="user-item">
                            {user.firstName} {user.lastName} - {user.emailAddress} - {user.role}
                            <div className="action-buttons">
                                <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
                                <button onClick={() => handleDelete(user.userID)} className="delete-button">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default User;
