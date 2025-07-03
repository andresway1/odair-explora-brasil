
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const FixedCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5519981543052&text=Ol%C3%A1%21+Vim+do+site+e+quero+mais+informa%C3%A7%C3%B5es+sobre+as+viagens&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        style={{ animationDelay: '0.5s' }}
        onClick={handleWhatsAppClick}
      >
        <Phone className="w-5 h-5 mr-2" />
        Fale conosco
      </Button>
    </div>
  );
};

export default FixedCTA;
