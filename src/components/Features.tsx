import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Camera, Globe, Mail, Megaphone, ChevronDown, ArrowRight, Search, MapPin, TrendingUp } from 'lucide-react';
import { SiBookingdotcom } from 'react-icons/si';

const features = [
  {
    icon: Globe,
    title: 'Wysoko Konwertujące WWW',
    description: 'Tworzymy i przebudowujemy strony www nastawione na jeden cel: maksymalizację rezerwacji bezpośrednich. Szybkie, piękne i zoptymalizowane pod sprzedaż.'
  },
  {
    icon: Bot,
    title: 'Asystent AI 24/7',
    description: 'Inteligentny chatbot, który odpowiada na pytania gości, doradza i domyka rezerwacje o każdej porze dnia i nocy, bez Twojego udziału.'
  },
  {
    icon: Megaphone,
    title: 'Reklamy Facebook',
    description: 'Precyzyjnie targetowane kampanie w mediach społecznościowych, które budują świadomość marki i ściągają kaloryczny ruch bezpośrednio do Twojego systemu.'
  },
  {
    icon: Search,
    title: 'Kampanie Google Ads',
    description: 'Docieramy do osób, które aktywnie szukają noclegu w Twojej okolicy. Przechwytujemy intencję zakupową i zamieniamy ją w bezpośrednią rezerwację.'
  },
  {
    icon: MapPin,
    title: 'Optymalizacja Wizytówki Google',
    description: 'Zwiększamy widoczność Twojego obiektu w lokalnych wynikach wyszukiwania i Mapach Google. Zbieramy opinie i budujemy zaufanie.'
  },
  {
    icon: Mail,
    title: 'Automatyzacja Email',
    description: 'Budujemy bazę lojalnych gości. Automatyczne sekwencje mailowe, upselle i kampanie przypominające, które zwiększają LTV klienta.'
  },
  {
    icon: Camera,
    title: 'Foto, 360° i Dron',
    description: 'Profesjonalne sesje zdjęciowe, wirtualne spacery i ujęcia z drona, które budują zaufanie i sprawiają, że Twój obiekt wygląda luksusowo.'
  },
  {
    icon: TrendingUp,
    title: 'Pomoc w Strategii Cenowej',
    description: 'Analizujemy rynek i konkurencję, pomagając ustalić optymalne ceny i pakiety, które maksymalizują zysk z każdej rezerwacji.'
  },
  {
    icon: SiBookingdotcom,
    title: 'Obsługa Portali Rezerwacyjnych',
    description: 'Optymalizujemy Twoją obecność na Booking.com i Airbnb, traktując je jedynie jako kanał pozyskiwania leadów do Twojego własnego lejka.'
  }
];

const FeatureItem = ({ feature, index }: { feature: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-50 border border-slate-200 hover:border-primary transition-colors duration-300 rounded-none"
    >
      {/* Desktop View */}
      <div className="hidden md:block p-8">
        <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
          <feature.icon className="h-6 w-6 text-dark group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-dark mb-3 font-serif">{feature.title}</h3>
        <p className="text-slate-600 leading-relaxed">
          {feature.description}
        </p>
        
        {/* Sharp decorative corner */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-primary transition-colors duration-300" />
      </div>

      {/* Mobile View (Accordion) */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 shrink-0 border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-primary border-primary text-white' : 'bg-white border-slate-200 text-dark group-hover:bg-primary group-hover:border-primary group-hover:text-white'}`}>
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-dark font-serif pr-2">{feature.title}</h3>
          </div>
          <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0">
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section id="uslugi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Wszystko w Jednej Usłudze</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Kompleksowy Ekosystem Sprzedaży
          </h2>
          <p className="text-lg text-slate-600">
            Nie potrzebujesz pięciu różnych agencji. Dostarczamy pełną infrastrukturę technologiczną i marketingową, aby uniezależnić Twój obiekt od portali rezerwacyjnych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#kontakt" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Zbuduj swój ekosystem
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
