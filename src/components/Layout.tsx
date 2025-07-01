// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is a placeholder for the page content
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;  