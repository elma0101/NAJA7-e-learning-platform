// src/types/course.ts
export interface Course {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    level: 'Tronc Commun' | '1ère BAC' | '2ème BAC';
    subject: 'Mathématiques' | 'Physique-Chimie' | 'SVT';
  }

// Define the shape of a single lesson
export interface Lesson {
  id: number;
  title: string;
  pdfUrl?: string; // pdfUrl is optional, some lessons may not have one
  videoUrl?: string; // videoUrl is also optional
}

// Define the shape of a module, which contains lessons
export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

// Define the shape of the instructor (simple columns in courses table)
export interface Instructor {
  name: string;
  title?: string;
  avatarUrl?: string;
}

// Define the complete shape of the course detail object
export interface CourseDetail {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  isEnrolled: boolean;
  instructor?: Instructor | string; // Can be object or string since it's just a column in courses table
  syllabus?: Module[]; // The syllabus is an array of modules (optional for compatibility)
  modules?: Module[]; // Alternative property name used by API
}