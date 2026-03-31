import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audyt i Strategia Niezależności',
    description: 'Analizujemy obecną pozycję Twojego obiektu, profil gościa oraz strukturę kosztów OTA. Tworzymy plan przejścia na rezerwacje bezpośrednie.'
  },
  {
    number: '02',
    title: 'Produkcja Wizualna (Foto/Wideo)',
    description: 'Realizujemy profesjonalną sesję zdjęciową, wirtualny spacer 360° oraz ujęcia z drona, aby pokazać Twój obiekt z najlepszej perspektywy.'
  },
  {
    number: '03',
    title: 'Budowa Strony i Wdrożenie AI',
    description: 'Projektujemy wysoko konwertującą stronę www, integrujemy system rezerwacji (Booking Engine) i uruchamiamy Asystenta AI 24/7.'
  },
  {
    number: '04',
    title: 'Skalowanie (Ads i Email)',
    description: 'Uruchamiamy kampanie reklamowe (Facebook, Google Ads) i automatyzacje mailowe, generując stały napływ gości z pominięciem prowizji.'
  }
];

const StepItem = ({ step, index }: { step: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center 50%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const filter = useTransform(scrollYProgress, [0, 1], ["grayscale(100%)", "grayscale(0%)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, filter, scale }}
      className={`relative flex flex-col md:flex-row items-center py-4 md:py-6 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Node */}
      <div 
        className="absolute left-8 md:left-1/2 w-12 h-12 bg-primary text-white flex items-center justify-center font-bold text-lg border-4 border-slate-50 -translate-x-1/2 z-10 rounded-none"
      >
        {step.number}
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
        index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
      }`}>
        <div className="bg-white p-6 border border-slate-200 hover:border-primary transition-colors duration-300 rounded-none relative group">
          <h3 className="text-xl font-bold text-dark mb-3 font-serif group-hover:text-primary transition-colors">{step.title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {step.description}
          </p>
          
          {/* Desktop decorative accent */}
          <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-white -translate-y-1/2 rotate-45 transition-colors duration-300 group-hover:border-primary ${
            index % 2 === 0 ? '-left-2 border-b border-l border-slate-200' : '-right-2 border-t border-r border-slate-200'
          }`} />
          {/* Mobile decorative accent */}
          <div className="md:hidden absolute top-1/2 -left-2 w-4 h-4 bg-white border-b border-l border-slate-200 group-hover:border-primary transition-colors duration-300 -translate-y-1/2 rotate-45" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="proces" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Mapa Drogowa</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-5">
            Proces Przejścia na Własny System
          </h2>
          <p className="text-base text-slate-600">
            Od pierwszego audytu po pełną automatyzację i niezależność od portali rezerwacyjnych. Zobacz, jak pracujemy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 origin-top rounded-full z-0"
            style={{ scaleY }}
          />
          
          <div className="space-y-0 relative z-10">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a 
            href="#kontakt" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Zaplanuj swój proces
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
