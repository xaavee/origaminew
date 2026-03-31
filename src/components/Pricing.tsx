import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';

export default function Pricing() {
  const handleSelectModel = (model: string) => {
    window.dispatchEvent(new CustomEvent('selectModel', { detail: model }));
  };

  return (
    <section id="cennik" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Inwestycja w niezależność</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Twoje zasady, Twój zysk
          </h2>
          <p className="text-lg text-slate-600">
            Wybierz elastyczną formę rozliczeń dopasowaną do specyfiki Twojego obiektu. Zapewniamy pełną infrastrukturę technologiczną, która maksymalizuje zysk netto z każdej rezerwacji, niezależnie od wybranego modelu.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-6 bg-slate-50 border-b-2 border-slate-200 text-slate-500 font-medium text-sm">
                    Porównanie modeli
                  </th>
                  <th className="w-1/4 p-6 bg-slate-100 border-b-2 border-slate-300 text-center">
                    <div className="text-slate-500 font-bold text-lg mb-1">Portale OTA</div>
                    <div className="text-slate-400 text-sm font-normal">(np. Booking)</div>
                  </th>
                  <th className="w-1/4 p-6 bg-primary/5 border-b-2 border-primary/20 text-center relative">
                    <div className="text-primary font-bold text-lg mb-1">Model Hybrydowy</div>
                    <div className="text-primary/70 text-sm font-normal">OrigamiLabs</div>
                  </th>
                  <th className="w-1/4 p-6 bg-dark border-b-2 border-dark text-center">
                    <div className="text-white font-bold text-lg mb-1">Model Stały</div>
                    <div className="text-slate-400 text-sm font-normal">OrigamiLabs</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Koszt miesięczny */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Koszt miesięczny</td>
                  <td className="p-6 text-center text-red-500 font-bold">15% - 25%</td>
                  <td className="p-6 text-center bg-primary/5">
                    <div className="text-primary font-bold text-lg">299zł + od 5,99%</div>
                    <div className="text-xs text-slate-500 mt-1">Prowizja tylko ze strony<br/>(3x taniej niż OTA!)</div>
                  </td>
                  <td className="p-6 text-center font-medium text-dark">
                    <div className="font-bold text-lg">od 99zł</div>
                    <div className="text-xs text-slate-500 mt-1">za kwaterę</div>
                  </td>
                </tr>
                
                {/* Koszt przy 20k obrotu */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Koszt przy 20k obrotu</td>
                  <td className="p-6 text-center text-red-500 font-bold">aż 5000 zł / mies.</td>
                  <td className="p-6 text-center bg-primary/5 text-primary">ok. 1599 zł / mies.</td>
                  <td className="p-6 text-center text-dark">ok. 999 zł / mies.<span className="text-slate-400">*</span></td>
                </tr>

                {/* Wdrożenie */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Koszt wdrożenia</td>
                  <td className="p-6 text-center text-slate-600">0 zł (robisz sam)</td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-primary">0 zł (wdrażamy za ciebie)</td>
                  <td className="p-6 text-center font-medium text-dark">0 zł (wdrażamy za ciebie)</td>
                </tr>

                {/* Baza gości */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Baza gości</td>
                  <td className="p-6 text-center text-slate-600">Portal (ukrywa maile i telefony)</td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-primary">Należy do Ciebie</td>
                  <td className="p-6 text-center font-medium text-dark">Należy do Ciebie</td>
                </tr>

                {/* Asystent AI 24/7 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Asystent AI 24/7</td>
                  <td className="p-6 text-center text-slate-600"><X className="w-6 h-6 text-slate-400 mx-auto" /></td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-dark"><Check className="w-6 h-6 text-blue-500 mx-auto" /></td>
                  <td className="p-6 text-center font-medium text-dark"><Check className="w-6 h-6 text-dark mx-auto" /></td>
                </tr>

                {/* Pomoc 12/7 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Pomoc 12/7</td>
                  <td className="p-6 text-center text-slate-600"><X className="w-6 h-6 text-slate-400 mx-auto" /></td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-dark"><Check className="w-6 h-6 text-blue-500 mx-auto" /></td>
                  <td className="p-6 text-center font-medium text-dark"><Check className="w-6 h-6 text-dark mx-auto" /></td>
                </tr>

                {/* Profesjonalne zdjęcia */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Profesjonalne zdjęcia</td>
                  <td className="p-6 text-center text-slate-600"><X className="w-6 h-6 text-slate-400 mx-auto" /></td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-dark"><Check className="w-6 h-6 text-blue-500 mx-auto" /></td>
                  <td className="p-6 text-center font-medium text-dark"><Check className="w-6 h-6 text-dark mx-auto" /></td>
                </tr>

                {/* Własny system na zawsze */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark">Własny system na zawsze</td>
                  <td className="p-6 text-center text-slate-600"><X className="w-6 h-6 text-slate-400 mx-auto" /></td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-dark"><Check className="w-6 h-6 text-blue-500 mx-auto" /></td>
                  <td className="p-6 text-center font-medium text-dark"><Check className="w-6 h-6 text-dark mx-auto" /></td>
                </tr>

                {/* Powracający klienci dzięki emailom */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-dark border-b border-slate-200">Powracający klienci dzięki emailom</td>
                  <td className="p-6 text-center text-slate-600 border-b border-slate-200"><X className="w-6 h-6 text-slate-400 mx-auto" /></td>
                  <td className="p-6 text-center bg-primary/5 font-medium text-dark border-b border-primary/20"><Check className="w-6 h-6 text-blue-500 mx-auto" /></td>
                  <td className="p-6 text-center font-medium text-dark border-b border-slate-200"><Check className="w-6 h-6 text-dark mx-auto" /></td>
                </tr>

                {/* Przyciski wyboru */}
                <tr>
                  <td className="p-6"></td>
                  <td className="p-6"></td>
                  <td className="p-6 text-center bg-primary/5">
                    <button 
                      onClick={() => handleSelectModel('hybrid')}
                      className="w-full bg-primary text-white py-3 px-4 font-bold hover:bg-primary-hover transition-colors rounded-none"
                    >
                      Wybierz model
                    </button>
                  </td>
                  <td className="p-6 text-center">
                    <button 
                      onClick={() => handleSelectModel('fixed')}
                      className="w-full bg-dark text-white py-3 px-4 font-bold hover:bg-slate-800 transition-colors rounded-none"
                    >
                      Wybierz model
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Table */}
          <div className="md:hidden block border border-slate-200 bg-white">
            {/* Sticky Header */}
            <div className="grid grid-cols-3 bg-slate-50 border-b-2 border-slate-200 sticky top-16 z-10">
              <div className="p-3 text-center border-r border-slate-200">
                <div className="text-slate-500 font-bold text-sm leading-tight">Portale OTA</div>
              </div>
              <div className="p-3 text-center bg-primary/5 border-r border-primary/20">
                <div className="text-primary font-bold text-sm leading-tight">Hybrydowy</div>
              </div>
              <div className="p-3 text-center bg-dark">
                <div className="text-white font-bold text-sm leading-tight">Stały</div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {/* Koszt miesięczny */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Koszt miesięczny
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-red-500 font-bold text-sm">15% - 25%</span>
                  </div>
                  <div className="p-3 text-center bg-primary/5 flex flex-col justify-center">
                    <span className="text-primary font-bold text-sm">299zł + od 5,99%</span>
                    <span className="text-[10px] text-slate-500 mt-1 leading-tight">Prowizja tylko ze strony</span>
                  </div>
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-dark font-bold text-sm">od 99zł</span>
                    <span className="text-[10px] text-slate-500 mt-1 leading-tight">za kwaterę</span>
                  </div>
                </div>
              </div>

              {/* Koszt przy 20k obrotu */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Koszt przy 20k obrotu
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-red-500 font-bold text-sm">aż 5000 zł</span>
                  </div>
                  <div className="p-3 text-center bg-primary/5 flex flex-col justify-center">
                    <span className="text-primary font-medium text-sm">ok. 1599 zł</span>
                  </div>
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-dark font-medium text-sm">ok. 999 zł<span className="text-slate-400">*</span></span>
                  </div>
                </div>
              </div>

              {/* Koszt wdrożenia */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Koszt wdrożenia
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-slate-600 text-sm">0 zł<br/><span className="text-[10px]">(robisz sam)</span></span>
                  </div>
                  <div className="p-3 text-center bg-primary/5 flex flex-col justify-center">
                    <span className="text-primary font-medium text-sm">0 zł<br/><span className="text-[10px]">(wdrażamy my)</span></span>
                  </div>
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-dark font-medium text-sm">0 zł<br/><span className="text-[10px]">(wdrażamy my)</span></span>
                  </div>
                </div>
              </div>

              {/* Baza gości */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Baza gości
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-slate-600 text-[11px] leading-tight">Portal ukrywa dane</span>
                  </div>
                  <div className="p-3 text-center bg-primary/5 flex flex-col justify-center">
                    <span className="text-primary font-medium text-sm">Twoja</span>
                  </div>
                  <div className="p-3 text-center flex flex-col justify-center">
                    <span className="text-dark font-medium text-sm">Twoja</span>
                  </div>
                </div>
              </div>

              {/* Asystent AI 24/7 */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Asystent AI 24/7
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 flex justify-center items-center"><X className="w-5 h-5 text-slate-400" /></div>
                  <div className="p-3 bg-primary/5 flex justify-center items-center"><Check className="w-5 h-5 text-blue-500" /></div>
                  <div className="p-3 flex justify-center items-center"><Check className="w-5 h-5 text-dark" /></div>
                </div>
              </div>

              {/* Pomoc 12/7 */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Pomoc 12/7
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 flex justify-center items-center"><X className="w-5 h-5 text-slate-400" /></div>
                  <div className="p-3 bg-primary/5 flex justify-center items-center"><Check className="w-5 h-5 text-blue-500" /></div>
                  <div className="p-3 flex justify-center items-center"><Check className="w-5 h-5 text-dark" /></div>
                </div>
              </div>

              {/* Profesjonalne zdjęcia */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Profesjonalne zdjęcia
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 flex justify-center items-center"><X className="w-5 h-5 text-slate-400" /></div>
                  <div className="p-3 bg-primary/5 flex justify-center items-center"><Check className="w-5 h-5 text-blue-500" /></div>
                  <div className="p-3 flex justify-center items-center"><Check className="w-5 h-5 text-dark" /></div>
                </div>
              </div>

              {/* Własny system na zawsze */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Własny system na zawsze
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 flex justify-center items-center"><X className="w-5 h-5 text-slate-400" /></div>
                  <div className="p-3 bg-primary/5 flex justify-center items-center"><Check className="w-5 h-5 text-blue-500" /></div>
                  <div className="p-3 flex justify-center items-center"><Check className="w-5 h-5 text-dark" /></div>
                </div>
              </div>

              {/* Powracający klienci dzięki emailom */}
              <div className="flex flex-col">
                <div className="bg-slate-50/50 py-2 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Powracający klienci
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  <div className="p-3 flex justify-center items-center"><X className="w-5 h-5 text-slate-400" /></div>
                  <div className="p-3 bg-primary/5 flex justify-center items-center"><Check className="w-5 h-5 text-blue-500" /></div>
                  <div className="p-3 flex justify-center items-center"><Check className="w-5 h-5 text-dark" /></div>
                </div>
              </div>

              {/* Przyciski wyboru */}
              <div className="grid grid-cols-3 divide-x divide-slate-100">
                <div className="p-3"></div>
                <div className="p-3 bg-primary/5 flex justify-center items-center">
                  <button 
                    onClick={() => handleSelectModel('hybrid')}
                    className="w-full bg-primary text-white py-2 px-1 text-xs font-bold hover:bg-primary-hover transition-colors rounded-none"
                  >
                    Wybierz
                  </button>
                </div>
                <div className="p-3 flex justify-center items-center">
                  <button 
                    onClick={() => handleSelectModel('fixed')}
                    className="w-full bg-dark text-white py-2 px-1 text-xs font-bold hover:bg-slate-800 transition-colors rounded-none"
                  >
                    Wybierz
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-[10px] md:text-xs text-left mt-6"><span className="text-slate-400">*</span>przy trzech kwaterach</p>
        </div>

        {/* Explanation & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 border border-slate-200 rounded-none text-center"
        >
          <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Elastyczna forma rozliczeń</h3>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Wybierz model dopasowany do Ciebie: niski abonament z niewielką prowizją (<strong>Hybryda</strong>) lub stała opłata i 100% zysku dla Ciebie (<strong>Stałe</strong>). W obu opcjach zyskujesz nasz pełny system sprzedażowy.
          </p>
          
          <a 
            href="#kontakt" 
            className="group inline-flex items-center justify-center bg-primary text-white px-8 py-4 font-bold text-lg hover:bg-primary-hover transition-colors rounded-none"
          >
            Wybierz model i zarabiaj więcej
          </a>
        </motion.div>

      </div>
    </section>
  );
}
