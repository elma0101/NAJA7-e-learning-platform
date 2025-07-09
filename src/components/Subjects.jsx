// src/components/Subjects.jsx
import React from 'react';
import './Subjects.css';

// Import your subject images
import mathImg from '../assets/subject-math.png';
import physiqueImg from '../assets/subject-physique.png';
import svtImg from '../assets/subject-svt.png';
import philoImg from '../assets/subject-philo.png';

const subjectsData = [
  {
    image: mathImg,
    title: 'Mathématiques 2ème BAC PC',
    lessons: 30,
    exercises: 120,
  },
  {
    image: physiqueImg,
    title: 'Physique-Chimie 2ème BAC PC',
    lessons: 25,
    exercises: 100,
  },
  {
    image: svtImg,
    title: 'Sciences de la Vie et de la Terre 2ème BAC SVT',
    lessons: 20,
    exercises: 80,
  },
  {
    image: philoImg,
    title: 'Philosophie 2ème BAC',
    lessons: 15,
    exercises: 50,
  },
];

const SubjectCard = ({ image, title, lessons, exercises }) => (
  <div className="subject-card">
    <img src={image} alt={title} className="subject-card__image" />
    <div className="subject-card__content">
      <h3 className="subject-card__title">{title}</h3>
      <p className="subject-card__stats">
        {lessons} Lessons, {exercises} Exercises
      </p>
    </div>
  </div>
);

const Subjects = () => {
  return (
    <section className="subjects-section">
      <div className="container">
        <h2 className="section-title">Subjects</h2>
        <div className="subjects-grid">
          {subjectsData.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;