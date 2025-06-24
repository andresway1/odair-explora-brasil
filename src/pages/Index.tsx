
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TravelSchedule from '../components/TravelSchedule';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FixedCTA from '../components/FixedCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <TravelSchedule />
      <Testimonials />
      <Footer />
      <FixedCTA />
    </div>
  );
};

export default Index;
