
import { MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const handleScrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinos');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-travel bg-clip-text text-transparent">
              Odair Viagens
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Há 30 anos proporcionando experiências únicas de viagem pelo Brasil. Sua aventura começa aqui!
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-300" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-300">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#destinos" className="text-gray-300 hover:text-white transition-colors duration-300">Destinos</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors duration-300">Depoimentos</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Destinos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={handleScrollToDestinations}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Poços de Caldas, MG
                </button>
              </li>
              <li>
                <button 
                  onClick={handleScrollToDestinations}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  São Lourenço, MG
                </button>
              </li>
              <li>
                <button 
                  onClick={handleScrollToDestinations}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Caldas Novas, GO
                </button>
              </li>
              <li>
                <button 
                  onClick={handleScrollToDestinations}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Bertioga, SP
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-travel-blue flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(19) 98154-3052</p>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-travel-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">R. Carmela Zupi Cúrcio Maluf 65</p>
                  <p className="text-gray-300">Parque Imperador</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Odair Viagens. Todos os direitos reservados. | 
            <span className="ml-2">CNPJ: 12.345.678/0001-90</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com ❤️ para levar você aos melhores destinos do Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
