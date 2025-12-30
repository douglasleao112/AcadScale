
import React from 'react';
import { motion } from 'framer-motion';

const FooterBranding: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center z-10">
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            scale: [0.8, 2.8],
            borderWidth: ['1px', '0.2px']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 1.25,
            ease: "easeOut"
          }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-blue-400/40 pointer-events-none"
        />
      ))}

      <div className="absolute w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          animate={{ 
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative group"
        >
          <img 
            src="https://i.imgur.com/dVCUAnp.webp" 
            alt="Avance+ Icon" 
            className="h-28 md:h-44 w-auto object-contain brightness-110 drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-1000 group-hover:brightness-125"
            loading="lazy"
          />
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-60px] border border-blue-500/[0.05] rounded-full pointer-events-none hidden md:block"
          />
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default FooterBranding;
