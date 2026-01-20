import { useState } from 'react';
import { Video, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserIntent } from '@/contexts/UserContext';

interface CommunicationStepProps {
  onNext: () => void;
  updateIntent: (updates: Partial<UserIntent>) => void;
}

const options = [
  {
    id: 'video',
    icon: Video,
    title: 'Video Call',
    description: 'Google Meet or similar—visual connection, screen sharing if needed.',
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Phone Call',
    description: 'Traditional voice call—discrete and convenient.',
  },
];

const CommunicationStep = ({ onNext, updateIntent }: CommunicationStepProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (selected) {
      updateIntent({ communicationPreference: selected as UserIntent['communicationPreference'] });
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          How would you prefer to connect?
        </h1>
        <p className="text-muted-foreground">
          Your initial consultation will be a 30-minute private conversation.
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`w-full p-5 rounded-lg border text-left transition-all duration-200 ${
              selected === option.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-muted-foreground/30 bg-card'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                selected === option.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <option.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
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

export default CommunicationStep;
