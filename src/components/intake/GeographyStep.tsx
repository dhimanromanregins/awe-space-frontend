import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserIntent } from '@/contexts/UserContext';

interface GeographyStepProps {
  onNext: () => void;
  updateIntent: (updates: Partial<UserIntent>) => void;
}

const regions = [
  { id: 'europe', name: 'Europe', markets: 'London, Paris, Monaco, Milan, Lisbon' },
  { id: 'middle-east', name: 'Middle East', markets: 'Dubai, Abu Dhabi, Riyadh' },
  { id: 'americas', name: 'Americas', markets: 'New York, Miami, Los Angeles, São Paulo' },
  { id: 'asia-pacific', name: 'Asia-Pacific', markets: 'Singapore, Hong Kong, Tokyo, Sydney' },
];

const GeographyStep = ({ onNext, updateIntent }: GeographyStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      updateIntent({ geography: selected });
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Where are you looking?
        </h1>
        <p className="text-muted-foreground">
          Select all regions of interest. You can refine later.
        </p>
      </div>

      <div className="space-y-3">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => handleToggle(region.id)}
            className={`w-full p-5 rounded-lg border text-left transition-all duration-200 ${
              selected.includes(region.id)
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-muted-foreground/30 bg-card'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground mb-1">{region.name}</h3>
                <p className="text-sm text-muted-foreground">{region.markets}</p>
              </div>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                selected.includes(region.id)
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground/30'
              }`}>
                {selected.includes(region.id) && (
                  <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="w-full h-12"
      >
        Continue
      </Button>
    </div>
  );
};

export default GeographyStep;
