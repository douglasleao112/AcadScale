import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PHOTOS_ROW_1 = [
  "https://i.imgur.com/coMNZ3A.webp",
  "https://i.imgur.com/U8EoeTZ.webp",
  "https://i.imgur.com/p6xlxym.webp",
  "https://i.imgur.com/eGND2p0.webp",
  "https://i.imgur.com/tXhNYSB.webp",
  "https://i.imgur.com/1ghjCxE.webp",
  "https://i.imgur.com/GUp6aI1.webp",
];


const PHOTOS_ROW_2 = [
  "https://i.imgur.com/coMNZ3A.webp",
  "https://i.imgur.com/U8EoeTZ.webp",
  "https://i.imgur.com/p6xlxym.webp",
  "https://i.imgur.com/eGND2p0.webp",
  "https://i.imgur.com/tXhNYSB.webp",
  "https://i.imgur.com/1ghjCxE.webp",
  "https://i.imgur.com/GUp6aI1.webp",
];

const PhotoSlider: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const timeoutRefs = useRef<Record<string, any>>({
    row1: null,
    row2: null,
  });

  const row1 = [...PHOTOS_ROW_1, ...PHOTOS_ROW_1];
  const row2 = [...PHOTOS_ROW_2, ...PHOTOS_ROW_2];

  const startInfiniteAnimation = (
    controls: any,
    direction: "left" | "right",
    duration: number
  ) => {
    controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const resumeAnimation = async (
    controls: any,
    direction: "left" | "right",
    duration: number
  ) => {
    await controls.start({
      x: direction === "left" ? "-50%" : "0%",
      transition: {
        duration: duration * 0.4,
        ease: "linear",
      },
    });

    startInfiniteAnimation(controls, direction, duration);
  };

  useEffect(() => {
    startInfiniteAnimation(controls1, "left", 40);
    startInfiniteAnimation(controls2, "right", 45);

    return () => {
      Object.values(timeoutRefs.current).forEach((t) => {
        if (t) clearTimeout(t as any);
      });
    };
  }, [controls1, controls2]);

  const handleDragStart = (
    rowId: "row1" | "row2",
    controls: any
  ) => {
    if (timeoutRefs.current[rowId]) {
      clearTimeout(timeoutRefs.current[rowId] as any);
      timeoutRefs.current[rowId] = null;
    }

    controls.stop();
  };

  const handleDragEnd = (
    rowId: "row1" | "row2",
    controls: any,
    direction: "left" | "right",
    duration: number
  ) => {
    timeoutRefs.current[rowId] = setTimeout(() => {
      resumeAnimation(controls, direction, duration);
    }, 2000);
  };

  return (
    <section className="relative w-full bg-black py-8 md:py-20 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-4 md:gap-10">
        <div className="px-6 md:px-12 mb-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 md:w-12 bg-green-300/30" />

            <span className="text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase text-green-300/70 text-center">
              Ambiente & Performance
            </span>

            <div className="h-[1px] w-8 md:w-12 bg-green-300/30" />
          </motion.div>
        </div>

        {/* ROW 1 */}
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-3 md:gap-8 flex-nowrap will-change-transform"
            style={{ transform: "translateZ(0)" }}
            animate={controls1}
            drag="x"
            dragConstraints={{ left: -2000, right: 2000 }}
            onDragStart={() => handleDragStart("row1", controls1)}
            onDragEnd={() => handleDragEnd("row1", controls1, "left", 40)}
          >
            {row1.map((src, idx) => (
              <PhotoItem key={`row1-${idx}`} src={src} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="flex overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-3 md:gap-8 flex-nowrap will-change-transform"
            style={{ transform: "translateZ(0)" }}
            animate={controls2}
            drag="x"
            dragConstraints={{ left: -2000, right: 2000 }}
            onDragStart={() => handleDragStart("row2", controls2)}
            onDragEnd={() => handleDragEnd("row2", controls2, "right", 45)}
          >
            {row2.map((src, idx) => (
              <PhotoItem key={`row2-${idx}`} src={src} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PhotoItem: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative flex-shrink-0 w-60 md:w-[450px] aspect-video rounded-lg md:rounded-3xl overflow-hidden group/item border border-white/5 transition-colors duration-500 hover:border-green-300/50 select-none">
    <img
      src={src}
      alt="Gallery"
      className="w-full h-full object-cover pointer-events-none md:transition-transform md:duration-1000 md:group-hover/item:scale-105"
      loading="lazy"
      decoding="async"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

    <div className="hidden md:block absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-300/10 via-transparent to-emerald-300/5" />
    </div>
  </div>
);

export default PhotoSlider;