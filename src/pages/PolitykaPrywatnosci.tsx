import React, { useEffect } from 'react';
import styles from './PolitykaPrywatnosci.module.css';

export default function PolitykaPrywatnosci() {
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
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.paper}>
          <h1 className={styles.title}>Polityka Prywatności</h1>
          
          <div className={styles.contentBody}>
            <section>
              <p className={styles.paragraph}>Bartosz Kowalewski BTECOM</p>
              <p className={styles.paragraph}>
                Niniejsza Polityka prywatności określa zasady gromadzenia, przetwarzania oraz ochrony danych osobowych użytkowników korzystających z serwisu internetowego (dalej: Serwis). Zależy nam na przejrzystości, dlatego poniżej znajdziesz szczegółowe informacje o tym, jak dbamy o Twoją prywatność.
              </p>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>I. Administrator Danych Osobowych</h2>
              <p className={styles.paragraph}>Administratorem Twoich danych osobowych jest:</p>
              <p className={styles.subHeader}>Bartosz Kowalewski BTECOM ul. Królowej Marysieńki 32A, 62-510 Konin</p>
              <ul className={styles.list}>
                <li>NIP: 6653080510</li>
                <li>Dane kontaktowe: E-mail: <a href="mailto:kontakt@origamilabs.pl" className={styles.contactLink}>kontakt@origamilabs.pl</a></li>
                <li>Telefon: +48 575 843 182</li>
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>II. Podstawy Prawne Przetwarzania</h2>
              <p className={styles.paragraph}>Twoje dane są przetwarzane zgodnie z aktualnymi przepisami prawa:</p>
              <ul className={styles.list}>
                <li>RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (ogólne rozporządzenie o ochronie danych).</li>
                <li>Ustawa o ochronie danych osobowych z dnia 10 maja 2018 r.</li>
                <li>Ustawa o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r.</li>
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>III. Cele i Zakres Przetwarzania</h2>
              <p className={styles.paragraph}>Gromadzimy dane wyłącznie w zakresie niezbędnym do realizacji określonych usług. Twoje dane są wykorzystywane do:</p>
              <ul className={styles.list}>
                <li>Marketingu bezpośredniego oraz promocji oferowanych przez nas usług.</li>
                <li>Analizy statystycznej, abyśmy mogli stale ulepszać funkcjonalność Serwisu i dostosowywać go do Twoich potrzeb.</li>
                <li>Realizacji procesów sprzedażowych i obsługi zapytań przesyłanych przez formularze kontaktowe.</li>
                <li>Danych technicznych (anonimowych), takich jak adres IP, typ przeglądarki czy system operacyjny, w celach administracyjnych.</li>
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>IV. Czas Przechowywania Danych</h2>
              <p className={styles.paragraph}>
                Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celów biznesowych lub do momentu wycofania przez Ciebie zgody. Standardowy okres przechowywania danych, wynikający z terminów przedawnienia roszczeń, wynosi 6 lat.
              </p>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>V. Odbiorcy Danych</h2>
              <p className={styles.paragraph}>W celu zapewnienia najwyższej jakości usług, Twoje dane mogą być udostępniane zaufanym partnerom współpracującym z Administratorem:</p>
              <ul className={styles.list}>
                <li>Podmiotom świadczącym usługi IT i hostingowe.</li>
                <li>Operatorom płatności elektronicznych.</li>
                <li>Firmom kurierskim i pocztowym.</li>
                <li>Biurom rachunkowym oraz kancelariom prawnym wspierającym naszą działalność.</li>
              </ul>
              <p className={styles.paragraph}><strong>Ważne:</strong> Twoje dane nie są przekazywane poza teren Europejskiego Obszaru Gospodarczego (EOG).</p>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>VI. Twoje Prawa</h2>
              <p className={styles.paragraph}>Zgodnie z RODO przysługuje Ci szereg praw dotyczących Twoich danych:</p>
              <ul className={styles.list}>
                <li>Prawo dostępu do treści swoich danych oraz otrzymania ich kopii.</li>
                <li>Prawo do sprostowania (poprawienia) danych.</li>
                <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”).</li>
                <li>Prawo do ograniczenia przetwarzania.</li>
                <li>Prawo do przenoszenia danych.</li>
                <li>Prawo do sprzeciwu wobec przetwarzania danych (np. w celach marketingowych).</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed jej cofnięciem).</li>
              </ul>
              <p className={styles.paragraph}>
                Aby skorzystać ze swoich praw, napisz do nas na adres: <a href="mailto:kontakt@origamilabs.pl" className={styles.contactLink}>kontakt@origamilabs.pl</a>. Twoje żądanie zrealizujemy bez zbędnej zwłoki, nie później niż w ciągu miesiąca.
              </p>
              <p className={styles.paragraph}>
                Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uznasz, że przetwarzamy Twoje dane niezgodnie z prawem.
              </p>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>VII. Profilowanie i Pliki Cookie</h2>
              <ul className={styles.list}>
                <li><strong>Profilowanie:</strong> Twoje dane mogą być profilowane w celu personalizacji oferty (np. wyświetlania produktów, które mogą Cię zainteresować), jednak dzieje się to wyłącznie po wyrażeniu przez Ciebie zgody. Nie podejmujemy zautomatyzowanych decyzji, które wywoływałyby wobec Ciebie skutki prawne.</li>
                <li><strong>Cookies:</strong> Serwis korzysta z plików cookies (tzw. ciasteczek) w celach statystycznych i funkcjonalnych. Możesz zarządzać ustawieniami cookies w swojej przeglądarce internetowej.</li>
              </ul>
            </section>

            <section>
              <h2 className={styles.sectionHeader}>VIII. Postanowienia Końcowe</h2>
              <ul className={styles.list}>
                <li>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce (np. w przypadku zmian w prawie).</li>
                <li>O wszelkich zmianach użytkownicy zostaną poinformowani za pośrednictwem komunikatu w Serwisie.</li>
                <li>W kwestiach nieuregulowanych zastosowanie mają przepisy RODO oraz powszechnie obowiązujące prawo polskie.</li>
              </ul>
            </section>

            <section>
              <p className={styles.paragraph}>Ostatnia aktualizacja: 1 kwietnia 2026 r.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
