import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/layout/Logo';
import { useUser } from '@/contexts/UserContext';
import IntentStep from '@/components/intake/IntentStep';
import GeographyStep from '@/components/intake/GeographyStep';
import TimelineStep from '@/components/intake/TimelineStep';
import CommunicationStep from '@/components/intake/CommunicationStep';
import ScheduleStep from '@/components/intake/ScheduleStep';

const TOTAL_STEPS = 5;

const Intake = () => {
  const navigate = useNavigate();
  const { updateUserIntent, setHasCompletedIntake } = useUser();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasCompletedIntake(true);
      navigate('/confirmation');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/how-it-works');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <IntentStep onNext={handleNext} updateIntent={updateUserIntent} />;
      case 2:
        return <GeographyStep onNext={handleNext} updateIntent={updateUserIntent} />;
      case 3:
        return <TimelineStep onNext={handleNext} updateIntent={updateUserIntent} />;
      case 4:
        return <CommunicationStep onNext={handleNext} updateIntent={updateUserIntent} />;
      case 5:
        return <ScheduleStep onNext={handleNext} updateIntent={updateUserIntent} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBack}
              className="text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="px-6 lg:px-12 py-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of {TOTAL_STEPS}</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / TOTAL_STEPS) * 100)}%</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-12">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Intake;
