import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Check, RefreshCw, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LogoOnlyNav from '@/components/layout/LogoOnlyNav';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ActionModal from '@/components/modals/ActionModal';

const properties = [
  {
    id: 'paris-16',
    name: 'Maison Particulière, Paris XVI',
    location: 'Paris, France',
    type: 'Private Listing',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    whyItFits: 'Heritage architecture meets modern living. Walking distance to Bois de Boulogne, exceptional school catchments, discreet neighbourhood favoured by diplomatic families.',
    tradeOffs: 'Premium pricing reflects scarcity. Limited outdoor space typical of Parisian properties. Requires 6-month minimum for full documentation.',
    specs: {
      size: '420 m²',
      bedrooms: 5,
      yearBuilt: '1890, renovated 2019',
    },
  },
  {
    id: 'dubai-creek',
    name: 'Penthouse, Dubai Creek Harbour',
    location: 'Dubai, UAE',
    type: 'Off-Market',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    whyItFits: 'Exceptional investment yield with lifestyle flexibility. Tax-advantaged structure, direct developer relationship, completion Q3 2025.',
    tradeOffs: 'Off-plan purchase requires staged payments. Market dependent on regional economic factors. Service charges higher than comparable developments.',
    specs: {
      size: '385 m²',
      bedrooms: 4,
      yearBuilt: 'Completion 2025',
    },
  },
];

const Decisions1 = () => {
  const [selectedAction, setSelectedAction] = useState<'proceed' | 'refine' | 'defer' | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const handleAction = (action: 'proceed' | 'refine' | 'defer', propertyId?: string) => {
    setSelectedAction(action);
    setSelectedProperty(propertyId || null);
  };

  return (
    <div className="min-h-screen bg-background">
      <LogoOnlyNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Header */}
            <AnimatedSection className="max-w-4xl mb-12">
              <Badge variant="secondary" className="mb-4">Proposal #1</Badge>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Curated for your consideration
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Based on our understanding of your priorities, we've identified two properties 
                that merit your attention. Each represents a different approach to your objectives.
              </p>
            </AnimatedSection>

            {/* Executive Summary */}
            <AnimatedSection delay={0.1} className="mb-16">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="font-serif text-xl mb-4">Executive Summary</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your search parameters indicated a preference for European heritage with 
                    investment flexibility. We present two contrasting options: a classic 
                    Parisian property offering stability and prestige, and a contemporary 
                    Dubai development offering yield optimization. Both align with your 
                    timeline and represent off-market opportunities unavailable through 
                    traditional channels.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Property Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {properties.map((property, index) => (
                <AnimatedSection key={property.id} delay={0.2 + index * 0.1}>
                  <Card className="bg-card border-border overflow-hidden">
                    {/* Image on Top */}
                    <div className="aspect-[16/10] relative">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                          {property.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Below */}
                    <CardContent className="p-6">
                      <div className="flex items-start gap-2 text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl mb-4">
                        {property.name}
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Why this fits
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {property.whyItFits}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            Trade-offs to consider
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {property.tradeOffs}
                          </p>
                        </div>

                        <div className="flex gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Size</span>
                            <p className="font-medium">{property.specs.size}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Bedrooms</span>
                            <p className="font-medium">{property.specs.bedrooms}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Year</span>
                            <p className="font-medium">{property.specs.yearBuilt}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link to={`/property/${property.id}`}>
                          <Button variant="outline" size="sm" className="group">
                            View Full Details
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Decision Box */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-muted border-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button 
                      size="lg"
                      className="h-14 px-6 font-sans tracking-wide"
                      onClick={() => handleAction('proceed', 'paris-16')}
                    >
                      Proceed with Option A
                    </Button>
                    <Button 
                      size="lg"
                      className="h-14 px-6 font-sans tracking-wide"
                      onClick={() => handleAction('proceed', 'dubai-creek')}
                    >
                      Proceed with Option B
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="h-14 px-6 font-sans tracking-wide"
                      onClick={() => handleAction('refine')}
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refine Search
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="h-14 px-6 font-sans tracking-wide"
                      onClick={() => handleAction('defer')}
                    >
                      <Pause className="mr-2 h-4 w-4" />
                      Defer Decision
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Right Sidebar - Process Stages */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg mb-8">Process Stages</h3>
                  <div className="space-y-8">
                    {/* Direction */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
                          ✓
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Direction</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>

                    {/* Viewing */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium relative">
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                          <div className="w-3 h-3 rounded-full bg-current" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Viewing</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                    </div>

                    {/* Offer */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium">
                          <div className="w-3 h-3 rounded-full bg-current" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Offer</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>

                    {/* Documentation */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium">
                          <div className="w-3 h-3 rounded-full bg-current" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Documentation</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>

                    {/* Completed */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium">
                          <div className="w-3 h-3 rounded-full bg-current" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Completed</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Action Modal */}
      <AnimatePresence>
        {selectedAction && (
          <ActionModal
            action={selectedAction}
            propertyId={selectedProperty}
            onClose={() => {
              setSelectedAction(null);
              setSelectedProperty(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Decisions1;
