"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseOffset: number;
  colorPhase: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  colorPhase: number;
}

function lerpColor(t: number): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, t));
  return [
    255 + (0 - 255) * clamped,
    140 + (180 - 140) * clamped,
    30 + (255 - 30) * clamped,
  ];
}

function colorStr(t: number, alpha: number): string {
  const [r, g, b] = lerpColor(t);
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
}

function brightColorStr(t: number, alpha: number): string {
  const [r, g, b] = lerpColor(t);
  const mix = 0.5;
  return `rgba(${Math.round(r + (255 - r) * mix)}, ${Math.round(g + (255 - g) * mix)}, ${Math.round(b + (255 - b) * mix)}, ${alpha})`;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const initNodes = useCallback((width: number, height: number) => {
    const count = 90;
    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
        pulseOffset: Math.random() * Math.PI * 2,
        colorPhase: Math.random() * Math.PI * 2,
      });
    }
    nodesRef.current = nodes;
  }, []);

  const initParticles = useCallback((width: number, height: number) => {
    const count = 120;
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const maxLife = Math.random() * 400 + 200;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -(Math.random() * 0.2 + 0.05),
        size: Math.random() * 1.8 + 0.3,
        opacity: 0,
        maxOpacity: Math.random() * 0.35 + 0.1,
        life: Math.random() * maxLife,
        maxLife,
        colorPhase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodesRef.current.length === 0) {
        initNodes(w, h);
        initParticles(w, h);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const maxDist = 160;
    const mouseRadius = 220;
    const mouseStrength = 0.025;
    const colorSpeed = 0.3;

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      timeRef.current += 0.005;
      const time = timeRef.current;
      const nodes = nodesRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.life += 1;
        if (p.life >= p.maxLife) {
          p.x = Math.random() * w;
          p.y = h + 10;
          p.life = 0;
          p.maxLife = Math.random() * 400 + 200;
          p.maxOpacity = Math.random() * 0.35 + 0.1;
          p.colorPhase = Math.random() * Math.PI * 2;
          p.size = Math.random() * 1.8 + 0.3;
        }
        p.vx += Math.sin(time * 1.5 + p.colorPhase) * 0.001;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.1) {
          p.opacity = (lifeRatio / 0.1) * p.maxOpacity;
        } else if (lifeRatio > 0.8) {
          p.opacity = ((1 - lifeRatio) / 0.2) * p.maxOpacity;
        } else {
          p.opacity = p.maxOpacity;
        }
        const pColorT = (Math.sin(time * colorSpeed + p.colorPhase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = colorStr(pColorT, p.opacity);
        ctx.fill();
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = colorStr(pColorT, p.opacity * 0.08);
          ctx.fill();
        }
      }

      const nodeColors: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        nodeColors[i] = (Math.sin(time * colorSpeed + nodes[i].colorPhase) + 1) / 2;
      }

      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * mouseStrength;
          node.vx -= (dx / dist) * force;
          node.vy -= (dy / dist) * force;
        }
        node.vx += Math.sin(time + node.pulseOffset) * 0.002;
        node.vy += Math.cos(time * 0.7 + node.pulseOffset) * 0.002;
        node.vx *= 0.985;
        node.vy *= 0.985;
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -60) node.x = w + 60;
        if (node.x > w + 60) node.x = -60;
        if (node.y < -60) node.y = h + 60;
        if (node.y > h + 60) node.y = -60;
      }

      const connectionCount = new Array(nodes.length).fill(0);
      const pairs: [number, number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            pairs.push([i, j, dist]);
            connectionCount[i]++;
            connectionCount[j]++;
          }
        }
      }

      for (let p = 0; p < pairs.length; p++) {
        const [i, j] = pairs[p];
        for (let q = p + 1; q < pairs.length; q++) {
          const [k, l, distKL] = pairs[q];
          let third = -1;
          if (k === i || k === j) third = l;
          else if (l === i || l === j) third = k;
          if (third === -1) continue;
          const shared = k === i || k === j ? k : l;
          const otherFromPair = shared === i ? j : shared === j ? i : -1;
          if (otherFromPair === -1) continue;
          const tdx = nodes[third].x - nodes[otherFromPair].x;
          const tdy = nodes[third].y - nodes[otherFromPair].y;
          const tDist = Math.sqrt(tdx * tdx + tdy * tdy);
          if (tDist < maxDist) {
            const avgDist = (pairs[p][2] + distKL + tDist) / 3;
            const opacity = (1 - avgDist / maxDist) * 0.025;
            const avgColor = (nodeColors[i] + nodeColors[j] + nodeColors[third]) / 3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.lineTo(nodes[third].x, nodes[third].y);
            ctx.closePath();
            ctx.fillStyle = colorStr(avgColor, opacity);
            ctx.fill();
          }
          break;
        }
      }

      for (const [i, j, dist] of pairs) {
        const opacity = (1 - dist / maxDist) * 0.35;
        const lineColor = (nodeColors[i] + nodeColors[j]) / 2;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = colorStr(lineColor, opacity);
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.15 + 0.85;
        const connections = connectionCount[i];
        const connBoost = Math.min(connections * 0.06, 0.4);
        const finalOpacity = (node.opacity + connBoost) * pulse;
        const finalSize = node.size + connections * 0.15;
        const ct = nodeColors[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = colorStr(ct, finalOpacity * 0.08);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = colorStr(ct, finalOpacity);
        ctx.fill();
        if (connections > 3) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = brightColorStr(ct, finalOpacity * 0.6);
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initNodes, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
