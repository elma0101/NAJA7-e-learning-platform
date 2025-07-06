// src/pages/CoursesPage/CoursesPage.tsx

import React, { useState, useMemo, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { FiSearch } from 'react-icons/fi';
import apiClient from '../api/apiClient';
import type { Course } from '../types/course'; // Assuming this type matches your CourseSummaryDto

const CoursesPage: React.FC = () => {
  // State for managing live data, loading, and errors
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for managing search and filter values remains the same
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter] = useState('All'); // Placeholder for now
  const [levelFilter] = useState('All');   // Placeholder for now

  // useEffect now fetches data from your backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        // Using your apiClient to fetch the list of courses
        const response = await apiClient.get<Course[]>('/courses');
        setCourses(response.data);
        setError(null);
      } catch (err) {
        console.error("API Error:", err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // The empty array [] means this effect runs only once when the component mounts

  // CORRECTED: useMemo now filters the live `courses` state from the API
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === 'All' || course.subject === subjectFilter;
      const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
      return matchesSearch && matchesSubject && matchesLevel;
    });
  }, [courses, searchTerm, subjectFilter, levelFilter]); // Depends on live data now

  // Conditional rendering for loading and error states
  if (loading) {
    return <div className="text-center py-20 text-lg">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header (No changes needed) */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-dark-text">Courses</h1>
          <p className="mt-4 text-lg text-medium-text">
            Explore our comprehensive course catalog designed for Moroccan high school students.
          </p>
        </div>

        {/* Filters Section (No changes needed) */}
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
        </div>

        {/* Courses Grid - CORRECTED: Now maps over `filteredCourses` */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {/* Empty state message */}
        {filteredCourses.length === 0 && !loading && (
          <p className="text-center text-medium-text mt-8">No courses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;