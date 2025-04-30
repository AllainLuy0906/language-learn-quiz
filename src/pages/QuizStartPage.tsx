
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon, ListIcon, TimerIcon } from 'lucide-react';

const QuizStartPage = () => {
  const { currentLanguage, setQuizStarted } = useQuiz();
  const navigate = useNavigate();

  if (!currentLanguage) {
    navigate('/quiz');
    return null;
  }

  const handleStartQuiz = () => {
    setQuizStarted(true);
    navigate('/quiz/question');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <CardTitle className="text-3xl">{currentLanguage} Quiz</CardTitle>
            <CardDescription>Test your knowledge of {currentLanguage}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <InfoIcon className="text-quiz-primary mt-1" size={20} />
                <div>
                  <h3 className="font-medium">About this Quiz</h3>
                  <p className="text-gray-600">
                    This quiz will test your knowledge of {currentLanguage} concepts, syntax, and best practices.
                    The questions range from beginner to advanced level.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ListIcon className="text-quiz-primary mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Quiz Format</h3>
                  <p className="text-gray-600">
                    The quiz consists of 20 multiple-choice questions. Each question has only one correct answer.
                    You can't go back to previous questions once answered.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TimerIcon className="text-quiz-primary mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Time Limit</h3>
                  <p className="text-gray-600">
                    There is no time limit for this quiz. Take your time to think through each question carefully.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t pt-6">
            <Button 
              onClick={handleStartQuiz} 
              className="w-full py-6 text-lg font-medium bg-quiz-primary hover:bg-quiz-primary/90"
            >
              Start Quiz
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/quiz')} 
              className="text-gray-500"
            >
              Choose a Different Language
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default QuizStartPage;
