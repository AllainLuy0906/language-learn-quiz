
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuiz } from '@/contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import { Check, X } from "lucide-react";

const QuizResult = () => {
  const { score, questions, userAnswers, restartQuiz, currentLanguage } = useQuiz();
  const navigate = useNavigate();
  
  const percentage = (score / questions.length) * 100;
  
  let message = '';
  let color = '';
  
  if (percentage >= 80) {
    message = 'Excellent! You\'re a pro!';
    color = 'text-green-600';
  } else if (percentage >= 60) {
    message = 'Good job! You\'re getting there!';
    color = 'text-blue-600';
  } else if (percentage >= 40) {
    message = 'Not bad! Keep practicing!';
    color = 'text-yellow-600';
  } else {
    message = 'Keep learning! You\'ll get better!';
    color = 'text-red-600';
  }

  const handleRetakeQuiz = () => {
    restartQuiz();
  };

  const handleBackToQuizzes = () => {
    restartQuiz();
    navigate('/quiz');
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Results</CardTitle>
          <CardDescription>Language: {currentLanguage}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <div className="text-5xl font-bold mb-2">
              {score}/{questions.length}
            </div>
            <div className={`text-xl ${color} font-medium`}>{message}</div>
            <div className="w-full bg-gray-200 rounded-full h-5 mt-4">
              <div 
                className="h-5 rounded-full bg-gradient-to-r from-quiz-primary to-quiz-secondary" 
                style={{ width: `${percentage}%` }}
              >
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-2">{percentage.toFixed(0)}% correct</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 flex-wrap">
          <Button onClick={handleRetakeQuiz} className="bg-quiz-primary hover:bg-quiz-primary/90">
            Retake Quiz
          </Button>
          <Button variant="outline" onClick={handleBackToQuizzes}>
            Try Another Quiz
          </Button>
        </CardFooter>
      </Card>

      <h3 className="text-xl font-medium mb-4">Question Review</h3>
      {questions.map((question, index) => (
        <Card key={index} className="mb-4">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-lg">Question {index + 1}</CardTitle>
              {userAnswers[index] === question.correctAnswer ? (
                <div className="flex items-center text-green-600">
                  <Check className="mr-1" size={16} />
                  Correct
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <X className="mr-1" size={16} />
                  Incorrect
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-2">{question.question}</p>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Your answer:</p>
              <p className={userAnswers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}>
                {userAnswers[index] || "No answer provided"}
              </p>
            </div>
            {userAnswers[index] !== question.correctAnswer && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">Correct answer:</p>
                <p className="text-green-600">{question.correctAnswer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuizResult;
