
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { quiz_data } from '@/data/quizData';

interface QuizContextType {
  currentLanguage: string | null;
  setCurrentLanguage: (language: string) => void;
  currentQuestion: number;
  setCurrentQuestion: (questionNumber: number) => void;
  userAnswers: Record<number, string>;
  setUserAnswer: (questionIndex: number, answer: string) => void;
  restartQuiz: () => void;
  score: number;
  calculateScore: () => void;
  quizCompleted: boolean;
  setQuizCompleted: (completed: boolean) => void;
  quizStarted: boolean;
  setQuizStarted: (started: boolean) => void;
  questions: any[];
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);

  const setUserAnswer = (questionIndex: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
    setQuizCompleted(false);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    if (!currentLanguage) return;
    
    const languageQuestions = quiz_data[currentLanguage];
    if (!languageQuestions) return;

    let newScore = 0;
    languageQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    
    setScore(newScore);
    setQuizCompleted(true);
  };

  // Update questions when language changes
  React.useEffect(() => {
    if (currentLanguage && quiz_data[currentLanguage]) {
      setQuestions(quiz_data[currentLanguage]);
      setCurrentQuestion(0);
      setUserAnswers({});
      setScore(0);
      setQuizCompleted(false);
    }
  }, [currentLanguage]);

  return (
    <QuizContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      currentQuestion,
      setCurrentQuestion,
      userAnswers,
      setUserAnswer,
      restartQuiz,
      score,
      calculateScore,
      quizCompleted,
      setQuizCompleted,
      quizStarted,
      setQuizStarted,
      questions
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
