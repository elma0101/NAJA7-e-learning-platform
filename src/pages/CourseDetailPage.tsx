// src/pages/CourseDetailPage/CourseDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom'; // Now being used
import { FiCheckCircle, FiPlayCircle, FiLock, FiDownload } from 'react-icons/fi';
import apiClient from '../api/apiClient';
import { useAuth } from '../context/AuthContext';
import Accordion from '../components/Accordion/Accordion';
import type { CourseDetail, Module, Lesson, Instructor } from '../types/course';

const CourseDetailPage: React.FC = () => {
  // Get the dynamic courseId from the URL
  const { courseId } = useParams<{ courseId: string }>();
  

  // State to hold the fetched course data, loading, and error status
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { token } = useAuth(); // Get the token
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [enrollmentError, setEnrollmentError] = useState('');

  // --- Step 3: Implement the handleEnroll function ---
  const handleEnroll = async () => {
    if (!token || !course) {
      // This should ideally redirect to login, but for now we'll just log it
      console.error("No token or course ID found. Cannot enroll.");
      return;
    }

    setIsEnrolling(true);
    setEnrollmentError('');

    try {
      await apiClient.post(
        '/enrollments', // The endpoint path in your new controller
        { courseId: course.id }, // The request body (EnrollmentRequestDto)
        { 
          headers: { 
            'Authorization': `Bearer ${token}` // The crucial authentication header
          } 
        }
      );
      
      setEnrollmentStatus('success');
      // Update course state to reflect enrollment
      setCourse(prev => prev ? { ...prev, isEnrolled: true } : null);

    } catch (err: any) {
      console.error("Enrollment failed:", err);
      setEnrollmentStatus('error');
      if (err.response && err.response.data && err.response.data.message) {
        setEnrollmentError(err.response.data.message);
      } else {
        setEnrollmentError("An unknown error occurred.");
      }
    } finally {
      setIsEnrolling(false);
    }
  };

  // useEffect to fetch data when the component mounts or courseId changes
  useEffect(() => {
    // Don't fetch if there's no ID
    if (!courseId) {
      setLoading(false);
      setError("Course ID not found in URL.");
      return;
    }

    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        const config = token ? { headers: { 'Authorization': `Bearer ${token}` } } : {};
        const response = await apiClient.get<CourseDetail>(`/courses/${courseId}`, config);
        
        // Log API response for debugging
        console.log('Course data fetched from database:', response.data);
        
        setCourse(response.data);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch course details:", err);
        
        if (err.response && err.response.status === 403) {
          setError("Access Denied: You are not enrolled in this course.");
        } else if (err.response && err.response.status === 404) {
          setError("Course not found.");
        } else if (err.code === 'ECONNREFUSED' || err.message.includes('Network Error')) {
          setError("Unable to connect to the server. Please make sure the backend is running on http://localhost:8080");
        } else {
          setError("Failed to load course details. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId, token]); // This effect depends on courseId and token

  // Debug useEffect to log course information
  useEffect(() => {
    if (course) {
      console.log('Course loaded from database:', course);
      console.log('Instructor data (from courses table):', course.instructor);
      console.log('Instructor type:', typeof course.instructor);
    }
  }, [course]);

  // --- Conditional Rendering based on state ---
  if (loading) {
    return <div className="text-center py-40 text-lg">Loading course details...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">{error}</div>;
  }

  if (!course) {
    return <div className="text-center py-40 text-lg">Course not found.</div>;
  }

  // Handle both 'syllabus' and 'modules' property names from API
  const courseModules = course.syllabus || (course as any).modules || [];
  
  // --- Render the page with live data ---
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="mt-2 text-lg text-gray-300">
            Master advanced concepts with this comprehensive course.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Course Info */}
        <div className="lg:col-span-2">
          <img src={course.imageUrl} alt={course.title} className="w-full rounded-lg shadow-lg mb-8" />

          <h2 className="text-3xl font-bold text-dark-text mb-4">Course Description</h2>
          <p className="text-medium-text mb-8">{course.longDescription}</p>

          <h2 className="text-3xl font-bold text-dark-text mb-4">Instructor</h2>
          <div className="flex items-center gap-4 p-4 border rounded-lg mb-8">
            {/* Handle instructor data from courses table */}
            {course.instructor && typeof course.instructor === 'object' && course.instructor.avatarUrl ? (
              <img src={course.instructor.avatarUrl} alt={course.instructor.name} className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center text-white font-semibold">
                {(() => {
                  if (course.instructor && typeof course.instructor === 'object') {
                    return course.instructor.name?.charAt(0).toUpperCase() || 'I';
                  } else if (typeof course.instructor === 'string') {
                    return course.instructor.charAt(0).toUpperCase();
                  }
                  return 'I';
                })()}
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">
                {(() => {
                  if (course.instructor && typeof course.instructor === 'object') {
                    return course.instructor.name || 'Unknown Instructor';
                  } else if (typeof course.instructor === 'string') {
                    return course.instructor;
                  }
                  return 'Unknown Instructor';
                })()}
              </h3>
              <p className="text-sm text-medium-text">
                {course.instructor && typeof course.instructor === 'object' && course.instructor.title
                  ? course.instructor.title
                  : 'Instructor'
                }
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-dark-text mb-6">Syllabus</h2>
          <div className="space-y-4">
            {courseModules && courseModules.length > 0 ? (
              courseModules.map((module: Module) => (
                <Accordion key={module.id} title={module.title}>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson: Lesson) => (
                      <li key={lesson.id} className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50">
                        
                        {/* Title and Link to Lesson Page (if enrolled) */}
                        <div className="flex items-center gap-3">
                          <FiPlayCircle className="text-gray-400" />
                          {course.isEnrolled ? (
                            <Link to={`/courses/${courseId}/lessons/${lesson.id}`} className="text-medium-text font-medium hover:text-primary-green">
                              {lesson.title}
                            </Link>
                          ) : (
                            <span className="text-medium-text font-medium">{lesson.title}</span>
                          )}
                        </div>

                        {/* Download Button or Lock Icon */}
                        <div>
                          {course.isEnrolled && lesson.pdfUrl ? (
                            <a
                              href={lesson.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-green hover:underline flex items-center gap-1 text-sm font-semibold"
                            >
                              <FiDownload />
                              <span>PDF</span>
                            </a>
                          ) : (
                            <FiLock className="text-gray-400" title="Enroll to access materials" />
                          )}
                        </div>

                      </li>
                    ))}
                  </ul>
                </Accordion>
              ))
            ) : (
              <p className="text-medium-text">No syllabus is available for this course yet.</p>
            )}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg sticky top-28">
            <h3 className="text-2xl font-bold mb-4">Course Details</h3>
            
            {course.isEnrolled ? (
              courseModules && courseModules.length > 0 && courseModules[0].lessons && courseModules[0].lessons.length > 0 ? (
                <Link 
                  to={`/courses/${courseId}/lessons/${courseModules[0].lessons[0].id}`}
                  className="w-full mt-4 bg-primary-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-green-dark transition-colors flex items-center justify-center gap-2"
                >
                  <FiPlayCircle />
                  Go to First Lesson
                </Link>
              ) : (
                <div className="w-full mt-4 bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg text-center">
                  No lessons available yet
                </div>
              )
            ) : (
              <button 
                onClick={handleEnroll}
                disabled={isEnrolling || enrollmentStatus === 'success'} // Disable button when enrolling or already successful
                className="w-full mt-4 bg-primary-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-green-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isEnrolling 
                  ? 'Enrolling...' 
                  : enrollmentStatus === 'success' 
                    ? 'Enrolled Successfully!' 
                    : 'Enroll Now'}
              </button>
            )}

            {enrollmentStatus === 'error' && (
              <p className="text-red-500 text-sm mt-2">{enrollmentError}</p>
            )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;