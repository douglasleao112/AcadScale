
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "A Avance é como uma consultoria?",
    answer: " Não é consultoria tradicional. A AVANCE+ atua como conselho estratégico, entrando no negócio para orientar decisões que aumentam o lucro líquido, não para dar opinião solta ou entregar material genérico."
  },
  {
    question: "Vocês vão me dizer exatamente o que fazer ou só orientar?",
    answer: "Nós direcionamos decisões estratégicas, mas a execução acontece dentro da sua operação. O foco é tirar você do improviso e colocar controle, clareza e previsibilidade no negócio."
  },
  {
    question: "Isso serve para academia pequena ou só para grandes?",
    answer: "Serve para academias e estúdios que já entenderam que o problema não é esforço, é gestão. Não importa o tamanho. Importa o nível de maturidade e disposição para decidir com estratégia."
  },
  {
    question: "Meu problema é marketing. Isso resolve?",
    answer: "Marketing sem estrutura só acelera o caos.Aqui o foco é direção estratégica, organização financeira, precificação e modelo de crescimento. Marketing entra depois, com função clara: gerar lucro, não movimento."
  },
  {
    question: "Vocês prometem aumentar faturamento?",
    answer: "Não trabalhamos com promessa de faturamento. Trabalhamos para aumentar lucro líquido, controlar custos, melhorar ticket e organizar crescimento.Faturar mais sem lucro não é vitória."
  },
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer: "Clareza e controle vêm rápido. Resultado sustentável vem conforme as decisões estratégicas passam a ser aplicadas.Isso não é atalho. É construção de empresa."
  },
  {
    question: "Vocês vão mexer na minha operação ou só analisar?",
    answer: "Analisamos, diagnosticamos e direcionamos ajustes estratégicos em operação, equipe, precificação e modelo de negócio. Não entramos para “assistir”. Entramos para orientar decisões que mudam o jogo."
  },
  {
    question: "E se minha academia já estiver dando lucro?",
    answer: "Ótimo. A pergunta passa a ser: esse lucro é previsível, escalável e protegido, ou depende do seu esforço diário? A AVANCE+ trabalha para transformar lucro instável em lucro estruturado."
  },
  {
    question: "E se eu não gostar ou não fizer sentido?",
    answer: "Você simplesmente não avança. A AVANCE+ não é para todo mundo, e isso é intencional."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-24 md:py-40 px-4 z-20 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-12"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">
            Mas, e agora???
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tight text-center mb-16 md:mb-24"
        >
          Você deve estar <br /> se perguntando...
        </motion.h2>

        <div className="w-full space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-500 flex items-center justify-between gap-6
                    ${isOpen 
                      ? 'bg-neutral-900/60 border-white/20 shadow-2xl' 
                      : 'bg-neutral-900/20 border-white/5 hover:border-white/10'}
                  `}
                >
                  <span className={`text-base md:text-xl font-bold transition-colors duration-500 ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-400' : 'text-white/20'}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 text-white/50 text-sm md:text-base leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
