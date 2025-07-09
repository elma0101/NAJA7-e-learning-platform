// src/components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';
import { FiBookOpen, FiPlayCircle, FiEdit3, FiUsers } from 'react-icons/fi'; // Using Feather Icons

const stepsData = [
  {
    icon: <FiBookOpen />,
    title: 'Choose Your Subject',
    description: 'Select the subject you need help with.',
  },
  {
    icon: <FiPlayCircle />,
    title: 'Watch Video Lessons',
    description: 'Learn from experienced teachers through engaging video lessons.',
  },
  {
    icon: <FiEdit3 />,
    title: 'Practice with Exercises',
    description: 'Reinforce your understanding with a variety of exercises.',
  },
  {
    icon: <FiUsers />,
    title: 'Get Support',
    description: 'Connect with teachers and peers for assistance.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <h3 className="section-subtitle">Learn with Naja7 Online</h3>
        <p className="section-description">
          Our platform provides a structured learning path to help you succeed in your Baccalaureate exams.
        </p>
        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-card__icon">{step.icon}</div>
              <h4 className="step-card__title">{step.title}</h4>
              <p className="step-card__description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;