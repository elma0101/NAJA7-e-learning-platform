// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

// Import testimonial images
import aminaImg from '../assets/testimonial-amine.png';
import omarImg from '../assets/testimonial-omar.png';
import saraImg from '../assets/testimonial-sara.png';

const testimonialsData = [
  {
    image: aminaImg,
    name: 'Amine, 2ème BAC SVT',
    quote: '"Naja7 Online m\'a vraiment aidé à comprendre les maths. Les explications sont claires et les exercices sont très utiles."',
  },
  {
    image: omarImg,
    name: 'Omar, 2ème BAC PC',
    quote: '"J\'avais du mal en physique, mais grâce aux vidéos et aux exercices, j\'ai beaucoup progressé."',
  },
  {
    image: saraImg,
    name: 'Sara, 2ème BAC Sciences Eco',
    quote: '"La plateforme est facile à utiliser et les professeurs sont très compétents. Je recommande vivement."',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-card__img" />
              <h4 className="testimonial-card__name">{testimonial.name}</h4>
              <p className="testimonial-card__quote">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;