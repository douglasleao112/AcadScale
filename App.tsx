
import React from 'react';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import ValidationSection from './components/ValidationSection';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Logo Centralizada */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-500 hover:opacity-100 opacity-60">
        <img 
          src="https://i.imgur.com/sP4bt3b.png" 
          alt="Margem Pro Logo" 
          className="h-5 md:h-6 w-auto object-contain pointer-events-none select-none"
        />
      </div>

      {/* Camada de Fundo: Universo e Estrelas */}
      <ParticleBackground />
      
      {/* Conteúdo Principal */}
      <div className="relative z-10">
        <Hero />
        <ValidationSection />
      </div>
    </main>
  );
};

export default App;
