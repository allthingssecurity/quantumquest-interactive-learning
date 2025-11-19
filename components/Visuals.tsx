import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Eye, EyeOff, Zap, Leaf, Bird, Cpu } from 'lucide-react';

// --- Holographic AR Container ---
export const HolographicCard = ({ children, active }: { children: React.ReactNode, active: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [sheen, setSheen] = useState('0% 0%');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!active || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setSheen(`${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  if (!active) {
    return (
      <div className="w-full h-full relative">
         {children}
      </div>
    );
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full transition-transform duration-200 ease-out transform-style-3d"
      style={{ transform }}
    >
      {/* Glassmorphism Container */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
         {/* Holographic Sheen */}
         <div 
           className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-br from-transparent via-cyan-400/30 to-transparent mix-blend-overlay"
           style={{ backgroundPosition: sheen }}
         />
         {children}
      </div>
      {/* 3D Floating Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30 pointer-events-none" style={{ transform: 'translateZ(20px)' }} />
    </div>
  );
};


// --- Bloch Sphere Visualization ---
export const BlochSphere = ({ gate }: { gate?: string }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 }); // Angle in degrees

  useEffect(() => {
    if (!gate) return;
    let target = { x: 0, y: 0, z: 0 };
    if (gate === 'H') target = { x: 90, y: 0, z: 45 }; 
    if (gate === 'X') target = { x: 180, y: 0, z: 0 };
    if (gate === 'Z') target = { x: 0, y: 0, z: 180 }; 
    setRotation(target);
  }, [gate]);

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full w-full">
      <h3 className="text-cyan-300 mb-4 text-sm uppercase tracking-widest font-mono">Bloch Sphere</h3>
      <div className="relative w-64 h-64" style={{ transformStyle: 'preserve-3d' }}>
        {/* Sphere Wireframe */}
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <defs>
            <radialGradient id="sphereGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#sphereGrad)" stroke="#22d3ee" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="#22d3ee" strokeWidth="0.2" strokeDasharray="4 2" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="45" y="4" className="text-[8px] fill-cyan-200 font-mono">|0⟩</text>
          <text x="45" y="103" className="text-[8px] fill-cyan-200 font-mono">|1⟩</text>

          <g style={{ 
            transformBox: 'fill-box', 
            transformOrigin: '50% 50%',
            transition: 'transform 1s ease-in-out',
            transform: `rotateZ(${rotation.x}deg) rotateX(${rotation.y}deg)` 
          }}>
            <line x1="50" y1="50" x2="50" y2="10" stroke="#f472b6" strokeWidth="3" markerEnd="url(#arrowhead)" />
          </g>
          
          <defs>
             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
               <polygon points="0 0, 10 3.5, 0 7" fill="#f472b6" />
             </marker>
          </defs>
        </svg>
      </div>
      <div className="mt-8 bg-slate-950/50 px-4 py-2 rounded border border-cyan-900">
        <p className="text-xs text-cyan-400 font-mono">GATE: <span className="text-white font-bold">{gate || 'IDLE'}</span></p>
      </div>
    </div>
  );
};

// --- Schrodinger's Cat ---
export const SchrodingerCat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlive, setIsAlive] = useState(true);

  const toggleBox = () => {
    if (!isOpen) {
      setIsAlive(Math.random() > 0.5);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div 
        className={`w-48 h-48 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 ${isOpen ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]' : 'border-slate-600'} rounded-xl flex items-center justify-center cursor-pointer transition-all transform hover:scale-105`}
        onClick={toggleBox}
      >
        {isOpen ? (
          <div className="text-7xl animate-bounce drop-shadow-2xl">
            {isAlive ? '😺' : '☠️'}
          </div>
        ) : (
          <div className="text-center">
            <span className="text-7xl opacity-50 grayscale">📦</span>
            <p className="text-xs text-cyan-400 mt-4 font-mono blink">CLICK_TO_OBSERVE</p>
          </div>
        )}
      </div>
      <p className="mt-8 font-mono text-cyan-100 bg-slate-900/60 px-4 py-2 rounded">
        Ψ = {isOpen ? (isAlive ? '|Alive⟩' : '|Dead⟩') : <span className="text-purple-400">(|Alive⟩ + |Dead⟩) / √2</span>}
      </p>
    </div>
  );
};

// --- Double Slit ---
export const DoubleSlit = ({ mode }: { mode: 'classical' | 'quantum' | 'observer' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: {x: number, y: number, vy: number, vx: number}[] = [];
    
    const width = canvas.width;
    const height = canvas.height;
    
    const render = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
      // Barrier
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, height/2 - 5, width, 10);
      ctx.fillStyle = '#0f172a'; // Slits
      ctx.fillRect(width/3 - 10, height/2 - 5, 20, 10);
      ctx.fillRect(width*2/3 - 10, height/2 - 5, 20, 10);

      if (Math.random() > 0.85) {
        particles.push({
          x: Math.random() * width,
          y: 0,
          vy: 2,
          vx: (Math.random() - 0.5) * 0.5
        });
      }

      ctx.fillStyle = mode === 'classical' ? '#fbbf24' : '#22d3ee';
      
      particles.forEach((p, i) => {
        p.y += p.vy;
        p.x += p.vx;
        
        if (p.y > height/2 && mode === 'quantum') {
            // Quantum wave interference approximation logic
            const band = Math.sin(p.x * 0.1) * 3;
            p.x += band * 0.2; 
        }

        if (p.y > height/2 && mode === 'observer') {
           const target = p.x < width/2 ? width/3 : width*2/3;
           p.x += (target - p.x) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, mode === 'classical' ? 2 : 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Glow for quantum
        if (mode !== 'classical') {
           ctx.shadowBlur = 5;
           ctx.shadowColor = '#22d3ee';
        } else {
           ctx.shadowBlur = 0;
        }

        if (p.y > height) particles.splice(i, 1);
      });
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationId);
  }, [mode]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <canvas ref={canvasRef} width={320} height={240} className="rounded-lg border border-cyan-900 bg-slate-950 shadow-lg" />
      <div className="flex gap-4 mt-6">
        <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider border border-cyan-900 px-2 py-1 rounded">Sim: {mode}</span>
        {mode === 'observer' && <Eye className="w-5 h-5 text-red-400 animate-pulse" />}
      </div>
    </div>
  );
};

// --- Simple Circuit ---
export const CircuitVisual = ({ demo }: { demo: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
        <svg width="300" height="100" className="overflow-visible">
          <line x1="0" y1="30" x2="300" y2="30" stroke="#94a3b8" strokeWidth="2" />
          <text x="-30" y="35" className="fill-slate-400 font-mono text-xs">q0</text>
          <line x1="0" y1="70" x2="300" y2="70" stroke="#94a3b8" strokeWidth="2" />
          <text x="-30" y="75" className="fill-slate-400 font-mono text-xs">q1</text>

          {demo === 'cnot' && (
             <>
               <circle cx="100" cy="30" r="5" fill="#3b82f6" className="animate-pulse" />
               <circle cx="100" cy="70" r="10" stroke="#3b82f6" strokeWidth="2" fill="none" />
               <line x1="100" y1="30" x2="100" y2="80" stroke="#3b82f6" strokeWidth="2" />
               <line x1="100" y1="60" x2="100" y2="80" stroke="#3b82f6" strokeWidth="2" />
               
               <text x="130" y="20" className="fill-blue-400 text-[10px] font-mono">Control</text>
               <text x="130" y="90" className="fill-blue-400 text-[10px] font-mono">Target (Flip if 1)</text>
             </>
          )}

          {demo === 'entanglement' && (
            <>
               <rect x="50" y="15" width="30" height="30" fill="#8b5cf6" rx="2" />
               <text x="60" y="35" fill="white" fontSize="14" fontFamily="monospace">H</text>
               
               <line x1="120" y1="30" x2="120" y2="70" stroke="#3b82f6" strokeWidth="2" />
               <circle cx="120" cy="30" r="4" fill="#3b82f6" />
               <circle cx="120" cy="70" r="8" stroke="#3b82f6" strokeWidth="2" fill="none" />
               
               <rect x="220" y="15" width="30" height="30" fill="#334155" rx="4" stroke="#64748b" />
               <text x="227" y="35" fill="#94a3b8" fontSize="12">M</text>
               <rect x="220" y="55" width="30" height="30" fill="#334155" rx="4" stroke="#64748b" />
               <text x="227" y="75" fill="#94a3b8" fontSize="12">M</text>
            </>
          )}
        </svg>
    </div>
  )
}

// --- Grover Search Analogy ---
export const GroverVisual = () => {
  const [items, setItems] = useState(Array(16).fill(0));
  const [found, setFound] = useState(false);

  const search = () => {
    setFound(false);
    let newItems = [...items];
    const targetIndex = 10; 
    // 1. Superposition
    newItems = newItems.map(() => 0.1);
    setItems([...newItems]);
    
    setTimeout(() => {
      // 2. Oracle Phase Flip
      newItems[targetIndex] = -0.1;
      setItems([...newItems]);
      setTimeout(() => {
        // 3. Diffusion (Amplification)
        newItems = newItems.map((v, i) => i === targetIndex ? 0.9 : 0.01);
        setItems([...newItems]);
        setFound(true);
      }, 800);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center w-full px-8 py-6">
      <div className="grid grid-cols-4 gap-3 mb-6 w-full max-w-xs">
        {items.map((val, i) => (
          <div key={i} className="w-full aspect-square rounded bg-slate-800/50 border border-slate-700 flex items-end justify-center overflow-hidden transition-all duration-500">
            <div 
              className={`w-full transition-all duration-500 ${val < 0 ? 'bg-pink-500' : 'bg-cyan-500'} ${found && val > 0.5 ? 'shadow-[0_0_15px_#22d3ee]' : ''}`} 
              style={{ height: `${Math.max(Math.abs(val) * 100, 5)}%` }}
            ></div>
          </div>
        ))}
      </div>
      <button onClick={search} className="px-6 py-2 bg-cyan-600/20 border border-cyan-500/50 hover:bg-cyan-600/40 rounded-full text-cyan-300 text-sm font-mono tracking-wider flex items-center gap-2 transition-all">
        <RotateCcw size={14} /> RUN_GROVER_ITERATION
      </button>
    </div>
  );
}

// --- Biology Visuals ---
export const BioVisual = ({ type }: { type: 'photo' | 'bird' }) => {
  return (
     <div className="flex flex-col items-center justify-center h-full p-6 relative overflow-hidden">
       {type === 'photo' ? (
         <>
           <Leaf size={100} className="text-green-400 animate-pulse drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
           <div className="absolute w-full h-full flex justify-center items-center pointer-events-none">
             {[1,2,3,4].map(i => (
               <div key={i} className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-75" style={{ animationDuration: `${1 + i*0.5}s`, transform: `rotate(${i * 45}deg) translateX(50px)` }} />
             ))}
           </div>
           <p className="mt-8 text-green-300 font-mono bg-green-900/30 px-4 py-2 rounded border border-green-800">Simultaneous Pathfinding</p>
         </>
       ) : (
         <>
           <Bird size={100} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
           <div className="absolute inset-0 border-t-2 border-b-2 border-blue-500/10 animate-pulse" />
           <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent transform rotate-45" />
           <p className="mt-8 text-blue-300 font-mono bg-blue-900/30 px-4 py-2 rounded border border-blue-800">Radical Pair Mechanism</p>
         </>
       )}
     </div>
  );
}

// --- Hardware Visuals ---
export const HardwareVisual = ({ type }: { type: 'chip' | 'ion' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 relative">
      {type === 'chip' ? (
        <>
          <div className="relative group">
             {/* Chandelier effect */}
             <div className="w-4 h-24 bg-gradient-to-b from-amber-200 to-amber-600 mx-auto rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
             <div className="w-24 h-24 rounded-full border-4 border-amber-600 flex items-center justify-center bg-slate-900 relative z-10 shadow-2xl">
               <Cpu size={48} className="text-amber-400 animate-pulse" />
             </div>
             {/* Cold mist effect */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-amber-200 font-mono text-xl drop-shadow">-273.15°C</p>
            <p className="text-xs text-amber-500 uppercase tracking-widest">Dilution Refrigerator</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-6 items-center justify-center py-10">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] animate-bounce" style={{ animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
          <div className="w-64 h-[2px] bg-purple-500/50 blur-[1px]" />
          <p className="mt-8 text-purple-200 font-mono bg-purple-900/30 px-4 py-2 rounded border border-purple-800">Trapped Ytterbium Ions</p>
        </>
      )}
    </div>
  )
}