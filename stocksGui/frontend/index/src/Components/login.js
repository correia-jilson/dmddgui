import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Adjust the path as necessary

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            if (response.data.status === 'ok') {
                // Handle successful login here, e.g., redirect to another page or store the token
                console.log('Logged in successfully:', response.data.user);
            } else {
                setError(response.data.error);
            }
        } catch (err) {
            setError('Error logging in');
        }
    };

return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    </div>
);
};

export default Login;


