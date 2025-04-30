
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
            CodeQuiz
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-quiz-primary font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-quiz-primary font-medium">About</Link>
          <Link to="/quiz" className="text-gray-700 hover:text-quiz-primary font-medium">Quiz</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Hi, {user?.name}</span>
              <Button 
                variant="ghost" 
                onClick={logout} 
                className="flex items-center gap-2 text-gray-700 hover:text-quiz-primary"
              >
                <LogOut size={18} />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="ghost" className="flex items-center gap-2">
                  <LogIn size={18} />
                  <span className="hidden md:inline">Login</span>
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-quiz-primary hover:bg-quiz-primary/90">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
