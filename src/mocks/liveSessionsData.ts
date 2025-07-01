export interface LiveSession {
    id: string;
    title: string;
    date: string;
    time: string;
    instructor: string;
  }
  
  export const mockUpcomingSession = {
    id: 'upcoming1',
    title: 'Calculus Masterclass',
    description: 'Prepare for your exams with our comprehensive calculus review.',
    imageUrl: '/src/assets/sessions/calculus-masterclass.png'
  };
  
  export const mockPastSessions: LiveSession[] = [
    { id: 's1', title: 'Organic Chemistry Review', date: '2024-07-20', time: '14:00', instructor: 'Dr. Fatima Zahra' },
    { id: 's2', title: 'Mechanics Workshop', date: '2024-07-15', time: '16:00', instructor: 'Mr. Hassan El Amrani' },
    { id: 's3', title: 'Algebra Essentials', date: '2024-07-10', time: '10:00', instructor: 'Ms. Amina Benali' },
  ];