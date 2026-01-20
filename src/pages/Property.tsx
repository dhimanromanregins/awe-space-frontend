import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  FileText, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Award,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PrivateNav from '@/components/layout/PrivateNav';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ActionModal from '@/components/modals/ActionModal';

const propertyData: Record<string, {
  id: string;
  name: string;
  location: string;
  type: string;
  images: string[];
  advisorNote: string;
  whyItFits: string;
  tradeOffs: string;
  specs: Record<string, string>;
  certifications: string[];
  neighborhood: {
    description: string;
    landmarks: string[];
  };
}> = {
  'paris-16': {
    id: 'paris-16',
    name: 'Maison Particulière, Paris XVI',
    location: 'Paris, France',
    type: 'Private Listing',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    advisorNote: 'This property represents a rare opportunity in one of Paris\'s most discreet arrondissements. The current owner, a diplomatic family, has maintained the original features while modernising all systems. The private garden is exceptional for this location.',
    whyItFits: 'Heritage architecture meets modern living. Walking distance to Bois de Boulogne, exceptional school catchments, discreet neighbourhood favoured by diplomatic families.',
    tradeOffs: 'Premium pricing reflects scarcity. Limited outdoor space typical of Parisian properties. Requires 6-month minimum for full documentation.',
    specs: {
      'Total Area': '420 m²',
      'Living Space': '380 m²',
      'Garden': '40 m²',
      'Bedrooms': '5',
      'Bathrooms': '4',
      'Parking': '2 spaces',
      'Year Built': '1890',
      'Last Renovation': '2019',
      'Ceiling Height': '3.2 m',
      'Floors': '3 + basement',
    },
    certifications: ['DPE A', 'Listed Building Grade II', 'Architectural Heritage'],
    neighborhood: {
      description: 'The 16th arrondissement combines the quiet elegance of a residential quarter with proximity to Paris\'s cultural institutions. Favoured by international families and diplomats, it offers both discretion and connectivity.',
      landmarks: ['Bois de Boulogne (5 min walk)', 'Lycée Janson de Sailly (8 min)', 'Fondation Louis Vuitton (10 min)', 'Arc de Triomphe (15 min)'],
    },
  },
  'dubai-creek': {
    id: 'dubai-creek',
    name: 'Penthouse, Dubai Creek Harbour',
    location: 'Dubai, UAE',
    type: 'Off-Market',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    ],
    advisorNote: 'Direct developer relationship secured a priority unit with premium specifications. The tower\'s completion timeline aligns with your investment horizon, and the payment structure allows for staged commitment with full flexibility until final handover.',
    whyItFits: 'Exceptional investment yield with lifestyle flexibility. Tax-advantaged structure, direct developer relationship, completion Q3 2025.',
    tradeOffs: 'Off-plan purchase requires staged payments. Market dependent on regional economic factors. Service charges higher than comparable developments.',
    specs: {
      'Total Area': '385 m²',
      'Interior': '340 m²',
      'Terrace': '45 m²',
      'Bedrooms': '4',
      'Bathrooms': '5',
      'Parking': '3 spaces',
      'Floor': '52nd',
      'Completion': 'Q3 2025',
      'Ceiling Height': '3.5 m',
      'Views': '360° Creek & Skyline',
    },
    certifications: ['LEED Gold', 'Smart Home Certified', 'Premium Finishing'],
    neighborhood: {
      description: 'Dubai Creek Harbour represents the next chapter in Dubai\'s urban development. Positioned between the historic Creek and downtown, it offers both heritage connection and modern infrastructure.',
      landmarks: ['Dubai Creek Tower (adjacent)', 'Dubai International Airport (10 min)', 'Downtown Dubai (12 min)', 'DIFC (15 min)'],
    },
  },
};

const Property = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedAction, setSelectedAction] = useState<'proceed' | 'refine' | 'defer' | null>(null);

  const property = id ? propertyData[id] : null;

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Property not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <PrivateNav />

      <main className="pt-20">
        {/* Hero Image Slider */}
        <div className="relative h-[60vh] md:h-[70vh] bg-muted overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={property.images[currentImage]}
              alt={property.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-6">
            <Button
              variant="secondary"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Badge & Back */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <Link to="/decisions">
              <Button variant="secondary" size="sm" className="bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Proposals
              </Button>
            </Link>
            <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
              {property.type}
            </Badge>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? 'bg-background' : 'bg-background/50'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-12">
          {/* Header */}
          <AnimatedSection className="max-w-4xl mb-12">
            <div className="flex items-start gap-2 text-muted-foreground mb-3">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>{property.location}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {property.name}
            </h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Advisor's Note */}
              <AnimatedSection delay={0.1}>
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-xl mb-4">Advisor's Note</h2>
                    <p className="leading-relaxed opacity-90">
                      {property.advisorNote}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Why It Fits / Trade-offs */}
              <AnimatedSection delay={0.2}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl mb-4">Why this fits</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.whyItFits}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-4">Trade-offs to consider</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.tradeOffs}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Specifications */}
              <AnimatedSection delay={0.3}>
                <h3 className="font-serif text-xl mb-6">Specifications</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {Object.entries(property.specs).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {key}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Certifications */}
              <AnimatedSection delay={0.4}>
                <h3 className="font-serif text-xl mb-6">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  {property.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="py-2 px-4">
                      <Award className="h-3 w-3 mr-2" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </AnimatedSection>

              {/* Neighborhood */}
              <AnimatedSection delay={0.5}>
                <h3 className="font-serif text-xl mb-6">Neighborhood Context</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {property.neighborhood.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {property.neighborhood.landmarks.map((landmark) => (
                        <div key={landmark} className="flex items-center gap-2 text-sm">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span>{landmark}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Sidebar Actions */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <AnimatedSection delay={0.2}>
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 space-y-4">
                      <Button 
                        className="w-full justify-start" 
                        size="lg"
                        onClick={() => setSelectedAction('proceed')}
                      >
                        <Calendar className="mr-3 h-4 w-4" />
                        Schedule Viewing
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="lg">
                        <FileText className="mr-3 h-4 w-4" />
                        Request Legal Pack
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="lg">
                        <Share2 className="mr-3 h-4 w-4" />
                        Share Securely
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <Card className="bg-muted border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                        <span className="font-serif">Privacy Assured</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        All materials shared through encrypted channels. 
                        Your interest remains confidential.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Action Modal */}
      <AnimatePresence>
        {selectedAction && (
          <ActionModal
            action={selectedAction}
            propertyId={property.id}
            onClose={() => setSelectedAction(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Property;
