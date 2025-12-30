
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Já tenho uma página. Por que refazer tudo?",
    answer: "Ter uma página é diferente de ter um ativo de vendas. Refazemos para aplicar o método FRAME, otimizar a velocidade de carregamento e garantir que cada elemento do design guie o usuário para a conversão, algo que templates comuns não fazem."
  },
  {
    question: "Você faz só o layout ou também a copy?",
    answer: "Fazemos o projeto completo. Um design premium sem uma narrativa estratégica (copy) é apenas um desenho bonito. Unimos os dois para que sua página venda por conta própria."
  },
  {
    question: "E depois que a página for entregue, acabou?",
    answer: "Não. Monitoramos o comportamento dos usuários nos primeiros dias após o lançamento e oferecemos suporte para garantir que a performance técnica esteja impecável."
  },
  {
    question: "Você também cuida da hospedagem ou integrações?",
    answer: "Sim, cuidamos de toda a parte técnica: configuração de domínio, hospedagem de alta performance e integrações com seu checkout, CRM ou ferramentas de e-mail marketing."
  },
  {
    question: "E se eu tiver um time de tráfego ou lançamento?",
    answer: "Trabalhamos em total sinergia. Facilitamos a vida do seu gestor de tráfego entregando páginas que maximizam o ROI do investimento em anúncios."
  },
  {
    question: "Quanto tempo leva pra ver resultado?",
    answer: "O impacto técnico (velocidade e retenção) é imediato. Assim que o tráfego for direcionado, as métricas de conversão tendem a estabilizar em patamares superiores aos de páginas comuns em menos de 48h."
  },
  {
    question: "E se eu quiser ajustar algo depois?",
    answer: "Você terá total autonomia. Entregamos a página em uma estrutura fácil de gerenciar, mas também oferecemos planos de manutenção caso prefira que nossa equipe cuide de tudo."
  },
  {
    question: "Isso é pra mim mesmo?",
    answer: "Se você vende produtos, serviços ou infoprodutos e sente que seu faturamento está 'travado' ou que seu custo por lead está alto, essa metodologia foi feita exatamente para você escalar."
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
            Mas, Fernando???
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
