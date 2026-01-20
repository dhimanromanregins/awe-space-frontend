import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, User, Compass, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LogoOnlyNav from '@/components/layout/LogoOnlyNav';
import AnimatedSection from '@/components/ui/AnimatedSection';

const PreRead = () => {
  return (
    <div className="min-h-screen bg-background">
      <LogoOnlyNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="mb-2">
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Global Residence
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Status: Prepared for Review
            </h1>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: The Driver */}
            <AnimatedSection delay={0.1}>
              <Card className="bg-white border-[#E7E5E4] p-10 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="h-5 w-5 text-muted-foreground" strokeWidth={1} />
                    <h2 className="font-serif text-xl text-foreground">
                      What we understood
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    You are seeking a <span className="font-semibold text-foreground">long-term residence</span> that feels globally anchored, operationally simple, and privately held.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 2: The Filter */}
            <AnimatedSection delay={0.2}>
              <Card className="bg-white border-[#E7E5E4] p-10 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <Compass className="h-5 w-5 text-muted-foreground" strokeWidth={1} />
                    <h2 className="font-serif text-xl text-foreground">
                      Our direction
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Ready-to-use assets only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Jurisdictions with legal clarity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Discretion over visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Long-term livability over speculation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 3: The Bridge */}
            <AnimatedSection delay={0.3} className="md:col-span-2">
              <Card className="bg-[#FAF9F6] border-[#E7E5E4] p-10">
                <CardContent className="p-0 text-center">
                  <h2 className="font-serif text-xl text-foreground mb-6">
                    What Happens Next
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Based on this direction, we've prepared a curated proposal for your review.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Primary CTA */}
          <AnimatedSection delay={0.4} className="text-center">
            <Link to="/decisions1">
              <Button 
                size="lg" 
                className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] px-8 py-4 text-base font-medium transition-all duration-300"
              >
                View Curated Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default PreRead;
