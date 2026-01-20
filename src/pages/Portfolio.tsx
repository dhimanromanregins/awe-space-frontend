import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Check, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PrivateNav from '@/components/layout/PrivateNav';
import AnimatedSection from '@/components/ui/AnimatedSection';

const ownedAssets = [
  {
    id: 'owned-1',
    name: 'Villa Serena, Côte d\'Azur',
    location: 'Nice, France',
    acquired: 'March 2023',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80',
    status: 'owned',
  },
];

const activeDecisions = [
  {
    id: 'paris-16',
    name: 'Maison Particulière, Paris XVI',
    location: 'Paris, France',
    stage: 'Viewing Scheduled',
    nextAction: 'Viewing on March 15, 2024',
  },
  {
    id: 'dubai-creek',
    name: 'Penthouse, Dubai Creek Harbour',
    location: 'Dubai, UAE',
    stage: 'Under Review',
    nextAction: 'Awaiting your decision',
  },
];

const decisionHistory = [
  {
    id: 'hist-1',
    name: 'Townhouse, Belgravia',
    location: 'London, UK',
    decision: 'Deferred',
    date: 'January 2024',
    reason: 'Timeline misalignment',
  },
  {
    id: 'hist-2',
    name: 'Apartment, Manhattan',
    location: 'New York, USA',
    decision: 'Refined',
    date: 'December 2023',
    reason: 'Seeking larger outdoor space',
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <PrivateNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection className="max-w-4xl mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Your real-estate life, structured and remembered—privately.
            </p>
          </AnimatedSection>

          {/* Owned Assets */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Owned Assets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownedAssets.map((asset) => (
                <Card key={asset.id} className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={asset.image}
                      alt={asset.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground">
                        <Check className="h-3 w-3 mr-1" />
                        Owned
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{asset.location}</span>
                    </div>
                    <h3 className="font-serif text-lg mb-2">{asset.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>Acquired {asset.acquired}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Analytics */}
          <AnimatedSection delay={0.15} className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Analytics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">€</span>
                    </div>
                    <h3 className="font-medium text-foreground">Total Value</h3>
                  </div>
                  <p className="text-2xl font-bold text-foreground">€4.2M</p>
                  <p className="text-sm text-muted-foreground">Portfolio valuation</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <span className="text-green-600 font-semibold">↑</span>
                    </div>
                    <h3 className="font-medium text-foreground">Current Value</h3>
                  </div>
                  <p className="text-2xl font-bold text-foreground">€4.8M</p>
                  <p className="text-sm text-muted-foreground">+14.3% YTD</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">%</span>
                    </div>
                    <h3 className="font-medium text-foreground">Yield</h3>
                  </div>
                  <p className="text-2xl font-bold text-foreground">6.2%</p>
                  <p className="text-sm text-muted-foreground">Annual ROI</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Active Decisions */}
          <AnimatedSection delay={0.2} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-foreground">
                Active Decisions
              </h2>
              <Link to="/decisions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                View proposals →
              </Link>
            </div>

            <div className="space-y-4">
              {activeDecisions.map((decision, index) => (
                <motion.div
                  key={decision.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{decision.stage}</Badge>
                          </div>
                          <h3 className="font-serif text-xl mb-1">{decision.name}</h3>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>{decision.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {decision.nextAction}
                            </p>
                          </div>
                          <Link to={`/property/${decision.id}`}>
                            <Button variant="outline" size="sm">
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Execution Timeline */}
          <AnimatedSection delay={0.3} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-foreground">
                Execution Timeline
              </h2>
              <Link to="/timeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                View full timeline →
              </Link>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between overflow-x-auto pb-4">
                  {['Direction', 'Viewings', 'Offer', 'Documentation', 'Completed'].map((stage, index) => (
                    <div 
                      key={stage} 
                      className="flex flex-col items-center min-w-[100px]"
                    >
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 bg-primary text-primary-foreground`}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-xs text-center text-foreground">
                        {stage}
                      </span>
                      {index < 4 && (
                        <div className="hidden md:block absolute h-0.5 w-16 bg-primary" style={{ left: '50%', top: '16px' }} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Decision History */}
          <AnimatedSection delay={0.4} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-foreground">
                Decision History
              </h2>
              <Link to="/decisions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                View all decisions →
              </Link>
            </div>

            <div className="space-y-4">
              {decisionHistory.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-muted border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{item.decision}</Badge>
                            <span className="text-sm text-muted-foreground">{item.date}</span>
                          </div>
                          <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.reason}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Footer Message */}
          <AnimatedSection delay={0.5}>
            <div className="text-center py-12 border-t border-border">
              <p className="font-serif text-xl text-muted-foreground italic">
                "Your real-estate life, structured and remembered—privately."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
