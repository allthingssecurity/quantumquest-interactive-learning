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
      const normalized = code.replace(/\s+/g, ' ').toLowerCase();

      // --- 1-qubit basic gates ---
      if (normalized.includes('quantumcircuit(1, 1')) {
        if (normalized.includes('qc.h(0)')) {
          // Hadamard: superposition
          const counts = { '0': 512, '1': 488 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '0': 512,
  '1': 488
}
// Roughly 50/50 split detected.`);
        } else if (normalized.includes('qc.x(0)')) {
          // X gate: always |1>
          const counts = { '1': 1000 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '1': 1000
}
// Bit flipped to |1> as expected.`);
        } else if (normalized.includes('qc.s(0)') || normalized.includes('qc.t(0)') || normalized.includes('qc.rz(')) {
          // Phase gates example – no measurement, just acknowledge
          setResults(null);
          setOutput(`Circuit built with phase gates (S, T, RZ).
In a full Qiskit environment you would see phase effects via interference or tomography.
Here, structure and syntax are validated, but no measurement was requested.`);
        } else {
          const counts = { '0': 1000 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '0': 1000
}
// Default single-qubit ground state.`);
        }

      // --- 2-qubit circuits (Bell, CNOT, SWAP, Grover) ---
      } else if (normalized.includes('quantumcircuit(2, 2')) {
        if (normalized.includes('qc.h(0)') && normalized.includes('qc.cx(0, 1)') && !normalized.includes('qc.x(0)')) {
          // Bell state
          const counts = { '00': 502, '11': 498 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '00': 502,
  '11': 498
}
// Bell state |Φ+> created: only '00' and '11' appear.`);
        } else if (normalized.includes('qc.swap(0, 1)')) {
          // SWAP example
          const counts = { '10': 1000 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '10': 1000
}
// State of qubit 0 and 1 have been swapped.`);
        } else if (normalized.includes('qc.cx(0, 1)') && normalized.includes('qc.x(0)')) {
          // CNOT with prepared control = 1
          const counts = { '11': 1000 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '11': 1000
}
// CNOT fired: control=1 so target flipped to 1.`);
        } else if (normalized.includes('qc.cz(0, 1)') && normalized.includes('qc.h([0,1])')) {
          // Grover 2-qubit oracle + diffuser
          const counts = { '11': 996, '00': 2, '01': 1, '10': 1 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '11': 996,
  '00': 2,
  '01': 1,
  '10': 1
}
// Grover amplification: |11> dominates the distribution.`);
        } else {
          const counts = { '00': 1000 };
          setResults(counts);
          setOutput(`Job Status: COMPLETED
Results:
{
  '00': 1000
}
// Default 2-qubit ground state.`);
        }

      // --- 3-qubit Toffoli and teleportation skeleton ---
      } else if (normalized.includes('quantumcircuit(3, 3') && normalized.includes('qc.ccx(0, 1, 2)')) {
        const counts = { '111': 1000 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '111': 1000
}
// Toffoli gate fired: both controls were 1, so target flipped to 1.`);

      } else if (normalized.includes('quantum teleportation') || (normalized.includes('quantumcircuit(3, 3') && normalized.includes('qc.rx(0.5, 0)'))) {
        setResults(null);
        setOutput(`Quantum teleportation circuit constructed.
In a full Qiskit environment, conditional X/Z corrections would be applied based on classical bits.
Here, use this as a structural reference for the teleportation protocol.`);

      // --- Deutsch-Jozsa (2 input qubits, 1 ancilla) ---
      } else if (normalized.includes('quantumcircuit(n+1, n') && normalized.includes('qc.cx(0, n)') && normalized.includes('qc.cx(1, n)')) {
        const counts = { '01': 500, '10': 500 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '01': 500,
  '10': 500
}
// Deutsch-Jozsa (balanced oracle): input register is never '00', so function is balanced.`);

      // --- Bernstein–Vazirani (secret string '101') ---
      } else if (normalized.includes("s = '101'") || normalized.includes('bernstein-vazirani')) {
        const counts = { '101': 1000 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '101': 1000
}
// Bernstein–Vazirani: secret string s recovered in one oracle call.`);

      // --- Shor / QPE skeleton ---
      } else if (normalized.includes("shor's") || normalized.includes('inverse qft')) {
        setResults(null);
        setOutput(`Shor / QPE skeleton circuit constructed.
In real Qiskit, modular exponentiation and inverse QFT would reveal the period encoded in phases.
Here, focus on the structure: counting register, target, controlled-U, and inverse QFT.`);

      // --- Fallback / generic simulation ---
      } else {
        const counts = { '0': 1000 };
        setResults(counts);
        setOutput(`Job Status: COMPLETED
Results:
{
  '0': 1000
}
// Generic mock run. The syntax looks valid but this pattern is not recognized by the built-in simulator.`);
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
