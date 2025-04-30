
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, HelpCircle, List } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About CodeQuiz</h1>
        <p className="text-gray-600 text-lg">
          Welcome to CodeQuiz, your platform for testing and improving your programming knowledge 
          through interactive quizzes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-quiz-primary" size={20} />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our mission is to help programmers of all levels test their knowledge, identify areas for improvement, 
              and expand their understanding of programming languages and concepts through engaging quizzes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="text-quiz-primary" size={20} />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Select a programming language, answer 20 carefully crafted questions, and receive instant feedback on 
              your performance. Each quiz covers key concepts and best practices for the selected language.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Quiz Features</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-quiz-primary mt-1" size={20} />
            <div>
              <h3 className="font-medium text-lg">Multiple Programming Languages</h3>
              <p className="text-gray-600">We offer quizzes for a variety of popular programming languages, including Python, JavaScript, Java, C++, and C#.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-quiz-primary mt-1" size={20} />
            <div>
              <h3 className="font-medium text-lg">Comprehensive Question Sets</h3>
              <p className="text-gray-600">Each quiz contains 20 questions covering a range of topics from basic syntax to advanced concepts.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-quiz-primary mt-1" size={20} />
            <div>
              <h3 className="font-medium text-lg">Instant Feedback</h3>
              <p className="text-gray-600">Get your results immediately after completing each quiz, along with the correct answers for any questions you missed.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="text-quiz-primary mt-1" size={20} />
            <div>
              <h3 className="font-medium text-lg">Progress Tracking</h3>
              <p className="text-gray-600">Create an account to track your progress and see your improvement over time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Get Started Today</h2>
        <p className="text-center text-gray-600 mb-8">
          Ready to test your programming knowledge? Sign up for a free account and start taking quizzes today.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/signup" className="bg-quiz-primary text-white px-6 py-3 rounded-md font-medium hover:bg-quiz-primary/90 transition">Create an Account</a>
          <a href="/quiz" className="bg-white border border-quiz-primary text-quiz-primary px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">Browse Quizzes</a>
        </div>
      </div>
    </div>
  );
};

export default About;
