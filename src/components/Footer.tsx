
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              CodeQuiz
            </Link>
            <p className="text-gray-500 text-sm mt-2">Test your programming knowledge with our quizzes</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-2">Navigation</h4>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li><Link to="/" className="hover:text-quiz-primary">Home</Link></li>
                <li><Link to="/about" className="hover:text-quiz-primary">About</Link></li>
                <li><Link to="/quiz" className="hover:text-quiz-primary">Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Account</h4>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li><Link to="/login" className="hover:text-quiz-primary">Login</Link></li>
                <li><Link to="/signup" className="hover:text-quiz-primary">Sign Up</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CodeQuiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
