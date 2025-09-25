// Register.jsx
import React, { useState } from "react";
import { registerUser } from "../apiService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Ensure the default value is lowercase
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setSuccess(true);
      setError("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Show backend error message
      } else {
        setError("Registration failed. Please try again.");
      }
      setSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Register
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="customer">Customer</option>
            <option value="provider">Provider</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Register
        </button>

        {success && (
          <p className="mt-4 text-green-500 text-center">
            Registration successful!
          </p>
        )}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
