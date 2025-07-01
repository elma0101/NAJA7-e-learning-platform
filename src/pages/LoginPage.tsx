import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login, isLoggedIn } = useAuth();

  // If user is already logged in, redirect them away from the login page
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Login Simulation</h1>
        <p className="mb-6">Click the button to simulate logging in.</p>
        <button 
          onClick={login}
          className="bg-primary-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-green-dark transition-colors"
        >
          Log In as Aicha
        </button>
      </div>
    </div>
  );
};

export default LoginPage;