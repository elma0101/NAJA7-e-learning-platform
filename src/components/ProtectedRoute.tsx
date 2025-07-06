// src/components/ProtectedRoute.jsx
 
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    // User not authenticated
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child route
  return <Outlet />;
};

export default ProtectedRoute;