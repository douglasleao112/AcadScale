
import React from 'react';
import { Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative w-full bg-black py-16 border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Logo e Slogan */}
          <div className="flex flex-col items-start gap-4">
             <img 
               src="https://i.imgur.com/sP4bt3b.png" 
               alt="Avance+ Logo" 
               className="h-10 w-auto brightness-110 opacity-20" 
             />
             <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] text-left">
               Design & Performance para High Stakes
             </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-start gap-8">
            <a 
              href="https://www.instagram.com/avancemais.oficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
                <Instagram className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-bold text-white/20 group-hover:text-white transition-colors uppercase tracking-widest hidden md:block">Instagram</span>
            </a>
            <a 
              href="https://chat.whatsapp.com/BWCnxuMkAg975dRRzOJJBg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
                <svg 
                  version="1.0" 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1280 720"
                  className="w-10 h-10 text-white/20 group-hover:text-white transition-colors fill-current"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)">
                    <path d="M6255 6844 c-540 -35 -1107 -229 -1555 -532 -473 -320 -848 -752
                    -1091 -1256 -133 -276 -216 -536 -273 -856 -43 -240 -52 -602 -22 -880 40
                    -374 177 -822 362 -1188 l53 -103 -123 -367 c-68 -202 -191 -570 -274 -818
                    -84 -249 -152 -459 -152 -469 0 -9 13 -22 29 -28 26 -10 29 -14 24 -45 -6 -32
                    -5 -34 18 -27 41 13 936 298 1314 420 198 63 368 115 378 115 9 0 52 -17 95
                    -39 366 -184 756 -294 1171 -332 164 -14 498 -7 659 16 954 132 1766 659 2266
                    1468 163 264 318 632 401 952 79 307 117 688 96 982 -54 781 -356 1473 -881
                    2017 -509 527 -1157 853 -1895 952 -108 14 -482 26 -600 18z m391 -684 c357
                    -29 650 -108 959 -259 419 -206 770 -514 1030 -906 200 -301 323 -625 371
                    -979 23 -168 23 -508 0 -680 -163 -1209 -1161 -2141 -2372 -2217 -427 -26
                    -824 44 -1212 214 -107 47 -284 143 -339 183 -17 13 -39 24 -49 24 -9 0 -222
                    -65 -472 -145 -250 -80 -456 -145 -457 -143 -2 2 62 197 141 433 79 237 144
                    442 144 458 0 16 -18 53 -44 90 -418 599 -554 1426 -351 2127 45 152 82 245
                    155 390 200 391 505 732 880 982 473 316 1064 472 1616 428z"/>
                    <path d="M5323 5236 c-23 -7 -56 -23 -75 -34 -51 -32 -199 -190 -245 -262
                    -147 -229 -180 -534 -92 -832 67 -225 149 -397 299 -629 190 -292 313 -450
                    510 -653 296 -305 545 -476 927 -635 282 -118 490 -185 607 -197 81 -8 258 20
                    362 58 144 52 309 168 373 262 64 96 130 313 138 457 l6 95 -31 36 c-22 24
                    -112 78 -294 176 -432 232 -487 254 -555 218 -17 -8 -81 -73 -141 -143 -178
                    -207 -215 -243 -245 -243 -38 0 -287 127 -403 205 -135 92 -223 166 -334 281
                    -132 137 -275 333 -355 486 l-18 36 72 79 c95 101 134 162 172 268 39 108 37
                    141 -20 290 -51 133 -92 243 -163 434 -58 157 -101 221 -161 240 -57 17 -287
                    22 -334 7z"/>
                  </g>
                </svg>
              </div>
              <span className="text-xs font-bold text-white/20 group-hover:text-white transition-colors uppercase tracking-widest hidden md:block">WhatsApp</span>
            </a>
          </div>

          {/* Legais */}
          <div className="flex flex-wrap items-center justify-start gap-8">
            <button 
              onClick={() => onNavigate?.('privacy')}
              className="text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest text-left"
            >
              Políticas de Privacidade
            </button>
            <button 
              onClick={() => onNavigate?.('terms')}
              className="text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest"
            >
              Termos de Uso
            </button>
          </div>

        </div>

        {/* Linha Final */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[8px] font-medium text-white/10 tracking-[0.2em]">
            2025 Avance + Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
