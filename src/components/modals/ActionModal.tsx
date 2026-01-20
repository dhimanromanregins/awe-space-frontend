import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Calendar, RefreshCw, Pause, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ActionModalProps {
  action: 'proceed' | 'refine' | 'defer';
  propertyId?: string | null;
  onClose: () => void;
}

const ActionModal = ({ action, propertyId, onClose }: ActionModalProps) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (action === 'proceed') {
      // Navigate to timeline after scheduling
      navigate('/timeline');
    } else if (action === 'refine' || action === 'defer') {
      // Navigate to decisions page for refine and defer
      navigate('/decisions');
    } else {
      // Stay on decisions page
      onClose();
    }
  };

  const getContent = () => {
    switch (action) {
      case 'proceed':
        return {
          icon: Calendar,
          title: 'Viewing Protocol Initiated',
          subtitle: 'Your private viewing is being arranged',
          description: `Our concierge, Marie Laurent, will contact you within 24 hours to confirm viewing details and coordinate travel arrangements if needed.`,
          details: [
            'Private viewing at your convenience',
            'Secure documentation will be prepared',
            'Your identity remains protected until you authorize disclosure',
          ],
          confirmText: 'Understood',
          confirmIcon: Check,
        };
      case 'refine':
        return {
          icon: RefreshCw,
          title: 'Direction Updated',
          subtitle: 'We\'ll refine our search based on your feedback',
          description: 'Your preferences have been noted. Our team will prepare a revised selection that better aligns with your criteria.',
          details: [
            'Current proposals archived for reference',
            'New search parameters being calibrated',
            'Expect refined proposals within 5-7 days',
          ],
          confirmText: 'Continue',
          confirmIcon: RefreshCw,
        };
      case 'defer':
        return {
          icon: Pause,
          title: 'Decision Paused',
          subtitle: 'Take the time you need',
          description: 'There\'s no urgency. Your current proposals will remain available, and we\'ll reach out periodically to check if circumstances have changed.',
          details: [
            'All materials remain accessible',
            'No expiration on current proposals',
            'We\'ll follow up in 30 days unless you prefer otherwise',
          ],
          confirmText: 'Understood',
          confirmIcon: Check,
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;
  const ConfirmIcon = content.confirmIcon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg"
      >
        <Card className="bg-background border-border shadow-2xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="relative p-8 pb-6 border-b border-border">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl">{content.title}</h2>
                  <p className="text-muted-foreground">{content.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {content.description}
              </p>

              <div className="space-y-3">
                {content.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              {action === 'proceed' && (
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Your Concierge</p>
                      <p className="text-muted-foreground text-sm">Marie Laurent</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 flex gap-3">
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleConfirm}>
                <ConfirmIcon className="h-4 w-4 mr-2" />
                {content.confirmText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ActionModal;
