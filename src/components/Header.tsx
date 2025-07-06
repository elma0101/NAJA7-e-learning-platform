// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {

  const { logout, user } = useAuth(); // <-- Get auth state and functions
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <header className="py-4 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-dark-text no-underline">
          Naja7 Online
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {/* --- UPDATE THESE --- */}
          <Link to="/courses" className="text-medium-text font-medium hover:text-primary-green transition-colors">Courses</Link>
          <Link to="/exercises/some-course" className="text-medium-text font-medium hover:text-primary-green transition-colors">Exercises</Link> {/* Placeholder link */}
          <Link to="/live-sessions" className="text-medium-text font-medium hover:text-primary-green transition-colors">Live Sessions</Link>
          <Link to="/about" className="text-medium-text font-medium hover:text-primary-green transition-colors">About Us</Link>
          <Link to="/contact" className="text-medium-text font-medium hover:text-primary-green transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            // --- SHOW THIS IF LOGGED IN ---
            <>
              <Link to="/dashboard" className="font-semibold text-medium-text hover:text-primary-green">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-100 text-dark-text font-semibold py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                Log Out
              </button>
              <Link to="/profile">
                <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-white font-semibold">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              </Link>
            </>
          ) : (
            // --- SHOW THIS IF LOGGED OUT ---
            <>
              <Link to="/register" className="bg-primary-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-green-dark">
                Sign Up
              </Link>
              <Link to="/login" className="bg-gray-100 text-dark-text font-semibold py-3 px-6 rounded-lg hover:bg-gray-200">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;