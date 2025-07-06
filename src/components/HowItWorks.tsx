// src/components/HowItWorks.tsx
import React from 'react';
import { FiBookOpen, FiPlayCircle, FiEdit3, FiUsers } from 'react-icons/fi';

interface Step {
  icon: React.ReactNode; // Type for a React component/element
  title: string;
  description: string;
}

const stepsData: Step[] = [
    // Data remains the same
  { icon: <FiBookOpen />, title: 'Choose Your Subject', description: 'Select the subject you need help with.' },
  { icon: <FiPlayCircle />, title: 'Watch Video Lessons', description: 'Learn from experienced teachers through engaging video lessons.' },
  { icon: <FiEdit3 />, title: 'Practice with Exercises', description: 'Reinforce your understanding with a variety of exercises.' },
  { icon: <FiUsers />, title: 'Get Support', description: 'Connect with teachers and peers for assistance.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-dark-text">Learn with Naja7 Online</h2>
        <p className="text-lg text-medium-text max-w-2xl mx-auto mb-12">
          Our platform provides a structured learning path to help you succeed in your Baccalaureate exams.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {stepsData.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-4xl text-primary-green mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold text-dark-text mb-2">{step.title}</h4>
              <p className="text-base text-medium-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;