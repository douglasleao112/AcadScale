
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BreakEvenChart = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-2 md:p-12">
    <div className="relative w-full max-w-[280px] md:max-w-md aspect-video bg-black rounded-[1.2rem] md:rounded-[2rem] border border-white/5 p-3 md:p-6 overflow-hidden shadow-2xl flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '15px 15px' 
        }} 
      />
      
      <div className="absolute bottom-4 left-4 right-3 h-[1px] bg-white/20" />
      <div className="absolute top-3 bottom-4 left-4 w-[1px] bg-white/20" />

      <svg 
        viewBox="0 0 400 200" 
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full p-4 overflow-visible z-10"
      >
        <motion.line 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          x1="20" y1="120" x2="380" y2="90" 
          stroke="#ef4444" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <motion.line 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.7 }}
          x1="20" y1="140" x2="380" y2="50" 
          stroke="#10b981" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <circle cx="140" cy="110" r="10" fill="#fff" fillOpacity="0.15" />
          <circle cx="140" cy="110" r="5" fill="#fff" />
          <text 
            x="140" y="130" 
            fill="#fff" fontSize="9" fontWeight="900" 
            textAnchor="middle" className="uppercase tracking-[0.2em] font-mono opacity-60"
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
    animate={{ opacity: 1, scale: 1 }}
    className="relative w-32 h-32 md:w-96 md:h-96 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-blue-500/10 blur-[40px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <motion.text x="12" y="12.8" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial" fontSize="11" fontWeight="700" fill="url(#blueGrad)">$</motion.text>
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M4 10C4 6.13401 7.13401 3 11 3H13C16.866 3 20 6.13401 20 10V11" stroke="url(#blueGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M20 14C20 17.866 16.866 21 13 21H11C7.13401 21 4 17.866 4 14V13" stroke="url(#blueGrad)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const PerformanceIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative w-32 h-32 md:w-96 md:h-96 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-orange-500/10 blur-[40px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <motion.rect x="2" y="22" width="20" height="1" fill="url(#iconGrad)" />
      <motion.rect initial={{ height: 0, y: 22 }} animate={{ height: 12, y: 10 }} x="16" width="4" rx="1" fill="url(#iconGrad)" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M2 12H5L9 8H13L18 3M18 3H14M18 3V7" stroke="url(#iconGrad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const MetricsPieIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative w-32 h-32 md:w-96 md:h-96 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-emerald-500/10 blur-[40px] md:blur-[120px] rounded-full animate-pulse" />
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="pieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="85" stroke="url(#pieGrad)" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 8" />
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M106 25 A 75 75 0 0 1 106 175 L 106 100 Z" fill="url(#pieGrad)" fillOpacity="0.2" />
    </svg>
  </motion.div>
);

const CARDS_DATA = [
  {
    id: 1,
    badge: "MÉTODO AVANCE+",
    badgeColor: "emerald",
    title: "Performance e Lucratividade",
    description: "Atuamos diretamente na estrutura do negócio para eliminar desperdícios e transformar faturamento em lucro líquido previsível.",
    leftContent: (
      <div className="flex gap-2.5 md:gap-4 w-full">
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1rem] md:rounded-[2rem] flex flex-col items-start flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1">Custo</p>
          <p className="text-xs md:text-2xl font-black text-red-500">Reduzido</p>
          <TrendingDown className="w-4 h-4 md:w-8 md:h-10 text-red-500/30 mt-2" />
        </div>
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1rem] md:rounded-[2rem] flex flex-col items-start flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1">Lucro</p>
          <p className="text-xs md:text-2xl font-black text-emerald-400">Aumentado</p>
          <TrendingUp className="w-4 h-4 md:w-8 md:h-10 text-emerald-400/30 mt-2" />
        </div>
      </div>
    ),
    visual: <BreakEvenChart />
  },
  {
    id: 2,
    badge: "CULTURA DE VENDAS",
    badgeColor: "amber",
    title: "Estratégia Comercial",
    description: "Atuamos diretamente nas decisões comerciais para que cada ação gere retorno financeiro real.",
    leftContent: (
      <div className="flex flex-col gap-1 w-full max-w-[240px]">
        {["PRECIFICAÇÃO", "POLÍTICA", "LUCRO"].map((step, i) => (
          <React.Fragment key={i}>
            <div className="w-full bg-[#0d0d0d] border border-white/5 py-2 px-3 rounded-lg text-center">
              <span className="text-[7px] md:text-[11px] font-black text-white uppercase tracking-[0.2em]">{step}</span>
            </div>
            {i < 2 && <ChevronDown className="w-3 h-3 text-white/10 mx-auto" />}
          </React.Fragment>
        ))}
      </div>
    ),
    visual: <CycleDollarIcon />
  },
  {
    id: 3,
    badge: "MÉTODO RARO",
    badgeColor: "purple",
    title: "Autoridade Real",
    description: "Construímos a Proposta Única de Valor para sair da guerra de preço e atrair clientes que não negociam valor.",
    leftContent: (
      <div className="space-y-1.5 md:space-y-4 w-full max-w-[280px]">
        {['R - Relevancia', 'A - Autoridade'].map((text, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/5 p-2 rounded-lg">
            <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center text-[8px] font-black text-purple-400">{text[0]}</div>
            <span className="text-[8px] md:text-sm font-bold text-white/70 uppercase">{text.split(' - ')[1]}</span>
          </div>
        ))}
      </div>
    ),
    visual: <PerformanceIcon />
  },
  {
    id: 4,
    badge: "DADOS REAIS",
    badgeColor: "cyan",
    title: "Análise de Métricas",
    description: "Analisamos números financeiros e estrutura para orientar decisões que aumentam o lucro líquido.",
    leftContent: (
      <div className="flex gap-2 w-full">
        <div className="bg-[#0d0d0d] border border-white/5 p-3 rounded-[1rem] flex flex-col items-start flex-1">
          <p className="text-[7px] text-white/40 uppercase mb-1">Decisão</p>
          <p className="text-xs font-black text-emerald-400">Clara</p>
        </div>
        <div className="bg-[#0d0d0d] border border-white/5 p-3 rounded-[1rem] flex flex-col items-start flex-1">
          <p className="text-[7px] text-white/40 uppercase mb-1">Estratégia</p>
          <p className="text-xs font-black text-cyan-400">Direcionada</p>
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
            scale: 0.92, opacity: 0, filter: "blur(10px)", duration: 0.8
          }, startTime);
        }
      });
    }, triggerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative w-full overflow-hidden bg-black">
      <section className="relative w-full h-screen min-h-[580px] flex items-center justify-center px-3 md:px-8 z-10 overflow-hidden">
        {/* h-[75svh] é a unidade mais segura para mobile, garantindo que o card caiba mesmo com barra de navegação */}
        <div className="relative w-full max-w-7xl h-[75svh] md:h-[75vh] -translate-y-[1dvh] md:translate-y-0">
          {CARDS_DATA.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
              style={{ zIndex: 10 + index }}
            >
              <div className="relative w-full h-full bg-[#070707] rounded-[1.8rem] md:rounded-[4.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto">
                <div 
                  className="absolute inset-0 pointer-events-none z-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                  }}
                />

                {/* Conteúdo: pb-6 no mobile para respiro na base */}
                <div className="flex-[1.8] p-5 md:p-16 lg:p-24 flex flex-col justify-center text-left relative z-20 overflow-y-auto pb-6 md:pb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 mb-3 md:mb-10 w-fit bg-white/[0.01]">
                     <div className={`w-1 h-1 rounded-full bg-${card.badgeColor}-500 animate-pulse`} />
                     <span className={`text-[8px] md:text-[14px] font-black uppercase tracking-[0.2em] text-${card.badgeColor}-400`}>{card.badge}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-7xl lg:text-[7.5rem] font-black text-white mb-3 md:mb-8 tracking-tighter leading-[1.05]">
                    {card.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 0 ? "font-serif-italic italic font-normal mr-2 opacity-95 text-blue-400/90" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  
                 <p className="text-xs md:text-xl lg:text-2xl text-white/55 leading-relaxed max-w-xl mb-4 md:mb-12 font-medium tracking-tight">
                    {card.description}
                  </p>

                  <div className="w-full">
                    {card.leftContent}
                  </div>
                </div>

                {/* Área visual no mobile: reduzida proporção e sem min-h fixo */}
                <div className="flex-[0.5] md:flex-[0.8] bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5 relative z-20 flex items-center justify-center overflow-hidden backdrop-blur-[2px] py-4 md:py-0">
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
