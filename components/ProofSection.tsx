
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const ProofSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    { value: "+93%", label: "Connect Rate", sub: "" },
    { value: "-38%", label: "no Custo por Lead (CPL)", sub: "" },
    { value: "+22%", label: "no CTR da página", sub: "" },
  ];

  const tags = ["Margem", "Lucro", "Escala"];

  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      {/* Elementos de Brilho de Fundo */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white mb-4 tracking-tight"
          >
            A prova real vem
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white px-8 py-3 md:px-16 md:py-5 rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <span className="text-black text-xl md:text-4xl font-bold tracking-tight">
              de quem vive a operação.
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-white/60 text-sm md:text-lg max-w-3xl leading-relaxed font-light"
          >
            Ouça diretamente de quem escala milhares de reais. Veja o Igor Reis explicar os resultados, 
            os bastidores e o impacto de ter páginas de alta performance alinhadas à sua estratégia.
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-neutral-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col md:flex-row min-h-[500px]"
        >
          {/* Lado Esquerdo - Info */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-cyan-400">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP0Pl9JPPZIXz7yneCQj6dwfPhNHY5GQuwg&s" 
                    alt="Igor Reis" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Igor Reis</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Empreendedor digital (+150M faturados)</p>
              </div>
            </div>

            <div className="w-12 h-[1px] bg-white/20 mb-8" />

            <div className="space-y-6">
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                O Igor já era peixe grande no digital. Neste vídeo, ele mostra os bastidores de como nossas 
                <span className="text-white font-semibold"> páginas foram cruciais </span> 
                para sustentar o nível e os resultados da sua operação.
              </p>
              
              <p className="text-white/40 text-sm md:text-base italic font-serif-italic">
                "O que funciona para quem escala, funciona para o seu negócio. O próximo projeto pode ser o seu!"
              </p>
            </div>
          </div>

          {/* Lado Direito - Vídeo Placeholder */}
          <div className="flex-[1.2] relative group cursor-pointer overflow-hidden" onClick={() => setIsVideoOpen(true)}>
            <img 
              src="https://i.ytimg.com/vi/VR6tCP8dA70/maxresdefault.jpg" 
              alt="Thumbnail Vídeo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            
            {/* Overlay com Textos e Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
              </div>
              
              <div className="mt-8 space-y-2">
                <p className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight max-w-xs">
                  Assista o depoimento de quem já tem mais de 15M investidos em ADS.
                </p>
              </div>
            </div>

            {/* Selo 1.00 (opcional conforme imagem) */}
            <div className="absolute top-6 left-6 px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10">
              <span className="text-white/40 text-[10px] font-mono">1.00</span>
            </div>
          </div>
        </motion.div>

       

      {/* Modal do Vídeo */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.2)] bg-neutral-900"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VR6tCP8dA70?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default ProofSection;
