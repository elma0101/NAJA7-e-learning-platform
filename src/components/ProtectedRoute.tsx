// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isLoggedIn } = useAuth();

  // If the user is logged in, render the child component (e.g., Dashboard).
  // The <Outlet /> component does this for nested routes.
  // If not, redirect them to the login page.
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;