import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/contexts/UserContext';

const ProgressiveDisclosureDemo = () => {
  const { 
    hasCompletedIntake, 
    hasCompletedConsultation,
    setHasCompletedIntake,
    setHasCompletedConsultation 
  } = useUser();

  const resetProgress = () => {
    setHasCompletedIntake(false);
    setHasCompletedConsultation(false);
  };

  const simulateIntakeCompletion = () => {
    setHasCompletedIntake(true);
  };

  const simulateConsultationCompletion = () => {
    setHasCompletedIntake(true);
    setHasCompletedConsultation(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Progressive Disclosure Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-medium">Intake Completed:</span>
            <Badge variant={hasCompletedIntake ? "default" : "secondary"}>
              {hasCompletedIntake ? "Yes" : "No"}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Consultation Completed:</span>
            <Badge variant={hasCompletedConsultation ? "default" : "secondary"}>
              {hasCompletedConsultation ? "Yes" : "No"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Routes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 rounded">
              <span>/ (Landing)</span>
              <Badge variant="outline">Always Available</Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/how-it-works</span>
              <Badge variant="outline">Always Available</Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/intake</span>
              <Badge variant="outline">Always Available</Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/confirmation</span>
              <Badge variant={hasCompletedIntake ? "default" : "secondary"}>
                {hasCompletedIntake ? "Available" : "Requires Intake"}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/dashboard</span>
              <Badge variant={hasCompletedConsultation ? "default" : "secondary"}>
                {hasCompletedConsultation ? "Available" : "Requires Consultation"}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/decision-context</span>
              <Badge variant={hasCompletedConsultation ? "default" : "secondary"}>
                {hasCompletedConsultation ? "Available" : "Requires Consultation"}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/decisions</span>
              <Badge variant={hasCompletedConsultation ? "default" : "secondary"}>
                {hasCompletedConsultation ? "Available" : "Requires Consultation"}
              </Badge>
            </div>
            <div className="flex justify-between items-center p-2 rounded">
              <span>/portfolio</span>
              <Badge variant={hasCompletedConsultation ? "default" : "secondary"}>
                {hasCompletedConsultation ? "Available" : "Requires Consultation"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Simulation Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            onClick={resetProgress} 
            variant="outline"
            className="w-full"
          >
            Reset All Progress
          </Button>
          <Button 
            onClick={simulateIntakeCompletion} 
            variant="outline"
            className="w-full"
            disabled={hasCompletedIntake}
          >
            Complete Intake
          </Button>
          <Button 
            onClick={simulateConsultationCompletion} 
            className="w-full"
            disabled={hasCompletedConsultation}
          >
            Complete Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressiveDisclosureDemo;
