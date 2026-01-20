import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useUser } from '@/contexts/UserContext';

const Dashboard = () => {
  const { userIntent } = useUser();

  const getIntentLabel = () => {
    switch (userIntent.primaryIntent) {
      case 'residence': return 'Primary Residence';
      case 'investment': return 'Investment Portfolio';
      case 'mixed': return 'Mixed Use';
      default: return 'Property Acquisition';
    }
  };

  const getTimelineLabel = () => {
    switch (userIntent.timeHorizon) {
      case 'immediate': return 'Within 6 months';
      case 'medium': return '6–18 months';
      case 'long': return '18+ months';
      default: return 'Flexible timeline';
    }
  };

  const workstreams = [
    {
      id: 1,
      title: 'European Residence Search',
      status: 'active',
      lastUpdate: '2 days ago',
      properties: 2,
    },
    {
      id: 2,
      title: 'Dubai Investment Exploration',
      status: 'pending',
      lastUpdate: '5 days ago',
      properties: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step 1 of 3</span>
              <span className="text-sm text-muted-foreground">33%</span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 lg:px-12 pt-24 pb-20">
        <AnimatedSection className="max-w-4xl">
          {/* Welcome Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Welcome back{userIntent.name ? `, ${userIntent.name.split(' ')[0]}` : ''}.
            </h1>
            <p className="text-lg text-muted-foreground">
              Your private desk for considered property decisions.
            </p>
          </motion.div>

          {/* Interpretation of Priorities */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              What we understand
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Primary Intent</p>
                      <p className="font-serif text-lg">{getIntentLabel()}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Geography Focus</p>
                      <p className="font-serif text-lg">
                        {userIntent.geography?.length 
                          ? userIntent.geography.join(', ')
                          : 'Global'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-serif text-lg">{getTimelineLabel()}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Based on our consultation, we understand you're seeking{' '}
                    {userIntent.primaryIntent === 'residence' 
                      ? 'a primary residence that balances lifestyle with long-term value'
                      : userIntent.primaryIntent === 'investment'
                      ? 'investment properties with strong yield potential and capital appreciation'
                      : 'properties that serve both personal use and investment objectives'}
                    . Your focus on{' '}
                    {userIntent.geography?.length 
                      ? userIntent.geography.join(' and ')
                      : 'select global markets'}{' '}
                    suggests an appreciation for{' '}
                    {userIntent.geography?.includes('Europe') 
                      ? 'heritage architecture and established markets'
                      : 'emerging opportunities and lifestyle destinations'}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Active Workstreams */}
          <AnimatedSection delay={0.2} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-foreground">
                Active workstreams
              </h2>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                View all history →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workstreams.map((stream, index) => (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-card border-border hover:border-stone-dark/30 transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl mb-1">{stream.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Updated {stream.lastUpdate}
                          </p>
                        </div>
                        <Badge 
                          variant={stream.status === 'active' ? 'default' : 'secondary'}
                          className="capitalize"
                        >
                          {stream.status}
                        </Badge>
                      </div>

                      {stream.properties > 0 && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {stream.properties} curated properties ready for review
                        </p>
                      )}

                      <Link to="/decisions">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-0 h-auto font-sans text-sm group-hover:text-foreground"
                        >
                          {stream.properties > 0 ? 'Review proposals' : 'Check status'}
                          <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA to Proposals */}
          <AnimatedSection delay={0.3}>
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl mb-2">
                      Your first proposal is ready
                    </h2>
                    <p className="text-primary-foreground/80">
                      Two carefully selected properties for your consideration, 
                      with detailed reasoning and trade-offs.
                    </p>
                  </div>
                  <Link to="/decisions">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="h-12 px-8 group whitespace-nowrap"
                    >
                      Review Proposal
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default Dashboard;
