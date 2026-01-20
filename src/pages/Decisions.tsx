import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Check, RefreshCw, Pause, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PrivateNav from '@/components/layout/PrivateNav';
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

const historyItems = [
  {
    id: 'hist-1',
    date: '2024-01-10',
    type: 'refine',
    title: 'Refinement Requested',
    description: 'Client requested to focus more on European properties with historical significance',
    status: 'completed',
    summary: 'Client feedback led to refined search parameters focusing on heritage properties',
    properties: [
      {
        id: 'paris-16',
        name: 'Maison Particulière, Paris XVI',
        location: 'Paris, France',
        type: 'Heritage Property',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
        description: 'Historic estate with vineyard views and architectural significance',
        specs: {
          size: '850 m²',
          bedrooms: 6,
          yearBuilt: '1890, renovated 2019'
        }
      },
      {
        id: 'geneva-lake',
        name: 'Villa, Geneva',
        location: 'Geneva, Switzerland',
        type: 'Modern Villa',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
        description: 'Contemporary design with lake access and modern amenities',
        specs: {
          size: '650 m²',
          bedrooms: 5,
          yearBuilt: '2021'
        }
      }
    ]
  },
  {
    id: 'hist-2',
    date: '2024-01-08',
    type: 'defer',
    title: 'Decision Deferred',
    description: 'Client chose to defer decision pending additional market research',
    status: 'completed',
    summary: 'Client requested additional time for market analysis and due diligence',
    properties: [
      {
        id: 'monaco-hill',
        name: 'Penthouse, Monaco',
        location: 'Monaco',
        type: 'Luxury Penthouse',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
        description: 'Exclusive penthouse with Mediterranean views',
        specs: {
          size: '450 m²',
          bedrooms: 4,
          yearBuilt: '2018'
        }
      }
    ]
  },
  {
    id: 'hist-3',
    date: '2024-01-05',
    type: 'viewing',
    title: 'Property Viewing Completed',
    description: 'Virtual viewing of 3 properties in Monaco and Geneva regions',
    status: 'completed',
    summary: 'Completed virtual tours of three shortlisted properties',
    properties: [
      {
        id: 'nice-promenade',
        name: 'Apartment, Nice',
        location: 'Nice, France',
        type: 'Sea View Apartment',
        image: 'https://images.unsplash.com/photo-1582402231116-6db9ce1699b6?w=400&q=80',
        description: 'Coastal apartment with panoramic sea views',
        specs: {
          size: '320 m²',
          bedrooms: 3,
          yearBuilt: '2020'
        }
      },
      {
        id: 'cannes-hills',
        name: 'Villa, Cannes',
        location: 'Cannes, France',
        type: 'Hillside Villa',
        image: 'https://images.unsplash.com/photo-1600585159340-1ae1cd9c4d9b?w=400&q=80',
        description: 'Private villa with pool and garden',
        specs: {
          size: '580 m²',
          bedrooms: 5,
          yearBuilt: '2017'
        }
      }
    ]
  },
  {
    id: 'hist-4',
    date: '2024-01-03',
    type: 'proposal',
    title: 'Initial Proposal',
    description: 'First set of 5 properties presented based on initial consultation',
    status: 'completed',
    summary: 'Initial presentation of diverse property options across European markets',
    properties: [
      {
        id: 'london-knightsbridge',
        name: 'Maisonette, London',
        location: 'London, UK',
        type: 'Townhouse',
        image: 'https://images.unsplash.com/photo-1568605114947-3f9b5eb15a8c?w=400&q=80',
        description: 'Elegant townhouse in prime Knightsbridge location',
        specs: {
          size: '420 m²',
          bedrooms: 4,
          yearBuilt: 'Victorian, renovated 2020'
        }
      },
      {
        id: 'zurich-lake',
        name: 'Apartment, Zurich',
        location: 'Zurich, Switzerland',
        type: 'Lake View Apartment',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
        description: 'Modern apartment with Zurich Lake views',
        specs: {
          size: '280 m²',
          bedrooms: 3,
          yearBuilt: '2019'
        }
      }
    ]
  }
];

const Decisions = () => {
  const [selectedAction, setSelectedAction] = useState<'proceed' | 'refine' | 'defer' | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'current' | 'history'>('current');
  const [expandedHistory, setExpandedHistory] = useState<string[]>([]);

  const toggleHistoryExpansion = (historyId: string) => {
    setExpandedHistory(prev => 
      prev.includes(historyId) 
        ? prev.filter(id => id !== historyId)
        : [...prev, historyId]
    );
  };

  const handleAction = (action: 'proceed' | 'refine' | 'defer', propertyId?: string) => {
    setSelectedAction(action);
    setSelectedProperty(propertyId || null);
  };

  return (
    <div className="min-h-screen bg-background">
      <PrivateNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Tabs - Above Proposal Badge */}
            <AnimatedSection delay={0.05} className="mb-8">
              <div className="border-b-2 border-border">
                <nav className="flex space-x-12">
                  <button
                    onClick={() => setActiveTab('current')}
                    className={`py-4 px-6 border-b-4 font-semibold text-base transition-all ${
                      activeTab === 'current'
                        ? 'border-primary text-foreground bg-primary/5'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    Current
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`py-4 px-6 border-b-4 font-semibold text-base transition-all ${
                      activeTab === 'history'
                        ? 'border-primary text-foreground bg-primary/5'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    History
                  </button>
                </nav>
              </div>
            </AnimatedSection>

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

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'current' ? (
                <motion.div
                  key="current"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              ) : (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* History Content */}
                  <div className="space-y-6">
                    {historyItems.map((item, index) => (
                      <AnimatedSection key={item.id} delay={0.1 + index * 0.05}>
                        <Card className="bg-card border-border overflow-hidden">
                          {/* Collapsible Header */}
                          <div 
                            className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => toggleHistoryExpansion(item.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                  {item.type === 'refine' && <RefreshCw className="h-5 w-5 text-muted-foreground" />}
                                  {item.type === 'defer' && <Pause className="h-5 w-5 text-muted-foreground" />}
                                  {item.type === 'viewing' && <Clock className="h-5 w-5 text-muted-foreground" />}
                                  {item.type === 'proposal' && <FileText className="h-5 w-5 text-muted-foreground" />}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-medium text-foreground">{item.title}</h3>
                                    <span className="text-sm text-muted-foreground">{item.date}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.summary || item.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <motion.div
                                  animate={{ rotate: expandedHistory.includes(item.id) ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* Expandable Content */}
                          <AnimatePresence>
                            {expandedHistory.includes(item.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-border"
                              >
                                <div className="p-6 space-y-6">
                                  {/* Intent Section */}
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                                      <FileText className="h-4 w-4" />
                                      Intent
                                    </h4>
                                    <div className="bg-muted/50 rounded-lg p-4">
                                      <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.type === 'refine' && 'Client wanted to focus on European properties with historical significance and cultural heritage, moving away from modern developments.'}
                                        {item.type === 'defer' && 'Client needed more time to consider the long-term implications and wanted to conduct additional market research before committing.'}
                                        {item.type === 'viewing' && 'Client wanted to physically experience the properties to better understand the lifestyle implications and neighborhood context.'}
                                        {item.type === 'proposal' && 'Initial consultation revealed preferences for privacy, security, and proximity to international schools and business hubs.'}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Feedback Section */}
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                                      <RefreshCw className="h-4 w-4" />
                                      Feedback
                                    </h4>
                                    <div className="bg-muted/50 rounded-lg p-4">
                                      <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.type === 'refine' && 'Advisor noted the preference and prepared new selection of heritage properties in prime European locations with better historical documentation.'}
                                        {item.type === 'defer' && 'Advisor provided additional market analysis and comparative data to support future decision-making process.'}
                                        {item.type === 'viewing' && 'Feedback highlighted the importance of architectural integrity and neighborhood amenities in final selection criteria.'}
                                        {item.type === 'proposal' && 'Client expressed satisfaction with initial approach and requested focus on privacy and long-term value preservation.'}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Properties Section */}
                                  <div>
                                    <h4 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                                      <MapPin className="h-4 w-4" />
                                      Properties Shared
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      {item.properties.map((property) => (
                                        <Link key={property.id} to={`/property/${property.id}`}>
                                          <Card className="bg-card border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                                            <div className="aspect-[16/10] relative">
                                              <img
                                                src={property.image}
                                                alt={property.name}
                                                className="w-full h-full object-cover"
                                              />
                                              <div className="absolute top-2 left-2">
                                                <Badge className="bg-background/90 text-foreground backdrop-blur-sm text-xs">
                                                  {property.type}
                                                </Badge>
                                              </div>
                                            </div>
                                            <CardContent className="p-4">
                                              <div className="flex items-start gap-2 text-muted-foreground mb-2">
                                                <MapPin className="h-4 w-4 mt-0.5" />
                                                <span className="text-sm">{property.location}</span>
                                              </div>
                                              <h5 className="font-medium text-sm text-foreground mb-2">{property.name}</h5>
                                              <p className="text-xs text-muted-foreground mb-2">{property.description}</p>
                                              <div className="flex gap-2 text-xs">
                                                <span className="text-muted-foreground">{property.specs.size}</span>
                                                <span className="text-muted-foreground">•</span>
                                                <span className="text-muted-foreground">{property.specs.bedrooms} bed</span>
                                              </div>
                                            </CardContent>
                                          </Card>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

export default Decisions;
