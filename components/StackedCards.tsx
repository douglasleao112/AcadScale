
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  ArrowRight, TrendingUp, TrendingDown, 
  ArrowUpRight, Info
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BreakEvenChart = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
    <div className="relative w-full max-w-md aspect-video bg-neutral-900/40 rounded-3xl border border-white/10 p-6 overflow-hidden shadow-2xl">
      {/* Grid Interno */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
          backgroundSize: '25px 25px' 
        }} 
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Eixos */}
      <div className="absolute bottom-10 left-10 right-6 h-[1px] bg-white/30" />
      <div className="absolute top-6 bottom-10 left-10 w-[1px] bg-white/30" />

      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full p-10 overflow-visible z-10">
        <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <text x="-5" y="125" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="bold" textAnchor="end">FIXO</text>

        <motion.line 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          x1="0" y1="120" x2="380" y2="60" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" 
          style={{ filter: 'drop-shadow(0 0 5px rgba(239,68,68,0.4))' }}
        />
        
        <motion.line 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          x1="0" y1="180" x2="380" y2="20" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" 
          style={{ filter: 'drop-shadow(0 0 12px rgba(16,185,129,0.7))' }}
        />

        <motion.circle 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          cx="200" cy="88" r="7" fill="#fff" 
          className="animate-pulse shadow-[0_0_30px_#fff]"
        />
        
        <text x="70" y="165" fill="#ef4444" fontSize="11" fontWeight="900" style={{ letterSpacing: '0.1em' }}>PREJUÍZO</text>
        <text x="310" y="55" fill="#10b981" fontSize="11" fontWeight="900" style={{ letterSpacing: '0.1em' }}>LUCRO</text>
      </svg>

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-[10px] font-black text-white uppercase tracking-widest">Breakeven Point</span>
      </div>
    </div>
  </div>
);

const CARDS_DATA = [
  {
    id: 1,
    badge: "Páginas rápidas",
    badgeColor: "emerald",
    title: "Performance e Otimização",
    description: "Desenvolvemos páginas rápidas e seguras, evitando a perda de visitantes no caminho do clique até o carregamento completo. Isso significa menor custo em tráfego pago.",
    leftContent: (
      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
        <div className="bg-white/[0.03] border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl">
          <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mb-1">Custo por Clique</p>
          <p className="text-lg md:text-xl font-bold text-red-500">Reduzido</p>
          <TrendingDown className="w-4 h-4 text-red-500 mt-2" />
        </div>
        <div className="bg-white/[0.03] border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl">
          <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mb-1">Taxa de Retenção</p>
          <p className="text-lg md:text-xl font-bold text-emerald-500">Aumentada</p>
          <TrendingUp className="w-4 h-4 text-emerald-500 mt-2" />
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
    description: "Escrevemos textos de vendas que influenciam o visitante na tomada de decisão, unindo estética premium a um copy com propósito claro de conversão.",
    leftContent: (
      <div className="flex flex-col gap-2 w-full max-w-[240px]">
        {["Estética", "Copy com Propósito", "Resultado"].map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-full bg-white/[0.03] border border-white/10 py-2 md:py-3 rounded-lg md:rounded-xl text-center text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest">
              {step}
            </div>
            {i < 2 && <ArrowRight className="w-3 h-3 rotate-90 text-white/20" />}
          </div>
        ))}
      </div>
    ),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="space-y-3 md:space-y-6 w-full max-w-[260px] md:max-w-xs relative">
          {[
            { t: "Venda realizada!", s: "Comissão: R$ 1497,00", icon: "💰", color: "bg-emerald-500" },
            { t: "Pix gerado!", s: "Comissão: R$ 247,00", icon: "⚡", color: "bg-blue-500" },
            { t: "Venda aprovada!", s: "Comissão: R$ 207,25", icon: "✅", color: "bg-purple-500" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-neutral-900 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-2xl ${item.color} flex items-center justify-center text-sm md:text-2xl shadow-lg relative z-10`}>
                {item.icon}
              </div>
              <div className="flex-1 relative z-10">
                <p className="text-[9px] md:text-sm font-black text-white uppercase tracking-tight">{item.t}</p>
                <p className="text-[8px] md:text-xs text-white/40 font-medium">{item.s}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    badge: "Metodologia Validada",
    badgeColor: "purple",
    title: "Método FRAME",
    description: "Aplicamos o método FRAME para estruturar páginas que prendem atenção e guiam o usuário até a ação final de compra.",
    leftContent: (
      <div className="space-y-2 md:space-y-3 w-full max-w-[300px]">
        {['F - Fundamento', 'R - Retenção', 'A - Arquitetura', 'M - Monitoramento', 'E - Escala'].map((text, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-2 md:p-3 rounded-lg md:rounded-xl">
            <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-[10px] font-black text-purple-400 border border-purple-500/30">
              {text[0]}
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-white/80">{text.split(' - ')[1]}</span>
          </div>
        ))}
      </div>
    ),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
         <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.5)] z-10 border border-white/20">
               <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">FA</span>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="absolute w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl p-2 md:p-3 shadow-2xl"
                style={{
                  transform: `rotate(${i * 90}deg) translate(${window.innerWidth < 768 ? '85px' : '110px'}) rotate(-${i * 90}deg)`,
                }}
              >
                <div className="w-full h-full bg-neutral-200 rounded-md" />
              </div>
            ))}
         </div>
      </div>
    )
  },
  {
    id: 4,
    badge: "Quebra de objeções",
    badgeColor: "cyan",
    title: "Análise de Dados Reais",
    description: "Analisamos o comportamento do usuário através de mapas de calor para otimizar cada ponto da jornada de conversão.",
    leftContent: (
      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
        <div className="bg-white/[0.03] border border-white/10 p-3 md:p-5 rounded-xl md:rounded-3xl">
          <p className="text-[8px] md:text-[10px] text-white/40 uppercase mb-1">Conduzir o Olhar</p>
          <p className="text-sm md:text-lg font-bold text-emerald-400">Efetivo</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 p-3 md:p-5 rounded-xl md:rounded-3xl">
          <p className="text-[8px] md:text-[10px] text-white/40 uppercase mb-1">Guiar o Clique</p>
          <p className="text-sm md:text-lg font-bold text-cyan-400">Otimizado</p>
        </div>
      </div>
    ),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-[280px] md:max-w-sm bg-neutral-900 border border-white/10 rounded-2xl md:rounded-[2.5rem] p-5 md:p-8 shadow-2xl">
           <h4 className="text-sm md:text-lg font-bold text-white mb-6 md:mb-8">Análise de métricas</h4>
           <div className="space-y-4 md:space-y-6">
              {[
                { label: "Crescimento", val: 84, color: "bg-blue-500" },
                { label: "Análise SEO", val: 94, color: "bg-cyan-500" },
                { label: "Checkout", val: 88, color: "bg-indigo-500" }
              ].map((m, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-medium">
                    <span className="text-white/60">{m.label}</span>
                    <span className="text-white">{m.val}%</span>
                  </div>
                  <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.val}%` }} />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    )
  }
];

const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
          // Aumentamos o end para dar mais tempo de "descanso" no último card
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

          tl.to(card, {
            yPercent: 0,
            ease: "none",
            duration: 1
          }, startTime);

          tl.to(card, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }, startTime);

          tl.to(cards[index - 1], {
            scale: 0.92,
            opacity: 0,
            filter: "blur(10px)",
            ease: "power1.inOut",
            duration: 0.8
          }, startTime);
        }
      });

      // Adicionamos um pequeno tempo de espera no final da timeline
      // para que o último card fique parado antes de liberar o scroll
      tl.to({}, { duration: 0.5 }); 

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative w-full overflow-hidden bg-black">
      <section 
        ref={containerRef} 
        className="relative w-full h-screen flex items-center justify-center px-4 md:px-8"
      >
        <div className="relative w-full max-w-7xl h-[80vh] md:h-[70vh]">
          {CARDS_DATA.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
              style={{ 
                zIndex: 10 + index,
              }}
            >
              <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row pointer-events-auto">
                
                <div className="flex-[1.2] p-6 md:p-16 lg:p-20 flex flex-col justify-center text-left relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 mb-4 md:mb-8 w-fit bg-white/[0.02]`}>
                     <div className={`w-1.5 h-1.5 rounded-full bg-${card.badgeColor}-500 shadow-[0_0_10px_currentColor]`} />
                     <span className={`text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-${card.badgeColor}-400`}>{card.badge}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tighter leading-tight">
                    {card.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 0 ? "font-serif-italic italic font-normal mr-2 opacity-90" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  
                  <p className="text-xs md:text-base lg:text-lg text-white/40 leading-relaxed max-w-md mb-6 md:mb-10 font-light">
                    {card.description}
                  </p>

                  <div className="w-full">
                    {card.leftContent}
                  </div>
                </div>

                <div className="flex-1 bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5 relative z-10 flex items-center justify-center overflow-hidden">
                   {card.visual}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .text-emerald-400 { color: #34d399; }
        .text-amber-400 { color: #fbbf24; }
        .text-purple-400 { color: #a78bfa; }
        .text-cyan-400 { color: #22d3ee; }
        .bg-emerald-500 { background-color: #10b981; }
        .bg-amber-500 { background-color: #f59e0b; }
        .bg-purple-500 { background-color: #8b5cf6; }
        .bg-cyan-500 { background-color: #06b6d4; }
      `}</style>
    </div>
  );
};

export default StackedCards;
