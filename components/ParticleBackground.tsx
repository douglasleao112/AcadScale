
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let stars: { x: number, y: number, s: number, op: number }[] = [];
    let nebulas: { x: number, y: number, r: number, vx: number, vy: number, col: string }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Criar estrelas (pontos fixos)
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          s: Math.random() * 1.2,
          op: Math.random()
        });
      }

      // Criar nebulosas (grandes massas de cor com blur)
      nebulas = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 400, vx: 0.2, vy: 0.1, col: 'rgba(0, 30, 100, 0.15)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 500, vx: -0.15, vy: -0.05, col: 'rgba(30, 0, 80, 0.12)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, r: 350, vx: 0.1, vy: -0.1, col: 'rgba(0, 60, 120, 0.1)' }
      ];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 1. Desenhar Nebulosas (Blur de fundo)
      ctx.filter = 'blur(80px)';
      for (const n of nebulas) {
        n.x += n.vx;
        n.y += n.vy;
        
        // Loop infinito suave
        if (n.x > canvas.width + n.r) n.x = -n.r;
        if (n.x < -n.r) n.x = canvas.width + n.r;
        if (n.y > canvas.height + n.r) n.y = -n.r;
        if (n.y < -n.r) n.y = canvas.height + n.r;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.col;
        ctx.fill();
      }
      ctx.filter = 'none';

      // 2. Desenhar Estrelas
      ctx.fillStyle = '#fff';
      for (const s of stars) {
        ctx.globalAlpha = s.op * (0.5 + Math.sin(Date.now() * 0.001 + s.x) * 0.5); // Twinkle effect
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
