
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  ArrowRight, TrendingUp, TrendingDown, ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BreakEvenChart = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-2 md:p-12">
    <div className="relative w-full max-sm md:max-w-md aspect-video bg-black rounded-[1.5rem] md:rounded-[2rem] border border-white/5 p-4 md:p-6 overflow-hidden shadow-2xl">
      {/* Grid Técnico de Fundo */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />
      
      {/* Eixos do Gráfico */}
      <div className="absolute bottom-6 left-6 right-4 h-[1px] bg-white/20" />
      <div className="absolute top-4 bottom-6 left-6 w-[1px] bg-white/20" />

      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full p-6 overflow-visible z-10">
        {/* Linha de Custo (Vermelha) - Cruzamento em x=140, y=110 */}
        <motion.line 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          x1="20" y1="120" x2="380" y2="90" 
          stroke="#ef4444" 
          strokeWidth="3" 
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))' }}
        />
        
        {/* Linha de Receita (Verde) - Cruzamento em x=140, y=110 */}
        <motion.line 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          x1="20" y1="140" x2="380" y2="50" 
          stroke="#10b981" 
          strokeWidth="4" 
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.7))' }}
        />

        {/* Ponto Brilhante Break Even (Agora em x=140) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          {/* Ponto Branco Central */}
          <circle cx="140" cy="110" r="6" fill="#fff" className="animate-pulse" />
          <circle cx="140" cy="110" r="12" fill="#fff" fillOpacity="0.2" />
          
          {/* Label Break Even */}
          <text 
            x="140" 
            y="135" 
            fill="#fff" 
            fontSize="10" 
            fontWeight="900" 
            textAnchor="middle" 
            className="uppercase tracking-[0.2em] font-mono opacity-60"
          >
            Break Even
          </text>
        </motion.g>
      </svg>
    </div>
  </div>
);

const CycleDollarIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <motion.text
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        x="12" y="12.8" textAnchor="middle" dominantBaseline="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontSize="11.5" fontWeight="700"
        fill="url(#blueGrad)" style={{ filter: 'drop-shadow(0 0 5px rgba(34,211,238,0.8))' }}
      >
        $
      </motion.text>
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M9 10H6V7" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" transform="translate(-3.3 0) rotate(-28 7 8)" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M4 10C4 6.13401 7.13401 3 11 3H13C16.866 3 20 6.13401 20 10V11" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M17 14H20V17" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.9 1) rotate(-38 17 16)" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M20 14C20 17.866 16.866 21 13 21H11C7.13401 21 4 17.866 4 14V13" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </motion.div>
);

const PerformanceIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-orange-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_25px_70px_rgba(249,115,22,0.5)]">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <line x1="36" y1="224" x2="220" y2="224" stroke="url(#iconGrad)" strokeWidth="10" strokeLinecap="round" />
      <motion.rect initial={{ height: 0 }} animate={{ height: 96 }} x="44" y="128" width="28" height="96" rx="4" stroke="url(#iconGrad)" strokeWidth="8" fill="none" />
      <motion.rect initial={{ height: 0 }} animate={{ height: 80 }} x="84" y="144" width="28" height="80" rx="4" stroke="url(#iconGrad)" strokeWidth="8" fill="none" />
      <motion.rect initial={{ height: 0 }} animate={{ height: 64 }} x="124" y="160" width="28" height="64" rx="4" stroke="url(#iconGrad)" strokeWidth="8" fill="none" />
      <motion.rect initial={{ height: 0 }} animate={{ height: 48 }} x="164" y="176" width="28" height="48" rx="4" stroke="url(#iconGrad)" strokeWidth="8" fill="none" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M60 70 C 105 105, 135 120, 180 145" stroke="url(#iconGrad)" strokeWidth="12" strokeLinecap="round" fill="none" />
      <motion.polyline initial={{ opacity: 0 }} animate={{ opacity: 1 }} points="176 129 180 145 167 152" stroke="url(#iconGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <circle cx="176" cy="76" r="28" stroke="url(#iconGrad)" strokeWidth="8" fill="none" />
        <circle cx="176" cy="70" r="8" stroke="url(#iconGrad)" strokeWidth="6" fill="none" />
        <path d="M160 92 C 166 82, 186 82, 192 92" stroke="url(#iconGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
      </motion.g>
    </svg>
  </motion.div>
);

const MetricsPieIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] md:blur-[120px] rounded-full animate-pulse" />
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="pieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 8" />
      <g style={{ filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.4))' }}>
        <motion.path initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5 }} d="M106 18 A 82 82 0 0 1 106 182 L 106 100 Z" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.1" />
        <motion.path initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }} whileInView={{ pathLength: 1, opacity: 1, x: -6, y: -6 }} transition={{ duration: 1.2, delay: 0.3 }} d="M94 94 L 25 50 A 82 82 0 0 1 94 18 Z" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.35" />
        <motion.path initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }} whileInView={{ pathLength: 1, opacity: 1, x: -10, y: 6 }} transition={{ duration: 1.2, delay: 0.6 }} d="M94 106 L 20 135 A 82 82 0 0 0 45 180 L 94 106" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.2" />
      </g>
      
    </svg>
  </motion.div>
);

const CARDS_DATA = [
  {
    id: 1,
    badge: "Páginas rápidas",
    badgeColor: "emerald",
    title: "Performance e Otimização",
    description: "Desenvolvemos páginas rápidas e seguras, evitando a perda de visitantes no caminho do clique.",
    leftContent: (
      <div className="flex gap-3 md:gap-4 w-full">
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] md:min-w-[160px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Custo por Clique</p>
          <p className="text-sm md:text-2xl font-black text-red-500 tracking-tight">Reduzido</p>
          <TrendingDown className="w-5 h-5 md:w-8 md:h-14 text-red-500/45 mt-3 md:mt-10" />

        </div>
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] md:min-w-[160px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Taxa de Retenção</p>
          <p className="text-sm md:text-2xl font-black text-emerald-400 tracking-tight">Aumentada</p>
          <TrendingUp className="w-5 h-5 md:w-8 md:h-14 text-emerald-400/45 mt-3 md:mt-10" />


        </div>
      </div>
    ),
    visual: <BreakEvenChart />
  },
  {
    id: 2,
    badge: "Texto para vendas",
    badgeColor: "amber",
    title: "CopyWriting Premium",
    description: "Textos que influenciam a tomada de decisão com estética premium.",
    leftContent: (
      <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
        {["Estética", "Copy com Propósito", "Resultado"].map((step, i) => (
          <React.Fragment key={i}>
            <div className="w-full bg-[#0d0d0d] border border-white/5 py-2.5 px-4 rounded-lg text-center shadow-2xl transition-all hover:border-white/20">
              <span className="text-[8px] md:text-[11px] font-black text-white uppercase tracking-[0.25em]">
                {step}
              </span>
            </div>
            {i < 2 && (
              <div className="flex justify-center">
                <ChevronDown className="w-3 h-3 text-white/10" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    ),
    visual: <CycleDollarIcon />
  },
  {
    id: 3,
    badge: "Metodologia Validada",
    badgeColor: "purple",
    title: "Método FRAME",
    description: "Estruturamos páginas que prendem atenção e guiam o usuário.",
    leftContent: (
      <div className="space-y-2 md:space-y-4 w-full max-w-[280px]">
        {['F - Fundamento', 'R - Retenção', 'A - Arquitetura'].map((text, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/10 p-2 md:p-4 rounded-lg md:rounded-[1.2rem]">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-purple-500/20 flex items-center justify-center text-[9px] md:text-xs font-black text-purple-400 border border-purple-500/30">
              {text[0]}
            </div>
            <span className="text-[9px] md:text-sm font-bold text-white/70 tracking-wide uppercase">{text.split(' - ')[1]}</span>
          </div>
        ))}
      </div>
    ),
    visual: <PerformanceIcon />
  },
  {
    id: 4,
    badge: "Quebra de objeções",
    badgeColor: "cyan",
    title: "Análise de Dados Reais",
    description: "Analisamos o comportamento através de mapas de calor.",
    leftContent: (
      <div className="flex gap-3 w-full">
        <div className="bg-[#0d0d0d] border border-white/10 p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Conduzir o Olhar</p>
          <p className="text-sm md:text-2xl font-black text-emerald-400 tracking-tight">Efetivo</p>
        </div>
        <div className="bg-[#0d0d0d] border border-white/10 p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Guiar o Clique</p>
          <p className="text-sm md:text-2xl font-black text-cyan-400 tracking-tight">Otimizado</p>
        </div>
      </div>
    ),
    visual: <MetricsPieIcon />
  }
];

const StackedCards: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${(cards.length + 0.5) * 1000}`, 
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, { yPercent: 0, opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { yPercent: 100, opacity: 0, scale: 1 });
        }
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          const startTime = index - 0.5;
          tl.to(card, { yPercent: 0, duration: 1 }, startTime);
          tl.to(card, { opacity: 1, duration: 0.3 }, startTime);
          tl.to(cards[index - 1], {
            scale: 0.92,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8
          }, startTime);
        }
      });
    }, triggerRef.current); // Ajustado para usar .current

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative w-full overflow-hidden bg-black">
      <section className="relative w-full h-screen flex items-center justify-center px-4 md:px-8 z-10">
        <div className="relative w-full max-w-7xl h-[88vh] md:h-[75vh]">
          {CARDS_DATA.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
              style={{ zIndex: 10 + index }}
            >
              <div className="relative w-full h-full bg-[#070707] rounded-[2rem] md:rounded-[4.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto group/card">
                <div 
                  className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                <div className="flex-[1.4] p-6 md:p-16 lg:p-24 flex flex-col justify-center text-left relative z-20 overflow-y-auto md:overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 mb-4 md:mb-10 w-fit bg-white/[0.01]">
                     <div className={`w-1.5 h-1.5 rounded-full bg-${card.badgeColor}-500 animate-pulse`} />
                     <span className={`text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] text-${card.badgeColor}-400`}>{card.badge}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-[1.05]">

                    {card.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 0 ? "font-serif-italic italic font-normal mr-2 opacity-95 text-blue-400/90" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  
                 <p className="text-sm md:text-xl lg:text-2xl text-white/55 leading-relaxed max-w-xl mb-6 md:mb-12 font-medium tracking-tight">

                    {card.description}
                  </p>

                  <div className="w-full">
                    {card.leftContent}
                  </div>
                </div>

                <div className="flex-1 bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5 relative z-20 flex items-center justify-center overflow-hidden min-h-[200px] md:min-h-0 backdrop-blur-[2px]">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
                   {card.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StackedCards;
