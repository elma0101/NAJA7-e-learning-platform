// src/pages/RegisterPage/RegisterPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  // State for all form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('2eme_BAC_SVT'); // Default value

  // State for handling form submission status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic frontend validation
    if (!name || !email || !password || !level) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      // The request body must match the backend's RegisterRequest DTO
      const requestBody = {
        name,
        email,
        password,
        level,
      };

      // Call the backend registration endpoint
      await apiClient.post('/auth/register', requestBody);

      setSuccess("Registration successful! You can now log in.");
      
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');

      // Optional: Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err: any) {
      console.error("Registration failed:", err);
      // Try to get a specific error message from the backend response
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Registration failed. The email may already be in use.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-dark-text">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Level Dropdown */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Academic Level</label>
            <select
              id="level"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-green focus:border-primary-green"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="2eme_BAC_SVT">2ème Année Bac - SVT</option>
              <option value="2eme_BAC_PC">2ème Année Bac - PC</option>
              <option value="2eme_BAC_SM">2ème Année Bac - Sciences Maths</option>
              <option value="1ere_BAC">1ère Année Bac</option>
              <option value="Tronc_Commun">Tronc Commun</option>
            </select>
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-semibold text-white bg-primary-green rounded-md hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green disabled:bg-gray-400"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>

        {/* Display Error or Success Messages */}
        {error && <p className="text-sm text-center text-red-600">{error}</p>}
        {success && <p className="text-sm text-center text-green-600">{success}</p>}
        
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-green hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;