// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, type ReactNode } from 'react';

// Define the shape of our mock user
interface User {
  name: string;
  email: string;
  avatarUrl: string;
  level: string;
}

// Define the shape of the context data
interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a mock user for our simulation
const mockUser: User = {
  name: 'Aicha',
  email: 'aicha.student@example.com',
  avatarUrl: '/src/assets/avatars/aicha.png', // Add a placeholder avatar
  level: '2ème BAC Sciences Physiques',
};

// Create the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Simulate a login action
  const login = () => {
    setIsLoggedIn(true);
    setUser(mockUser);
  };

  // Simulate a logout action
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};