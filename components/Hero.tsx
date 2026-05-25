
import React, { useState, useEffect } from 'react';
import { motion } from 'transparent-ui'; // Note: assuming standard motion
import { motion as framerMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "É Lucro! '",
    "É Escala! '",
    "É Valor! '",
    "É Margem! '",
    "É Equity! '",
    "É Valuation! '"
  ];

  useEffect(() => {
    const currentFullText = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentFullText) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText !== '') {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const tags = ["Margem", "Lucro", "Escala"];

  return (
    <section 
      className="relative z-20 flex flex-col items-center justify-start md:justify-end min-h-screen px-4 pb-48 md:pb-64 text-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <framerMotion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <framerMotion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 70, -40, 0],
            scale: [1.1, 0.8, 1.2, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] right-[15%] w-[35vw] h-[35vw] bg-cyan-500/15 rounded-full blur-[100px]"
        />
      </div>

      <framerMotion.div 
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        animate={{ 
          opacity: 0.75, 
          scale: 1, 
          filter: 'blur(0px)'
        }}
        transition={{ 
          opacity: { duration: 2 },
          scale: { duration: 2.5, ease: "easeOut" },
          filter: { duration: 2 }
        }}
        className="absolute top-8 md:top-0 inset-x-0 flex justify-center pointer-events-none"
      >
        <div className="relative w-full max-w-7xl h-[380px] md:h-[580px]">
          {/* Fix: use fetchPriority (camelCase) instead of fetchpriority */}
          <img 
            src="https://i.ibb.co/B5jCcWpS/topoimg.png" 
            alt="Performance" 
            className="w-full h-full object-contain object-top relative z-10"
            fetchPriority="high"
          />
        </div>
      </framerMotion.div>

     <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-30 pt-[430px] md:pt-[560px] lg:pt-[620px]">
        <framerMotion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <div className="min-h-[140px] md:min-h-[220px] flex flex-col justify-center">
            <h1 
              style={{ 
                textShadow: '0 10px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.4)' 
              }}
              className="text-[2.6rem] md:text-[5rem] lg:text-[6.5rem] font-black tracking-tighter text-white leading-[1.1] md:leading-[1.05] max-w-6xl mx-auto"
            >
              Além de aumentar seu faturamento...
              <br className="md:hidden" />{' '}
              <span className="inline-block whitespace-nowrap relative">
                <span className="font-serif-italic font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 min-h-[1.1em] inline-block">
                  {displayText || '\u00A0'}
                </span>
                <span className="inline-block w-[3px] md:w-[4px] h-[0.8em] bg-cyan-400 ml-1 md:ml-2 animate-pulse align-middle shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </span>
            </h1>
          </div>
          
          <p 
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}
            className="text-lg md:text-2xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] px-4"
          >
            A maioria luta para encher a academia. <span className="text-white font-medium border-b border-blue-500/30">Poucos dominam</span> <br className="hidden md:block" />
            as estratégias que transformam faturamento em lucro líquido previsível.
          </p>
        </framerMotion.div>

        <framerMotion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-4 flex flex-col items-center gap-6 mb-16 md:mb-0"
        >
          <a 
            href="/form/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-[1.5px] rounded-full group scale-105 md:scale-[1.1] transition-transform duration-500 hover:scale-[1.1] md:hover:scale-[1.15] block"
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-[-250%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_90%,#00d1ff_97%,#fff_100%)] opacity-100" />
            </div>
            
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-400/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:0.75s] rounded-full pointer-events-none" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-blue-400/40 blur-2xl opacity-0 animate-[impactBottom_3s_infinite] [animation-delay:1.5s] rounded-[50%] pointer-events-none" />
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-400/50 blur-2xl opacity-0 animate-[impactSide_3s_infinite] [animation-delay:2.25s] rounded-full pointer-events-none" />

            <div className="relative flex items-center gap-5 px-12 md:px-16 py-6 md:py-7 bg-black rounded-full leading-none overflow-hidden z-10">
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
              </div>

              <span className="text-white font-extrabold tracking-[0.2em] text-sm md:text-lg uppercase relative z-20">
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

          <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 gap-y-1 mt-1 md:mt-2 h-8">
            {tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <button
                  onClick={() => toggleTag(tag)}
                  className={`text-[0.65rem] md:text-[0.7rem] tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase transition-all duration-300 hover:text-white outline-none active:scale-95 ${
                    activeTags.includes(tag) 
                      ? 'text-[#00d1ff] drop-shadow-[0_0_12px_rgba(0,209,255,0.7)]' 
                      : 'text-white/40'
                  }`}
                >
                  {tag}
                </button>
                {idx < tags.length - 1 && (
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500/20 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        </framerMotion.div>
      </div>

      <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full border border-blue-500/40 animate-[ping_2s_infinite] opacity-30" />
        <div className="relative w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400/30">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 fill-none stroke-white stroke-[2.5] animate-[indicator-bounce_2s_infinite_ease-in-out]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6v12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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

        @keyframes indicator-bounce {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
