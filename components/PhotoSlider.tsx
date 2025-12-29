
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PHOTOS_ROW_1 = [
  "https://i.imgur.com/coMNZ3A.jpeg",
  "https://i.imgur.com/U8EoeTZ.jpeg",
  "https://i.imgur.com/p6xlxym.jpeg",
  "https://i.imgur.com/eGND2p0.jpeg",
  "https://i.imgur.com/tXhNYSB.jpeg",
  "https://i.imgur.com/1ghjCxE.jpeg",
  "https://i.imgur.com/GUp6aI1.jpeg"
];

const PHOTOS_ROW_2 = [
  "https://i.imgur.com/yDSTnwm.jpeg",
  "https://i.imgur.com/45aHz6z.jpeg",
  "https://i.imgur.com/e5ZYQEO.jpeg",
  "https://i.imgur.com/ecKn5ja.jpeg",
  "https://i.imgur.com/7qBUAzZ.jpeg",
  "https://i.imgur.com/X63EMhe.jpeg"
];

const PHOTOS_ROW_3 = [
  "https://i.imgur.com/z0WN0hL.jpeg",
  "https://i.imgur.com/WjoaPMO.png",
  "https://i.imgur.com/zc7fRl4.png",
  "https://i.imgur.com/TR0ZZlu.png",
  "https://i.imgur.com/n6K6A4x.png", 
  "https://i.imgur.com/UZ9LKuU.png",
  "https://i.imgur.com/RJ56mO4.png"
];

const PhotoSlider: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  
  // Fix: Explicitly type timeoutRefs to avoid 'unknown' return type from setTimeout/clearTimeout
  const timeoutRefs = useRef<Record<string, any>>({
    row1: null,
    row2: null,
    row3: null
  });

  // Triplicamos para garantir cobertura total e loop infinito sem saltos visíveis
  const row1 = [...PHOTOS_ROW_1, ...PHOTOS_ROW_1, ...PHOTOS_ROW_1];
  const row2 = [...PHOTOS_ROW_2, ...PHOTOS_ROW_2, ...PHOTOS_ROW_2];
  const row3 = [...PHOTOS_ROW_3, ...PHOTOS_ROW_3, ...PHOTOS_ROW_3];

  const startInfiniteAnimation = (controls: any, direction: 'left' | 'right', duration: number) => {
    controls.start({
      x: direction === 'left' ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  const resumeAnimation = async (controls: any, direction: 'left' | 'right', duration: number) => {
    // Retoma suavemente da posição atual até completar o ciclo de um terço
    await controls.start({
      x: direction === 'left' ? "-33.33%" : "0%",
      transition: {
        duration: duration * 0.4, // Velocidade de ajuste baseada na duração total
        ease: "linear"
      }
    });
    // Reinicia o loop infinito padrão
    startInfiniteAnimation(controls, direction, duration);
  };

  useEffect(() => {
    startInfiniteAnimation(controls1, 'left', 30);
    startInfiniteAnimation(controls2, 'right', 35);
    startInfiniteAnimation(controls3, 'left', 28);

    return () => {
      // Fix: cast to any to ensure clearTimeout works if types are unknown
      Object.values(timeoutRefs.current).forEach(t => t && clearTimeout(t as any));
    };
  }, [controls1, controls2, controls3]);

  const handleDragStart = (rowId: string, controls: any) => {
    if (timeoutRefs.current[rowId]) {
      clearTimeout(timeoutRefs.current[rowId] as any);
      timeoutRefs.current[rowId] = null;
    }
    controls.stop();
  };

  const handleDragEnd = (rowId: string, controls: any, direction: 'left' | 'right', duration: number) => {
    timeoutRefs.current[rowId] = setTimeout(() => {
      resumeAnimation(controls, direction, duration);
    }, 2000);
  };

  return (
    <section className="relative w-full bg-black py-12 md:py-20 overflow-hidden">
      {/* Máscaras de Gradiente para bordas suaves */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="px-6 md:px-12 mb-2 flex justify-start md:justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-blue-400/70 text-center">
              Ambiente & Performance
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-blue-500/50 hidden md:block" />
          </motion.div>
        </div>

        {/* Row 1 */}
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing group">
          <motion.div 
            className="flex gap-4 md:gap-8 flex-nowrap"
            animate={controls1}
            drag="x"
            dragConstraints={{ left: -4000, right: 4000 }}
            onDragStart={() => handleDragStart('row1', controls1)}
            onDragEnd={() => handleDragEnd('row1', controls1, 'left', 30)}
          >
            {row1.map((src, idx) => <PhotoItem key={`row1-${idx}`} src={src} />)}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing group">
          <motion.div 
            className="flex gap-4 md:gap-8 flex-nowrap"
            animate={controls2}
            drag="x"
            dragConstraints={{ left: -4000, right: 4000 }}
            onDragStart={() => handleDragStart('row2', controls2)}
            onDragEnd={() => handleDragEnd('row2', controls2, 'right', 35)}
          >
            {row2.map((src, idx) => <PhotoItem key={`row2-${idx}`} src={src} />)}
          </motion.div>
        </div>

        {/* Row 3 */}
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing group">
          <motion.div 
            className="flex gap-4 md:gap-8 flex-nowrap"
            animate={controls3}
            drag="x"
            dragConstraints={{ left: -4000, right: 4000 }}
            onDragStart={() => handleDragStart('row3', controls3)}
            onDragEnd={() => handleDragEnd('row3', controls3, 'left', 28)}
          >
            {row3.map((src, idx) => <PhotoItem key={`row3-${idx}`} src={src} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Fix: Use React.FC to properly handle props including the special 'key' prop in mappings
const PhotoItem: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative flex-shrink-0 w-72 md:w-[450px] aspect-video rounded-xl md:rounded-3xl overflow-hidden group/item border border-white/5 transition-all duration-700 hover:border-blue-500/40 shadow-2xl select-none">
    <img 
      src={src} 
      alt="Gallery item" 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110 pointer-events-none"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/item:opacity-30 transition-opacity duration-500" />
    
    {/* Glow interno no hover */}
    <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute inset-0 border-2 border-white/10 rounded-xl md:rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/5" />
    </div>
  </div>
);

export default PhotoSlider;
