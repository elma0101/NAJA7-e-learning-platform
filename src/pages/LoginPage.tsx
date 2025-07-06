import React from 'react';
import { useAuth } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import apiClient from '../api/apiClient';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
   


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      console.log('Server response:', response.data); // Debug: see what server returns
      const { token, user } = response.data;
      
      if (token) {
        // Create a temporary user object if not provided by backend
        const userData = user || {
          id: 1,
          name: email.split('@')[0], // Use email prefix as name
          email: email,
          role: 'STUDENT'
        };
        
        // Use the context to log the user in. This handles state and localStorage.
        login(userData, token);
        
        // Redirect to a protected page
        navigate('/dashboard'); // Or wherever you want to go after login
      } else {
        console.log('Missing token in response:', { token, user }); // Debug
        setError('Invalid response from server.');
      }

    } catch (err: any) {
      console.error("Login failed:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        // Fallback for other errors (like network issues)
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };
   

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-green focus:border-primary-green"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-green focus:border-primary-green"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-primary-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-green-dark transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;