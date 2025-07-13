// src/pages/DashboardPage/DashboardPage.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';
import type { Course } from '../../types/course'; // Reuse your existing Course type
import CourseCard from '../../components/CourseCard'; // Reuse your CourseCard component

const DashboardPage: React.FC = () => {
  const { user, token } = useAuth(); // Get user info and token from context
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Don't fetch if there's no token
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchEnrolledCourses = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<Course[]>('/users/me/courses', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setEnrolledCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch enrolled courses:", err);
        setError("Could not load your courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [token]); // Re-run effect if the token changes (e.g., on login)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark-text">
            Welcome back, <span className="text-primary-green">{user?.name}!</span>
          </h1>
          <p className="mt-2 text-lg text-medium-text">
            Continue your learning journey.
          </p>
        </div>

        {/* Enrolled Courses Section */}
        <div>
          <h2 className="text-3xl font-bold text-dark-text mb-6">My Courses</h2>
          {loading && <p>Loading your courses...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          {!loading && !error && (
            enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="flex">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 px-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-dark-text">No Courses Yet!</h3>
                <p className="mt-2 text-medium-text">You haven't enrolled in any courses. Explore our catalog to get started.</p>
                {/* You can add a <Link> here to the main courses page */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;