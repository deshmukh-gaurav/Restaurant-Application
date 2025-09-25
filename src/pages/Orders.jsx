import { useState } from "react";
import OrderForm from "../components/OrderForm";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white mx-auto p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-3">Restaurant Orders</h1>
        <OrderForm onOrderPlaced={addOrder} />

        {/* Orders Section */}
        <h3 className="text-xl font-semibold mt-8">Your Orders</h3>
        <div className="border rounded-lg p-4">
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span>{order.name}</span>
                <span className="font-semibold">₹{order.price.toFixed(2)}</span>
                <span>{order.items.join(", ")}</span>
              </div>
            ))
          ) : (
            <p>No items in your order yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
