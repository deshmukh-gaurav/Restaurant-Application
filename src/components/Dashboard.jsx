// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [role, setRole] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                // Fetch user role and content from backend based on the role
                const res = await axios.get(`/api/${role}/dashboard`, { headers: { 'x-auth-token': token } });
                setRole(res.data.role);
                setContent(res.data.msg);
            } catch (error) {
                console.error('Error fetching dashboard data', error);
            }
        };

        fetchData();
    }, [role]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                    Welcome to the {role} Dashboard
                </h2>
                <p className="text-lg text-gray-600 text-center">
                    {content ? content : 'Loading dashboard content...'}
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
