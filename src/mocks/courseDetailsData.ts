// src/mocks/courseDetailsData.ts
// This file will contain detailed data for ONE course. In a real app,
// you would fetch this data based on the course ID.

export const mockCourseDetail = {
    id: 'math-tc',
    title: 'Mathématiques - Tronc Commun',
    longDescription: 'This course covers advanced calculus topics essential for 2nd year high school students, including differential and integral calculus, limits, derivatives...',
    imageUrl: '/src/assets/courses/math-banner.png',  
    instructor: {
      name: 'Dr. Amina Benali',
      title: 'Ph.D. in Mathematics, 10+ years of teaching experience',
      avatarUrl: '/src/assets/instructors/amina.png'
    },
    syllabus: [
      { id: 'm1', title: 'Module 1: Limits and Continuity', description: 'Introduction to limits and continuity' },
      { id: 'm2', title: 'Module 2: Derivatives', description: 'Derivatives and Differentiation Rules' },
      // ... more modules
    ],
    reviews: {
      average: 4.7,
      total: 125,
      breakdown: [ { rating: 5, percentage: 50 }, { rating: 4, percentage: 30 } /*..etc*/ ],
      comments: [
        { id: 'r1', author: 'Fatima Z.', text: 'This course is excellent!', rating: 5 },
        { id: 'r2', author: 'Omar K.', text: 'The course is well-structured.', rating: 4 },
      ]
    }
  };