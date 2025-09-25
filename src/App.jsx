import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';


import Home from './pages/Home';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import Reservation from './pages/Reservation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false); 

    const handleLogin = () => setIsAuthenticated(true);
    const handleRegister = () => setIsRegistered(true);

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />

                {/* Protected Routes */}
                <Route
                    path="/orders"
                    element={isAuthenticated ? <Orders /> : <Navigate to="/login" />}
                />
                <Route
                    path="/reservations"
                    element={isAuthenticated ? <Reservation /> : <Navigate to="/login" />}
                />
                <Route
                    path="/dashboard"
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
                />

                {/* Authentication Routes */}
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" />
                        ) : isRegistered ? (
                            <Login onLogin={handleLogin} />
                        ) : (
                            <Navigate to="/register" />
                        )
                    }
                />
                <Route
                    path="/register"
                    element={<Register onRegister={handleRegister} />}
                />

                {/* Redirect any unknown route to home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
