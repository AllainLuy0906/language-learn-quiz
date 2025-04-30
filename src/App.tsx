
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Providers
import { AuthProvider } from '@/contexts/AuthContext';
import { QuizProvider } from '@/contexts/QuizContext';

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizSelectionPage from "./pages/QuizSelectionPage";
import QuizStartPage from "./pages/QuizStartPage";
import QuizPage from "./pages/QuizPage";
import QuizResult from "@/components/QuizResult";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <QuizProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/quiz" element={<QuizSelectionPage />} />
                  <Route path="/quiz/start" element={<QuizStartPage />} />
                  <Route path="/quiz/question" element={<QuizPage />} />
                  <Route path="/quiz/results" element={<QuizResult />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QuizProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
