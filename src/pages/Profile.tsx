import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Shield, Bell, LogOut, Edit, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import PrivateNav from '@/components/layout/PrivateNav';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useUser } from '@/contexts/UserContext';
import { useState } from 'react';

const Profile = () => {
  const { userIntent } = useUser();
  const [isEditingIntent, setIsEditingIntent] = useState(false);
  const [intentForm, setIntentForm] = useState({
    primaryGoal: userIntent?.primaryGoal || '',
    geography: userIntent?.geography || [],
    timeHorizon: userIntent?.timeHorizon || '',
    communicationPreference: userIntent?.communicationPreference || '',
    name: userIntent?.name || '',
    email: userIntent?.email || '',
    phone: userIntent?.phone || '',
    budget: userIntent?.budget || ''
  });

  const handleSaveIntent = () => {
    // Save intent logic here
    updateUserIntent(intentForm);
    setIsEditingIntent(false);
  };

  const handleCancelIntent = () => {
    setIntentForm({
      primaryGoal: userIntent?.primaryGoal || '',
      geography: userIntent?.geography || [],
      timeHorizon: userIntent?.timeHorizon || '',
      communicationPreference: userIntent?.communicationPreference || '',
      name: userIntent?.name || '',
      email: userIntent?.email || '',
      phone: userIntent?.phone || '',
      budget: userIntent?.budget || ''
    });
    setIsEditingIntent(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <PrivateNav />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection className="max-w-4xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Your Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your preferences and communication settings.
            </p>
          </AnimatedSection>

          {/* Intent Form */}
          <AnimatedSection delay={0.05} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-foreground">
                Your Intent
              </h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsEditingIntent(!isEditingIntent)}
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditingIntent ? 'Cancel' : 'Edit'}
              </Button>
            </div>

            {isEditingIntent ? (
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-4">Update Your Requirements</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Help us understand your needs better by updating your property search criteria.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Primary Goal
                      </label>
                      <select
                        className="w-full p-3 border border-border rounded-md text-sm"
                        value={intentForm.primaryGoal}
                        onChange={(e) => setIntentForm({...intentForm, primaryGoal: e.target.value})}
                      >
                        <option value="">Select goal</option>
                        <option value="residence">Primary Residence</option>
                        <option value="investment">Investment Property</option>
                        <option value="mixed">Mixed Use</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Time Horizon
                      </label>
                      <select
                        className="w-full p-3 border border-border rounded-md text-sm"
                        value={intentForm.timeHorizon}
                        onChange={(e) => setIntentForm({...intentForm, timeHorizon: e.target.value})}
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (0-3 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        className="w-full p-3 border border-border rounded-md text-sm"
                        value={intentForm.budget}
                        onChange={(e) => setIntentForm({...intentForm, budget: e.target.value})}
                      >
                        <option value="">Select budget</option>
                        <option value="1-2m">€1M - €2M</option>
                        <option value="2-5m">€2M - €5M</option>
                        <option value="5-10m">€5M - €10M</option>
                        <option value="10m+">€10M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Locations
                      </label>
                      <div className="space-y-2">
                        {['Paris', 'London', 'Geneva', 'Monaco', 'Dubai'].map((location) => (
                          <label key={location} className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              className="rounded border-border"
                              checked={intentForm.geography.includes(location)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setIntentForm({...intentForm, geography: [...intentForm.geography, location]});
                                } else {
                                  setIntentForm({...intentForm, geography: intentForm.geography.filter(l => l !== location)});
                                }
                              }}
                            />
                            <span>{location}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full p-3 border border-border rounded-md text-sm"
                      rows={4}
                      value={intentForm.communicationPreference}
                      onChange={(e) => setIntentForm({...intentForm, communicationPreference: e.target.value})}
                      placeholder="Any specific requirements or preferences?"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" onClick={handleCancelIntent}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveIntent}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Intent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Primary Goal</h3>
                      <p className="text-sm text-muted-foreground">
                        {userIntent?.primaryGoal || 'Not specified'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-2">Time Horizon</h3>
                      <p className="text-sm text-muted-foreground">
                        {userIntent?.timeHorizon || 'Not specified'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-2">Budget Range</h3>
                      <p className="text-sm text-muted-foreground">
                        {userIntent?.budget || 'Not specified'}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-2">Preferred Locations</h3>
                      <div className="flex flex-wrap gap-2">
                        {userIntent?.geography?.map((location) => (
                          <Badge key={location} variant="secondary" className="text-xs">
                            {location}
                          </Badge>
                        )) || <span className="text-sm text-muted-foreground">No preferences</span>}
                      </div>
                    </div>

                    {userIntent?.communicationPreference && (
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Communication Preference</h3>
                        <p className="text-sm text-muted-foreground">
                          {userIntent.communicationPreference === 'video' 
                            ? 'Video Call' 
                            : 'Phone Call'}
                        </p>
                      </div>
                    )}

                    {userIntent?.budget && (
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Budget Range</h3>
                        <p className="text-sm text-muted-foreground">
                          {userIntent.budget}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </AnimatedSection>

          <div className="max-w-2xl">
            {/* Personal Information */}
            <AnimatedSection delay={0.1} className="mb-8">
              <h2 className="font-serif text-xl mb-4">Personal Information</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-serif text-xl">
                        {userIntent.name || 'Private Client'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Member since January 2024
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">
                            {userIntent.email || 'private@client.com'}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">
                            {userIntent.phone || '+1 (***) ***-****'}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Preferred Communication</p>
                          <p className="font-medium capitalize">
                            {userIntent.communicationPreference === 'video' 
                              ? 'Video Call' 
                              : 'Phone Call'}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Notification Preferences */}
            <AnimatedSection delay={0.2} className="mb-8">
              <h2 className="font-serif text-xl mb-4">Notifications</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">New Proposals</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new properties match your criteria
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Viewing Reminders</p>
                        <p className="text-sm text-muted-foreground">
                          Get reminders before scheduled viewings
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Weekly Summary</p>
                        <p className="text-sm text-muted-foreground">
                          Receive a weekly digest of your portfolio activity
                        </p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Privacy & Security */}
            <AnimatedSection delay={0.3} className="mb-8">
              <h2 className="font-serif text-xl mb-4">Privacy & Security</h2>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Your Privacy is Paramount</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        All communications are encrypted end-to-end. Your identity is never 
                        shared with property vendors until you explicitly authorize disclosure. 
                        We maintain strict confidentiality protocols aligned with private 
                        banking standards.
                      </p>
                      <Button variant="outline" size="sm">
                        View Privacy Policy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Sign Out */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-muted border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sign Out</p>
                      <p className="text-sm text-muted-foreground">
                        End your current session
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
