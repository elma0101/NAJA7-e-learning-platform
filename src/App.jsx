// src/App.jsx
import React from 'react';
import './App.css';

// Import all your components
import Header from './components/Header';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Subjects />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App;