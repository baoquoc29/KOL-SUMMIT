import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStats from './components/SuccessStats';
import Overview from './components/Overview';
import Countdown from './components/Countdown';
import Attendees from './components/Attendees';
import Artists from './components/Artists';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import TrustProgram from './components/TrustProgram';
import Alliance from './components/Alliance';
import Partners from './components/Partners';
import News from './components/News';

import Footer from './components/Footer';
import MarkerSection from './components/MarkerSection';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Header />
      <main>
        <Hero />
        <SuccessStats />
        <Overview />
        <MarkerSection />
        <Countdown />
        <Attendees />
        <Artists />
        <Schedule />
        <Speakers />
        {/* Shared background section for TrustProgram and Alliance */}
        <div className="relative w-full overflow-hidden">
          <img 
            src="/images/img_1.png" 
            alt="Single Shared Background" 
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0" 
          />
          <TrustProgram />
          <Alliance />
        </div>
        <Partners />
        <News />
      </main>
      <Footer />
    </div>
  );
}
