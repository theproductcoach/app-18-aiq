export type Difficulty = 'easy' | 'medium' | 'hard';

export type Topic = 
  | 'fundamentals'
  | 'llms'
  | 'neural-networks'
  | 'ethics'
  | 'real-world'
  | 'history';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizSettings {
  difficulty: Difficulty;
  topic: Topic;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answers: number[];
  settings: QuizSettings;
  score: number;
} 