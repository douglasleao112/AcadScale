
import React from 'react';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Logo Centralizada: Absolute para subir com o scroll */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[100] transition-opacity duration-500 hover:opacity-100 opacity-60">
        <img 
          src="https://i.imgur.com/sP4bt3b.png" 
          alt="Margem Pro Logo" 
          className="h-5 md:h-6 w-auto object-contain pointer-events-none select-none"
        />
      </div>

      {/* Camada de Fundo: Universo e Estrelas (Fixo) */}
      <ParticleBackground />
      
      {/* Conteúdo Hero */}
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
};

export default App;
