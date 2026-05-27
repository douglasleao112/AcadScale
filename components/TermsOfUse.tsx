import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative bg-black overflow-hidden">
      {/* Elementos de brilho de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-green-300/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-emerald-300/5 blur-[140px] pointer-events-none" />

      {/* Grid de fundo sem azul */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 255, 155, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 255, 155, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header da Página */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-16"
        >
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-white/40 hover:text-green-300 transition-colors mb-8 uppercase text-[10px] font-bold tracking-[0.3em]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </button>

          <div className="w-16 h-16 rounded-2xl bg-green-300/10 border border-green-300/20 flex items-center justify-center mb-6 shadow-[0_0_35px_rgba(124,255,155,0.12)]">
            <FileText className="w-8 h-8 text-green-300" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center mb-4">
            Termos de <span className="font-serif-italic italic font-normal text-green-300">Uso</span>
          </h1>

          <p className="text-white/40 text-center text-sm md:text-base max-w-xl font-light">
            Ao utilizar nossa plataforma, você concorda com as diretrizes e condições estabelecidas abaixo.
          </p>
        </motion.div>

        {/* Conteúdo Formatado */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-white/70 leading-relaxed font-light"
        >
          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              1. Aceitação dos Termos
            </h2>

            <p>
              Ao acessar o site da AcadScale, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              2. Uso de Licença
            </h2>

            <p className="mb-4">
              É concedida permissão para baixar temporariamente uma cópia dos materiais, informações ou software no site AcadScale, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-green-300">
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
            </ul>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              3. Isenção de Responsabilidade
            </h2>

            <p>
              Os materiais no site da AcadScale são fornecidos como estão. A AcadScale não oferece garantias expressas ou implícitas e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              4. Limitações
            </h2>

            <p>
              Em nenhum caso a AcadScale ou seus fornecedores serão responsáveis por quaisquer danos, incluindo, sem limitação, danos por perda de dados, lucro ou interrupção dos negócios decorrentes do uso ou da incapacidade de usar os materiais disponíveis no site da AcadScale.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              5. Precisão dos Materiais
            </h2>

            <p>
              Os materiais exibidos no site da AcadScale podem incluir erros técnicos, tipográficos ou fotográficos. A AcadScale não garante que qualquer material em seu site seja preciso, completo ou atual. A AcadScale pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
            </p>
          </div>
        </motion.div>

        {/* Footer da Página */}
        <div className="mt-20 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            Última atualização: Janeiro de 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;