 

// Import all your components
 
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
 

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