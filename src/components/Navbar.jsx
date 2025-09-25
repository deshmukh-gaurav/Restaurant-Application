import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="Restaurant Logo" className="w-10 h-10 md:w-12 md:h-12" />


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/menu" className="text-white hover:text-gray-300">Menu</Link>
          <Link to="/orders" className="text-white hover:text-gray-300">Orders</Link>
          <Link to="/reservations" className="text-white hover:text-gray-300">Reservations</Link>
          <Link to="/aboutus" className="text-white hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link to="/menu" className="text-white hover:text-gray-300" onClick={toggleMenu}>Menu</Link>
          <Link to="/orders" className="text-white hover:text-gray-300" onClick={toggleMenu}>Orders</Link>
          <Link to="/reservations" className="text-white hover:text-gray-300" onClick={toggleMenu}>Reservations</Link>
          <Link to="/aboutus" className="text-white hover:text-gray-300" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
