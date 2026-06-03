import { useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Branch {
  x: number;
  y: number;
  angle: number;
  length: number;
  depth: number;
  maxDepth: number;
  progress: number;
  speed: number;
  thickness: number;
  color: string;
  children: Branch[];
  parent: Branch | null;
  endX: number;
  endY: number;
}

function createBranch(
  x: number,
  y: number,
  angle: number,
  length: number,
  depth: number,
  maxDepth: number,
  parent: Branch | null
): Branch {
  const endX = x + Math.cos(angle) * length;
  const endY = y + Math.sin(angle) * length;
  return {
    x,
    y,
    angle,
    length,
    depth,
    maxDepth,
    progress: 0,
    speed: 0.003 + Math.random() * 0.004,
    thickness: Math.max(0.5, 2.2 - depth * 0.4),
    color: depth < 2
      ? `rgba(122, 139, 111, ${0.15 + Math.random() * 0.15})`
      : `rgba(212, 168, 83, ${0.08 + Math.random() * 0.1})`,
    children: [],
    parent,
    endX,
    endY,
  };
}

function growTree(): Branch {
  const root = createBranch(0.5, 0.92, -Math.PI / 2, 100, 0, 5, null);
  const queue: Branch[] = [root];

  while (queue.length > 0) {
    const branch = queue.shift()!;
    if (branch.depth >= branch.maxDepth) continue;

    const numChildren = branch.depth < 2 ? 2 + Math.floor(Math.random() * 2) : 1 + Math.floor(Math.random() * 2);

    for (let i = 0; i < numChildren; i++) {
      const angleOffset = (Math.random() - 0.5) * 1.2;
      const childAngle = branch.angle + angleOffset;
      const lengthFactor = 0.55 + Math.random() * 0.25;
      const childLength = branch.length * lengthFactor;

      const child = createBranch(
        branch.endX,
        branch.endY,
        childAngle,
        childLength,
        branch.depth + 1,
        branch.maxDepth,
        branch
      );
      branch.children.push(child);
      queue.push(child);
    }
  }

  return root;
}

function updateBranch(branch: Branch, mouseRef: React.MutableRefObject<{ x: number; y: number }>, w: number, h: number): boolean {
  let anyGrowing = false;

  if (branch.progress < 1) {
    branch.progress = Math.min(1, branch.progress + branch.speed);
    anyGrowing = true;
  }

  // Mouse sway effect
  const mx = mouseRef.current.x;
  const my = mouseRef.current.y;
  const bScreenX = branch.x * w;
  const bScreenY = branch.y * h;
  const dist = Math.sqrt((mx - bScreenX) ** 2 + (my - bScreenY) ** 2);
  const maxDist = 200;
  const force = Math.max(0, 1 - dist / maxDist) * 8;

  const swayX = force * Math.cos(Math.atan2(my - bScreenY, mx - bScreenX)) * 0.01;
  const swayY = force * Math.sin(Math.atan2(my - bScreenY, mx - bScreenX)) * 0.01;

  const currentEndX = branch.x + (Math.cos(branch.angle + swayX) * branch.length * branch.progress) / w;
  const currentEndY = branch.y + (Math.sin(branch.angle + swayY) * branch.length * branch.progress) / h;

  branch.endX = currentEndX;
  branch.endY = currentEndY;

  for (const child of branch.children) {
    child.x = branch.endX;
    child.y = branch.endY;
    if (updateBranch(child, mouseRef, w, h)) {
      anyGrowing = true;
    }
  }

  return anyGrowing;
}

function drawBranch(ctx: CanvasRenderingContext2D, branch: Branch, w: number, h: number) {
  if (branch.progress <= 0) return;

  const startX = branch.parent ? branch.parent.endX * w : branch.x * w;
  const startY = branch.parent ? branch.parent.endY * h : branch.y * h;
  const endX = branch.endX * w;
  const endY = branch.endY * h;

  ctx.beginPath();
  ctx.strokeStyle = branch.color;
  ctx.lineWidth = branch.thickness;
  ctx.lineCap = 'round';
  ctx.moveTo(startX, startY);

  // Quadratic curve for organic feel
  const cpx = (startX + endX) / 2 + (Math.random() - 0.5) * 2;
  const cpy = (startY + endY) / 2;
  ctx.quadraticCurveTo(cpx, cpy, endX, endY);
  ctx.stroke();

  // Draw small flower at leaf tips
  if (branch.depth >= branch.maxDepth - 1 && branch.progress > 0.8) {
    const alpha = (branch.progress - 0.8) * 5;
    ctx.fillStyle = `rgba(212, 168, 83, ${alpha * 0.3})`;
    ctx.beginPath();
    ctx.arc(endX, endY, 2 + Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const child of branch.children) {
    drawBranch(ctx, child, w, h);
  }
}

export function BotanicalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const treeRef = useRef<Branch | null>(null);
  const cycleProgressRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', resize);

    // Initialize tree
    treeRef.current = growTree();
    cycleProgressRef.current = 0;

    let animId: number;
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);

      const delta = time - lastTime;
      if (delta < frameInterval) return;
      lastTime = time - (delta % frameInterval);

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Fade in/out cycle (12s total, 2s fade overlap)
      cycleProgressRef.current += 0.0008;
      if (cycleProgressRef.current > 1) {
        cycleProgressRef.current = 0;
        treeRef.current = growTree();
      }

      let globalAlpha = 1;
      if (cycleProgressRef.current < 0.15) {
        globalAlpha = cycleProgressRef.current / 0.15;
      } else if (cycleProgressRef.current > 0.85) {
        globalAlpha = (1 - cycleProgressRef.current) / 0.15;
      }

      ctx.save();
      ctx.globalAlpha = globalAlpha;

      const tree = treeRef.current;
      if (tree) {
        updateBranch(tree, mouseRef, w, h);
        drawBranch(ctx, tree, w, h);
      }

      ctx.restore();
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M50 95 Q45 70 35 50 Q30 35 20 25 M50 95 Q55 65 65 45 Q70 30 80 20 M50 95 Q48 60 40 40 M50 95 Q52 55 60 35"
            fill="none"
            stroke="#7A8B6F"
            strokeWidth="0.3"
            strokeLinecap="round"
          />
          <circle cx="20" cy="25" r="1.5" fill="#D4A853" opacity="0.3" />
          <circle cx="80" cy="20" r="1.5" fill="#D4A853" opacity="0.3" />
          <circle cx="40" cy="40" r="1" fill="#D4A853" opacity="0.2" />
          <circle cx="60" cy="35" r="1" fill="#D4A853" opacity="0.2" />
        </svg>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
      role="img"
      aria-label="Decorative animated botanical illustration of a Parijata tree with delicate branches and flowers"
    />
  );
}
