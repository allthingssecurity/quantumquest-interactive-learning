import React, { useState, useMemo, useEffect } from 'react';
import { COURSE_CONTENT } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { CodeReference } from './components/CodeReference';
import { ChevronLeft, ChevronRight, Menu, BookOpen, Code, Activity, X, Terminal, Box, Layers } from 'lucide-react';

const App: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'course' | 'code'>('course');
  const [arMode, setArMode] = useState(true); // Default to AR on for wow factor

  // Check URL params for direct linking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'code') {
      setViewMode('code');
    }
  }, []);

  const allSlidesFlat = useMemo(() => {
    return COURSE_CONTENT.flatMap((mod, mIdx) => 
      mod.slides.map((slide, sIdx) => ({ ...slide, mIdx, sIdx }))
    );
  }, []);

  const currentGlobalIndex = useMemo(() => {
    let count = 0;
    for (let i = 0; i < currentModuleIndex; i++) {
      count += COURSE_CONTENT[i].slides.length;
    }
    return count + currentSlideIndex;
  }, [currentModuleIndex, currentSlideIndex]);

  const handleNext = () => {
    const currentModule = COURSE_CONTENT[currentModuleIndex];
    if (currentSlideIndex < currentModule.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else if (currentModuleIndex < COURSE_CONTENT.length - 1) {
      setCurrentModuleIndex(prev => prev + 1);
      setCurrentSlideIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    } else if (currentModuleIndex > 0) {
      const prevModIdx = currentModuleIndex - 1;
      setCurrentModuleIndex(prevModIdx);
      setCurrentSlideIndex(COURSE_CONTENT[prevModIdx].slides.length - 1);
    }
  };

  const progressPercentage = ((currentGlobalIndex + 1) / allSlidesFlat.length) * 100;
  const currentSlideData = COURSE_CONTENT[currentModuleIndex].slides[currentSlideIndex];

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* AR Background Effect */}
      {arMode && (
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute inset-0 bg-grid-animated opacity-10" style={{ transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)' }} />
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-950 to-transparent" />
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="flex-none h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-between px-4 lg:px-8">
         <div className="flex items-center gap-4">
           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 text-slate-400 hover:text-white">
             <Menu />
           </button>
           <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl tracking-tight">
             <Activity className="w-6 h-6" />
             <span className="hidden sm:inline">QuantumQuest</span>
           </div>
         </div>

         {/* Center Tabs */}
         <div className="flex items-center gap-1 bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
            <button 
               onClick={() => setViewMode('course')}
               className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'course' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
             >
               <BookOpen size={16} /> Course
             </button>
             <button 
               onClick={() => setViewMode('code')}
               className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'code' ? 'bg-green-900/40 text-green-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
             >
               <Terminal size={16} /> Lab
             </button>
         </div>

         {/* Right Actions */}
         <div className="flex items-center gap-4">
           <button 
             onClick={() => setArMode(!arMode)}
             className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider transition-all ${arMode ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
           >
             <Box size={14} /> {arMode ? 'AR ON' : 'AR OFF'}
           </button>
         </div>
      </header>

      <div className="flex flex-1 overflow-hidden z-10">
        {/* Sidebar Navigation (Course Mode Only) */}
        <aside 
          className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-900/95 backdrop-blur border-r border-slate-800 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${viewMode === 'course' ? 'lg:relative lg:translate-x-0' : 'hidden'} flex flex-col pt-16 lg:pt-0`}
        >
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
            {viewMode === 'course' && COURSE_CONTENT.map((module, mIdx) => (
              <div key={module.id} className="mb-8 animate-fadeIn">
                <h3 className="text-[10px] font-bold uppercase text-slate-500 mb-3 px-2 tracking-widest flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Layers size={10} />
                  {module.title.split(':')[0]}
                </h3>
                <ul className="space-y-0.5">
                  {module.slides.map((slide, sIdx) => {
                    const isActive = mIdx === currentModuleIndex && sIdx === currentSlideIndex;
                    return (
                      <li key={slide.id}>
                        <button
                          onClick={() => {
                            setCurrentModuleIndex(mIdx);
                            setCurrentSlideIndex(sIdx);
                            setSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-slate-700'}`}></span>
                            <span className="truncate">{slide.title}</span>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
           
           {/* Content Scrollable */}
           <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
             {viewMode === 'course' ? (
               <div className="p-6 lg:p-16 max-w-screen-2xl mx-auto w-full">
                  <SlideRenderer slide={currentSlideData} arMode={arMode} />
               </div>
             ) : (
               <CodeReference />
             )}
           </div>

           {/* Bottom Navigation Bar (Course Mode Only) */}
           {viewMode === 'course' && (
             <div className="flex-none bg-slate-900/80 backdrop-blur border-t border-slate-800 p-4 lg:px-12 z-20">
               {/* Progress Bar */}
               <div className="w-full bg-slate-800 h-1 rounded-full mb-4 overflow-hidden">
                 <div 
                   className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full transition-all duration-500 ease-out shadow-[0_0_10px_#22d3ee]"
                   style={{ width: `${progressPercentage}%` }}
                 />
               </div>

               <div className="flex items-center justify-between max-w-7xl mx-auto">
                 <button 
                   onClick={handlePrev}
                   disabled={currentGlobalIndex === 0}
                   className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors group"
                 >
                   <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                   <span className="hidden sm:inline">Previous</span>
                 </button>

                 <span className="text-slate-500 text-xs font-mono tracking-widest uppercase">
                   Slide {currentGlobalIndex + 1} / {allSlidesFlat.length}
                 </span>

                 <button 
                   onClick={handleNext}
                   disabled={currentGlobalIndex === allSlidesFlat.length - 1}
                   className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none group"
                 >
                   <span>{currentGlobalIndex === allSlidesFlat.length - 1 ? 'FINISH' : 'NEXT STEP'}</span>
                   <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
             </div>
           )}
        </main>
      </div>
    </div>
  );
};

export default App;