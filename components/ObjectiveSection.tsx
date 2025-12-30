
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface TabContent {
  id: string;
  label: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const TABS: TabContent[] = [
  {
    id: 'douglas',
    label: 'Douglas',
    image: 'https://i.imgur.com/RBrL00f.png',
    badge: 'Promova suas ofertas',
    title: 'Página de vendas',
    description: 'A página de vendas é onde a mágica acontece. É o local onde você apresenta seu product ou serviço de forma convincente, orientando seus visitantes a agir. Minha abordagem de webdesign de alta qualidade garantirá que a sua página de vendas seja atraente, informativa e confiável.',
    features: [
      'Estrutura de conversão validada',
      'Design Premium (Conversão)',
      'Copy estratégica com funil',
      'Performance Extrema',
      'Instalação de Pixel Facebook/GTM',
      'Otimização pós-lançamento (Análise de dados)'
    ],
    color: 'rgba(59, 130, 246, 0.4)'
  },
  {
    id: 'victor',
    label: 'Victor',
    image: 'https://i.imgur.com/YCDNuUU.png',
    badge: 'Promova sua marca',
    title: 'Landing Page',
    description: 'Você é um especialista na sua área. Sua landing page precisa refletir essa autoridade. Minha metodologia de design transforma sua autoridade em uma landing page estratégica, focada em qualificar leads e gerar decisões.',
    features: [
      'Estrutura de conversão validada',
      'Design Premium (Autoridade)',
      'Copy estratégica com funil específico',
      'Performance Extrema',
      'Instalação de Pixel Facebook/GTM',
      'Otimização pós-lançamento (Análise de dados)'
    ],
    color: 'rgba(234, 179, 8, 0.4)'
  },
  {
    id: 'fabio',
    label: 'Fabio',
    image: 'https://i.imgur.com/6RSnLxR.png',
    badge: 'Filtre seu público',
    title: 'Captura + Obrigado',
    description: 'É o local onde você filtra seu público, oferecendo uma promessa clara em troca do contato. Minha abordagem de webdesign garante que sua página seja magnética, objetiva e construída para a máxima conversão de visitantes em leads qualificados.',
    features: [
      'Estrutura de captação validada',
      'Design Premium (Credibilidade)',
      'Copy estratégica com funil',
      'Performance Extrema',
      'Instalação de Pixel Facebook/GTM',
      'Otimização pós-lançamento (Análise de dados)'
    ],
    color: 'rgba(0, 255, 200, 0.4)'
  }
];

const ObjectiveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden z-20">
      {/* Background Header Decoration */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white text-black py-6 md:py-10 px-8 rounded-[2rem] md:rounded-[3rem] mb-12 md:mb-24 shadow-2xl inline-block w-full max-w-5xl"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
            OK. Agora é com você...
          </h2>
        </motion.div>

        <div className="space-y-4 mb-10 md:mb-12">
          <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
            Qual é o seu objetivo?
          </h3>
          <p className="text-white/60 text-sm md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Selecione o seu segmento abaixo para ver os detalhes da entrega. Se fizer sentido para sua operação, me chame no WhatsApp para alinharmos o projeto.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center gap-3 md:gap-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all duration-500 border
                ${activeTab.id === tab.id 
                  ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                  : 'bg-black text-white border-white/10 hover:border-white/30'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-24"
          >
            {/* Visual Column - Agora Order 1 no Mobile */}
            <div className="flex-1 relative order-1 md:order-1 w-full">
              {/* Blur Background based on tab color */}
              <div 
                className="absolute inset-0 blur-[80px] md:blur-[120px] rounded-full transition-colors duration-1000 opacity-30"
                style={{ backgroundColor: activeTab.color }}
              />
              
              <div className="relative">
                {/* Float animation for the phone and rock */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-auto max-w-[450px] md:max-w-[500px] mx-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
                
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
              </div>
            </div>

            {/* Content Column - Agora Order 2 no Mobile */}
            <div className="flex-1 text-left space-y-8 order-2 md:order-2">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">
                    {activeTab.badge}
                  </span>
                </motion.div>

                <h4 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
                  {activeTab.title}
                </h4>

                <div className="space-y-1">
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">à partir de:</p>
                  <p className="text-2xl md:text-4xl font-bold text-white">Sob orçamento</p>
                </div>

                <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                  {activeTab.description}
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-4">
                {activeTab.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-white/80 group-hover:text-white transition-colors text-sm md:text-base font-medium">
                      {feature.includes('(') ? (
                        <>
                          {feature.split('(')[0]}
                          <span className="text-white/40 font-normal">({feature.split('(')[1]}</span>
                        </>
                      ) : feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 md:pt-8 pb-10 md:pb-0">
                {/* Botão Padronizado */}
                <a 
                  href="https://chat.whatsapp.com/BWCnxuMkAg975dRRzOJJBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-[1.5px] rounded-full group transition-transform duration-500 hover:scale-[1.05] block w-fit"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute inset-[-250%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_90%,#00d1ff_97%,#fff_100%)] opacity-100" />
                  </div>
                  
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-400/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:0.75s] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-blue-400/40 blur-2xl opacity-0 animate-[impactBottom_3s_infinite] [animation-delay:1.5s] rounded-[50%] pointer-events-none" />
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-400/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:2.25s] rounded-full pointer-events-none" />

                  <div className="relative flex items-center gap-5 px-10 md:px-14 py-5 md:py-6 bg-black rounded-full leading-none overflow-hidden z-10">
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                      <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
                    </div>

                    <span className="text-white font-extrabold tracking-[0.2em] text-sm md:text-base uppercase relative z-20">
                      Faça parte do grupo
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

export default ObjectiveSection;
