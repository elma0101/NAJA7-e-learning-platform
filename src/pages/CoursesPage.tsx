// src/pages/CoursesPage.tsx
import React, { useState, useMemo } from 'react';
import { mockCourses } from '../mocks/courseData';
import CourseCard from '../components/CourseCard';
import { FiSearch } from 'react-icons/fi';

const CoursesPage: React.FC = () => {
  // State for managing search and filter values
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');

  // Memoize the filtered courses to avoid re-calculating on every render
  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === 'All' || course.subject === subjectFilter;
      const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
      return matchesSearch && matchesSubject && matchesLevel;
    });
  }, [searchTerm, subjectFilter, levelFilter]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-dark-text">Courses</h1>
          <p className="mt-4 text-lg text-medium-text">
            Explore our comprehensive course catalog designed for Moroccan high school students.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow w-full">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Add dropdowns for filtering here - we will create a component for this next if needed */}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <p className="text-center text-medium-text mt-8">No courses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;