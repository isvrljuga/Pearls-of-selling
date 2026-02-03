
import React, { useEffect } from 'react';
import { Pearl } from '../types';

interface PearlModalProps {
  pearl: Pearl | null;
  onClose: () => void;
}

const PearlModal: React.FC<PearlModalProps> = ({ pearl, onClose }) => {
  useEffect(() => {
    if (pearl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [pearl]);

  if (!pearl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Principus Style Header */}
        <div className="bg-slate-950 px-8 py-6 border-b border-slate-800 flex justify-between items-center">
           <div>
             <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-1">
               {pearl.category}
             </span>
             <h2 className="text-2xl font-serif text-white">{pearl.title}</h2>
           </div>
           <button 
             onClick={onClose}
             className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
           >
             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 italic border-l-4 border-blue-600 pl-4 py-1">
              {pearl.summary}
            </p>
            
            <ul className="space-y-4">
              {pearl.content.map((item, idx) => (
                <li key={idx} className="flex items-start text-slate-200">
                  <span className="mr-3 mt-1 text-blue-500">👉</span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-950 p-6 border-t border-slate-800 flex justify-end">
           <button 
             onClick={onClose}
             className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold transition-colors"
           >
             Understood
           </button>
        </div>
      </div>
    </div>
  );
};

export default PearlModal;
