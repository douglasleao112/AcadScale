
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

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
    id: 'victor',
    name: 'Victor Alamino',
    role: 'Especialista em Vendas e Comunicação',
    bio: [
      "Especialista em vendas, gestão e comunicação estratégica, Victor Alamino construiu sua autoridade liderando equipes de alta performance e entregando resultados consistentes em alguns dos mercados mais exigentes do país.",
      "Reconhecido por seus troféus e conquistas nos setores de incorporação imobiliária, modelos de recorrência e grandes montadoras de veículos importados, Victor domina o que poucos conseguem unir: estratégia, execução comercial e comunicação persuasiva.",
      "Fundador da Master Voice Academy e criador do Método FEEL, ele ensina líderes, empresários e times comerciais a vender com clareza, gerir com visão e influenciar com autenticidade. Sua filosofia é direta: quem domina a comunicação, domina o processo."
    ],
    image: 'https://i.imgur.com/g843Clh.png',
    stats: [
      { value: 'Master', label: 'Voice Academy' },
      { value: 'Vendas', label: 'Especialista' }
    ]
  },
  {
    id: 'douglas',
    name: 'Douglas Leão',
    role: 'Doutor em Performance e Growth',
    bio: [
      "Doutor em Educação Física e Nutrição, com mais de 10 anos de experiência no mercado fitness.Empresário nas áreas de saúde, estética e tecnologia.",
      "Mentor de profissionais e academias em processos, atendimento e relacionamento com o cliente. Referência em marketing, posicionamento, vendas e growth no setor.",
      "Douglas aplica ciência à gestão, unindo conhecimento técnico de alto nível à agressividade comercial necessária para escalar negócios que faturam milhões."
    ],
    image: 'https://i.imgur.com/47sPVAl.png',
    stats: [
      { value: '5M+', label: 'VGV 3 anos' },
      { value: 'Marketing', label: 'Especialista' }
    ]
  },
  {
    id: 'fabio',
    name: 'Fábio Rocha',
    role: 'Especialista em Expansão e Liderança',
    bio: [
      "Graduado em Educação Física, empresário e especialista em liderança e formação de equipes, Fábio Rocha atua no desenvolvimento de pessoas conectando comportamento e resultado direto na operação.",
      "Possui MBA em liderança de times comerciais, unindo visão estratégica, gestão de pessoas e processos de vendas. É co-autor do livro 'DNA da Liderança' e criador do método 'Academia do Líder'.",
      "Ao longo de sua trajetória, desenvolveu mais de 300 líderes por meio de treinamentos e mentorias em vários estados do Brasil, atendendo empresas de diferentes segmentos com a convicção de que a liderança se constrói pelo exemplo."
    ],
    image: 'https://i.imgur.com/BAskeMm.png',
    stats: [
      { value: 'Escala', label: 'Processos' },
      { value: 'Liderança', label: 'Especialista' }
    ]
  }
];

const AboutSection: React.FC = () => {
  const [activePartner, setActivePartner] = useState<Partner>(PARTNERS[0]);

  return (
    <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden z-20">
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white tracking-tight leading-tight"
          >
            <span className="font-bold">Por trás do seu lucro,</span> <br /> 
            <span className="font-serif-italic italic text-blue-400">existe estratégia</span>
          </motion.h2>

          {/* Partner Selector */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {PARTNERS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePartner(p)}
                className={`px-6 py-2 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500
                  ${activePartner.id === p.id 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-black/40 border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'}
                `}
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Partner Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePartner.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Left Content: Narrative */}
            <div className="flex-[1.2] space-y-8 text-left">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                    Quem é
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

             
            </div>

            {/* Right Content: Visual Card */}
            <div className="flex-1 w-full max-w-xl relative group">
              {/* Energy Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/15 blur-[120px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-1000" />
              
              <div className="relative bg-[#070707] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Profile Image with mask like the reference */}
                <div className="aspect-[4/5] relative overflow-hidden bg-[#0a0a0a]">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                   <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent z-10" />
                   <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={activePartner.image} 
                    alt={activePartner.name} 
                    className="w-full h-full object-cover object-center relative z-0"
                   />
                </div>

                {/* Bottom Stats Row (The +250 / +500K style) */}
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

              {/* Decorative Tech Overlay */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-blue-500/20 rounded-br-3xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
