import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

interface ModuleQuizProps {
  moduleTitle: string;
  questions: QuizQuestion[];
}

export const ModuleQuiz: React.FC<ModuleQuizProps> = ({ moduleTitle, questions }) => {
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qid: string, idx: number) => {
    setAnswers(prev => ({ ...prev, [qid]: idx }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach(q => {
      const ans = answers[q.id];
      if (ans === q.correctIndex) {
        correct += 1;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const total = questions.length;

  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-12 animate-fadeIn">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-cyan-400">
          {moduleTitle} – Checkpoint Quiz
        </h1>
        <p className="text-slate-400 text-sm">
          Answer the questions below. Click &quot;Submit quiz&quot; to see your score and feedback.
        </p>
        {submitted && (
          <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            <span className="font-semibold">
              Score: {score} / {total}
            </span>
            <span className="text-xs text-emerald-200/80">
              ({Math.round((score / Math.max(total, 1)) * 100)}%)
            </span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div
            key={q.id}
            className="rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg p-4 md:p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wide text-cyan-400 mb-1">
                  Question {qIndex + 1}
                </div>
                <p className="text-base md:text-lg text-slate-100">
                  {q.question}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                const selected = answers[q.id] === idx;
                const isCorrect = q.correctIndex === idx;
                let borderClass = 'border-slate-700';
                let bgClass = 'bg-slate-900/60';
                let textClass = 'text-slate-200';

                if (submitted && selected && isCorrect) {
                  borderClass = 'border-emerald-500/70';
                  bgClass = 'bg-emerald-500/15';
                  textClass = 'text-emerald-100';
                } else if (submitted && selected && !isCorrect) {
                  borderClass = 'border-rose-500/70';
                  bgClass = 'bg-rose-500/10';
                  textClass = 'text-rose-100';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(q.id, idx)}
                    className={`w-full text-left px-3 py-2 rounded-lg border ${borderClass} ${bgClass} transition-colors flex items-start gap-3 hover:border-cyan-500/60 hover:bg-slate-800/70`}
                  >
                    <span className="mt-1">
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                          selected
                            ? 'border-cyan-400 bg-cyan-500/20'
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        )}
                      </span>
                    </span>
                    <span className={`text-sm md:text-base ${textClass}`}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {submitted && q.explanation && (
              <div className="mt-3 rounded-lg bg-slate-900/80 border border-slate-800 px-3 py-2 text-xs md:text-sm text-slate-300">
                <span className="font-semibold text-cyan-300">Why: </span>
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-sm font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-[1.02] transition-transform"
        >
          Submit quiz
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:border-slate-500 hover:bg-slate-900 transition-colors"
        >
          Reset answers
        </button>
      </div>
    </div>
  );
};

