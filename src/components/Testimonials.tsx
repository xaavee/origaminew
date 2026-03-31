import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Quote, Star, TrendingUp, Percent, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: string, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className="inline-flex items-center" style={{ lineHeight: 1 }}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

const testimonials = [
   {
    name: 'Dzika Brzoza',
    image: 'https://oricdn.origamilabs.pl/dzikalogoog.png',
    text: 'Współpraca z chłopakami z origami to był strzał w dziesiątkę. Po wdrożeniu reklam i asystenta AI, nasze rezerwacje wzrosły dwukrotnie w ciągu pierwszych trzech miesięcy.',
    rating: 5
  },
  {
    name: 'Przystań na krańcowej',
    image: 'https://oricdn.origamilabs.pl/573851013_17843454870609889_380339509632644343_n.jpg',
    text: 'Profesjonalizm na każdym kroku. Sesja zdjęciowa i zdjecia z drona pokazały nasz dom z jego najlepszej strony. Kampanie reklamowe generują nam stały ruch, a my nie musimy płacić prowizji pośrednikom.',
    rating: 5
  },
 
  {
    name: 'Górskie Domki',
    image: 'https://oricdn.origamilabs.pl/gorskiedomki.png',
    text: 'Najlepsza inwestycja w marketing. Asystent AI odpowiada na pytania gości o 2 w nocy. Inwestycja zwróciła się po pierwszym miesiącu działania. Polecam każdemu!',
    rating: 5
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="opinie" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Historie Sukcesu</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Zaufali Nam Liderzy Branży
          </h2>
          <p className="text-lg text-slate-600">
            Zobacz, jak pomogliśmy innym obiektom uniezależnić się od portali OTA i drastycznie zwiększyć zyski z rezerwacji bezpośrednich.
          </p>
        </div>

        {/* Bento Grid Results */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-serif">
                <AnimatedCounter value="5" suffix={"\u00A0lat"} />
              </div>
              <div className="text-lg text-slate-600 font-medium">Doświadczenia w marketingu</div>
              <p className="text-sm text-slate-500 mt-4 max-w-sm">Od 5 lat skutecznie wspieramy firmy uslugowe, marki ecommerce i obiekty noclegowe w budowaniu niezależności i zwiększaniu zysków.</p>
            </div>
            <TrendingUp className="absolute -right-4 -bottom-4 w-48 h-48 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-bold text-dark mb-2 font-serif">
                <AnimatedCounter prefix="+" value="150" suffix="%" />
              </div>
              <div className="text-lg text-slate-600 font-medium">Wzrost rezerwacji bezpośrednich</div>
              <p className="text-sm text-slate-500 mt-4 max-w-sm">Średni wzrost liczby rezerwacji z własnej strony www w pierwszych 3 miesiącach współpracy.</p>
            </div>
            <Percent className="absolute -right-4 -bottom-4 w-48 h-48 text-slate-200 group-hover:text-slate-300 transition-colors duration-500" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="text-4xl font-bold text-dark mb-2 font-serif">24/7</div>
              <div className="text-sm text-slate-600 font-medium mt-2">Automatyczna obsługa gości</div>
            </div>
            <Clock className="absolute -left-4 -bottom-4 w-32 h-32 text-slate-200 group-hover:text-slate-300 transition-colors duration-500" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 bg-primary text-white p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-bold mb-2 font-serif">
                <AnimatedCounter value="15 000" suffix={"+\u00A0PLN"} />
              </div>
              <div className="text-lg text-white/90 font-medium">Średnich oszczędności przez wdrożenie systemu rezerwacji bezpośrednich</div>
              <p className="text-sm text-white/70 mt-4 max-w-xl">Tyle średnio zyskują nasi klienci w skali roku dzięki unikaniu wysokich prowizji OTA i automatyzacji procesów.</p>
            </div>
            <Users className="absolute -right-4 -bottom-4 w-48 h-48 text-white/10 group-hover:text-white/20 transition-colors duration-500" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Mobile Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-4 md:hidden">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft className="w-5 h-5 text-dark" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              aria-label="Następna opinia"
            >
              <ChevronRight className="w-5 h-5 text-dark" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-50 p-8 border border-slate-200 relative group hover:border-primary transition-colors duration-300 rounded-none flex flex-col h-full min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center"
              >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-200 group-hover:text-primary/10 transition-colors duration-300" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-8 flex-grow relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mt-auto border-t border-slate-200 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={`Logo ${testimonial.name} – opinia o OrigamiLabs`}
                  className="w-14 h-14 object-cover rounded-none border border-slate-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="56"
                  height="56"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black font-serif">{testimonial.name}</h3>
                </div>
              </div>
              
              {/* Sharp decorative corner */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-primary transition-colors duration-300" />
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
