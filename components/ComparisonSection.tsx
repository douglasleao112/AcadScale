import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, Check } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setSelectedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const commonPoints = [
    { text: "Atua no sintoma ", bold: "não no problema" },
    { text: "Foco em faturamento ", bold: "não em lucro líquido" },
    { text: "Nenhuma visão ", bold: "estratégica do negócio" },
    { text: "Decisões baseadas ", bold: "em achismo" },
    { text: "Falta de ", bold: "acompanhamento e direção" },
    { text: "", bold: "ENTREGA UMA ESTRATÉGIA E SOME..." },
  ];

  const premiumPoints = [
    { title: "Decisões guiadas por método validado", sub: "Não achismo..." },
    { title: "Estrutura estratégica do negócio", sub: "" },
    { title: "Foco absoluto em lucro líquido previsível", sub: "" },
    { title: "Análise de custos, margem e churn", sub: "" },
    { title: "Acompanhamento estratégico contínuo", sub: "" },
    { title: "Atuação como conselho, não fornecedor", sub: "" },
    { title: "Otimização constante baseada em dados", sub: "" },
  ];

  const words = [
    "PERSONALIZAÇÃO", "OTIMIZAÇÃO", "PROFISSIONALISMO", "CONVERSÃO",
    "COMUNICAÇÃO", "ESTRATÉGIA", "RESULTADO", "PERFORMANCE"
  ];

  return (
    <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden z-20">
      {/* Ticker de Balões */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-black py-10 md:py-16 select-none border-t border-white/5">
        <div className="flex whitespace-nowrap animate-pills-scroll">
          {[...Array(3)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-4 px-2">
              {words.map((word, idx) => (
                <div
                  key={idx}
                  className="bg-white px-6 md:px-10 py-2.5 md:py-4 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                >
                  <span className="text-black text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Grid de Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 255, 155, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 255, 155, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Brilho Branco na Base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[200px] md:h-[400px] pointer-events-none z-0">
        <div className="absolute bottom-[-100px] left-0 right-0 h-full bg-white opacity-10 md:opacity-[0.08] blur-[80px] md:blur-[120px] rounded-[100%]" />
        <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[200px] bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-24 md:mt-32">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300/30 bg-green-300/5 backdrop-blur-md shadow-[0_0_20px_rgba(124,255,155,0.2)]"
          >
            <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-green-300 uppercase tracking-[0.2em]">
              CONSELHO ESTRATÉGICO DE VERDADE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tight"
          >
            Seja sincero. <br />
            <span className="font-serif-italic italic font-normal text-green-300/90">
              O que você prefere?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px" }}
            className="text-white/50 text-base md:text-xl font-light"
          >
            Dois tipos de entrega. Um único resultado que importa: <span className="text-white font-bold">LUCRO LÍQUIDO</span>
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-12 md:mt-20">
          {/* Card Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-12 md:pr-20 shadow-2xl z-20 md:-mr-12"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 shadow-inner">
                <XCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Entrega comum <br /> do mercado
              </h3>

              <ul className="space-y-4 w-full text-left">
  {commonPoints.map((point, i) => (
    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-snug text-left">
      <span className="text-red-500 mt-1 font-bold flex-shrink-0">✕</span>
      <span className="block text-left">
        {point.text}
        <span className="font-bold text-slate-900">{point.bold}</span>
      </span>
    </li>
  ))}
</ul>
            </div>
          </motion.div>

          {/* Card Direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-md bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-30 overflow-hidden"
          >
            {/* Brilho interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-300/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center space-y-8">
              <img
                src="https://i.imgur.com/zZbmG6d.png"
                alt="Logo"
                className="h-12 md:h-16 w-auto object-contain brightness-125"
              />

              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Entrega da AcadScale</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                  Marque o que faz sentido pra você:
                </p>
              </div>

              <div className="w-full space-y-3 md:space-y-4">
                {premiumPoints.map((point, i) => {
                  const isSelected = selectedItems.includes(i);

                  return (
                    <motion.button
                      key={i}
                      onClick={() => toggleItem(i)}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-4 text-left group transition-all duration-300"
                    >
                      <div className={`
                        relative w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-500
                        ${isSelected 
                          ? 'bg-green-400 border-green-300 shadow-[0_0_20px_rgba(124,255,155,0.5)]' 
                          : 'bg-transparent border-white/10 group-hover:border-green-300/40'}
                      `}>
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                            >
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-black stroke-[3px]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-col">
                        <span className={`
                          text-sm md:text-base font-bold transition-all duration-500 leading-tight
                          ${isSelected ? 'text-green-300' : 'text-white/60 group-hover:text-white/80'}
                        `}>
                          {point.title}
                        </span>

                        {point.sub && (
                          <span className={`
                            text-[10px] md:text-xs transition-all duration-500
                            ${isSelected ? 'text-green-300/60' : 'text-white/20'}
                          `}>
                            {point.sub}
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-white/5 w-full text-center">
                <p className="text-[10px] md:text-xs text-white/40 leading-relaxed italic">
                  Se pelo menos 3 desses pontos são essenciais <br /> para você, então já entendeu o que a AcadScale faz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 md:mt-24 flex flex-col items-center text-center gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            Não é sobre marketing. É sobre estruturar uma <span className="text-white font-bold"> empresa lucrativa.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <a
              href="/form/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[1.5px] rounded-full group scale-105 md:scale-[1.1] transition-transform duration-500 hover:scale-[1.1] md:hover:scale-[1.15] block"
            >
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-[-250%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_90%,#7CFF9B_97%,#fff_100%)] opacity-100" />
              </div>

              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-green-300/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:0.75s] rounded-full pointer-events-none" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-green-300/40 blur-2xl opacity-0 animate-[impactBottom_3s_infinite] [animation-delay:1.5s] rounded-[50%] pointer-events-none" />
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-green-300/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:2.25s] rounded-full pointer-events-none" />

             <div className="relative flex items-center gap-5 px-12 md:px-16 py-6 md:py-7 bg-[#22C55E] rounded-full leading-none overflow-hidden z-10 shadow-[0_0_35px_rgba(34,197,94,0.55)]">
                 <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                  <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-green-300/20 to-transparent skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
                </div>

                <span className="text-white font-extrabold tracking-[0.2em] text-sm md:text-lg uppercase relative z-20">
                  Faça sua aplicação
                </span>

                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 md:w-6 md:h-6 stroke-white fill-none stroke-[2.2] relative z-20 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="absolute inset-0 border border-white/10 rounded-full pointer-events-none" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pills-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-pills-scroll {
          animation: pills-scroll 12s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { left: -150%; }
          40% { left: 150%; }
          100% { left: 150%; }
        }

        @keyframes impactSide {
          0% { opacity: 0; transform: translateY(-50%) scaleY(0.5); }
          5% { opacity: 1; transform: translateY(-50%) scaleY(1.4); }
          15% { opacity: 0; transform: translateY(-50%) scaleY(1); }
          100% { opacity: 0; }
        }

        @keyframes impactBottom {
          0% { opacity: 0; transform: translateX(-50%) scaleX(0.5) scaleY(1); }
          5% { opacity: 1; transform: translateX(-50%) scaleX(1.6) scaleY(2.5); }
          15% { opacity: 0; transform: translateX(-50%) scaleX(1) scaleY(1); }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection;