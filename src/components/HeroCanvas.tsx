import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const labels = ["APPLICATIONS", "AUTOMATION", "CLOUD", "DATA", "AI"];
    const nodeCount = labels.length;

    interface Particle {
      x: number;
      y: number;
      targetY: number;
      progress: number;
      speed: number;
      stageIndex: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 18; i++) {
      const stage = Math.floor(Math.random() * (nodeCount - 1));
      particles.push({
        x: 0,
        y: 0,
        targetY: 0,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        stageIndex: stage
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const startY = 60;
      const spacingY = (height - 120) / (nodeCount - 1);
      const centerX = width / 2;

      // Draw connecting energy spine
      ctx.beginPath();
      ctx.moveTo(centerX, startY);
      ctx.lineTo(centerX, startY + spacingY * (nodeCount - 1));
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.2)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw nodes and labels
      const nodeCoords: { x: number; y: number }[] = [];
      for (let i = 0; i < nodeCount; i++) {
        const ny = startY + i * spacingY;
        const dx = mouseX - centerX;
        const dy = mouseY - ny;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const shiftX = dist < 120 ? (120 - dist) * 0.08 * (dx > 0 ? 1 : -1) : 0;
        const nx = centerX + shiftX;
        nodeCoords.push({ x: nx, y: ny });

        // Node Glow Ring
        const glowRadius = dist < 100 ? 28 : 22;
        const grad = ctx.createRadialGradient(nx, ny, 2, nx, ny, glowRadius);
        grad.addColorStop(0, 'rgba(2, 132, 199, 0.25)');
        grad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node Core Circle
        ctx.beginPath();
        ctx.arc(nx, ny, 7, 0, Math.PI * 2);
        ctx.fillStyle = i === nodeCount - 1 ? '#0284c7' : '#4f46e5';
        ctx.shadowColor = 'rgba(2, 132, 199, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label Tag Box
        const text = labels[i];
        ctx.font = '700 11px "JetBrains Mono", monospace';
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'left';
        ctx.fillText(text, nx + 24, ny + 4);

        // Arrow down indicator
        if (i < nodeCount - 1) {
          const arrowY = ny + spacingY / 2;
          ctx.fillStyle = 'rgba(2, 132, 199, 0.4)';
          ctx.beginPath();
          ctx.moveTo(centerX - 4, arrowY - 4);
          ctx.lineTo(centerX + 4, arrowY - 4);
          ctx.lineTo(centerX, arrowY + 2);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Draw streaming energy particles
      if (!prefersReducedMotion) {
        particles.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.stageIndex = Math.floor(Math.random() * (nodeCount - 1));
          }

          const n1 = nodeCoords[p.stageIndex];
          const n2 = nodeCoords[p.stageIndex + 1];

          if (n1 && n2) {
            const px = n1.x + (n2.x - n1.x) * p.progress;
            const py = n1.y + (n2.y - n1.y) * p.progress;

            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#0284c7';
            ctx.shadowColor = '#0284c7';
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '440px', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      />
    </div>
  );
};
