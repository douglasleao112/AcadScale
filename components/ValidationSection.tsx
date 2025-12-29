
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface User {
  id: number;
  handle: string;
  image: string;
}

const USERS: User[] = [
  { id: 1, handle: '@studio.natanaelalves', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP0Pl9JPPZIXz7yneCQj6dwfPhNHY5GQuwg&s' },
  { id: 2, handle: '@statera_team', image: 'https://i.imgur.com/hPoczNy.png' },
  { id: 3, handle: '@delasgym', image: 'https://i.imgur.com/SZQThWA.jpeg' },
];

const TICKER_ITEMS = [
  "Método validado",
  "Estratégia",
  "Funil de Vendas",
  "Análise e otimização",
  "Reduzir Churn",
  "Escalabilidade Real"
];


const ValidationSection: React.FC = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fechar o balão ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setActiveUser(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black pb-20 pt-0 overflow-hidden flex flex-col items-center">
      
      {/* 1. Ticker Infinito (Barra do Topo) */}
      <div className="w-full border-y border-white/10 bg-black/50 backdrop-blur-sm py-4 mb-24 md:mb-32 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(4)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center">
              {TICKER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center mx-8 gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider">
                    {item.includes("Premium") ? (
                      <>
                        {item.replace("Premium", "")}
                        <span className="text-white/40">Premium</span>
                      </>
                    ) : item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Conteúdo Central com Background "TRANSFORMAM" */}
      <div className="relative w-full max-w-7xl px-4 flex flex-col items-center text-center">
        
        {/* Texto GIGANTE de Background */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.03] leading-none pointer-events-none select-none tracking-tighter uppercase">
          RESULTADO
        </h2>

        {/* Headline Principal */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 z-10 max-w-4xl"
        >
        Metodologia validada que escala negócios.
        </motion.h3>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/60 text-lg md:text-xl mb-12 z-10"
        >
           Diversos casos de sucesso com resultados reais aplicados em academias de alto rendimento.
        </motion.p>

        {/* 3. Avatares Interativos */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 z-10">
          {USERS.map((user) => (
            <div 
              key={user.id} 
              className={`relative ${activeUser === user.id ? 'z-50' : 'z-10'}`}
            >
              <button
                onClick={() => setActiveUser(activeUser === user.id ? null : user.id)}
                className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] transition-all duration-300 hover:scale-110 active:scale-95 ${
                  activeUser === user.id ? 'scale-110' : ''
                }`}
              >
                {/* Borda Gradiente */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-orange-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Foto */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-neutral-900">
                  <img 
                    src={user.image} 
                    alt={user.handle} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  />
                </div>
              </button>

              {/* Balão (Tooltip) */}
              <AnimatePresence>
                {activeUser === user.id && (
                 <motion.div
  initial={{ opacity: 0, scale: 0.85, y: 6 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.85, y: 6 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
className="  absolute  left-1/2  -translate-x-1/2  -top-10  -ml-6  md:-ml-12  z-[60]  pointer-events-none"
>
                 
                    <div className="bg-white text-black text-[10px] md:text-xs font-bold py-1.5 px-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap relative border border-white/20">
                      {user.handle}
                      {/* Triângulo do balão */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ValidationSection;
