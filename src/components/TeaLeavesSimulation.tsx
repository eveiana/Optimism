import React, { useEffect, useRef } from 'react';
import funnelCleanImg from '../assets/images/funnel_clean.png';

export interface TeaLeavesSimulationProps {
  onOpenZoom?: () => void;
  selectedTier?: 'foundations' | 'capabilities' | 'outcomes' | null;
  onSelectTier?: (tier: 'foundations' | 'capabilities' | 'outcomes' | null) => void;
}

interface TeaGrain {
  x: number;          // Normalized 0..1 relative to image width
  y: number;          // Normalized 0..1 relative to image height
  vx: number;
  vy: number;
  length: number;     // Normalized length
  widthRatio: number; // Aspect ratio (width / length)
  angle: number;      // Rotation angle
  angularSpeed: number;
  color: string;
  wobblePhase: number;
  wobbleSpeed: number;
  alpha: number;
  driftAmplitude: number;
}

// Authentic African CTC and Orthodox tea leaf color palette matching the artwork:
// Dominated by rich roasted tea browns, with occasional golden pekoe tips and fresh green specks
const GRAIN_COLORS = [
  // Deep roasted black/brown tea leaves (majority)
  '#3E1E0E', '#462210', '#4E2713', '#562C15', '#5F3118',
  '#68361B', '#703B1D', '#794020', '#824523', '#8B4A26',
  '#512914', '#47230F', '#3B1B0A', '#5A2E16', '#643419',
  // Warm amber / orthodox tips
  '#8E4D27', '#97532A', '#A1592D', '#7B3F1D',
  // Golden pekoe tips (as seen in the artwork / user photo)
  '#D97706', '#EAB308', '#B45309', '#CA8A04',
  // Fresh green tea specks (as seen in the artwork / user photo)
  '#15803D', '#16A34A', '#22C55E', '#166534'
];

export const TeaLeavesSimulation: React.FC<TeaLeavesSimulationProps> = ({
  selectedTier,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const grainsRef = useRef<TeaGrain[]>([]);
  const animFrameRef = useRef<number>(0);

  // Spout / stream center and boundary constants (normalized 0..1)
  const STREAM_CENTER_X = 0.355;
  const TOP_RIM_Y = 0.222;        // Just below the black sieve oval rim
  const CUP_RIM_TOP_Y = 0.618;    // Entrance into the mouth of the cup
  const CUP_RIM_BOTTOM_Y = 0.650; // Interior cutoff - leaves disappear into the cup
  const CUP_MOUTH_LEFT_X = 0.235;
  const CUP_MOUTH_RIGHT_X = 0.485;

  // Gaussian-like random helper for natural stream density concentration
  const randomStreamX = (yProgress: number) => {
    // Top width ~ 0.22 to 0.48, funneling gently towards cup rim
    const spread = 0.125 - yProgress * 0.015;
    // Bell curve approximation using sum of 3 uniform randoms
    const u = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
    return STREAM_CENTER_X + u * (spread * 2.2);
  };

  const createGrain = (customX?: number, customY?: number): TeaGrain => {
    const y = customY !== undefined ? customY : (TOP_RIM_Y + Math.random() * 0.02);
    const yProg = Math.max(0, Math.min(1, (y - TOP_RIM_Y) / (CUP_RIM_TOP_Y - TOP_RIM_Y)));
    const x = customX !== undefined ? customX : randomStreamX(yProg);

    // Pick color with weighted distribution: mostly roasted browns, rare golden & green
    const colorRoll = Math.random();
    let color: string;
    if (colorRoll < 0.88) {
      // Roasted tea browns & ambers (indices 0 to 18)
      color = GRAIN_COLORS[Math.floor(Math.random() * 19)];
    } else if (colorRoll < 0.94) {
      // Golden pekoe tips (indices 19 to 22)
      color = GRAIN_COLORS[19 + Math.floor(Math.random() * 4)];
    } else {
      // Fresh green leaf specks (indices 23 to 26)
      color = GRAIN_COLORS[23 + Math.floor(Math.random() * 4)];
    }

    // Size: small elongated oval granules (matching user's reference photo)
    const length = 0.007 + Math.random() * 0.008; // normalized length
    const widthRatio = 0.45 + Math.random() * 0.25; // 0.45 to 0.70 width/length

    // Speed: varied stream cascade velocity for visual depth
    const vy = 0.0028 + Math.random() * 0.0024;
    const vx = (Math.random() - 0.5) * 0.0006;

    return {
      x,
      y,
      vx,
      vy,
      length,
      widthRatio,
      angle: (Math.random() - 0.5) * 0.5, // slightly tilted relative to vertical
      angularSpeed: (Math.random() - 0.5) * 0.03,
      color,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 2 + Math.random() * 3,
      alpha: 1,
      driftAmplitude: 0.0003 + Math.random() * 0.0004,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Pre-populate 320 grains across the entire cascade path (y: TOP_RIM_Y to CUP_RIM_TOP_Y)
    // so the animated stream is fully active and dense immediately on load!
    if (grainsRef.current.length === 0) {
      for (let i = 0; i < 320; i++) {
        const y = TOP_RIM_Y + Math.random() * (CUP_RIM_TOP_Y - TOP_RIM_Y);
        const yProg = (y - TOP_RIM_Y) / (CUP_RIM_TOP_Y - TOP_RIM_Y);
        const x = randomStreamX(yProg);
        grainsRef.current.push(createGrain(x, y));
      }
    }

    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const width = canvas.width;
      const height = canvas.height;

      // Clear the canvas completely so the authentic artwork remains 100% visible
      ctx.clearRect(0, 0, width, height);

      // Maintain a dense cascade of ~340 to 400 active tea grains
      const targetCount = 350;
      if (grainsRef.current.length < targetCount) {
        const toSpawn = Math.min(8, targetCount - grainsRef.current.length);
        for (let s = 0; s < toSpawn; s++) {
          grainsRef.current.push(createGrain());
        }
      }

      // Update and draw each tea grain
      for (let i = grainsRef.current.length - 1; i >= 0; i--) {
        const grain = grainsRef.current[i];

        // Air flutter and gentle drift
        grain.wobblePhase += grain.wobbleSpeed * dt;
        const drift = Math.sin(grain.wobblePhase) * grain.driftAmplitude;
        grain.x += grain.vx + drift;
        grain.y += grain.vy;
        grain.angle += grain.angularSpeed;

        // Subtle pull towards stream center as it falls
        const pull = (STREAM_CENTER_X - grain.x) * 0.005;
        grain.x += pull;

        // ENTERING THE CUP (y between CUP_RIM_TOP_Y and CUP_RIM_BOTTOM_Y)
        // When leaf crosses into the mouth/rim of the cup:
        if (grain.y >= CUP_RIM_TOP_Y && grain.x >= CUP_MOUTH_LEFT_X && grain.x <= CUP_MOUTH_RIGHT_X) {
          // Smoothly fade out into the cup cavity depth
          const depthProgress = (grain.y - CUP_RIM_TOP_Y) / (CUP_RIM_BOTTOM_Y - CUP_RIM_TOP_Y);
          grain.alpha = Math.max(0, 1 - depthProgress);
        }

        // REMOVAL CRITERIA:
        // 1. Dips below CUP_RIM_BOTTOM_Y (disappears into the cup)
        // 2. Faded out
        // 3. IMPORTANT: Never draw anything below CUP_RIM_BOTTOM_Y so outside of cup is totally clean!
        if (grain.y >= CUP_RIM_BOTTOM_Y || grain.alpha <= 0.02) {
          grainsRef.current.splice(i, 1);
          continue;
        }

        // RENDER TEA GRAIN (oval/drop shape matching user's reference)
        const px = grain.x * width;
        const py = grain.y * height;
        const ry = (grain.length * 0.5) * height;
        const rx = ry * grain.widthRatio;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(grain.angle);
        ctx.globalAlpha = grain.alpha;
        ctx.fillStyle = grain.color;

        // Draw organic rounded tea particle (smooth ellipse)
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // ResizeObserver for crisp retina rendering
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Clicking or tapping sprinkles an extra burst of tea grains
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    for (let i = 0; i < 16; i++) {
      const offsetX = (Math.random() - 0.5) * 0.06;
      const offsetY = (Math.random() - 0.5) * 0.04;
      grainsRef.current.push(createGrain(clickX + offsetX, Math.max(TOP_RIM_Y, clickY + offsetY)));
    }
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Container: Authentic Artwork with all tea leaves dynamically animated */}
      <div
        ref={containerRef}
        onClick={handleCanvasClick}
        className="relative max-w-[420px] w-full aspect-[1024/1041] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-white/5 cursor-pointer select-none"
      >
        {/* Base Layer: Authentic illustration with seamless cleaned background so only the animated stream is seen */}
        <img
          src={funnelCleanImg}
          alt="The Funnel of Optimism Artwork by Dr Anand Kulkarni"
          className="w-full h-full object-contain block pointer-events-none select-none"
          referrerPolicy="no-referrer"
        />

        {/* Live Animated Tea Grains Simulation Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />

        {/* Interactive Framework Highlights */}
        {selectedTier === 'outcomes' && (
          <div className="absolute top-[67%] left-[18%] w-[42%] h-[27%] rounded-2xl border-2 border-yellow-300 bg-yellow-400/10 pointer-events-none z-10 animate-pulse" />
        )}
        {selectedTier === 'capabilities' && (
          <div className="absolute top-[28%] left-[22%] w-[36%] h-[32%] rounded-2xl border-2 border-yellow-300 bg-yellow-400/10 pointer-events-none z-10 animate-pulse" />
        )}
        {selectedTier === 'foundations' && (
          <div className="absolute top-[8%] left-[18%] w-[40%] h-[22%] rounded-2xl border-2 border-yellow-300 bg-yellow-400/10 pointer-events-none z-10 animate-pulse" />
        )}
      </div>
    </div>
  );
};
