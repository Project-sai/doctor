// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css'; // Import CSS for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pId, setPId] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    
    const navigate = useNavigate(); // Initialize navigate

    // Function to get CSRF token from cookies
    const getCSRFToken = () => {
        const name = 'csrftoken=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://192.168.0.173:8000/preg/', {
                username,
                password,
                p_id: pId,
                address,
                email,
            }, {
                headers: {
                    'X-CSRFToken': getCSRFToken(), // Include CSRF token in headers
                },
            });
    
            if (response.status === 201) {
                
                console.log(response.data);
                // Redirect to login page with a message
                navigate('/', { state: { message: "Signup successful! Please log in." } });
            }
        } catch (error) {
            console.error("Signup failed", error);
    
            // Check if the error response exists and handle it
            if (error.response) {
                // Handle specific status codes
                if (error.response.status === 400) {
                    alert("This username or ID already exists.");
                    console.log(error.response.data); // Log the response data for debugging
                } else {
                    alert("Error during signup. Please try again.");
                }
            } else {
                alert("Network error. Please check your connection.");
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="P_ID" 
                    value={pId} 
                    onChange={(e) => setPId(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;