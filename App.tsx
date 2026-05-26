import React, { useState } from 'react';

import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import ValidationSection from './components/ValidationSection';
import PhotoSlider from './components/PhotoSlider';
import StrategySection from './components/StrategySection';
// import StackedCards from './components/StackedCards';
import AboutSection from './components/AboutSection';
import ObjectiveSection from './components/ObjectiveSection';
import ComparisonSection from './components/ComparisonSection';
import ProofSection from './components/ProofSection';
import FAQSection from './components/FAQSection';
import FooterBranding from './components/FooterBranding';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  const navigateTo = (page: 'home' | 'privacy' | 'terms') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Camada de Fundo: Universo e Estrelas */}
      <ParticleBackground />
      
      {currentPage === 'home' && (
        <div className="relative z-10">
          {/* Logo Centralizada no Topo */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-500 hover:opacity-100 opacity-60">
            <img 
              src="https://i.imgur.com/zZbmG6d.png" 
              alt="Logo" 
              className="h-8 md:h-12 w-auto object-contain pointer-events-none select-none brightness-110"
            />
          </div>

<Hero />
<ValidationSection />
<PhotoSlider />
<StrategySection />
{/* <StackedCards /> */}
<ComparisonSection />
<ProofSection />
<ObjectiveSection />
<FooterBranding />
<AboutSection />
<FAQSection />
<Footer onNavigate={navigateTo} />
        </div>
      )}

      {currentPage === 'privacy' && (
        <div className="relative z-10">
          <PrivacyPolicy onBack={() => navigateTo('home')} />
          <Footer onNavigate={navigateTo} />
        </div>
      )}

      {currentPage === 'terms' && (
        <div className="relative z-10">
          <TermsOfUse onBack={() => navigateTo('home')} />
          <Footer onNavigate={navigateTo} />
        </div>
      )}
    </main>
  );
};

export default App;