// src/pages/LiveSessionsPage.tsx
import React from 'react';
import { mockUpcomingSession, mockPastSessions } from '../mocks/liveSessionsData';

const LiveSessionsPage: React.FC = () => {
  const upcoming = mockUpcomingSession;
  const past = mockPastSessions;

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-center text-dark-text">Live Sessions</h1>
        <p className="text-lg text-center text-medium-text mt-4 mb-12">Join our interactive sessions with expert instructors.</p>

        {/* Upcoming Session */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-text mb-6">Upcoming Sessions</h2>
          <div className="bg-primary-green/10 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
            <img src={upcoming.imageUrl} alt={upcoming.title} className="w-full md:w-1/3 h-auto object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-dark-text">{upcoming.title}</h3>
              <p className="text-medium-text mt-2 mb-4">{upcoming.description}</p>
              <button className="bg-primary-green text-white font-semibold py-3 px-6 rounded-lg">Register Now</button>
            </div>
          </div>
        </div>

        {/* Past Sessions */}
        <div>
          <h2 className="text-3xl font-bold text-dark-text mb-6">Past Sessions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                  <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {past.map(session => (
                  <tr key={session.id}>
                    <td className="py-4 px-6 font-medium text-dark-text">{session.title}</td>
                    <td className="py-4 px-6 text-medium-text">{session.date} at {session.time}</td>
                    <td className="py-4 px-6 text-medium-text">{session.instructor}</td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-primary-green font-semibold hover:underline">Watch Recording</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSessionsPage;