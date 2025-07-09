// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroIllustration from '../assets/hero-illustration.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Réussis ton Bac avec les meilleurs profs</h1>
          <p className="hero__subtitle">
            Naja7 Online est la plateforme d'apprentissage en ligne pour les lycéens marocains. Cours, exercices et sessions live avec des professeurs expérimentés.
          </p>
          <div className="hero__search">
            <input type="text" placeholder="What do you want to learn today?" />
            <button className="btn btn-primary">Explore Courses</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroIllustration} alt="Students studying together" />
        </div>
      </div>
    </section>
  );
};

export default Hero;