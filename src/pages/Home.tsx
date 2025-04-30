
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: 'Multiple Languages',
      description: 'Practice with quizzes for Python, JavaScript, Java, C++, and more.',
      icon: <CheckCircle size={20} className="text-quiz-primary" />
    },
    {
      title: 'Instant Feedback',
      description: 'Get your results immediately after completing the quiz.',
      icon: <CheckCircle size={20} className="text-quiz-primary" />
    },
    {
      title: 'Detailed Explanations',
      description: 'Learn from your mistakes with detailed explanations for each answer.',
      icon: <CheckCircle size={20} className="text-quiz-primary" />
    },
    {
      title: 'Track Progress',
      description: 'Keep track of your scores and see your improvement over time.',
      icon: <CheckCircle size={20} className="text-quiz-primary" />
    },
  ];

  return (
    <div>
      <Hero />

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CodeQuiz?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to test your skills?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our quizzes will help you identify your strengths and areas for improvement. 
            Challenge yourself and see how well you know your favorite programming languages.
          </p>
        </div>

        <div className="bg-gradient-to-r from-quiz-primary to-quiz-secondary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Get Started Today!</h3>
          <p className="mb-5">Create a free account and start taking quizzes in seconds.</p>
          <div className="flex justify-center gap-4">
            <a href="/signup" className="bg-white text-quiz-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">Sign Up</a>
            <a href="/login" className="bg-transparent border border-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
