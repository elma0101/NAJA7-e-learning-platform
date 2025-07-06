// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // <-- Import this
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import LiveSessionsPage from './pages/LiveSessionsPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import LessonPage from './pages/LessonPage';
import ExercisesPage from './pages/ExercisesPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
 

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes that everyone can see */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="live-sessions" element={<LiveSessionsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Login page is special, it doesn't need the main layout */}
        

        {/* --- PROTECTED ROUTES --- */}
        {/* All routes inside here will first check if the user is logged in */}
        <Route element={<ProtectedRoute />}>
          {/* They still get the main layout */}
          <Route element={<Layout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="learn/:lessonId" element={<LessonPage />} />
            <Route path="exercises/:courseId" element={<ExercisesPage />} />
            <Route path="contact" element={<ContactPage />} /> 
            <Route path="courses/:courseId" element={<CourseDetailPage />} />
          </Route>
        </Route>

         
      </Routes>
    </BrowserRouter>
  );
};

export default App;