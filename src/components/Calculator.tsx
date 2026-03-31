import { motion } from 'framer-motion';
import { ArrowRight, Calculator as CalcIcon, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

function Odometer({ value, format }: { value: number, format: (v: number) => string }) {
  const formatted = format(value);
  const chars = formatted.split('');
  
  return (
    <span className="inline-flex" style={{ lineHeight: 1 }}>
      {chars.map((char, i) => {
        const isDigit = /\d/.test(char);
        const key = chars.length - i;
        
        if (isDigit) {
          return (
            <span key={key} className="inline-flex overflow-hidden" style={{ height: "1em" }}>
              <motion.span
                className="flex flex-col"
                initial={false}
                animate={{ y: `-${Number(char) * 100}%` }}
                transition={{ type: "spring", bounce: 0, duration: 1.5 }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <span key={n} className="inline-flex justify-center" style={{ height: "1em" }}>{n}</span>
                ))}
              </motion.span>
            </span>
          );
        }
        
        return (
          <span key={key} className="inline-flex" style={{ height: "1em" }}>
            {/\s/.test(char) ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
}

export default function Calculator() {
  const [price, setPrice] = useState(475);
  const [months, setMonths] = useState(6);
  const [days, setDays] = useState(25);

  const totalRevenue = price * days * months;
  const otaFee = totalRevenue * 0.20;

  // Time saved calculation:
  // 1.5 hours per booked day for guest communication/check-in
  // + 20 hours per month for marketing, OTA management, emails, and photo session prep
  const hoursSavedPerMonth = (days * 1.5) + 20;
  const totalHoursSaved = Math.round(hoursSavedPerMonth * months);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pl-PL', { 
      style: 'currency', 
      currency: 'PLN', 
      maximumFractionDigits: 0 
    }).format(value);

  return (
    <section id="kalkulator" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 mb-6 rounded-none">
            <CalcIcon className="h-6 w-6 text-primary" />
          </div>
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Kalkulator ROI</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Ile tracisz na prowizjach i czasie?
          </h2>
          <p className="text-lg text-slate-600">
            Sprawdź, ile pieniędzy zostaje w kieszeni portali rezerwacyjnych (OTA) oraz ile godzin tracisz na samodzielny marketing i obsługę gości.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Inputs Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 border border-slate-200 rounded-none sticky top-24"
          >
            <h3 className="text-2xl font-bold font-serif mb-8 text-dark">Parametry Twojego obiektu</h3>
            
            <div className="space-y-8">
              {/* Price Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-slate-700">Średnia cena za noc</label>
                  <span className="font-bold text-primary">{formatCurrency(price)}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="25"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Months Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-slate-700">Ilość miesięcy w sezonie</label>
                  <span className="font-bold text-primary">{months} mies.</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Days per month Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-slate-700">Średnie obłożenie w miesiącu</label>
                  <span className="font-bold text-primary">{days} dni</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="31" 
                  step="1"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                * Symulacja zakłada średnią prowizję portali OTA (np. Booking.com, Airbnb) na poziomie 20% oraz uśredniony czas obsługi marketingu i gości.
              </p>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-dark text-white p-6 md:p-8 relative rounded-none shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Decorative background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-5">Twój potencjał wzrostu</h3>
              
              <div className="space-y-5">
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Szacowany przychód z sezonu</p>
                  <p className="text-2xl font-bold text-slate-200"><Odometer value={totalRevenue} format={formatCurrency} /></p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-white" />
                    <p className="text-white underline decoration-primary decoration-2 underline-offset-4 text-xs font-bold uppercase tracking-wider">Zaoszczędzona Prowizja</p>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <Odometer value={otaFee} format={formatCurrency} />
                  </p>
                  <p className="text-slate-400 text-xs">
                    Tyle pieniędzy zostaje w Twojej kieszeni przy przejściu na własny system rezerwacji.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="h-4 w-4 text-white" />
                    <p className="text-white underline decoration-primary decoration-2 underline-offset-4 text-xs font-bold uppercase tracking-wider">Zaoszczędzony Czas</p>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-3">
                    <Odometer value={totalHoursSaved} format={(v) => v.toString()} /> <span className="text-xl text-slate-400 font-medium">godzin</span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                      <span><strong>Asystent AI:</strong> Automatyczna obsługa pytań gości 24/7</span>
                    </li>
                    <li className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                      <span><strong>Marketing:</strong> Prowadzenie kampanii Ads i Email</span>
                    </li>
                    <li className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                      <span><strong>Zarządzanie:</strong> Optymalizacja OTA i kalendarza</span>
                    </li>
                    <li className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                      <span><strong>Wizualia:</strong> Organizacja profesjonalnej sesji foto/wideo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <a 
              href="#kontakt" 
              className="group mt-6 flex items-center justify-center w-full bg-primary text-white py-3 font-bold text-base hover:bg-primary-hover transition-colors rounded-none relative z-10"
            >
              Odzyskaj czas i pieniądze
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            {/* Sharp decorative corner */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
