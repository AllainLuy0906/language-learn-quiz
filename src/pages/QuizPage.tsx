
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/contexts/QuizContext';
import QuizQuestion from '@/components/QuizQuestion';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const QuizPage = () => {
  const { 
    currentLanguage,
    questions,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setUserAnswer,
    calculateScore,
    quizStarted,
    quizCompleted
  } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentLanguage || !quizStarted) {
      navigate('/quiz');
      return;
    }

    if (quizCompleted) {
      navigate('/quiz/results');
    }
  }, [currentLanguage, quizStarted, quizCompleted, navigate]);

  const handleAnswer = (answer: string) => {
    setUserAnswer(currentQuestion, answer);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestion] === undefined) {
      toast({
        title: "Please select an answer",
        description: "You must select an option before proceeding",
        variant: "destructive"
      });
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      navigate('/quiz/results');
    }
  };

  if (!questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-quiz-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{currentLanguage} Quiz</h1>
        </div>
        
        <QuizQuestion
          question={currentQuestionData}
          questionNumber={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={userAnswers[currentQuestion]}
          onAnswerSelect={handleAnswer}
        />
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => navigate('/quiz')}
            className="text-gray-500"
          >
            Exit Quiz
          </Button>
          
          <Button
            onClick={handleNext}
            className="bg-quiz-primary hover:bg-quiz-primary/90 px-8"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
