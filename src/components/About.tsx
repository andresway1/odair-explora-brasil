
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="bg-gradient-travel bg-clip-text text-transparent">Odair Viagens</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-travel mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-travel-blue rounded-full mr-3"></span>
                  Tradição e Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Com mais de três décadas de atuação no mercado de turismo, a Odair Viagens se consolidou como referência em excursões pelo Brasil. Nossa experiência nos permite oferecer roteiros únicos e inesquecíveis, sempre com o máximo de segurança e conforto.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-travel-green rounded-full mr-3"></span>
                  Nossa Missão
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Proporcionar experiências de viagem transformadoras, conectando nossos clientes aos destinos mais belos do Brasil. Nosso compromisso é com a satisfação total de cada viajante, cuidando de cada detalhe para que sua única preocupação seja aproveitar cada momento.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Equipe Odair Viagens em ação"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Destinos incríveis"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Natureza exuberante"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Aventuras inesquecíveis"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-travel text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce-gentle">
                30+ Anos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
