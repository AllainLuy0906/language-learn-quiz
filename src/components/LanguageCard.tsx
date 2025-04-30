
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuiz } from '@/contexts/QuizContext';

interface LanguageCardProps {
  language: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const LanguageCard = ({ language, description, icon, difficulty }: LanguageCardProps) => {
  const navigate = useNavigate();
  const { setCurrentLanguage } = useQuiz();
  
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  const handleStartQuiz = () => {
    setCurrentLanguage(language);
    navigate('/quiz/start');
  };

  return (
    <Card className="quiz-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">{language}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>{difficulty}</span>
        </div>
        <CardDescription className="text-sm text-gray-500 mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-40 flex items-center justify-center">
          <img src={icon} alt={language} className="max-h-full max-w-full" />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LanguageCard;
