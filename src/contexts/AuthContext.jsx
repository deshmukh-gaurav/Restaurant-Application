// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to hold user data

    const login = (userData) => {
        setUser(userData); // Simulate a login by setting user data
    };

    const logout = () => {
        setUser(null); // Simulate a logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
