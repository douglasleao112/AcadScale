import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface User {
  id: number;
  handle: string;
  image: string;
}

const USERS: User[] = [
  { id: 1, handle: '@studio.natanaelalves', image: 'https://i.imgur.com/v7HzJsH.jpeg' },
  { id: 2, handle: '@statera_team', image: 'https://i.imgur.com/hPoczNy.webp' },
  { id: 3, handle: '@delasgym', image: 'https://i.imgur.com/SZQThWA.webp' },
  { id: 4, handle: '@academiasouzafitness', image: 'https://i.imgur.com/2IXWKrF.jpeg' },
  { id: 5, handle: '@flexfitnesscenter', image: 'https://i.imgur.com/B6VgBoS.webp' },
  { id: 6, handle: '@spartacusacademia_', image: 'https://i.ibb.co/HT6Gf43f/8a0a592d-13fa-4b53-b52e-91862bbb9397-1.webp' },
];

const TICKER_ITEMS = [
  "Método validado",
  "Estratégia",
  "Funil de Vendas",
  "Análise e otimização",
  "Reduzir Churn",
  "Escalabilidade Real"
];

interface BlipData {
  id: string;
  x: number;
  y: number;
}

interface RadarBlipProps {
  x: number;
  y: number;
  sweepAngle: number;
  sweepOriginX: number;
  sweepOriginY: number;
}

const RadarBlip: React.FC<RadarBlipProps> = ({ x, y, sweepAngle, sweepOriginX, sweepOriginY }) => {
  const [isLit, setIsLit] = useState(false);

  const angleOfPoint = useMemo(() => {
    const dx = x - sweepOriginX;
    const dy = y - sweepOriginY; 
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;
    return angle;
  }, [x, y, sweepOriginX, sweepOriginY]);

  useEffect(() => {
    const currentSweep = (360 - sweepAngle) % 360;
    const diff = Math.abs(currentSweep - angleOfPoint);
    
    if (diff < 6 || diff > 354) {
      setIsLit(true);
    } else if (isLit) {
      const timer = setTimeout(() => setIsLit(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [sweepAngle, angleOfPoint, isLit]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="absolute rounded-full z-0 transition-all duration-[2000ms] ease-out"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '5px',
        height: '5px',
        backgroundColor: isLit ? '#7CFF9B' : 'transparent',
        boxShadow: isLit 
          ? '0 0 15px #7CFF9B, 0 0 5px #fff, 0 0 30px rgba(124, 255, 155, 0.5)' 
          : 'none',
        opacity: isLit ? 0.8 : 0,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

const RadarUI = ({ rotation }: { rotation: number }) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] md:w-[1500px] md:h-[1500px] pointer-events-none z-0 opacity-40 translate-y-1/2">
      <div className="absolute inset-0 border-[1px] border-green-300/20 rounded-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(s => (
            <div 
              key={s} 
              className="absolute border-[0.5px] border-green-300/5 rounded-full" 
              style={{ width: `${s * 100}%`, height: `${s * 100}%` }} 
            />
          ))}

          <div className="absolute w-[1px] h-full bg-green-300/5 left-1/2" />
          <div className="absolute h-[1px] w-full bg-green-300/5 top-1/2" />
        </div>

        <div 
          className="absolute top-1/2 left-1/2 w-full h-full origin-top-left"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(from 0deg at 0% 0%, rgba(124, 255, 155, 0.3) 0deg, rgba(124, 255, 155, 0.1) 45deg, rgba(124, 255, 155, 0.05) 90deg, transparent 150deg)'
          }}
        />

        <div 
          className="absolute top-1/2 left-1/2 w-full h-[1.5px] bg-green-300/80 shadow-[0_0_20px_#7CFF9B] origin-top-left"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
};

const ValidationSection: React.FC = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [blips, setBlips] = useState<BlipData[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const profilesContainerRef = useRef<HTMLDivElement>(null);

  const generateBlip = () => ({
    id: Math.random().toString(36).substr(2, 9),
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 60,
  });

  useEffect(() => {
    setBlips(Array.from({ length: 4 }).map(generateBlip));

    const interval = setInterval(() => {
      setBlips(currentBlips => {
        const randomIndex = Math.floor(Math.random() * currentBlips.length);
        const newBlips = [...currentBlips];
        newBlips[randomIndex] = generateBlip();
        return newBlips;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setRotation(prev => (prev - 0.7 + 360) % 360);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (activeUser !== null) setActiveUser(null);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (profilesContainerRef.current && !profilesContainerRef.current.contains(event.target as Node)) {
        setActiveUser(null);
      }
    };

    if (activeUser !== null) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeUser]);

  const cardRotations = [-12, -6, 0, 6, 12];
  const activeIndex = USERS.findIndex(u => u.id === activeUser);

  return (
    <section ref={sectionRef} className="relative w-full bg-black pb-0 pt-0 overflow-hidden flex flex-col items-center min-h-[480px] md:min-h-[750px]">
      <div className="w-full border-y border-white/10 bg-black/50 backdrop-blur-sm py-4 mb-20 md:mb-32 overflow-hidden select-none z-20">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(4)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center">
              {TICKER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center mx-8 gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform" />

                  <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {blips.map(blip => (
            <RadarBlip 
              key={blip.id} 
              x={blip.x} 
              y={blip.y} 
              sweepAngle={rotation} 
              sweepOriginX={50}
              sweepOriginY={100}
            />
          ))}
        </AnimatePresence>
      </div>

      <RadarUI rotation={rotation} />

      <div className="relative w-full max-w-7xl px-4 flex flex-col items-center text-center">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[14vw] font-black text-white/[0.04] leading-none pointer-events-none select-none tracking-tighter uppercase z-0">
          RESULTADO
        </h2>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 z-10 max-w-4xl tracking-tight px-4"
        >
          Metodologia validada para escalar academias com lucro real.
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/60 text-base md:text-xl mb-8 md:mb-16 z-10 max-w-2xl px-6"
        >
          Resultados construídos com método, dados e decisões estratégicas dentro da operação.
        </motion.p>

        <div 
          ref={profilesContainerRef}
          className="flex flex-nowrap md:flex-wrap justify-center items-center -space-x-10 md:space-x-0 md:gap-8 z-10 pt-4 pb-0 md:py-12 px-10"
        >
          {USERS.map((user, index) => {
            const isActive = activeUser === user.id;
            const rotationValue = cardRotations[index % cardRotations.length];
            
            let xOffset = 0;

            if (activeUser !== null && !isActive) {
              const isToTheLeft = index < activeIndex;
              xOffset = isToTheLeft ? -60 : 60;
            }
            
            return (
              <motion.div 
                key={user.id} 
                layout
                animate={{
                  x: typeof window !== 'undefined' && window.innerWidth < 768 ? xOffset : 0,
                  rotate: isActive ? 0 : rotationValue,
                  scale: isActive ? 1.35 : 1,
                  y: isActive ? -25 : 0,
                  zIndex: isActive ? 50 : 10 + index
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="relative w-20 h-20 md:w-28 md:h-28"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.6, y: 10 }}
                      className="absolute bottom-[95%] left-[-40%] z-[60] pointer-events-none origin-bottom-right"
                    >
                      <div className="bg-white text-black text-[10px] md:text-xs font-bold py-2.5 px-5 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap relative border border-black/10">
                        {user.handle}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setActiveUser(isActive ? null : user.id)}
                  className={`group relative w-full h-full rounded-full p-[2px] transition-all duration-500 ${
                    isActive ? 'ring-2 ring-green-300 ring-offset-4 ring-offset-black' : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-emerald-200 opacity-40 group-hover:opacity-100 transition-opacity" />

                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-neutral-900 shadow-xl">
                    <img 
                      src={user.image} 
                      alt={user.handle} 
                      className={`w-full h-full object-cover transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale-[40%] group-hover:grayscale-0'}`}
                      loading="lazy"
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .animate-ticker {
          animation: ticker 8s linear infinite;
        }

        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ValidationSection;