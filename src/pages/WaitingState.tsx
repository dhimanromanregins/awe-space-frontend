import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useUser } from '@/contexts/UserContext';
import LogoOnlyNav from '@/components/layout/LogoOnlyNav';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Loader2 } from 'lucide-react';

const WaitingState = () => {
  const { userName, setHasCompletedConsultation } = useUser();
  const navigate = useNavigate();

  const handleReviewGlobalResidents = () => {
    // Simulate curation completion
    setHasCompletedConsultation(true);
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-background">
      <LogoOnlyNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Welcome Header */}
          <AnimatedSection className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Welcome {userName}.
            </h1>
          </AnimatedSection>

          {/* Status Card */}
          <AnimatedSection delay={0.2}>
            <Card className="bg-white border-[#E5E5E5] p-10">
              <CardContent className="p-0">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  {/* Animated Loading Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-primary"
                  >
                    <Loader2 size={48} />
                  </motion.div>

                  {/* Status Message */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl text-foreground">
                      No recommendations yet.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Curation in progress.
                    </p>
                  </div>

                  {/* Additional Context */}
                  <p className="text-muted-foreground max-w-lg">
                    Our team is carefully curating personalized recommendations based on your discussion with our concierge. We'll notify you as soon as they're ready.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Demo Simulation Trigger */}
          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Card className="bg-stone-50 border-[#E5E5E5] p-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Demo Simulation: Click below to simulate curation completion
                  </p>
                  <Button 
                    onClick={handleReviewGlobalResidents}
                    size="lg"
                    className="font-medium"
                  >
                    Review Global Residents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Info Section */}
          <AnimatedSection delay={0.6} className="mt-16">
            <Card className="bg-background border-[#E5E5E5] p-8">
              <CardContent className="p-0">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Our team reviews your consultation notes and preferences</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>We curate a personalized selection of properties that match your criteria</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>You'll receive access to your curated recommendations in this portal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default WaitingState;
