// src/mocks/userData.ts
import courseImg1 from '../assets/courses/math-advanced.png';
import courseImg2 from '../assets/courses/physique-quantum.png';
import courseImg3 from '../assets/courses/chimie-organic.png';

export const mockUserData = {
  inProgressCourses: [
    {
      id: 'adv-calculus',
      title: 'Algèbre avancée',
      category: 'Mathématiques',
      chapter: 'Chapitre 3: Équations différentielles',
      progress: 60,
      imageUrl: courseImg1,
    },
    {
      id: 'quantum-phys',
      title: 'Mécanique quantique',
      category: 'Physique',
      chapter: 'Chapitre 1: Fondamentaux',
      progress: 30,
      imageUrl: courseImg2,
    },
    {
      id: 'organic-chem',
      title: 'Chimie organique',
      category: 'Chimie',
      chapter: 'Chapitre 1: Nomenclature',
      progress: 80,
      imageUrl: courseImg3,
    },
  ],
  stats: {
    coursesDone: 5,
    exercisesDone: 250,
    badgesEarned: 12,
  },
  recentActivity: {
    percentageIncrease: 15,
    weeklyData: [
      { day: 'Lun', value: 20 },
      { day: 'Mar', value: 40 },
      { day: 'Mer', value: 35 },
      { day: 'Jeu', value: 60 },
      { day: 'Ven', value: 55 },
      { day: 'Sam', value: 80 },
      { day: 'Dim', value: 30 },
    ],
  },
  achievements: [
    { id: 'ach1', title: 'Math Whiz', imageUrl: '/src/assets/badges/math-whiz.png' },
    { id: 'ach2', title: 'Physics Pro', imageUrl: '/src/assets/badges/physics-pro.png' },
    // ... add more badges
  ],
};