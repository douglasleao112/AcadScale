

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  role: string;
  bio: string[];
  image: string;
  stats: { value: string; label: string }[];
}

const PARTNERS: Partner[] = [
  {
    id: 'douglas',
    name: 'Douglas Leão',
    role: 'Doutor em Performance e Growth',
    bio: [
      "Doutor em Educação Física e Nutrição, com mais de 10 anos de experiência no mercado fitness.",
      "Mentor de profissionais e academias em processos, atendimento, posicionamento e crescimento estratégico.",
      "Douglas aplica ciência à gestão, unindo conhecimento técnico de alto nível à estratégia comercial para transformar academias em negócios mais lucrativos."
    ],
    image: 'https://i.imgur.com/47sPVAl.webp',
    stats: [
      { value: '5M+', label: 'VGV 3 anos' },
      { value: 'Growth', label: 'Especialista' }
    ]
  }
];

const AboutSection: React.FC = () => {
 const [activePartner] = useState<Partner>(PARTNERS[0]);

  return (
    <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden z-20">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 255, 155, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white tracking-tight leading-tight"
          >
            <span className="font-bold">Por trás do seu lucro,</span> <br /> 
            <span className="font-serif-italic italic text-green-300">existe estratégia</span>
          </motion.h2>

         
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePartner.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            <div className="flex-[1.2] space-y-8 text-left">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300/30 bg-green-300/10 backdrop-blur-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-green-300" />
                  <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">
                    Saiba Quem é
                  </span>
                </motion.div>

                <h3 className="text-5xl md:text-7xl font-serif-italic italic text-white leading-tight">
                  {activePartner.name}
                </h3>
              </div>

              <div className="space-y-6">
                {activePartner.bio.map((paragraph, i) => (
                  <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>



              <div className="pt-4 md:pt-8 flex justify-center lg:justify-start">
  <a 
    href="/form/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative p-[1.5px] rounded-full group transition-transform duration-500 hover:scale-[1.05] block w-fit"
  >
    <div className="absolute inset-0 overflow-hidden rounded-full">
      <div className="absolute inset-[-250%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_90%,#7CFF9B_97%,#fff_100%)] opacity-100" />
    </div>

    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-green-300/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:0.75s] rounded-full pointer-events-none" />
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-green-300/40 blur-2xl opacity-0 animate-[impactBottom_3s_infinite] [animation-delay:1.5s] rounded-[50%] pointer-events-none" />
    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-green-300/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:2.25s] rounded-full pointer-events-none" />

    <div className="relative flex items-center gap-5 px-10 md:px-14 py-5 md:py-6 bg-[#22C55E] rounded-full leading-none overflow-hidden z-10 shadow-[0_0_35px_rgba(34,197,94,0.55)]">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-green-300/20 to-transparent skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
      </div>

      <span className="text-white font-extrabold tracking-[0.2em] text-sm md:text-base uppercase relative z-20">
        Faça sua aplicação
      </span>
      
      <svg 
        viewBox="0 0 24 24" 
        className="w-5 h-5 md:w-6 md:h-6 stroke-white fill-none stroke-[2.2] relative z-20 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <div className="absolute inset-0 border border-white/10 rounded-full pointer-events-none" />
    </div>
  </a>
</div>



            </div>

            <div className="flex-1 w-full max-w-xl relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-300/15 blur-[120px] rounded-full group-hover:bg-green-300/20 transition-colors duration-1000" />
              
              <div className="relative bg-[#070707] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden bg-[#0a0a0a]">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                   <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent z-10" />
                   <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={activePartner.image} 
                    alt={activePartner.name} 
                    className="w-full h-full object-cover object-center relative z-0"
                    loading="lazy"
                   />
                </div>

                <div className="absolute bottom-0 left-0 w-full grid grid-cols-2 border-t border-white/10 bg-black/80 backdrop-blur-xl z-20">
                   {activePartner.stats.map((stat, i) => (
                     <div key={i} className={`p-6 md:p-8 flex flex-col items-center justify-center text-center ${i === 0 ? 'border-r border-white/10' : ''}`}>
                        <span className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-serif-italic italic text-white/40 uppercase tracking-widest leading-none">
                          {stat.label}
                        </span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-green-300/20 rounded-br-3xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-green-300/20 rounded-tl-3xl pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
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

export default AboutSection;
