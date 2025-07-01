// src/pages/DashboardPage.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockUserData } from '../mocks/userData';
import { Link } from 'react-router-dom';

// A reusable progress bar component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      className="bg-primary-green h-2.5 rounded-full" 
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const DashboardPage: React.FC = () => {
  const { user } = useAuth(); // Get the logged-in user's basic info
  const data = mockUserData; // Get the detailed progress data

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-dark-text mb-2">Bonjour, {user?.name} !</h1>
        <p className="text-lg text-medium-text mb-12">Bienvenue sur votre tableau de bord.</p>

        {/* In-Progress Courses Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-dark-text mb-6">Reprendre où vous en étiez</h2>
          <div className="space-y-6">
            {data.inProgressCourses.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-6">
                <img src={course.imageUrl} alt={course.title} className="w-full md:w-48 h-28 object-cover rounded-md" />
                <div className="flex-grow w-full">
                  <p className="text-sm text-medium-text">{course.category}</p>
                  <h3 className="text-xl font-bold text-dark-text">{course.title}</h3>
                  <p className="text-medium-text mb-3">{course.chapter}</p>
                  <ProgressBar progress={course.progress} />
                </div>
                <Link to={`/learn/${course.id}`} className="w-full md:w-auto flex-shrink-0 bg-primary-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-green-dark transition text-center">
                  Reprendre
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* My Progress Widget */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-dark-text mb-6">Mes Progrès</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                <span className="font-semibold">Cours terminés</span>
                <span className="font-bold text-lg">{data.stats.coursesDone}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                <span className="font-semibold">Exercices réussis</span>
                <span className="font-bold text-lg">{data.stats.exercisesDone}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                <span className="font-semibold">Badges gagnés</span>
                <span className="font-bold text-lg">{data.stats.badgesEarned}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Widget */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-dark-text mb-2">Activité récente</h2>
            <p className="text-green-600 font-semibold mb-6">+{data.recentActivity.percentageIncrease}% par rapport aux 7 derniers jours</p>
            {/* Chart would go here. For now, a placeholder */}
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-medium-text">Graphique d'activité</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        {/* You can add the Réalisations (achievements) section here following the same pattern */}

      </div>
    </div>
  );
};

export default DashboardPage;