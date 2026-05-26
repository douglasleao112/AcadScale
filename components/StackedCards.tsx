
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BreakEvenChart = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-12">
    <div className="relative w-full max-w-[320px] md:max-w-md aspect-video bg-black rounded-[1.5rem] md:rounded-[2rem] border border-white/5 p-4 md:p-6 overflow-hidden shadow-2xl flex items-center justify-center">
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

      <svg 
        viewBox="0 0 400 200" 
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full p-6 overflow-visible z-10"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Linha de Custo (Vermelha) */}
        <motion.line 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          x1="20" y1="120" x2="380" y2="90" 
          stroke="#ef4444" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Linha de Receita (Verde) */}
        <motion.line 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.7 }}
          x1="20" y1="140" x2="380" y2="50" 
          stroke="#10b981" 
          strokeWidth="4" 
          strokeLinecap="round"
        />

        {/* Ponto Brilhante Break Even */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          {/* Brilho forçado para Safari */}
          <circle cx="140" cy="110" r="12" fill="#fff" fillOpacity="0.15" />
          <circle cx="140" cy="110" r="6" fill="#fff" />
          
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
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
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
        fill="url(#blueGrad)"
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
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-orange-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      
      {/* Base do gráfico - Movida para y=23 */}
      <motion.rect 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        x="2" y="23" width="20" height="1" rx="0.5" fill="url(#iconGrad)" 
      />
      
      {/* Colunas animadas - Deslocadas 2 unidades para baixo */}
      <motion.rect 
        initial={{ height: 0, y: 22 }} 
        animate={{ height: 6, y: 16 }} 
        transition={{ delay: 0.5, duration: 0.6 }}
        x="4" width="4" rx="1.2" fill="url(#iconGrad)" fillOpacity="0.4" 
      />
      <motion.rect 
        initial={{ height: 0, y: 22 }} 
        animate={{ height: 10, y: 12 }} 
        transition={{ delay: 0.7, duration: 0.6 }}
        x="10" width="4" rx="1.2" fill="url(#iconGrad)" fillOpacity="0.7" 
      />
      <motion.rect 
        initial={{ height: 0, y: 22 }} 
        animate={{ height: 14, y: 8 }} 
        transition={{ delay: 0.9, duration: 0.6 }}
        x="16" width="4" rx="1.2" fill="url(#iconGrad)" 
      />
      
      {/* Seta de Crescimento - Reajustada para ficar dentro do viewBox (topo em y=1.5) */}
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
        d="M2 10H5L9 6H13L18 1.5M18 1.5H14.5M18 1.5V5" 
        stroke="url(#iconGrad)" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  </motion.div>
);

const MetricsPieIcon = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] md:blur-[120px] rounded-full animate-pulse" />
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="pieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 8" />
      <g>
        <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5 }} d="M106 18 A 82 82 0 0 1 106 182 L 106 100 Z" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.1" />
        <motion.path initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }} animate={{ pathLength: 1, opacity: 1, x: -6, y: -6 }} transition={{ duration: 1.2, delay: 0.3 }} d="M94 94 L 25 50 A 82 82 0 0 1 94 18 Z" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.35" />
        <motion.path initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }} animate={{ pathLength: 1, opacity: 1, x: -10, y: 6 }} transition={{ duration: 1.2, delay: 0.6 }} d="M94 106 L 20 135 A 82 82 0 0 0 45 180 L 94 106" stroke="url(#pieGrad)" strokeWidth="3.5" fill="url(#pieGrad)" fillOpacity="0.2" />
      </g>
    </svg>
  </motion.div>
);

const CARDS_DATA = [
  {
    id: 1,
    badge: "MÉTODO ACADSCALE",
    badgeColor: "emerald",
    title: "Performance e Lucratividade",
    description: "Atuamos diretamente na estrutura do negócio para eliminar desperdícios, corrigir gargalos e transformar faturamento em lucro líquido previsível.",
    leftContent: (
      <div className="flex gap-3 md:gap-4 w-full">
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] md:min-w-[160px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Custo Operacional</p>
          <p className="text-sm md:text-2xl font-black text-red-500 tracking-tight">Reduzido</p>
          <TrendingDown className="w-5 h-5 md:w-8 md:h-10 text-red-500/45 mt-3 md:mt-7" />
        </div>
        <div className="bg-[#0d0d0d] border border-white/5 p-3 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] md:min-w-[160px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Lucro Líquido</p>
          <p className="text-sm md:text-2xl font-black text-emerald-400 tracking-tight">Aumentado</p>
          <TrendingUp className="w-5 h-5 md:w-8 md:h-10 text-emerald-400/45 mt-3 md:mt-7" />
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
    description: "Atuamos diretamente nas decisões comerciais, precificação e posicionamento para que cada ação gere retorno financeiro real.",
    leftContent: (
      <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
        {["PRECIFICAÇÃO", "POLÍTICA COMERCIAL", "LUCRO LÍQUIDO"].map((step, i) => (
          <React.Fragment key={i}>
            <div className="w-full bg-[#0d0d0d] border border-white/5 py-2.5 px-4 rounded-lg text-center shadow-2xl transition-all hover:border-white/20">
              <span className="text-[8px] md:textKey[11px] font-black text-white uppercase tracking-[0.25em]">
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
    badge: "METODOLOGIA VALIDADA",
    badgeColor: "purple",
    title: "Método RARO",
    description: "Construímos a Proposta Única de Valor da academia para sair da guerra de preço, gerar desejo real e atrair clientes que não negociam valor.",
    leftContent: (
      <div className="space-y-2 md:space-y-4 w-full max-w-[280px]">
        {['R - Relevancia', 'A - Autoridade','R - Resultado', 'O - Oferta'].map((text, i) => (
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
    badge: "GESTÃO E OTIMIZAÇÃO",
    badgeColor: "cyan",
    title: "Análise de Dados Reais",
    description: "Analisamos números financeiros, operação, vendas e estrutura para orientar decisões que aumentam o lucro líquido.",
    leftContent: (
      <div className="flex gap-3 w-full">
        <div className="bg-[#0d0d0d] border border-white/10 p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Tomada de decisão</p>
          <p className="text-sm md:text-2xl font-black text-emerald-400 tracking-tight">Clara</p>
        </div>
        <div className="bg-[#0d0d0d] border border-white/10 p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] flex flex-col items-start min-w-[120px] flex-1">
          <p className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black mb-1 md:mb-3">Estratégia</p>
          <p className="text-sm md:text-2xl font-black text-cyan-400 tracking-tight">Direcionada</p>
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
    }, triggerRef.current);

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
                {/* Dotted Background Pattern Refined */}
                <div 
                  className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
                  }}
                />

                <div className={`${card.id === 2 ? 'flex-[1.8]' : 'flex-[1.6]'} p-6 md:p-16 lg:p-24 flex flex-col justify-center text-left relative z-20 overflow-y-auto md:overflow-hidden`}>
                  {/* Badge de categoria com escala aumentada */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/5 mb-4 md:mb-10 w-fit bg-white/[0.01]">
                     <div className={`w-1.5 h-1.5 rounded-full bg-${card.badgeColor}-500 animate-pulse`} />
                     <span className={`text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] text-${card.badgeColor}-400`}>{card.badge}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-7xl lg:text-[7.5rem] font-black text-white mb-4 md:mb-8 tracking-tighter leading-[1.05]">
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

                {/* Área do gráfico ajustada para mobile (flex e min-h reduzidos) */}
                <div className={`${card.id === 2 ? 'flex-[0.5] min-h-[140px]' : 'flex-[0.8] min-h-[190px]'} md:min-h-0 bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5 relative z-20 flex items-center justify-center overflow-hidden backdrop-blur-[2px]`}>
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
