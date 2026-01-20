import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LogoOnlyNav from '@/components/layout/LogoOnlyNav';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background">
      <LogoOnlyNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Thank you for the discussion.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Welcome. Here is a summary of our understanding.
            </p>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: The Mandate */}
            <AnimatedSection delay={0.1}>
              <Card className="bg-white border-[#E5E5E5] p-10 h-full">
                <CardContent className="p-0">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    1. What you told us matters
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Global Primary Residence</span>
                        <p className="text-muted-foreground">A home base with international scope.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Low Operational Involvement</span>
                        <p className="text-muted-foreground">Seamless management is a necessity, not a luxury.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">Established, Private Assets</span>
                        <p className="text-muted-foreground">A preference for tangible quality over volatility.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 2: The Interpretation */}
            <AnimatedSection delay={0.2}>
              <Card className="bg-white border-[#E5E5E5] p-10 h-full">
                <CardContent className="p-0">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    2. Our interpretation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    You value permanence and discretion over speculation. Ease of ownership and clarity matter more to you than maximal, risky upside.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 3: Status & Velocity */}
            <AnimatedSection delay={0.3} className="md:col-span-2">
              <Card className="bg-stone-50 border-[#E5E5E5] p-10">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Side: Active Status */}
                    <div>
                      <h2 className="font-serif text-xl text-foreground mb-6">
                        3. What We're Actively Working On
                      </h2>
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-primary"
                        />
                        <span className="text-foreground font-medium">Global Residence — Under Curation</span>
                      </div>
                    </div>

                    {/* Right Side: The Bridge */}
                    <div>
                      <h2 className="font-serif text-xl text-foreground mb-6">
                        4. What Comes Next
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        You will review a curated proposal shortly. We will guide you through it step by step.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Primary CTA */}
          <AnimatedSection delay={0.4} className="text-center">
            <Link to="/preread">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-base font-medium"
              >
                Review Global Residence
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
