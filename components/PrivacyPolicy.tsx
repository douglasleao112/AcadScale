import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Elementos de Brilho de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-green-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header da Página */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-16"
        >
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 uppercase text-[10px] font-bold tracking-[0.3em]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </button>

          <div className="w-16 h-16 rounded-2xl bg-green-300/10 border border-green-300/20 flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-green-300" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center mb-4">
            Políticas de <span className="font-serif-italic italic font-normal text-green-300">Privacidade</span>
          </h1>

          <p className="text-white/40 text-center text-sm md:text-base max-w-xl font-light">
            Sua privacidade é nossa prioridade. Entenda como tratamos seus dados com transparência e segurança.
          </p>
        </motion.div>

        {/* Conteúdo Jurídico Formatado */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-white/70 leading-relaxed font-light"
        >
          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">1. Coleta de Informações</h2>
            <p className="mb-4">
              Ao interagir com o site da AcadScale, podemos coletar informações fornecidas voluntariamente por você, como nome e telefone, através de nossos formulários de contato ou links de WhatsApp.
            </p>
            <p>
              Também coletamos dados técnicos automaticamente, como endereço IP, tipo de navegador e páginas visitadas, para fins de análise de performance e melhoria da sua experiência.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">2. Uso dos Dados</h2>
            <p className="mb-4">Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estabelecer comunicação direta via WhatsApp ou e-mail;</li>
              <li>Personalizar sua experiência no site;</li>
              <li>Melhorar nossas estratégias de marketing e performance de anúncios;</li>
              <li>Garantir a segurança técnica da plataforma.</li>
            </ul>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">3. Cookies e Rastreamento</h2>
            <p>
              Utilizamos cookies e tecnologias similares (como pixels do Facebook e Google Tag Manager) para entender como você interage com nossa página. Isso nos ajuda a otimizar o carregamento e apresentar conteúdos que sejam mais relevantes para o seu perfil.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">4. Seus Direitos</h2>
            <p>
              Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para isso, basta entrar em contato através de nossos canais oficiais.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">5. Alterações</h2>
            <p>
              Reservamo-nos o direito de atualizar estas políticas periodicamente para refletir mudanças em nossas práticas ou por razões operacionais e legais. Recomendamos a visita frequente a esta página.
            </p>
          </div>
        </motion.div>

        {/* Footer da Página */}
        <div className="mt-20 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            Última atualização: Outubro de 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;