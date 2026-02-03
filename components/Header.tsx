
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Brand Wordmark - Lowercase, Serif, Clean */}
          <div className="flex flex-col items-start group cursor-pointer">
            <h1 className="text-white font-serif text-3xl tracking-tight leading-none lowercase transition-opacity group-hover:opacity-80">
              principus
            </h1>
            <div className="h-[2px] w-full bg-blue-600 mt-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] text-blue-500 uppercase tracking-[0.5em] font-black opacity-90">
              Pearls of Selling
            </p>
          </div>
          {/* Subtle Strategy Hub button retained for balance and aesthetic alignment with consulting style */}
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all hover:border-blue-500/50">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
