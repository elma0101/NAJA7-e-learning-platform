// src/pages/LessonPage/LessonPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useAuth } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';

// Define the shape of the Lesson DTO
interface Lesson {
  id: number;
  title: string;
  content: string;
  videoUrl: string;
}

const LessonPage: React.FC = () => {
  // We can get both courseId and lessonId if needed for navigation
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { token } = useAuth();
  
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token || !lessonId) {
      setError("Authentication required or lesson ID missing");
      setLoading(false);
      return;
    }

    const fetchLesson = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<Lesson>(`/lessons/${lessonId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setLesson(response.data);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch lesson:", err);
        if (err.response?.status === 403) {
          setError("Access denied. You may not be enrolled in this course.");
        } else if (err.response?.status === 404) {
          setError("Lesson not found.");
        } else {
          setError("Could not load lesson. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [lessonId, token]);

  if (loading) return <div className="p-8 text-center">Loading lesson...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error}</div>;
  if (!lesson) return <div className="p-8 text-center">Lesson not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">{lesson.title}</h1>
      
      {/* Video Player Section */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <ReactPlayer
            src={lesson.videoUrl}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      
      {/* Lesson Content Section */}
      <div className="mt-8 prose lg:prose-xl max-w-none">
        <h2 className="text-2xl font-bold">About this lesson</h2>
        <p>{lesson.content}</p>
      </div>

      {/* You can add a 'Next Lesson' button here later */}
    </div>
  );
};

export default LessonPage;