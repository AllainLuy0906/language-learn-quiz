
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Test your</span>{' '}
                <span className="block text-quiz-primary xl:inline">programming skills</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Challenge yourself with quizzes on Python, JavaScript, Java, C++, and more. Expand your knowledge and become a better programmer!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to={isAuthenticated ? "/quiz" : "/signup"}>
                    <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium bg-quiz-primary hover:bg-quiz-primary/90">
                      {isAuthenticated ? 'Start a Quiz' : 'Sign up for free'}
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/about">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium border border-transparent text-quiz-primary hover:bg-gray-50">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-quiz-primary to-quiz-secondary sm:h-72 lg:h-full" />
      </div>
    </div>
  );
};

export default Hero;
