import { Navigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireCompletedIntake?: boolean;
  requireCompletedConsultation?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  requireCompletedIntake = false, 
  requireCompletedConsultation = false 
}: ProtectedRouteProps) => {
  const { isAuthenticated, hasCompletedIntake, hasCompletedConsultation } = useUser();

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if consultation is required but not completed
  if (requireCompletedConsultation && !hasCompletedConsultation) {
    return <Navigate to="/waiting-state" replace />;
  }

  // Check if intake is required but not completed
  if (requireCompletedIntake && !hasCompletedIntake) {
    return <Navigate to="/intake" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
