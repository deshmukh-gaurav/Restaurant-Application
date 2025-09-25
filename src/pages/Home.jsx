import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/reservation.png'; 
import dinner1 from "../assets/dinner1.jpeg"
import dinner2 from "../assets/dinner2.png"
import dinner3 from "../assets/dinner3.png"
import dinner4 from "../assets/dinner4.png"


const Home = () => {
  return (
    <div className="bg-zinc-900 min-h-screen  flex flex-col items-center justify-center p-4">
      <header className="text-center  mb-10">
        <img src={logo} alt="Restaurant Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white">Welcome to Our Restaurant</h1>
        <p className="mt-2 text-lg text-white">Enjoy a delightful dining experience with us!</p>
      </header>

      <div className="flex flex-col gap-5 text-white md:flex-row justify-around w-full max-w-4xl mb-10">
        <div className="bg-zinc-800 shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold">Explore Our Menu</h2>
          <p className="mt-2">Discover our delicious dishes crafted with love.</p>
          <Link to="/menu" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
            View Menu
          </Link>
        </div>

        <div className="bg-zinc-800 shadow-lg p-6 rounded-lg text-center mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold">Make a Reservation</h2>
          <p className="mt-2">Reserve a table for your special occasions.</p>
          <Link to="/reservations" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded">
            Reserve Now
          </Link>
        </div>

        <div className="bg-zinc-800 shadow-lg p-6 rounded-lg text-center mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold">Place an Order</h2>
          <p className="mt-2">Order your favorite dishes for delivery or pickup.</p>
          <Link to="/orders" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded">
            Order Now
          </Link>
        </div>
      </div>

      <section className="max-w-4xl text-white text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Dishes</h2>
        <p className="mt-2 text-lg text-white">Try our popular dishes!</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-zinc-800 shadow-lg p-4 rounded-lg">
            <img src={dinner1} alt="Dish 1" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-2">Dish Name 1</h3>
            <p className="text-white">₹12.99</p>
          </div>
          <div className="bg-zinc-800 shadow-lg p-4 rounded-lg">
            <img src={dinner2} alt="Dish 2" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-2">Dish Name 2</h3>
            <p className="text-white">₹14.99</p>
          </div>
          <div className="bg-zinc-800 shadow-lg p-4 rounded-lg">
            <img src={dinner3} alt="Dish 3" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-2">Dish Name 3</h3>
            <p className="text-white">₹9.99</p>
          </div>
          <div className="bg-zinc-800 shadow-lg p-4 rounded-lg">
            <img src={dinner4} alt="Dish 3" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-2">Dish Name 3</h3>
            <p className="text-white">₹9.99</p>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <p className="text-white">Contact us: (123) 456-7890 | email@example.com</p>
        <p className="text-white">Opening Hours: Mon - Fri: 10 AM - 10 PM</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-white hover:text-blue-500">Facebook</a>
          <a href="#" className="text-white hover:text-blue-500">Instagram</a>
          <a href="#" className="text-white hover:text-blue-500">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
