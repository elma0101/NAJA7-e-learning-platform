export interface ExerciseSeries {
    id: string;
    title: string;
    description: string;
  }
  
  export const mockExerciseSeries: ExerciseSeries[] = [
    { id: 'ex1', title: "Série d'exercices N°1", description: "Exercices d'application directe du cours." },
    { id: 'ex2', title: "Série d'exercices N°2", description: "Problèmes de synthèse et de recherche." },
    { id: 'ex3', title: "Série d'exercices N°3", description: "Préparation pour le contrôle continu." },
    { id: 'ex4', title: "Série d'exercices N°4", description: "Exercices de type Baccalauréat." },
  ];