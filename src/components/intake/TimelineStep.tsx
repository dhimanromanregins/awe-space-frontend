import { useState } from 'react';
import { Zap, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserIntent } from '@/contexts/UserContext';

interface TimelineStepProps {
  onNext: () => void;
  updateIntent: (updates: Partial<UserIntent>) => void;
}

const timelines = [
  {
    id: 'immediate',
    icon: Zap,
    title: 'Ready to move',
    description: 'Looking to complete a transaction within 3 months.',
  },
  {
    id: 'medium',
    icon: Clock,
    title: 'This year',
    description: 'Actively exploring, aiming for 6-12 months.',
  },
  {
    id: 'long',
    icon: Calendar,
    title: 'Longer horizon',
    description: 'Building understanding for the right opportunity.',
  },
];

const TimelineStep = ({ onNext, updateIntent }: TimelineStepProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (selected) {
      updateIntent({ timeHorizon: selected as UserIntent['timeHorizon'] });
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          What's your timeline?
        </h1>
        <p className="text-muted-foreground">
          This helps us calibrate the pace of our work together.
        </p>
      </div>

      <div className="space-y-3">
        {timelines.map((timeline) => (
          <button
            key={timeline.id}
            onClick={() => handleSelect(timeline.id)}
            className={`w-full p-5 rounded-lg border text-left transition-all duration-200 ${
              selected === timeline.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-muted-foreground/30 bg-card'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                selected === timeline.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <timeline.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{timeline.title}</h3>
                <p className="text-sm text-muted-foreground">{timeline.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Button
        onClick={handleContinue}
        disabled={!selected}
        className="w-full h-12"
      >
        Continue
      </Button>
    </div>
  );
};

export default TimelineStep;
