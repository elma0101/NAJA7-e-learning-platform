// src/components/CourseCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    // The <Link> component makes the whole card clickable
    <Link to={`/courses/${course.id}`} className="block group h-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary-green/20 group-hover:-translate-y-1 h-full flex flex-col">
        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover flex-shrink-0" />
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-3 flex-1">{course.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;