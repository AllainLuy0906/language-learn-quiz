
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from '@/data/quizData';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answer: string) => void;
}

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  onAnswerSelect 
}: QuizQuestionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <p className="text-sm text-gray-500">Question {questionNumber + 1} of {totalQuestions}</p>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-quiz-primary to-quiz-secondary transition-all duration-300 ease-in-out" 
            style={{ width: `${((questionNumber + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 my-3 p-3 rounded-md hover:bg-gray-50">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
