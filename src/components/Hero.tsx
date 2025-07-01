// src/components/Hero.tsx
import React from 'react';
import heroIllustration from '../assets/hero-illustration.png';

const Hero: React.FC = () => {
  return (
    <section className="pt-0 pb-0 -mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={heroIllustration} alt="Students studying together" className="w-full h-auto" />
        </div>
        <div className="text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-dark-text leading-tight mb-6">
            Réussis ton Bac avec les meilleurs profs
          </h1>
          <p className="text-lg text-medium-text mb-8">
            Naja7 Online est la plateforme d'apprentissage en ligne pour les lycéens marocains. Cours, exercices et sessions live avec des professeurs expérimentés.
          </p>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <input 
              type="text" 
              placeholder="What do you want to learn today?" 
              className="flex-grow border-none p-4 text-base focus:ring-0" 
            />
            <button className="bg-primary-green text-white font-semibold px-6 rounded-none hover:bg-primary-green-dark transition-colors">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;