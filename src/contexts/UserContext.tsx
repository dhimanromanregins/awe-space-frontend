import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserIntent {
  primaryIntent?: 'residence' | 'investment' | 'mixed';
  geography?: string[];
  timeHorizon?: 'immediate' | 'medium' | 'long';
  communicationPreference?: 'video' | 'phone';
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  scheduledDate?: Date;
  scheduledTime?: string;
}

interface UserContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  hasCompletedIntake: boolean;
  setHasCompletedIntake: (value: boolean) => void;
  hasCompletedConsultation: boolean;
  setHasCompletedConsultation: (value: boolean) => void;
  userIntent: UserIntent;
  setUserIntent: (intent: UserIntent) => void;
  updateUserIntent: (updates: Partial<UserIntent>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedIntake, setHasCompletedIntake] = useState(false);
  const [hasCompletedConsultation, setHasCompletedConsultation] = useState(false);
  const [userIntent, setUserIntent] = useState<UserIntent>({});

  const updateUserIntent = (updates: Partial<UserIntent>) => {
    setUserIntent(prev => ({ ...prev, ...updates }));
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        hasCompletedIntake,
        setHasCompletedIntake,
        hasCompletedConsultation,
        setHasCompletedConsultation,
        userIntent,
        setUserIntent,
        updateUserIntent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
