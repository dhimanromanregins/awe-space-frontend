import { useState } from 'react';
import { Home, TrendingUp, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserIntent } from '@/contexts/UserContext';

interface IntentStepProps {
  onNext: () => void;
  updateIntent: (updates: Partial<UserIntent>) => void;
}

const options = [
  {
    id: 'residence',
    icon: Home,
    title: 'Primary or Secondary Residence',
    description: 'A home for you or your family to live in.',
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Investment Property',
    description: 'An asset for capital preservation or income generation.',
  },
  {
    id: 'mixed',
    icon: Layers,
    title: 'Mixed Use',
    description: 'Both personal use and investment considerations.',
  },
];

const IntentStep = ({ onNext, updateIntent }: IntentStepProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (selected) {
      updateIntent({ primaryIntent: selected as UserIntent['primaryIntent'] });
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          What brings you here?
        </h1>
        <p className="text-muted-foreground">
          This helps us understand your primary objective.
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

export default IntentStep;
