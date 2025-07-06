// src/pages/ProfilePage.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockUserData } from '../mocks/userData'; // We'll reuse some stats

// A reusable row for the settings section
const SettingsRow: React.FC<{ label: string; value: string; action: string }> = ({ label, value, action }) => (
  <div className="flex justify-between items-center py-4 border-b">
    <div>
      <p className="font-semibold text-dark-text">{label}</p>
      <p className="text-medium-text">{value}</p>
    </div>
    <button className="font-semibold text-primary-green hover:underline">{action}</button>
  </div>
);

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const stats = mockUserData.stats;

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Your Profile</h1>
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <img src={user?.avatarUrl} alt={user?.name} className="w-32 h-32 rounded-full mb-4 shadow-lg" />
          <h2 className="text-3xl font-bold text-dark-text">{user?.name}</h2>
          <p className="text-medium-text">{user?.level}</p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-dark-text mb-6">Progress Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.coursesDone}</p>
              <p className="text-sm text-medium-text">Courses Completed</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.exercisesDone}</p>
              <p className="text-sm text-medium-text">Exercises Completed</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.badgesEarned}</p>
              <p className="text-sm text-medium-text">Badges Earned</p>
            </div>
            {/* Overall Progress would go here */}
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-2xl font-bold text-dark-text mb-4">Account Settings</h3>
          <div className="border-t">
            <SettingsRow label="Email" value={user?.email || ''} action="Change" />
            <SettingsRow label="Password" value="••••••••" action="Change" />
            <SettingsRow label="Subscription" value="Basic Plan" action="Upgrade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;