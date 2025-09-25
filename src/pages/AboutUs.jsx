// AboutUs.jsx
import React from 'react';
import about from "../assets/about.png"

const AboutUs = () => {
  return (
    <div className=" bg-zinc-900 min-h-screen mx-auto p-4">
     <div className='container mx-auto'>
     <img src={about} alt="Restaurant Logo" className="w-32 mx-auto m-4" />
      <h2 className="text-4xl text-white font-bold mb-4">About Us</h2>
      <p className="text-white  mb-4">
        Welcome to our Restaurant, Established in 1998, we have been serving
        our community with a passion for quality food and exceptional service. Our mission is to provide a memorable
        dining experience that brings people together over delicious, carefully crafted meals.
      </p>
      <p className="text-white">
        We believe in using only the freshest ingredients, locally sourced whenever possible, to create dishes
        that are both classic and innovative. Thank you for being a part of our journey!
      </p>
     </div>
    </div>
  );
};

export default AboutUs;
