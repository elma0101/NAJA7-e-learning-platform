// src/mocks/courseDetailsData.ts
// This file will contain detailed data for ONE course. In a real app,
// you would fetch this data based on the course ID.

export const mockCourseDetail = {
    id: 3,
    title: 'Mathématiques - Tronc Commun',
    description: 'Fundamental math concepts for all streams.',
    longDescription: 'This course covers advanced calculus topics essential for 2nd year high school students, including differential and integral calculus, limits, derivatives, and fundamental mathematical principles that will serve as the foundation for advanced studies.',
    imageUrl: '/src/assets/courses/math-banner.png',  
    isEnrolled: true,
    instructor: {
      name: 'Dr. Amina Benali',
      title: 'Ph.D. in Mathematics, 10+ years of teaching experience',
      avatarUrl: '/src/assets/instructors/amina.png'
    },
    syllabus: [
      { 
        id: 1, 
        title: 'Module 1: Limits and Continuity', 
        lessons: [
          { id: 1, title: 'Introduction to Limits', pdfUrl: '/assets/pdfs/limits-intro.pdf' },
          { id: 2, title: 'Limit Laws and Properties', pdfUrl: '/assets/pdfs/limit-laws.pdf' },
          { id: 3, title: 'Continuity and Discontinuity', pdfUrl: '/assets/pdfs/continuity.pdf' },
        ]
      },
      { 
        id: 2, 
        title: 'Module 2: Derivatives', 
        lessons: [
          { id: 4, title: 'Definition of Derivative', pdfUrl: '/assets/pdfs/derivative-def.pdf' },
          { id: 5, title: 'Differentiation Rules', pdfUrl: '/assets/pdfs/diff-rules.pdf' },
          { id: 6, title: 'Chain Rule and Applications', pdfUrl: '/assets/pdfs/chain-rule.pdf' },
        ]
      },
      { 
        id: 3, 
        title: 'Module 3: Applications of Derivatives', 
        lessons: [
          { id: 7, title: 'Related Rates', pdfUrl: '/assets/pdfs/related-rates.pdf' },
          { id: 8, title: 'Optimization Problems', pdfUrl: '/assets/pdfs/optimization.pdf' },
          { id: 9, title: 'Curve Sketching', pdfUrl: '/assets/pdfs/curve-sketching.pdf' },
        ]
      },
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