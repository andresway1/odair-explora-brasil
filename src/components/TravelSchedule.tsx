
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin } from 'lucide-react';

const TravelSchedule = () => {
  const destinations = [
    {
      name: 'Poços de Caldas, MG',
      images: [
        'https://i.imgur.com/kMRjWCI.jpg',
        'https://i.imgur.com/WlkGMhR.jpg',
        'https://i.imgur.com/dPZ6SGl.jpg',
        'https://i.imgur.com/YaAY4gG.jpg',
        'https://i.imgur.com/OtFrqfC.jpg'
      ],
      date: 'Março 2024',
      highlights: ['Águas termais', 'Centro histórico', 'Teleférico', 'Gastronomia mineira'],
      description: 'Relaxe nas famosas águas termais e explore a charmosa arquitetura da cidade.'
    },
    {
      name: 'São Lourenço, MG',
      image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Abril 2024',
      highlights: ['Parque das Águas', 'Trem das Águas', 'Mirante', 'Fonte de água mineral'],
      description: 'Descubra as propriedades curativas das águas minerais em meio à natureza exuberante.'
    },
    {
      name: 'Caldas Novas, GO',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Maio 2024',
      highlights: ['Águas termais naturais', 'Parques aquáticos', 'Lagoa Quente', 'Hot Park'],
      description: 'O maior complexo de águas termais do mundo te espera para momentos únicos de relaxamento.'
    },
    {
      name: 'Bertioga, SP',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Junho 2024',
      highlights: ['Praias paradisíacas', 'Forte São João', 'Mata Atlântica', 'Riviera de São Lourenço'],
      description: 'Praias deslumbrantes e natureza preservada para uma experiência inesquecível no litoral paulista.'
    }
  ];

  return (
    <section id="destinos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Agenda de <span className="bg-gradient-travel bg-clip-text text-transparent">Viagens</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-travel mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada excursão é uma oportunidade única para explorar destinos magníficos e criar memórias que durarão para sempre
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                {destination.images ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {destination.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img 
                            src={image}
                            alt={`${destination.name} - ${imgIndex + 1}`}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                ) : (
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 left-4 bg-travel-blue text-white px-4 py-2 rounded-full font-semibold z-10">
                  {destination.date}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-2xl font-bold text-gray-800 group-hover:text-travel-blue transition-colors duration-300">
                  <MapPin className="w-6 h-6 mr-2 text-travel-green" />
                  {destination.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Principais Atrações:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-travel-green rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-travel hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Reserve sua viagem agora!
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelSchedule;
