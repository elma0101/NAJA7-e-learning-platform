// src/pages/LessonPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { user } = useAuth(); // We'll use the user for the discussion section
  const progress = 25; // Mock progress

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Video Player */}
        <div className="bg-black aspect-video rounded-lg mb-6 flex items-center justify-center">
          <p className="text-white text-2xl">Video Player for Lesson: {lessonId}</p>
        </div>

        {/* Lesson Info & Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-dark-text mb-4">Lesson 1.1: Introduction to Derivatives</h1>
          <div className="mb-4">
            <p className="text-sm font-semibold mb-1">Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary-green h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {/* Tabs for Notes, Transcript, etc. */}
          <div className="border-b">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary-green font-semibold text-primary-green">Notes</button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-medium-text hover:border-gray-300">Transcript</button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-medium-text hover:border-gray-300">Supplementary Readings</button>
            </nav>
          </div>
          <div className="py-6">
            <p>Downloadable notes and summaries for the video content would be displayed here.</p>
          </div>
        </div>

        {/* Discussion Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-dark-text mb-6">Discussion</h2>
          <div className="flex items-start gap-4">
            <img src={user?.avatarUrl} alt="Your avatar" className="w-12 h-12 rounded-full"/>
            <div className="flex-grow bg-gray-100 rounded-lg p-3 flex items-center">
              <input type="text" placeholder="Ask a question or participate in the discussion..." className="w-full bg-transparent border-none focus:ring-0"/>
              <button className="bg-primary-green text-white font-semibold py-2 px-5 rounded-lg ml-3">Send</button>
            </div>
          </div>
          {/* Previous discussion messages would be mapped here */}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;