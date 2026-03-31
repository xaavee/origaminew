import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Regulamin from './pages/Regulamin';
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Calculator />
      <Pricing />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}




