
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for user data
    const storedUser = localStorage.getItem('quiz-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('quiz-user');
      }
    }
  }, []);

  // Mock authentication functions
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate a successful login with some validation
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Please provide email and password",
          variant: "destructive",
        });
        return false;
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists in localStorage (from previous signup)
      const users = JSON.parse(localStorage.getItem('quiz-users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userToSave = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email
        };
        
        setUser(userToSave);
        setIsAuthenticated(true);
        localStorage.setItem('quiz-user', JSON.stringify(userToSave));
        
        toast({
          title: "Welcome back!",
          description: `You've successfully logged in as ${foundUser.name}`,
        });
        return true;
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Validate inputs
      if (!name || !email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return false;
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user in localStorage (in a real app, this would be in a database)
      const users = JSON.parse(localStorage.getItem('quiz-users') || '[]');
      
      // Check if email already exists
      if (users.some((u: any) => u.email === email)) {
        toast({
          title: "Signup failed",
          description: "Email already in use",
          variant: "destructive",
        });
        return false;
      }
      
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password, // In a real app, this would be hashed
      };
      
      users.push(newUser);
      localStorage.setItem('quiz-users', JSON.stringify(users));
      
      // Log the user in after signup
      const userToSave = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      };
      
      setUser(userToSave);
      setIsAuthenticated(true);
      localStorage.setItem('quiz-user', JSON.stringify(userToSave));
      
      toast({
        title: "Registration successful!",
        description: `Welcome to CodeQuiz, ${name}!`,
      });
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('quiz-user');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
