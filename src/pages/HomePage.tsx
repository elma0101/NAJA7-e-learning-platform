import React from 'react';

// Import all your components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
     
      <main>
        <Hero />
        <Subjects />
        <HowItWorks />
        <Testimonials />
      </main>

    </>
  )
}

export default HomePage;