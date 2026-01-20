import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/layout/Logo';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Logo showTagline />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight tracking-tight mb-8">
                Real estate,<br />
                <span className="text-muted-foreground">without the noise.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              A private desk for considered real estate decisions. 
              No listings to browse. No agents to negotiate. 
              Just thoughtful recommendations tailored to your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Link to="/how-it-works">
                <Button 
                  size="lg" 
                  className="h-14 px-10 text-base font-sans tracking-wide group"
                >
                  Request Private Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Complexity is the enemy of action.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The traditional approach to significant real estate is fragmented: 
              endless listings, competing agents, opaque negotiations, and decisions 
              made under pressure. It doesn't have to be this way.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">No Browsing Required</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We don't show you everything. We show you what fits, 
                  after we understand what matters.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">One Relationship</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A single advisor who understands your complete picture, 
                  not multiple agents with partial views.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-8 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Your Timeline</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No pressure, no urgency manufactured to close. 
                  Decisions made when you're ready.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                    alt="Luxury architectural detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Why marketplaces fail at this level.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Platforms optimised for volume cannot serve those who require discretion. 
                    The best properties rarely list publicly. The most considered buyers 
                    don't browse.
                  </p>
                  <p>
                    AweSpace operates differently: we begin with understanding, 
                    proceed with curation, and conclude with structured recommendations 
                    you can act upon with confidence.
                  </p>
                  <p>
                    This isn't a marketplace. It's a private desk for your 
                    real estate life.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A thoughtful process designed around clarity, not complexity.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Private Consultation</h3>
                    <p className="text-muted-foreground">
                      A confidential conversation to understand your priorities, 
                      constraints, and what truly matters in your next property decision.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Curated Proposals</h3>
                    <p className="text-muted-foreground">
                      Rather than hundreds of listings, you receive a small number 
                      of carefully selected options, each with clear reasoning.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Structured Decision</h3>
                    <p className="text-muted-foreground">
                      Every recommendation includes trade-offs, timelines, and 
                      a clear path forward—whether you proceed, refine, or defer.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ready for a different approach?
            </h2>
            <p className="text-muted-foreground mb-10">
              Begin with a private consultation. No commitment, no pressure—just 
              a conversation about what you're looking for.
            </p>
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                className="h-14 px-10 text-base font-sans tracking-wide group"
              >
                Request Private Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Private real estate for considered decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
