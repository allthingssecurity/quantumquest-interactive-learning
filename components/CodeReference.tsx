import React, { useState } from 'react';
import { CODE_EXAMPLES } from '../constants';
import { Copy, Check } from 'lucide-react';

export const CodeReference: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(CODE_EXAMPLES.map(c => c.category))];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filtered = filter === 'All' ? CODE_EXAMPLES : CODE_EXAMPLES.filter(c => c.category === filter);

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-400 mb-2 font-mono">{'<Code_Lab />'}</h1>
        <p className="text-slate-400">
          Reference implementation for Qiskit. You can copy-paste these into the Lab editor to run them directly in your browser,
          or into a local Jupyter environment if you prefer.
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === cat ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filtered.map(ex => (
          <div key={ex.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-800/30 flex justify-between items-start">
              <div>
                <div className="text-xs uppercase text-green-500 font-bold tracking-wider mb-1">{ex.category}</div>
                <h3 className="text-lg font-semibold text-slate-200">{ex.title}</h3>
                <p className="text-sm text-slate-500">{ex.description}</p>
              </div>
              <button
                onClick={() => handleCopy(ex.code, ex.id)}
                className="p-2 hover:bg-slate-700 rounded transition-colors text-slate-400"
                title="Copy Code"
              >
                {copiedId === ex.id ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
            <div className="flex-1 bg-[#1e1e1e] p-4 overflow-x-auto custom-scrollbar">
              <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                <code>{ex.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
