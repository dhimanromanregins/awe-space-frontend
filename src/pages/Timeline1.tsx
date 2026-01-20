import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Circle, User, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PrivateNav from '@/components/layout/PrivateNav';
import AnimatedSection from '@/components/ui/AnimatedSection';

const stages = [
  {
    id: 'direction',
    name: 'Direction',
    status: 'completed',
    owner: 'AweSpace',
    description: 'Initial consultation and requirements gathering',
    activities: [
      { date: 'Jan 15, 2024', action: 'Private consultation completed', actor: 'AweSpace' },
      { date: 'Jan 17, 2024', action: 'Search parameters defined', actor: 'Client' },
    ],
  },
  {
    id: 'viewings',
    name: 'Viewings',
    status: 'completed',
    owner: 'Client',
    description: 'Property viewings and on-site assessments',
    activities: [
      { date: 'Feb 28, 2024', action: 'Curated proposals delivered', actor: 'AweSpace' },
      { date: 'Mar 5, 2024', action: 'Paris property shortlisted', actor: 'Client' },
      { date: 'Mar 15, 2024', action: 'Viewing completed', actor: 'Client' },
    ],
  },
  {
    id: 'offer',
    name: 'Offer',
    status: 'completed',
    owner: 'AweSpace',
    description: 'Offer preparation and negotiation',
    activities: [
      { date: 'Mar 20, 2024', action: 'Offer submitted', actor: 'AweSpace' },
      { date: 'Mar 25, 2024', action: 'Negotiation completed', actor: 'AweSpace' },
    ],
  },
  {
    id: 'documentation',
    name: 'Documentation',
    status: 'completed',
    owner: 'AweSpace',
    description: 'Legal review and transaction documentation',
    activities: [
      { date: 'Apr 1, 2024', action: 'Legal review completed', actor: 'AweSpace' },
      { date: 'Apr 5, 2024', action: 'Documentation finalized', actor: 'AweSpace' },
    ],
  },
  {
    id: 'completed',
    name: 'Completed',
    status: 'completed',
    owner: 'Client',
    description: 'Final handover and asset transfer',
    activities: [
      { date: 'Apr 10, 2024', action: 'Final handover completed', actor: 'Client' },
      { date: 'Apr 15, 2024', action: 'Asset transfer finalized', actor: 'AweSpace' },
    ],
  },
];

const Timeline1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <PrivateNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Execution Timeline
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Track the progress of your active property search from initial direction 
              through to completion.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Timeline */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <h2 className="font-serif text-2xl text-foreground mb-8">
                  Progress Stages
                </h2>

                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-8 bottom-8 w-px bg-border" />

                  <div className="space-y-0">
                    {stages.map((stage, index) => (
                      <motion.div
                        key={stage.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="relative pl-12 pb-8"
                      >
                        {/* Stage Indicator */}
                        <div 
                          className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground`}
                        >
                          <Check className="h-4 w-4" />
                        </div>

                        {/* Stage Content */}
                        <Card className="bg-card border-border">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-serif text-xl">{stage.name}</h3>
                                  <Badge variant="default">
                                    Complete
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {stage.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <User className="h-3 w-3" />
                                <span>{stage.owner}</span>
                              </div>
                            </div>

                            {stage.activities.length > 0 && (
                              <div className="space-y-3 pt-4 border-t border-border">
                                {stage.activities.map((activity, actIndex) => (
                                  <div 
                                    key={actIndex}
                                    className="flex items-start justify-between text-sm text-muted-foreground"
                                  >
                                    <span>{activity.action}</span>
                                    <span className="text-xs">{activity.date}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Next Button */}
          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link to="/decisions">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-base font-medium"
              >
                Next
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default Timeline1;