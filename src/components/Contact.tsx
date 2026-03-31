import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    const handleModelSelect = (e: CustomEvent) => {
      setSelectedModel(e.detail);
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('selectModel', handleModelSelect as EventListener);
    return () => window.removeEventListener('selectModel', handleModelSelect as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Symulacja wysyłki formularza
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Kontakt</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-serif">
            Gotowy na niezależność?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Zostaw swoje dane, a my skontaktujemy się z Tobą, aby omówić, jak możemy pomóc Twojemu obiektowi zwiększyć zyski i uniezależnić się od portali rezerwacyjnych.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Top: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto p-8 md:p-10 border border-slate-200"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-dark mb-2">Dziękujemy!</h4>
                <p className="text-slate-600">
                  Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-semibold hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-dark mb-6">Umów darmo konsultację</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-50 focus:bg-white"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-50 focus:bg-white"
                      placeholder="jan@domki.pl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-50 focus:bg-white"
                      placeholder="+48 575 843 182"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nazwa obiektu / Link (Booking, Airbnb, strona)
                  </label>
                  <input
                    type="text"
                    id="property"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-50 focus:bg-white"
                    placeholder="np. Domki nad Jeziorem"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-semibold text-slate-700 mb-2">
                    Preferowany model rozliczenia (opcjonalnie)
                  </label>
                  <select
                    id="model"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-50 focus:bg-white"
                  >
                    <option value="">Do ustalenia podczas rozmowy</option>
                    <option value="hybrid">Rozliczenie Hybrydowe (Abonament + Prowizja)</option>
                    <option value="fixed">Rozliczenie Stałe (Tylko Abonament)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-primary text-white py-4 font-bold text-lg hover:bg-primary-hover transition-colors rounded-none flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                </button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych w celu obsługi zapytania.
                </p>
              </form>
            )}
          </motion.div>

          {/* Bottom: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4 pb-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-dark">Zadzwoń do nas</h3>
                <p className="text-slate-600 mt-1">
                  <a href="tel:+48575843182" className="underline hover:text-primary transition-colors">+48 575 843 182</a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-dark">Napisz do nas</h3>
                <p className="text-slate-600 mt-1">
                  <a href="mailto:kontakt@origamilabs.pl" className="underline hover:text-primary transition-colors">kontakt@origamilabs.pl</a>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-dark">Lokalizacja</h3>
                <p className="text-slate-600 mt-1">Działamy na terenie całej Polski i Europy</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
