
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import StudentLogin from "./pages/StudentLogin";
import ParentLogin from "./pages/ParentLogin";
import SmartSaving from "./pages/SmartSaving";
import ParentOversight from "./pages/ParentOversight";
import InteractiveLearning from "./pages/InteractiveLearning";
import StudentDashboard from "./pages/StudentDashboard";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      key={location.pathname}
    >
      {children}
    </motion.div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
                <Route path="/student-login" element={<PageWrapper><StudentLogin /></PageWrapper>} />
                <Route path="/parent-login" element={<PageWrapper><ParentLogin /></PageWrapper>} />
                <Route path="/smart-saving" element={<PageWrapper><SmartSaving /></PageWrapper>} />
                <Route path="/parent-oversight" element={<PageWrapper><ParentOversight /></PageWrapper>} />
                <Route path="/interactive-learning" element={<PageWrapper><InteractiveLearning /></PageWrapper>} />
                <Route path="/student-dashboard" element={<PageWrapper><StudentDashboard /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
