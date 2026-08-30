import React, { useEffect, useRef, useState } from 'react';

interface ArchNode {
  id: string;
  label: string;
  sub: string;
  x: number; // percentage
  y: number; // percentage
  level: number;
}

export const MultiCloudCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: ArchNode[] = [
    { id: 'app', label: 'APPLICATIONS', sub: 'Microservices & Enterprise Web', x: 50, y: 12, level: 1 },
    { id: 'data', label: 'AI / DATA LAYER', sub: 'Vector DBs, Data Pipelines & RAG', x: 50, y: 32, level: 2 },
    { id: 'aws', label: 'AWS', sub: 'EKS, EC2, S3 & Aurora', x: 22, y: 54, level: 3 },
    { id: 'azure', label: 'AZURE', sub: 'AKS, Blob & Enterprise AI', x: 50, y: 54, level: 3 },
    { id: 'gcp', label: 'GCP', sub: 'GKE, BigQuery & Vertex', x: 78, y: 54, level: 3 },
    { id: 'infra', label: 'INFRASTRUCTURE / AUTOMATION', sub: 'Terraform, Docker & CI/CD', x: 50, y: 76, level: 4 },
    { id: 'obs', label: 'OBSERVABILITY', sub: 'Telemetry, Logging & Alerting', x: 50, y: 92, level: 5 }
  ];

  const connections = [
    { from: 'app', to: 'data' },
    { from: 'data', to: 'aws' },
    { from: 'data', to: 'azure' },
    { from: 'data', to: 'gcp' },
    { from: 'aws', to: 'infra' },
    { from: 'azure', to: 'infra' },
    { from: 'gcp', to: 'infra' },
    { from: 'infra', to: 'obs' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found: string | null = null;
      nodes.forEach((n) => {
        const pxX = (n.x / 100) * width;
        const pxY = (n.y / 100) * height;
        const isCloudProvider = ['aws', 'azure', 'gcp'].includes(n.id);
        const bw = isCloudProvider ? 120 : 210;
        const bh = 44;

        if (mx >= pxX - bw / 2 && mx <= pxX + bw / 2 && my >= pxY - bh / 2 && my <= pxY + bh / 2) {
          found = n.id;
        }
      });
      setActiveNode(found);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const pulses = connections.map(() => ({
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.004
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Convert percentage coords to px
      const pxNodes = nodes.map((n) => ({
        ...n,
        pxX: (n.x / 100) * width,
        pxY: (n.y / 100) * height
      }));

      const nodeMap = new Map(pxNodes.map((n) => [n.id, n]));

      // Draw Connections
      connections.forEach((conn, idx) => {
        const source = nodeMap.get(conn.from);
        const target = nodeMap.get(conn.to);
        if (!source || !target) return;

        ctx.beginPath();
        ctx.moveTo(source.pxX, source.pxY);
        ctx.lineTo(target.pxX, target.pxY);
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Animated Pulse
        const p = pulses[idx];
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;

        const pulseX = source.pxX + (target.pxX - source.pxX) * p.progress;
        const pulseY = source.pxY + (target.pxY - source.pxY) * p.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      pxNodes.forEach((n) => {
        const isCloudProvider = ['aws', 'azure', 'gcp'].includes(n.id);
        const isHovered = activeNode === n.id;

        const boxWidth = isCloudProvider ? 120 : 210;
        const boxHeight = 44;
        const left = n.pxX - boxWidth / 2;
        const top = n.pxY - boxHeight / 2;

        ctx.fillStyle = isHovered
          ? 'rgba(2, 132, 199, 0.12)'
          : isCloudProvider
          ? 'rgba(79, 70, 229, 0.06)'
          : '#ffffff';
        ctx.strokeStyle = isHovered
          ? '#0284c7'
          : isCloudProvider
          ? 'rgba(2, 132, 199, 0.35)'
          : 'rgba(15, 23, 42, 0.12)';
        ctx.lineWidth = isHovered ? 2 : 1;

        ctx.beginPath();
        ctx.roundRect(left, top, boxWidth, boxHeight, 8);
        ctx.fill();
        ctx.stroke();

        // Node Title
        ctx.font = '700 11px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#0284c7' : '#0f172a';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.pxX, top + 18);

        // Subtitle
        ctx.font = '500 9px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#475569';
        ctx.fillText(n.sub, n.pxX, top + 32);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeNode]);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '460px', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
        Hover nodes to highlight multi-cloud integration pathways
      </div>
    </div>
  );
};
