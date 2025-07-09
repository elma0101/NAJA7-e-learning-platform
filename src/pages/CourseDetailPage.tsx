// src/pages/CourseDetailPage/CourseDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom'; // Now being used
import { FiCheckCircle, FiPlayCircle, FiLock } from 'react-icons/fi';
import apiClient from '../api/apiClient';
import { useAuth } from '../context/AuthContext';

// --- Type Definitions for your CourseDetailDto ---
// It's best practice to define the shape of the data you expect from the API.
// These should match the fields in your backend's CourseDetailDto.
interface LessonDto {
  id: number;
  title: string;
}

interface ModuleDto {
  id: number;
  title: string;
  lessons: LessonDto[];
}
interface Instructor {
  name: string;
  title: string;
  avatarUrl: string;
}

interface SyllabusModule {
  id: number;
  title: string;
  lessons: LessonDto[];
}

interface CourseDetail {
  isEnrolled: boolean;
  id: number;
  title: string;
  longDescription: string; // Assuming a field name from your backend
  imageUrl: string;
  instructor: Instructor;
  syllabus: SyllabusModule[];
}

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
      const response = await apiClient.post(
        '/enrollments', // The endpoint path in your new controller
        { courseId: course.id }, // The request body (EnrollmentRequestDto)
        { 
          headers: { 
            'Authorization': `Bearer ${token}` // The crucial authentication header
          } 
        }
      );
      
      setEnrollmentStatus('success');

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
        setCourse(response.data);
        setError(null);
      } catch (err: any) {
        if (err.response && err.response.status === 403) {
          setError("Access Denied: You are not enrolled in this course.");
        } else {
          setError("Failed to load course details.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token && courseId) {
      fetchCourseDetails();
    }
  }, [courseId]); // This effect depends on courseId

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
            {course.instructor?.avatarUrl ? (
              <img src={course.instructor.avatarUrl} alt={course.instructor.name} className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center text-white font-semibold">
                {course.instructor?.name?.charAt(0).toUpperCase() || 'I'}
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">{course.instructor?.name || 'Unknown Instructor'}</h3>
              <p className="text-sm text-medium-text">{course.instructor?.title || 'Instructor'}</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-dark-text mb-4">Syllabus</h2>
          <div className="space-y-3">
            {course.syllabus && course.syllabus.length > 0 ? (
              course.syllabus.map(module => (
                <div key={module.id} className="p-4 border rounded-lg">
                  <h3 className="font-bold text-xl mb-4">{module.title}</h3>
                  <ul className="space-y-4">
                    {module.lessons.map(lesson => (
                      <li key={lesson.id}>
                        {course.isEnrolled ? (
                          <Link 
                            to={`/courses/${courseId}/lessons/${lesson.id}`} 
                            className="flex items-center gap-3 text-medium-text hover:text-primary-green"
                          >
                            <FiPlayCircle />
                            <span>{lesson.title}</span>
                          </Link>
                        ) : (
                          <span className="flex items-center gap-3 text-gray-500">
                            <FiLock />
                            <span>{lesson.title}</span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-medium-text">No syllabus available for this course.</p>
            )}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg sticky top-28">
            <h3 className="text-2xl font-bold mb-4">Course Details</h3>
            
            {course.isEnrolled ? (
              course.syllabus && course.syllabus.length > 0 && course.syllabus[0].lessons && course.syllabus[0].lessons.length > 0 ? (
                <Link 
                  to={`/courses/${courseId}/lessons/${course.syllabus[0].lessons[0].id}`}
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