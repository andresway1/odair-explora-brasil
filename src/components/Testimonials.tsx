
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      text: 'A viagem para Poços de Caldas foi simplesmente maravilhosa! A Odair Viagens cuidou de todos os detalhes e pudemos apenas aproveitar cada momento. Recomendo de olhos fechados!',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      text: 'Já viajei com a Odair Viagens três vezes e sempre superam minhas expectativas. Profissionais competentes, destinos incríveis e preços justos. Não troco por nenhuma outra!',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      text: 'Caldas Novas com a família foi uma experiência única! As crianças se divertiram muito e nós relaxamos nas águas termais. Organização perfeita do início ao fim.',
      image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que nossos <span className="bg-gradient-travel bg-clip-text text-transparent">clientes dizem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-travel mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 30 anos criando memórias inesquecíveis. Veja o que nossos viajantes têm a dizer sobre suas experiências conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Customer Photo */}
                <div className="relative mb-6">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} durante a viagem`}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-travel-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Cliente
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-travel-blue font-medium">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-gradient-travel hover:opacity-90 text-white font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Leia mais depoimentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
