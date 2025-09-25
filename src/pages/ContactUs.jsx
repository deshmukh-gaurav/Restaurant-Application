// ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${name}. We will get back to you shortly!`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className=" bg-zinc-900 min-h-screen text-white mx-auto p-4">
      <div className='container mx-auto '>
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className=" mb-6">Have any questions? We’d love to hear from you!</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border bg-zinc-700 p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border bg-zinc-700 p-2 rounded w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border bg-zinc-700 p-2 rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500  py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
};

export default ContactUs;
