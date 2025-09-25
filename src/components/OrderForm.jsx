import { useState } from 'react';
import { createOrder } from '../apiService';

const OrderForm = ({ onOrderPlaced }) => {
  const [name, setName] = useState('');
  const [items, setItems] = useState('');
  const [price, setPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Define success message state
  const [errorMessage, setErrorMessage] = useState(''); // Optionally, define error message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = { name, items: items.split(','), price }; // Prepare order data
    try {
      const savedOrder = await createOrder(orderData); // Call the API function
      setSuccessMessage(`Order created successfully: ${savedOrder._id}`);
      setErrorMessage(''); // Clear any previous error message
      // Optionally reset the form fields
      setName('');
      setItems('');
      setPrice('');
      if (onOrderPlaced) {
        onOrderPlaced(savedOrder); // Call the prop function to notify parent component
      }
    } catch (error) {
      console.error('Error creating order:', error);
      setErrorMessage('Failed to create order. Please try again.'); // Set error message on failure
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border bg-zinc-800 p-2 rounded w-full"
        required
      />
      <textarea
        placeholder="Items (comma separated)"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        className="border bg-zinc-800 p-2 rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border bg-zinc-800 p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Place Order</button>

      {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Display success message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
    </form>
  );
};

export default OrderForm;
