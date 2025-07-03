
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinos');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'), linear-gradient(rgba(30, 64, 175, 0.7), rgba(5, 150, 105, 0.7))`
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Explorando o Brasil<br />
          <span className="text-yellow-300">com Excelência</span><br />
          há 30 anos!
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Descubra os destinos mais incríveis do Brasil com quem tem experiência e paixão por viajar
        </p>
        
        <Button 
          size="lg" 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 animate-bounce-gentle"
          onClick={handleScrollToDestinations}
        >
          Descubra as Próximas Aventuras
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
