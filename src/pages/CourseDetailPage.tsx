// src/pages/CourseDetailPage.tsx
import React from 'react';
//import { useParams } from 'react-router-dom';
import { mockCourseDetail } from '../mocks/courseDetailsData'; // Import mock data
import { FiCheckCircle } from 'react-icons/fi';

const CourseDetailPage: React.FC = () => {
  // Get the dynamic courseId from the URL
  //const { courseId } = useParams<{ courseId: string }>();

  // In a real app, you would use this courseId to fetch data from an API.
  // For now, we'll just display our single mock object.
  const course = mockCourseDetail;

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
            <img src={course.instructor.avatarUrl} alt={course.instructor.name} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold text-lg">{course.instructor.name}</h3>
              <p className="text-sm text-medium-text">{course.instructor.title}</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-dark-text mb-4">Syllabus</h2>
          <div className="space-y-3">
            {course.syllabus.map(module => (
              <div key={module.id} className="p-4 border rounded-lg flex items-center gap-4">
                <FiCheckCircle className="text-primary-green text-2xl" />
                <div>
                  <h4 className="font-semibold">{module.title}</h4>
                  <p className="text-sm text-medium-text">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Reviews section would go here */}

        </div>

        {/* Right Column (Sidebar) - would contain an info card */}
        <div className="lg:col-span-1">
          <div className="p-6 border rounded-lg sticky top-28">
             <h3 className="text-2xl font-bold mb-4">Course Details</h3>
             {/* Details like hours, articles, etc. */}
             <button className="w-full mt-4 bg-primary-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-green-dark transition-colors">
               Enroll Now
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;