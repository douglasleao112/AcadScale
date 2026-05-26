import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const StrategySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6"
    >
      {/* 1. Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 255, 155, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 255, 155, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      {/* 2. Conteúdo de Texto */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 md:space-y-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-[15ch] md:max-w-none mx-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
            O que realmente muda quando <br className="hidden md:block" />
            sua academia é gerida com estratégia
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="text-5xl md:text-8xl lg:text-[11rem] font-serif-italic text-white italic leading-none drop-shadow-[0_0_60px_rgba(124,255,155,0.5)]"
          >
            E não achismo!
          </motion.p>
        </motion.div>

        {/* Texto de Apoio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Mais clareza, mais direção, mais controle. Sua academia passa a operar como uma empresa estratégica, não como um negócio conduzido no improviso.
            <br className="hidden md:block" />
          </p>
        </motion.div>

        {/* Elemento de continuidade visual */}
        <motion.div 
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pt-10 md:pt-14"
        >
          <div className="h-20 w-[1px] bg-gradient-to-b from-green-300 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;