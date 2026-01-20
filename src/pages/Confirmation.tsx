import { motion } from 'framer-motion';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/layout/Logo';
import { useUser } from '@/contexts/UserContext';

const Confirmation = () => {
  const { userIntent, setHasCompletedConsultation } = useUser();

  const handleEnterDashboard = () => {
    setHasCompletedConsultation(true);
  };

  const formattedDate = userIntent.scheduledDate?.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-6 lg:px-12 py-6">
        <Logo showTagline />
      </header>

      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Your private discussion is confirmed.
          </h1>

          <p className="text-muted-foreground mb-8">
            {formattedDate && userIntent.scheduledTime ? (
              <>We'll connect on <strong>{formattedDate}</strong> at <strong>{userIntent.scheduledTime}</strong>.</>
            ) : (
              <>We'll be in touch shortly to confirm details.</>
            )}
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-foreground font-medium leading-relaxed">
              An AweSpace advisor will review your inputs in advance and prepare for the conversation.
              There is no obligation, no selling, and no pressure.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Complete Discretion</h3>
                <p className="text-sm text-muted-foreground">
                  Your information is held in strict confidence. We never share your details 
                  with third parties without explicit consent.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            After your consultation, you'll receive access to your private dashboard 
            where curated recommendations will appear.
          </p>

          <Link to="/welcome" onClick={handleEnterDashboard}>
            <Button className="h-12 px-8 group">
              Preview Dashboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Confirmation;
