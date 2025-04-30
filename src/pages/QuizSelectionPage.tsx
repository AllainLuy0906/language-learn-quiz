
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LanguageCard from '@/components/LanguageCard';
import { Button } from "@/components/ui/button";
import { LogIn } from 'lucide-react';

const QuizSelectionPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const programmingLanguages = [
    {
      language: "Python",
      description: "Test your knowledge of Python syntax, libraries, and best practices.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      difficulty: "Beginner" as const
    },
    {
      language: "JavaScript",
      description: "Challenge yourself with questions about JavaScript fundamentals and modern ES6+ features.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      difficulty: "Intermediate" as const
    },
    {
      language: "Java",
      description: "Test your Java knowledge including OOP concepts, syntax, and Java ecosystem.",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
      difficulty: "Intermediate" as const
    },
    {
      language: "C++",
      description: "Challenge your understanding of C++ including memory management, STL, and more.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      difficulty: "Advanced" as const
    },
    {
      language: "C#",
      description: "Test your knowledge of C# and .NET framework concepts.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png",
      difficulty: "Intermediate" as const
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Join CodeQuiz to Start</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            You need to create an account or log in to access our programming quizzes. 
            It's completely free and only takes a few seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-quiz-primary hover:bg-quiz-primary/90"
            >
              Sign Up for Free
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2"
            >
              <LogIn size={18} />
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 text-center">Select a Programming Language</h1>
        <p className="text-gray-600 text-center mb-8">
          Choose a language to test your knowledge with a 20-question quiz
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingLanguages.map((lang) => (
            <LanguageCard
              key={lang.language}
              language={lang.language}
              description={lang.description}
              icon={lang.icon}
              difficulty={lang.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
