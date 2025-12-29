
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const commonPoints = [
    { text: "Página que ", bold: "desperdiça seu tráfego" },
    { text: "Site com ", bold: "carregamento lento" },
    { text: "Copy que ", bold: "não conecta o usuário" },
    { text: "Sem nenhuma ", bold: "análise de dados" },
    { text: "Sem nenhuma ", bold: "otimização pós-entrega" },
    { text: "", bold: "DESIGNER ENTREGA O LINK E SOME..." },
  ];

  const premiumPoints = [
    { title: "Página criada com MÉTODO", sub: "Não achismo..." },
    { title: "Estrutura que guia o usuário", sub: "" },
    { title: "Copy que engaja e retém", sub: "" },
    { title: "Performance Extrema", sub: "" },
    { title: "Um parceiro estrategista", sub: "" },
    { title: "Otimização com dados reais", sub: "" },
    { title: "Suporte após a entrega", sub: "" },
  ];

  const words = [
    "PERSONALIZAÇÃO", "OTIMIZAÇÃO", "PROFISSIONALISMO", "CONVERSÃO", 
    "COMUNICAÇÃO", "ESTRATÉGIA", "RESULTADO", "PERFORMANCE"
  ];

  return (
    <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden z-20">
      {/* Ticker de Balões (Pills) */}
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
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Brilho Branco na Base (Degradê para cima) */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">
              Uma entrega diferente do mercado
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tight"
          >
            Seja sincero... <span className="font-serif-italic italic font-normal text-blue-400/90">o que você prefere?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px" }}
            className="text-white/50 text-base md:text-xl font-light"
          >
            Dois tipos de entrega. Um único resultado que importa: <span className="text-white font-bold">vender.</span>
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-12 md:mt-20">
          
          {/* Card Esquerda: Entrega Comum */}
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
                Entrega comum dos <br /> "Web Designers"
              </h3>

              <ul className="space-y-4 w-full">
                {commonPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-snug">
                    <span className="text-red-500 mt-1 font-bold">✕</span>
                    <span>
                      {point.text}
                      <span className="font-bold text-slate-900">{point.bold}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card Direita: Minha Entrega (Premium) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-md bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-30 overflow-hidden"
          >
            {/* Brilho interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center space-y-8">
              <img 
                src="https://i.imgur.com/sP4bt3b.png" 
                alt="FA Logo" 
                className="h-10 md:h-12 w-auto object-contain brightness-125"
              />

              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Minha entrega:</h3>
                <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest">Marque o que faz sentido pra você:</p>
              </div>

              <div className="w-full space-y-4">
                {premiumPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base font-bold text-emerald-400/90 leading-tight">
                        {point.title}
                      </span>
                      {point.sub && (
                        <span className="text-[10px] md:text-xs text-emerald-400/40 font-medium">
                          {point.sub}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 w-full text-center">
                <p className="text-[10px] md:text-xs text-white/40 leading-relaxed italic">
                  Se você valoriza pelo menos 3 desses pontos, <br /> já entendeu meu trabalho.
                </p>
              </div>
            </div>
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
      `}</style>
    </section>
  );
};

export default ComparisonSection;
