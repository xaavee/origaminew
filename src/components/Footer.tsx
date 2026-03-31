import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <svg viewBox="0 0 400 400" className="h-[32px] w-auto mr-2 transition-colors duration-300 fill-black" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M97.718,18.974c1.225,4.858 2.76,9.632 4.594,14.294l6.296,19.059c3.005,10.247 6.468,20.354 10.38,30.289l3.573,10.55c5.22,14.441 10.212,28.964 14.975,43.562c3.268,8.891 6.332,17.855 9.189,26.886l1.702,4.594c0.851,3.914 2.893,9.189 3.744,9.87c0.51,0.681 10.38,0.851 37.777,1.021l39.478,0c2.212,0 2.723,0.681 8.508,7.657c15.281,18.906 30.653,37.737 46.115,56.495l2.723,3.233l-2.552,7.147c-2.122,5.49 -4.052,11.052 -5.786,16.676l-2.552,7.657c-2.212,7.828 -1.361,7.828 -13.103,0.51c-3.86,-2.562 -7.835,-4.946 -11.912,-7.147c-7.93,-5.08 -15.987,-9.96 -24.163,-14.634c-9.208,-5.77 -18.512,-11.386 -27.907,-16.846c0,-0.34 -1.361,-1.191 -2.893,-2.042c-1.702,-0.681 -4.765,-2.552 -7.147,-4.084c-8.319,-5.414 -16.833,-10.522 -25.525,-15.315c-7.032,-4.163 -14.01,-8.417 -20.93,-12.762c-13.15,-8.255 -26.425,-16.31 -39.819,-24.163l-3.744,-2.212l-27.226,0c-32.331,0 -30.63,-1.021 -18.208,11.061c4.935,4.594 16.846,16.336 26.546,26.035l17.867,17.357l0,54.453c0,43.222 0,54.453 0.851,54.623l78.276,0c86.784,0 61.787,0.34 80.318,-0.105l4.084,-17.252c2.025,-5.621 3.897,-11.295 5.615,-17.017c2.033,-5.826 4.018,-11.669 5.956,-17.527c1.021,-3.914 1.021,-3.914 7.998,0.34c11.597,6.955 23.283,13.763 35.054,20.42c16.381,9.591 32.831,19.063 49.348,28.418c1.702,-0 1.021,-2.382 -1.531,-5.105c-4.43,-4.625 -8.578,-9.512 -12.422,-14.634c-2.704,-2.934 -5.26,-6 -7.657,-9.189c-1.616,-2.167 -3.319,-4.267 -5.105,-6.296c-0.681,-0.51 -3.744,-4.084 -6.807,-7.998c-2.119,-2.742 -4.333,-5.409 -6.636,-7.998l-6.636,-7.828c-2.123,-2.738 -4.337,-5.406 -6.636,-7.998l-9.359,-11.061l-10.04,-11.912c-3.403,-3.573 -3.744,-4.424 -1.702,-10.21c4.844,-14.002 9.666,-28.013 14.464,-42.031c5.956,-17.017 6.466,-19.059 5.105,-19.909c-13.036,-0.628 -26.088,-0.855 -39.138,-0.681l-38.287,0l-2.212,-2.382c-2.648,-2.77 -5.093,-5.728 -7.317,-8.849l-5.956,-7.317c-4.626,-6.103 -9.508,-12.008 -14.634,-17.697c-1.617,-2.166 -3.32,-4.266 -5.105,-6.296c-0.681,-0.51 -3.914,-4.254 -7.147,-8.338l-6.807,-7.998l-6.466,-7.828c-23.38,-31.121 -48.371,-60.997 -74.873,-89.507c-2.893,-3.403 -4.594,-4.084 -4.594,-2.042"></path></svg>
              <span className="font-sans text-2xl font-thin tracking-tight text-black">
                origami<span className="text-slate-500">labs</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Budujemy niezależność obiektów letniskowych poprzez zaawansowane lejki sprzedażowe, AI i profesjonalny marketing.
            </p>
          </div>
          
          <div>
            <h2 className="font-bold text-dark mb-4 uppercase text-sm tracking-wider">Nawigacja</h2>
            <ul aria-label="Linki nawigacyjne" className="space-y-2">
              <li><a href="/#uslugi" className="text-slate-500 hover:text-primary transition-colors">Usługi</a></li>
              <li><a href="/#proces" className="text-slate-500 hover:text-primary transition-colors">Proces</a></li>
              <li><a href="/#opinie" className="text-slate-500 hover:text-primary transition-colors">Opinie</a></li>
              <li><a href="/#kalkulator" className="text-slate-500 hover:text-primary transition-colors">Kalkulator</a></li>
              <li><a href="/#cennik" className="text-slate-500 hover:text-primary transition-colors">Cennik</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-dark mb-4 uppercase text-sm tracking-wider">Kontakt</h2>
            <ul aria-label="Dane kontaktowe" className="space-y-2 text-slate-500">
              <li>
                <a href="mailto:kontakt@origamilabs.pl" className="underline hover:text-primary transition-colors">kontakt@origamilabs.pl</a>
              </li>
              <li>
                <a href="tel:+48575843182" className="underline hover:text-primary transition-colors">+48 575 843 182</a>
              </li>
              <li className="pt-4">
                <a href="/#kontakt" className="group text-primary font-semibold hover:underline inline-flex items-center">
                  Umów konsultację <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} OrigamiLabs. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/polityka-prywatnosci" className="text-slate-400 hover:text-primary text-sm transition-colors">Polityka Prywatności</Link>
            <Link to="/regulamin" className="text-slate-400 hover:text-primary text-sm transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
