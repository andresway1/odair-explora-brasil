
import { Button } from '@/components/ui/button';
import { Phone, Contact } from 'lucide-react';

const FixedCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        style={{ animationDelay: '0.5s' }}
      >
        <Phone className="w-5 h-5 mr-2" />
        Fale conosco
      </Button>

      {/* Schedule Button */}
      <Button
        size="lg"
        className="bg-gradient-travel hover:opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <Contact className="w-5 h-5 mr-2" />
        Agende sua viagem
      </Button>
    </div>
  );
};

export default FixedCTA;
