import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/ui/AnimatedSection';

const DecisionContext = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleViewProposal = () => {
    setShowHeader(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step 2 of 3</span>
              <span className="text-sm text-muted-foreground">67%</span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: '33%' }}
                animate={{ width: '67%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Header */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <div className="container mx-auto px-6 lg:px-12 py-6">
              <div className="flex items-center gap-4">
                <h1 className="font-serif text-2xl text-foreground">
                  Global Residence
                </h1>
                <Badge variant="default">Prepared for Review</Badge>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`container mx-auto px-6 lg:px-12 py-20 ${showHeader ? 'pt-8' : 'pt-24'}`}>
        <AnimatedSection className="max-w-4xl">
          {/* Header - Hidden initially */}
          <AnimatePresence>
            {!showHeader && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                    Global Residence
                  </h1>
                  <Badge variant="default">Prepared for Review</Badge>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* What we understood */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              What we understood
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  You are seeking a long-term residence that feels globally anchored, 
                  operationally simple, and privately held.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our direction */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Our direction
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Ready-to-use assets only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Jurisdictions with legal clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Discretion over visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Long-term livability over speculation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* What Happens Next */}
          <AnimatedSection delay={0.3} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              What Happens Next
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Based on this direction, we've prepared a curated proposal for your review.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.4}>
            <AnimatePresence mode="wait">
              {!showHeader ? (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    size="lg"
                    className="h-14 px-10 text-base font-sans tracking-wide group"
                    onClick={handleViewProposal}
                  >
                    View Curated Proposal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="proceed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/decisions">
                    <Button 
                      size="lg"
                      className="h-14 px-10 text-base font-sans tracking-wide group"
                    >
                      Proceed to Proposals
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default DecisionContext;
