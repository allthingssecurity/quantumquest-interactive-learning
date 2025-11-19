import React from 'react';
import { Slide } from '../types';
import { BlochSphere, SchrodingerCat, DoubleSlit, CircuitVisual, GroverVisual, BioVisual, HardwareVisual, HolographicCard } from './Visuals';
import { CodePlayground } from './CodePlayground';
import { Cpu, ArrowRight } from 'lucide-react';

interface SlideRendererProps {
  slide: Slide;
  arMode: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, arMode }) => {
  const renderVisual = () => {
    const props = slide.visualProps || {};
    
    switch (slide.visualType) {
      case 'bloch':
        return <BlochSphere gate={props.demoGate} />;
      case 'cat':
        return <SchrodingerCat />;
      case 'double-slit':
        return <DoubleSlit mode={props.mode || 'classical'} />;
      case 'circuit':
        return <CircuitVisual demo={props.demo} />;
      case 'search-analogy':
        return <GroverVisual />;
      case 'biology-photo':
        return <BioVisual type="photo" />;
      case 'biology-bird':
        return <BioVisual type="bird" />;
      case 'hardware-chip':
        return <HardwareVisual type="chip" />;
      case 'hardware-ion':
        return <HardwareVisual type="ion" />;
      case 'turing':
        return <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500"><Cpu size={80} className="text-cyan-500/50" /><p className="font-mono">Universal Turing Machine</p></div>;
      case 'shor-visual':
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-6">
             <div className="text-5xl font-mono text-purple-400 font-bold tracking-widest drop-shadow-lg">15 = ?</div>
             <ArrowRight className="rotate-90 mx-auto text-slate-600 w-8 h-8" />
             <div className="flex gap-4 text-3xl font-mono text-green-400">
                <span className="border border-green-500/50 px-4 py-2 rounded bg-green-500/10">3</span>
                <span className="self-center">x</span>
                <span className="border border-green-500/50 px-4 py-2 rounded bg-green-500/10">5</span>
             </div>
             <p className="text-xs text-slate-400 mt-4 max-w-xs">Period Finding (QFT) reveals the hidden structure of the number.</p>
          </div>
        );
      case 'code-editor':
        return <CodePlayground initialCode={slide.codeInitial} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full animate-fadeIn max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800/50 pb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 tracking-tight drop-shadow-sm">
          {slide.title}
        </h2>
      </div>

      <div className={`grid ${slide.visualType && slide.visualType !== 'none' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-12 h-full items-center`}>
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
          {slide.content.map((point, idx) => (
            <div key={idx} className="flex items-start gap-5 text-lg md:text-xl text-slate-300 leading-relaxed group">
               <div className="mt-2.5 min-w-[8px] min-h-[8px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />
               <p className="font-light tracking-wide group-hover:text-white transition-colors">{point}</p>
            </div>
          ))}
        </div>

        {/* Visual Content - Wrapped in Holographic Card */}
        {slide.visualType && slide.visualType !== 'none' && (
          <div className="order-1 lg:order-2 h-full min-h-[350px] lg:min-h-[500px] max-h-[600px] w-full flex items-center justify-center perspective-1000">
            <HolographicCard active={arMode}>
              {renderVisual()}
            </HolographicCard>
          </div>
        )}
      </div>
    </div>
  );
};