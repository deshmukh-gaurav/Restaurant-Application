// src/components/SingleMenuItem.js
import React, { useEffect, useState } from 'react';
import { getMenuItemById } from '../apiService';

const SingleMenuItem = ({ itemId }) => {
    const [menuItem, setMenuItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const item = await getMenuItemById(itemId); // Fetch menu item by ID
                setMenuItem(item);
            } catch (error) {
                console.error('Error fetching menu item:', error);
                setError('Failed to fetch menu item.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItem();
    }, [itemId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        menuItem && (
            <div className="border p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg">{menuItem.name}</h3>
                <p>{menuItem.description}</p>
                <p className="font-semibold text-lg">₹{menuItem.price.toFixed(2)}</p>
            </div>
        )
    );
};

export default SingleMenuItem;
