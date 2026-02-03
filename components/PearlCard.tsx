
import React from 'react';
import { Pearl } from '../types';

interface PearlCardProps {
  pearl: Pearl;
  onClick: () => void;
}

const PearlCard: React.FC<PearlCardProps> = ({ pearl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-slate-900 border border-slate-800 p-8 rounded-xl text-left transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="text-6xl">{pearl.icon}</span>
      </div>
      
      <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-4">
        {pearl.category}
      </span>
      
      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
        {pearl.title}
      </h3>
      
      <p className="text-slate-400 text-sm flex-grow line-clamp-3">
        {pearl.summary}
      </p>
      
      <div className="mt-6 flex items-center text-blue-400 text-xs font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
        Unlock Pearl
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </button>
  );
};

export default PearlCard;
