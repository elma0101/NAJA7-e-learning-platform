// src/components/Testimonials.tsx
import React from 'react';

// Import testimonial images
import aminaImg from '../assets/testimonial-amine.png';
import omarImg from '../assets/testimonial-omar.png';
import saraImg from '../assets/testimonial-sara.png';

interface Testimonial {
  image: string;
  name: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
    // Data remains the same
  { image: aminaImg, name: 'Amine, 2ème BAC SVT', quote: '"Naja7 Online m\'a vraiment aidé à comprendre les maths. Les explications sont claires et les exercices sont très utiles."' },
  { image: omarImg, name: 'Omar, 2ème BAC PC', quote: '"J\'avais du mal en physique, mais grâce aux vidéos et aux exercices, j\'ai beaucoup progressé."' },
  { image: saraImg, name: 'Sara, 2ème BAC Sciences Eco', quote: '"La plateforme est facile à utiliser et les professeurs sont très compétents. Je recommande vivement."' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-text">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg" />
              <h4 className="text-xl font-semibold text-dark-text mb-4">{testimonial.name}</h4>
              <p className="text-base text-medium-text leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;