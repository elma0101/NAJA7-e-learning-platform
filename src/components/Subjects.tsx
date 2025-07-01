// src/components/Subjects.tsx
import React from 'react';

// Import your subject images
import mathImg from '../assets/subject-math.png';
import physiqueImg from '../assets/subject-physique.png';
import svtImg from '../assets/subject-svt.png';
import philoImg from '../assets/subject-philo.png';

// Define the type for a single subject card's props
interface SubjectCardProps {
  image: string;
  title: string;
  lessons: number;
  exercises: number;
}

const subjectsData: SubjectCardProps[] = [
  // Data remains the same
  { image: mathImg, title: 'Mathématiques 2ème BAC PC', lessons: 30, exercises: 120 },
  { image: physiqueImg, title: 'Physique-Chimie 2ème BAC PC', lessons: 25, exercises: 100 },
  { image: svtImg, title: 'Sciences de la Vie et de la Terre 2ème BAC SVT', lessons: 20, exercises: 80 },
  { image: philoImg, title: 'Philosophie 2ème BAC', lessons: 15, exercises: 50 },
];

const SubjectCard: React.FC<SubjectCardProps> = ({ image, title, lessons, exercises }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-dark-text mb-2">{title}</h3>
      <p className="text-sm text-light-text">
        {lessons} Lessons, {exercises} Exercises
      </p>
    </div>
  </div>
);

const Subjects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-text">Subjects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjectsData.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;