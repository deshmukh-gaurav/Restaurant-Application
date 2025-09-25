import React from 'react';


const MenuItem = ({ item, onAddToOrder }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p>{item.description}</p>
      <p className="font-semibold text-lg">₹{item.price.toFixed(2)}</p>
      <button 
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        onClick={() => onAddToOrder(item)}
      >
        Add to Order
      </button>
    </div>
  );
};

export default MenuItem;
