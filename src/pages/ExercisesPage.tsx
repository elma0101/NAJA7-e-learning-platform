// src/pages/ExercisesPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockExerciseSeries } from '../mocks/exercisesData';
import { FiAlertCircle, FiX } from 'react-icons/fi';

// A reusable Modal component
const ConfirmationModal: React.FC<{ isOpen: boolean; onClose: () => void; onConfirm: () => void; }> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 m-4 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <FiX size={24} />
        </button>
        <FiAlertCircle className="text-yellow-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-2">Êtes-vous sûr ?</h2>
        <p className="text-center text-medium-text mb-6">
          Avez-vous bien essayé de résoudre les exercices ? La correction est plus efficace une fois que vous avez cherché les solutions par vous-même.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="bg-gray-200 text-dark-text font-semibold py-2 px-6 rounded-lg">Annuler</button>
          <button onClick={onConfirm} className="bg-primary-green text-white font-semibold py-2 px-6 rounded-lg">Voir la correction</button>
        </div>
      </div>
    </div>
  );
};

const ExercisesPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>(); // To get the course name if needed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowCorrection = () => {
    // In a real app, you would download the file here.
    alert('Downloading correction PDF...');
    setIsModalOpen(false);
  };
  
  return (
    <div className="bg-white">
      <ConfirmationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleShowCorrection}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-medium-text mb-2">Accueil / Matières / Mathématiques</p>
        <h1 className="text-4xl font-extrabold text-dark-text mb-6">Exercices : Les Limites et Continuité</h1>
        
        {/* Advice Box */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-12 flex items-center gap-4">
          <FiAlertCircle className="text-blue-500 text-2xl flex-shrink-0" />
          <p className="text-blue-800">
            <strong>Conseil :</strong> Téléchargez et résolvez la série d'exercices sur papier avant de consulter la correction pour un apprentissage optimal.
          </p>
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-dark-text border-b pb-2">Exercise Series</h2>
          {mockExerciseSeries.map(series => (
            <div key={series.id} className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <h3 className="font-bold text-lg">{series.title}</h3>
                <p className="text-sm text-medium-text">{series.description}</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-gray-200 text-dark-text font-semibold py-2 px-5 rounded-lg hover:bg-gray-300">Télécharger les Exercices</button>
                <button onClick={() => setIsModalOpen(true)} className="text-primary-green font-semibold hover:underline">Voir la correction</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;