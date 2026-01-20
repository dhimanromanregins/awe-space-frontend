import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import HowItWorks from "./pages/HowItWorks";
import Intake from "./pages/Intake";
import Confirmation from "./pages/Confirmation";
import Welcome from "./pages/Welcome";
import PreRead from "./pages/PreRead";
import Dashboard from "./pages/Dashboard";
import Decisions from "./pages/Decisions";
import Decisions1 from "./pages/Decisions1";
import DecisionContext from "./pages/DecisionContext";
import Property from "./pages/Property";
import Portfolio from "./pages/Portfolio";
import Timeline from "./pages/Timeline";
import Timeline1 from "./pages/Timeline1";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProgressiveDisclosureDemo from "./components/debug/ProgressiveDisclosureDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/intake" element={<Intake />} />
            <Route 
              path="/confirmation" 
              element={
                <ProtectedRoute requireCompletedIntake={true}>
                  <Confirmation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/welcome" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Welcome />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/preread" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <PreRead />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/decisions" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Decisions />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/decisions1" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Decisions1 />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/decision-context" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <DecisionContext />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/property/:id" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Property />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Portfolio />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/timeline" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Timeline />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/timeline1" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Timeline1 />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute requireCompletedConsultation={true}>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="/debug" element={<ProgressiveDisclosureDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
