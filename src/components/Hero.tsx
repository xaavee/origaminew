import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const actions = [
    "Profesjonalne Zdjęcia",
    "Strona WWW",
    "Płatne reklamy",
    "Strategia Cenowa",
    "Email marketing"
  ];

  const revenueValues = ["12 500", "18 200", "27 400", "42 800", "65 000", "89 000"];
  const pathLengths = [0, 0.156, 0.326, 0.518, 0.74, 1];

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Abstract Tech Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[720px] h-[720px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[540px] h-[540px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[38rem]"
          >
            <h1 className="text-[2.8rem] sm:text-[3.4rem] md:text-[2.5rem] lg:text-[3.8rem] font-bold text-dark leading-[1.1] mb-5">
              <span className="font-sans">Pusty kalendarz?</span> <span className="font-sans italic text-primary">Koniec z tym.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-sm lg:text-lg text-slate-600 mb-7 leading-relaxed">
              <span className="underline decoration-primary decoration-2 underline-offset-4">Zapełniamy Twoje terminy w 100 %.</span>Budujemy maszyny do rezerwacji bezpośrednich, łącząc AI, targetowane reklamy, konwertujące strony i profesjonalny design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontakt" 
                className="group inline-flex justify-center items-center px-7 py-3.5 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 text-sm md:text-xs lg:text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors rounded-none"
              >
                Zwiększ Zysk
                <ArrowRight className="ml-2 h-4 w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#uslugi" 
                className="inline-flex justify-center items-center px-7 py-3.5 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 text-sm md:text-xs lg:text-sm font-bold text-dark bg-white border border-slate-200 hover:border-primary hover:text-primary transition-colors rounded-none"
              >
                Poznaj System
              </a>
            </div>
          </motion.div>

          {/* Visual Representation (Glassmorphism Tech/Hospitality mix) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:ml-auto w-full max-w-[28rem] md:max-w-[22rem] lg:max-w-[28rem]"
          >
            <div className="relative aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
              <img 
                src="https://oricdn.origamilabs.pl/housepic.jpg" 
                alt="Luksusowy dom letniskowy – idealne warunki do wypoczynku" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                width="560"
                height="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              
              {/* Floating Glass Cards */}
              <div className="absolute inset-x-4 md:inset-x-2 lg:inset-x-6 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-6 sm:translate-y-0">
                <div className="bg-dark/70 backdrop-blur-md border border-white/20 p-4 md:p-3 lg:p-5 rounded-none flex flex-col sm:flex-row gap-4 md:gap-2 lg:gap-6">
                  {/* Left: Checklist */}
                  <div className="flex-1">
                    <p className="text-white/70 text-[10px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wider mb-3 md:mb-2 lg:mb-3">Działania</p>
                    <div className="space-y-2.5 md:space-y-1.5 lg:space-y-2.5">
                      {actions.map((action, idx) => {
                        const isActive = step > idx;
                        return (
                          <div key={idx} className="flex items-center space-x-2.5 md:space-x-1.5 lg:space-x-2.5">
                            <div className={`w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full flex items-center justify-center border transition-colors duration-500 ${isActive ? 'bg-primary border-primary' : 'border-white/30'}`}>
                              {isActive && <Check className="w-3 h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 text-white" strokeWidth={3} />}
                            </div>
                            <span className={`text-xs md:text-[10px] lg:text-xs font-medium transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/50'}`}>
                              {action}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right: Chart */}
                  <div className="flex-1 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4 md:pl-2 lg:pl-6">
                    <div>
                      <p className="text-white/70 text-[10px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wider mb-1">Przychód z rezerwacji w Twoim obiekcie</p>
                      <p className="text-white font-bold text-2xl md:text-lg lg:text-2xl transition-all duration-500">{revenueValues[step]} PLN</p>
                    </div>
                    
                    <div className="relative w-full mt-4 md:mt-2 lg:mt-4">
                      <svg className="w-full h-auto overflow-visible" viewBox="0 0 150 50">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F27D26" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#F27D26" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        
                        {/* Background track */}
                        <path 
                          d="M 0 45 C 40 45, 80 25, 150 5" 
                          fill="none" 
                          stroke="rgba(255,255,255,0.1)" 
                          strokeWidth="2" 
                        />
                        
                        {/* Animated Line */}
                        <motion.path 
                          d="M 0 45 C 40 45, 80 25, 150 5" 
                          fill="none" 
                          stroke="url(#lineGradient)" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: pathLengths[step] }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        
                        {/* Animated Dot at the end of the line */}
                        <motion.circle
                          r="4"
                          fill="#F27D26"
                          className="drop-shadow-[0_0_8px_rgba(242,125,38,0.8)]"
                          initial={{ cx: 0, cy: 45, opacity: 0 }}
                          animate={{ 
                            cx: step === 0 ? 0 : step === 1 ? 24.2 : step === 2 ? 49.9 : step === 3 ? 78.5 : step === 4 ? 111.4 : 150, 
                            cy: step === 0 ? 45 : step === 1 ? 42.8 : step === 2 ? 36.7 : step === 3 ? 27.7 : step === 4 ? 16.8 : 5,
                            opacity: step === 0 ? 0 : 1
                          }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative sharp accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
