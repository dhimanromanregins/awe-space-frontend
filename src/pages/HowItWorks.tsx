import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, FileSearch, Target, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/layout/Logo';
import AnimatedSection from '@/components/ui/AnimatedSection';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Logo showTagline />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              A relationship, not a transaction.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AweSpace is designed for those who value discretion, clarity, and 
              considered advice over endless options and aggressive salesmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-8">
                  <MessageCircle className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-3xl text-foreground mb-4">
                  It begins with understanding.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Before we show you anything, we listen. A private consultation 
                    allows us to understand not just what you're looking for, but why.
                  </p>
                  <p>
                    Your priorities, your timeline, your constraints—both spoken 
                    and unspoken. This understanding shapes everything that follows.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Private consultation setting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Curated luxury property"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-8">
                  <FileSearch className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-3xl text-foreground mb-4">
                  Curation over volume.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We don't present hundreds of options. We present a small number 
                    of carefully selected properties—typically two or three—each 
                    accompanied by clear reasoning.
                  </p>
                  <p>
                    Why this property? What makes it suitable for you specifically? 
                    What are the trade-offs? This is the information that matters.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-8">
                  <Target className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-3xl text-foreground mb-4">
                  Structured recommendations.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every proposal comes with a clear framework for decision-making. 
                    You'll see not just the options, but the comparison, the 
                    advisor's recommendation, and the path forward.
                  </p>
                  <p>
                    Proceed, refine, or defer—each choice leads to a thoughtful 
                    next step, never a dead end.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                    alt="Strategic planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* The Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              What you can expect
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="p-6 bg-card rounded-lg border border-border h-full">
                <h3 className="font-serif text-lg mb-3">Discretion First</h3>
                <p className="text-sm text-muted-foreground">
                  Your search, your timeline, your preferences—all held in 
                  complete confidence.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 bg-card rounded-lg border border-border h-full">
                <h3 className="font-serif text-lg mb-3">No Pressure</h3>
                <p className="text-sm text-muted-foreground">
                  We don't manufacture urgency. Decisions are made when 
                  you're ready, not when we are.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 bg-card rounded-lg border border-border h-full">
                <h3 className="font-serif text-lg mb-3">Clear Reasoning</h3>
                <p className="text-sm text-muted-foreground">
                  Every recommendation comes with an explanation of why 
                  it was selected for you.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 bg-card rounded-lg border border-border h-full">
                <h3 className="font-serif text-lg mb-3">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  From first conversation through completion, a single 
                  advisor manages your entire journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
              <Handshake className="h-7 w-7" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Begin with a conversation.
            </h2>
            <p className="text-primary-foreground/80 mb-10">
              Share a few details about what you're looking for, and we'll 
              schedule a private consultation at your convenience.
            </p>
            <Link to="/intake">
              <Button 
                size="lg" 
                variant="secondary"
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

export default HowItWorks;
