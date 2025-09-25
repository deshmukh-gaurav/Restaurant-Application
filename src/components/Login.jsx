// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/login', { email, password });
            localStorage.setItem('token', res.data.token);
            onLogin(res.data.token);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-900">
            <form 
                onSubmit={handleSubmit} 
                className="bg-zinc-800 text-white shadow-lg rounded-lg p-8 max-w-md w-full"
            >
                <h2 className="text-2xl font-bold mb-6 text-center ">Login</h2>
                <div className="mb-4  ">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                    Login
                </button>
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
