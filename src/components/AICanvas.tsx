import React, { useEffect, useRef } from 'react';

export const AICanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      layer: number;
    }

    const nodes: Node[] = [];
    const layers = 5;
    const nodesPerLayer = [3, 5, 6, 5, 3];

    nodesPerLayer.forEach((count, lIdx) => {
      const x = ((lIdx + 1) / (layers + 1)) * width;
      for (let i = 0; i < count; i++) {
        const y = ((i + 1) / (count + 1)) * height;
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 4 + Math.random() * 3,
          layer: lIdx
        });
      }
    });

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect adjacent layer nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Slight drift
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Keep near layer horizontal line
        const targetX = ((n1.layer + 1) / (layers + 1)) * width;
        if (Math.abs(n1.x - targetX) > 20) n1.vx *= -1;
        if (n1.y < 30 || n1.y > height - 30) n1.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          if (n2.layer === n1.layer + 1) {
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const alpha = (1 - dist / 180) * 0.4;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }

        // Draw node
        const mdx = mouseX - n1.x;
        const mdy = mouseY - n1.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const isNearMouse = mdist < 90;

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, isNearMouse ? n1.radius * 1.6 : n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? '#0284c7' : n1.layer === 4 ? '#059669' : '#4f46e5';
        ctx.shadowColor = 'rgba(2, 132, 199, 0.4)';
        ctx.shadowBlur = isNearMouse ? 12 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '420px', position: 'relative' }}>
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
