// src/mocks/coursesData.ts
import type { Course } from '../types/course';

// You'll need to add placeholder images to your /src/assets folder
import courseImg1 from '../assets/courses/math-tc.png';
import courseImg2 from '../assets/courses/physique-tc.png';
// ... import other images

export const mockCourses: Course[] = [
  {
    id: 'math-tc',
    title: 'Mathématiques - Tronc Commun',
    description: 'Fundamental math concepts for all streams.',
    imageUrl: courseImg1,
    level: 'Tronc Commun',
    subject: 'Mathématiques',
  },
  {
    id: 'physique-tc',
    title: 'Physique-Chimie - Tronc Commun',
    description: 'Basic physics and chemistry principles.',
    imageUrl: courseImg2,
    level: 'Tronc Commun',
    subject: 'Physique-Chimie',
  },
  // ... Add 8-10 more course objects to fully populate the page
];