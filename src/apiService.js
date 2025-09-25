import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; 
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; 
    }
};


export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data; 
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; 
    }
};


export const getMenuItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/menu`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error; 
    }
};

export const getMenuItemById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/menu/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching menu item with ID ${id}:`, error);
        throw error;
    }
};


export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data; 
    } catch (error) {
        console.error('Error creating order:', error);
        throw error; 
    }
};

export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};


export const getReservations = async () => {
    try {
        const response = await axios.get(`${API_URL}/reservations`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching reservations:', error);
        throw error; 
    }
};


export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_URL}/reservations`, reservationData);
        return response.data; 
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error; 
    }
};
