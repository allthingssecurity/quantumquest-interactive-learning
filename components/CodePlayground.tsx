import React, { useState } from 'react';
import { Play, RotateCw } from 'lucide-react';

interface CodePlaygroundProps {
  initialCode?: string;
  onRun?: () => void;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Record<string, number> | null>(null);

  const handleRun = () => {
    setLoading(true);
    setOutput(null);
    setResults(null);

    // Simulate network/processing delay
    setTimeout(() => {
      setLoading(false);
      // Mock Logic based on code content keywords
      if (code.includes('qc.h(0)') && code.includes('qc.measure(0, 0)')) {
        // Exercise 1: Superposition
        const counts = { '0': 512, '1': 488 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '0': 512,
  '1': 488
}
// Roughly 50/50 split detected.`);
      } else if (code.includes('qc.cx(0, 1)')) {
        // Exercise 2: Entanglement
        const counts = { '00': 498, '11': 502 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '00': 498,
  '11': 502
}
// Perfect correlation. No '01' or '10' observed.`);
      } else if (code.includes('Grover') || code.includes('Oracle') || (code.includes('cz') && code.includes('h'))) {
        // Exercise 3/4: Grover
        const counts = { '11': 998, '00': 1, '01': 0, '10': 1 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '11': 998,
  '00': 1,
  '01': 0,
  '10': 1
}
// Target |11> found with >99% probability.`);
      } else {
        const counts = { '0': 1000 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '0': 1000
}
// Default state |0> maintained.`);
      }
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col bg-slate-900 rounded-lg border border-slate-700 overflow-hidden shadow-2xl">
      {/* Toolbar */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
           <span className="w-3 h-3 rounded-full bg-red-500"/>
           <span className="w-3 h-3 rounded-full bg-yellow-500"/>
           <span className="w-3 h-3 rounded-full bg-green-500"/>
           <span className="ml-3 text-xs text-slate-400 font-mono">main.py</span>
        </div>
        <button 
          onClick={handleRun}
          disabled={loading}
          className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold transition-colors ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 text-white'}`}
        >
          {loading ? <RotateCw className="w-3 h-3 animate-spin"/> : <Play className="w-3 h-3 fill-current"/>}
          RUN QISKIT
        </button>
      </div>

      {/* Editor */}
      <div className="p-0 grid grid-cols-1 md:grid-cols-2 h-80">
        <textarea
          className="w-full h-full bg-[#1e1e1e] text-slate-300 p-4 font-mono text-sm resize-none focus:outline-none custom-scrollbar"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
        />
        
        {/* Output Console + Histogram */}
        <div className="bg-[#0f172a] border-l border-slate-700 p-4 font-mono text-xs text-green-400 overflow-y-auto custom-scrollbar">
          <div className="opacity-50 mb-2"># Terminal Output</div>
          {loading && (
            <div className="animate-pulse text-yellow-400">
              Initializing Aer backend...<br/>
              Transpiling circuit...<br/>
              Running simulation...
            </div>
          )}
          {!loading && output && (
            <pre className="whitespace-pre-wrap mb-4">{output}</pre>
          )}
          {!loading && !output && (
            <div className="text-slate-600 italic">
              // Click Run to execute simulation
            </div>
          )}

          {/* Probability histogram */}
          {!loading && results && (
            <div className="mt-2 text-slate-200">
              <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
                Probability Histogram
              </div>
              {(() => {
                const entries = Object.entries(results);
                const totalShots = entries.reduce((acc, [, v]) => acc + v, 0);
                return (
                  <div className="space-y-1">
                    {entries.map(([bitstring, count]) => {
                      const p = totalShots > 0 ? count / totalShots : 0;
                      const width = `${Math.max(p * 100, 4)}%`;
                      return (
                        <div key={bitstring} className="flex items-center gap-2">
                          <span className="w-10 text-[11px] text-slate-400">
                            {bitstring}
                          </span>
                          <div className="flex-1 h-3 bg-slate-800 rounded overflow-hidden">
                            <div
                              className="h-full bg-emerald-500/80"
                              style={{ width }}
                            />
                          </div>
                          <span className="w-14 text-right text-[11px] text-slate-400">
                            {(p * 100).toFixed(1)}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
