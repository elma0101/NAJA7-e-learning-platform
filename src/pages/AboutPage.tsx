// src/pages/AboutPage.tsx
import React from 'react';

// Mock data for the team
const teamMembers = [
  { name: 'Fatima Zahra', role: 'Co-Founder & CEO', imageUrl: '/src/assets/team/fatima.png' },
  { name: 'Omar Benjelloun', role: 'Head of Curriculum', imageUrl: '/src/assets/team/omar.png' },
  { name: 'Aicha El Mansouri', role: 'Lead Instructor', imageUrl: '/src/assets/team/aicha.png' },
];

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => (
  <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
    <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    <h3 className="font-bold text-lg text-dark-text">{name}</h3>
    <p className="text-medium-text">{role}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-extrabold text-center text-dark-text mb-6">About Naja7 Online</h1>
        <p className="text-lg text-center text-medium-text mb-16">
          Naja7 Online is an innovative e-learning platform dedicated to empowering Moroccan high school students. We believe in fostering a dynamic learning environment where students can thrive and achieve their full potential.
        </p>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Our Story</h2>
          <p className="text-medium-text leading-relaxed">
            Founded in 2020 by a team of passionate educators and tech enthusiasts, Naja7 Online emerged from a shared vision to bridge educational gaps and enhance learning opportunities for Moroccan students...
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Meet Our Team</h2>
          <p className="text-medium-text leading-relaxed mb-8">
            Our team comprises dedicated professionals with diverse backgrounds in education, technology, and content creation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map(member => <TeamMemberCard key={member.name} {...member} />)}
          </div>
        </section>

        {/* You can continue adding sections for "Our Approach" and "Partnerships" */}
        
      </div>
    </div>
  );
};

export default AboutPage;