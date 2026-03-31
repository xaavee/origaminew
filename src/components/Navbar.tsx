import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // Zablokuj scrollowanie strony, gdy menu jest otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Obsługa chowania/pokazywania navbara przy scrollowaniu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 20);

      // Nie chowaj navbara, jeśli menu mobilne jest otwarte
      if (isOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll w dół i poniżej wysokości navbara -> schowaj
        setIsVisible(false);
      } else {
        // Scroll w górę -> pokaż
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <>
      <nav aria-label="Główna nawigacja" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isOpen ? 'bg-white border-transparent' : isAtTop ? 'bg-transparent border-transparent' : 'bg-white/80 backdrop-blur-md border-slate-200'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-[72px]">
            <a href="/" aria-label="OrigamiLabs – strona główna" className="flex-shrink-0 flex items-center">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 400 400" className="h-[28px] w-auto mr-2 transition-colors duration-300 fill-black" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M97.718,18.974c1.225,4.858 2.76,9.632 4.594,14.294l6.296,19.059c3.005,10.247 6.468,20.354 10.38,30.289l3.573,10.55c5.22,14.441 10.212,28.964 14.975,43.562c3.268,8.891 6.332,17.855 9.189,26.886l1.702,4.594c0.851,3.914 2.893,9.189 3.744,9.87c0.51,0.681 10.38,0.851 37.777,1.021l39.478,0c2.212,0 2.723,0.681 8.508,7.657c15.281,18.906 30.653,37.737 46.115,56.495l2.723,3.233l-2.552,7.147c-2.122,5.49 -4.052,11.052 -5.786,16.676l-2.552,7.657c-2.212,7.828 -1.361,7.828 -13.103,0.51c-3.86,-2.562 -7.835,-4.946 -11.912,-7.147c-7.93,-5.08 -15.987,-9.96 -24.163,-14.634c-9.208,-5.77 -18.512,-11.386 -27.907,-16.846c0,-0.34 -1.361,-1.191 -2.893,-2.042c-1.702,-0.681 -4.765,-2.552 -7.147,-4.084c-8.319,-5.414 -16.833,-10.522 -25.525,-15.315c-7.032,-4.163 -14.01,-8.417 -20.93,-12.762c-13.15,-8.255 -26.425,-16.31 -39.819,-24.163l-3.744,-2.212l-27.226,0c-32.331,0 -30.63,-1.021 -18.208,11.061c4.935,4.594 16.846,16.336 26.546,26.035l17.867,17.357l0,54.453c0,43.222 0,54.453 0.851,54.623l78.276,0c86.784,0 61.787,0.34 80.318,-0.105l4.084,-17.252c2.025,-5.621 3.897,-11.295 5.615,-17.017c2.033,-5.826 4.018,-11.669 5.956,-17.527c1.021,-3.914 1.021,-3.914 7.998,0.34c11.597,6.955 23.283,13.763 35.054,20.42c16.381,9.591 32.831,19.063 49.348,28.418c1.702,-0 1.021,-2.382 -1.531,-5.105c-4.43,-4.625 -8.578,-9.512 -12.422,-14.634c-2.704,-2.934 -5.26,-6 -7.657,-9.189c-1.616,-2.167 -3.319,-4.267 -5.105,-6.296c-0.681,-0.51 -3.744,-4.084 -6.807,-7.998c-2.119,-2.742 -4.333,-5.409 -6.636,-7.998l-6.636,-7.828c-2.123,-2.738 -4.337,-5.406 -6.636,-7.998l-9.359,-11.061l-10.04,-11.912c-3.403,-3.573 -3.744,-4.424 -1.702,-10.21c4.844,-14.002 9.666,-28.013 14.464,-42.031c5.956,-17.017 6.466,-19.059 5.105,-19.909c-13.036,-0.628 -26.088,-0.855 -39.138,-0.681l-38.287,0l-2.212,-2.382c-2.648,-2.77 -5.093,-5.728 -7.317,-8.849l-5.956,-7.317c-4.626,-6.103 -9.508,-12.008 -14.634,-17.697c-1.617,-2.166 -3.32,-4.266 -5.105,-6.296c-0.681,-0.51 -3.914,-4.254 -7.147,-8.338l-6.807,-7.998l-6.466,-7.828c-23.38,-31.121 -48.371,-60.997 -74.873,-89.507c-2.893,-3.403 -4.594,-4.084 -4.594,-2.042"></path></svg>
              <span className="font-sans text-[21px] font-thin tracking-tight text-black">
                origami<span className="text-slate-500">labs</span>
              </span>
            </a>
          
          <div className="hidden md:flex items-center space-x-7">
            <a href="/#uslugi" className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors">Usługi</a>
            <a href="/#proces" className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors">Proces</a>
            <a href="/#opinie" className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors">Opinie</a>
            <a href="/#kalkulator" className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors">Kalkulator</a>
            <a href="/#cennik" className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors">Cennik</a>
            <a 
              href="/#kontakt" 
              className="bg-primary text-white px-5 py-2 text-[13px] font-semibold hover:bg-primary-hover transition-colors rounded-none"
            >
              Darmowa Konsultacja
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Mobile menu - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-[72px]"
          >
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col items-center justify-center flex-1 space-y-7 pb-20 px-4"
            >
              <a href="/#uslugi" onClick={closeMenu} className="text-[27px] font-medium text-slate-800 hover:text-primary transition-colors">Usługi</a>
              <a href="/#proces" onClick={closeMenu} className="text-[27px] font-medium text-slate-800 hover:text-primary transition-colors">Proces</a>
              <a href="/#opinie" onClick={closeMenu} className="text-[27px] font-medium text-slate-800 hover:text-primary transition-colors">Opinie</a>
              <a href="/#kalkulator" onClick={closeMenu} className="text-[27px] font-medium text-slate-800 hover:text-primary transition-colors">Kalkulator</a>
              <a href="/#cennik" onClick={closeMenu} className="text-[27px] font-medium text-slate-800 hover:text-primary transition-colors">Cennik</a>
              <a href="/#kontakt" onClick={closeMenu} className="mt-7 px-7 py-3.5 text-lg font-bold bg-primary text-white rounded-none hover:bg-primary-hover transition-colors w-full max-w-xs text-center">
                Darmowa Konsultacja
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
