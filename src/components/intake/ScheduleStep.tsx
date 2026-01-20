import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserIntent } from '@/contexts/UserContext';

interface ScheduleStepProps {
  onNext: () => void;
  updateIntent: (updates: Partial<UserIntent>) => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
];

const ScheduleStep = ({ onNext, updateIntent }: ScheduleStepProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days: (number | null)[] = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const isDateSelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    // Exclude weekends and past dates
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    }
  };

  const handleContinue = async () => {
    if (selectedDate && selectedTime && name && email) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://192.168.1.3:8002/api/auth/customers/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: name,
            email: email,
            phone_number: phone,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to create customer');
        }
        // Optionally handle response data here
        updateIntent({
          scheduledDate: selectedDate,
          scheduledTime: selectedTime,
          name,
          email,
          phone,
        });
        onNext();
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const isFormValid = selectedDate && selectedTime && name.trim() && email.trim();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Schedule your consultation
        </h1>
        <p className="text-muted-foreground">
          Select a date and time that works for you.
        </p>
      </div>

      {/* Calendar */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">{monthName}</span>
          <Button variant="ghost" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-xs text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div key={index} className="aspect-square">
              {day !== null && (
                <button
                  onClick={() => handleDateSelect(day)}
                  disabled={!isDateSelectable(day)}
                  className={`w-full h-full rounded-md text-sm transition-colors ${
                    selectedDate?.getDate() === day && 
                    selectedDate?.getMonth() === currentMonth.getMonth()
                      ? 'bg-primary text-primary-foreground'
                      : isDateSelectable(day)
                      ? 'hover:bg-muted'
                      : 'text-muted-foreground/40 cursor-not-allowed'
                  }`}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground">Available times</Label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 rounded-md border text-sm transition-colors ${
                  selectedTime === time
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-muted-foreground/30'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Details */}
      {selectedTime && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="h-11"
            />
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}
      <Button
        onClick={handleContinue}
        disabled={!isFormValid || loading}
        className="w-full h-12"
      >
        {loading ? 'Confirming...' : 'Confirm Consultation'}
      </Button>
    </div>
  );
};

export default ScheduleStep;
