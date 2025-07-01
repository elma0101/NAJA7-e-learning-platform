// src/types/course.ts
export interface Course {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    level: 'Tronc Commun' | '1ère BAC' | '2ème BAC';
    subject: 'Mathématiques' | 'Physique-Chimie' | 'SVT';
  }