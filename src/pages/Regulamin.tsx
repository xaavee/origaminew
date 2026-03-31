import React, { useEffect } from 'react';

export default function Regulamin() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add noindex tag to the head
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    return () => {
      // Remove noindex tag when leaving the page
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 shadow-sm rounded-2xl">
          <h1 className="text-3xl font-bold mb-8 text-slate-800">Regulamin Świadczenia Usług</h1>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 1. Postanowienia ogólne i dane firmy</h2>
              <p className="mb-4">Niniejszy dokument określa zasady i warunki korzystania z usług świadczonych przez firmę Bartosz Kowalewski BTECOM.</p>
              <p className="mb-2 font-medium text-slate-700">Dane rejestrowe i kontaktowe Usługodawcy:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="font-medium text-slate-700">Nazwa firmy:</strong> Bartosz Kowalewski BTECOM</li>
                <li><strong className="font-medium text-slate-700">Adres siedziby:</strong> ul. Królowej Marysieńki 32A, 62-510 Konin</li>
                <li><strong className="font-medium text-slate-700">NIP:</strong> 6653080510</li>
                <li><strong className="font-medium text-slate-700">Adres e-mail:</strong> kontakt@origamilabs.pl</li>
                <li><strong className="font-medium text-slate-700">Telefon:</strong> +48 517 748 151</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 2. Zakres usług i zasady ich realizacji</h2>
              <p className="mb-4">Firma Bartosz Kowalewski BTECOM świadczy kompleksowe usługi z zakresu zarządzania wynajmem krótkoterminowym, marketingu obiektów noclegowych oraz wdrażania nowoczesnych systemów rezerwacyjnych.</p>
              <p className="mb-4">Koszty świadczonych usług wyceniane są indywidualnie i udostępniane Klientowi na jego życzenie.</p>
              <p>Harmonogram oraz czas realizacji zależą od specyfiki konkretnego zlecenia i są każdorazowo ustalane z Klientem. Usługodawca zobowiązuje się do rozpoczęcia prac w terminie nie dłuższym niż 14 dni roboczych od momentu zaksięgowania wpłaty.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 3. Płatności i rozliczenia</h2>
              <p className="mb-4">Płatności za usługi realizowane są w formie elektronicznej za pośrednictwem bezpiecznego systemu Stripe, co gwarantuje szybkie i wygodne sfinalizowanie transakcji.</p>
              <p>Świadczenie usług rozpoczyna się po dokonaniu pełnej przedpłaty przez Klienta, chyba że odrębne ustalenia w umowie między stronami stanowią inaczej.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 4. Prawo do odstąpienia od umowy (Polityka zwrotów)</h2>
              <p className="mb-4">Klientowi będącemu Konsumentem (zgodnie z Ustawą z dnia 30 maja 2014 r. o prawach konsumenta, art. 27) przysługuje prawo do odstąpienia od umowy o świadczenie usług w terminie 14 dni od daty jej zawarcia, bez konieczności podawania przyczyny.</p>
              <p className="mb-2">Aby skorzystać z prawa do odstąpienia, Klient powinien poinformować Usługodawcę o swojej decyzji, wysyłając jednoznaczne oświadczenie:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>drogą elektroniczną na adres e-mail: kontakt@origamilabs.pl</li>
                <li>drogą pocztową na adres siedziby firmy: ul. Królowej Marysieńki 32A, 62-510 Konin.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 5. Postępowanie reklamacyjne</h2>
              <p className="mb-4">Jeżeli usługa została wykonana nienależycie lub niezgodnie z ustaleniami, Klient ma pełne prawo do złożenia reklamacji.</p>
              <p className="mb-4">Zgłoszenia reklamacyjne należy kierować na adres e-mail: kontakt@origamilabs.pl lub w formie pisemnej na adres siedziby firmy.</p>
              <p>Usługodawca rozpatrzy reklamację i poinformuje Klienta o swojej decyzji (za pośrednictwem poczty e-mail lub telefonicznie) w terminie do 14 dni od daty otrzymania zgłoszenia.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 6. Ochrona danych osobowych (RODO)</h2>
              <p className="mb-4">Administratorem Państwa danych osobowych jest Bartosz Kowalewski, prowadzący działalność pod firmą Bartosz Kowalewski BTECOM.</p>
              <p className="mb-4">Przetwarzanie danych osobowych odbywa się w ścisłej zgodności z obowiązującymi przepisami, w tym z rozporządzeniem RODO (UE 2016/679).</p>
              <p className="mb-4">Dane Klientów gromadzone są wyłącznie w celu prawidłowej realizacji usług oraz obsługi ewentualnych reklamacji.</p>
              <p>Każdy Klient ma pełne prawo dostępu do swoich danych, żądania ich sprostowania, usunięcia lub ograniczenia ich przetwarzania.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-800">§ 7. Kontakt</h2>
              <p>W przypadku jakichkolwiek pytań lub wątpliwości dotyczących treści niniejszego regulaminu, jesteśmy do Państwa dyspozycji. Prosimy o kontakt mailowy pod adresem <a href="mailto:kontakt@origamilabs.pl" className="text-primary hover:underline font-medium">kontakt@origamilabs.pl</a> lub telefoniczny pod numerem <a href="tel:+48517748151" className="text-primary hover:underline font-medium">+48 517 748 151</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
