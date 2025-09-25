import React, { useEffect, useState } from 'react';
import { getMenuItems } from '../apiService'; 
import MenuItem from '../components/MenuItem'; 
import { menuItems as hardCodedMenu } from '../data/menuItems'; 

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const items = await getMenuItems(); 
                setMenuItems(items);
            } catch (error) {
                console.error('Error fetching menu items:', error);
                setError('Failed to fetch menu items.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    const handleAddToOrder = (item) => {
        setOrders((prevOrders) => [...prevOrders, item]);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

   
    const displayItems = menuItems.length > 0 ? menuItems : hardCodedMenu;

    return (
        <div className="w-full min-h-screen bg-zinc-900 text-white px-5 p-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4">Menu</h2>
                {displayItems.length === 0 ? (
                    <p className="text-lg">No menu items available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {displayItems.map((item) => (
                            <MenuItem
                                key={item._id}
                                item={item}
                                onAddToOrder={handleAddToOrder}
                            />
                        ))}
                    </div>
                )}
                <h3 className="text-xl font-semibold mt-8">Your Orders</h3>
                <div className="border rounded-lg p-4">
                    {orders.length > 0 ? (
                        <>
                            {orders.map((order, index) => (
                                <div key={index} className="flex justify-between py-2 border-b">
                                    <span>{order.name}</span>
                                    <span className="font-semibold">₹{order.price.toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="flex justify-between py-2 font-bold">
                                <span>Total</span>
                                <span>₹{orders.reduce((total, order) => total + order.price, 0).toFixed(2)}</span>
                            </div>
                        </>
                    ) : (
                        <p>No items in your order yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
