
import React, { useState } from 'react';
import Header from './components/Header';
import PearlCard from './components/PearlCard';
import PearlModal from './components/PearlModal';
import { PEARLS } from './data';
import { Pearl } from './types';

const App: React.FC = () => {
  const [selectedPearl, setSelectedPearl] = useState<Pearl | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Background Neural Network Style Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)]" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header />

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <section className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Expert Selling Playbook
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            The Pearls of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Selling</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Elevate your sales intelligence. Explore our collection of strategic insights, 
            frameworks, and psychological triggers designed to transform your performance.
          </p>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PEARLS.map((pearl) => (
            <PearlCard 
              key={pearl.id} 
              pearl={pearl} 
              onClick={() => setSelectedPearl(pearl)} 
            />
          ))}
        </div>

        {/* Footer info from slide 41 */}
        <footer className="mt-32 pt-16 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400">
           <div>
              <h4 className="text-white font-serif text-2xl mb-4">Master Your Craft</h4>
              <p className="mb-6 leading-relaxed">
                "Good, better, best, never, never rest, until your good is better and your better best." 
                The journey of a salesperson is one of continuous reflection and adaptation.
              </p>
              <div className="flex space-x-4">
                 <a href="https://www.linkedin.com/in/ivosvrljuga/" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
                 <a href="https://www.principus.si" target="_blank" className="hover:text-blue-500 transition-colors">Website</a>
              </div>
           </div>
           <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h4 className="text-white font-semibold mb-3">About Principus & Ivo Švrljuga</h4>
              <p className="text-sm leading-relaxed mb-4">
                Specialized in sales excellence and leadership transformation. Helping teams navigate the shift 
                from Old World Selling to New World Buying through data strategy and emotional intelligence.
              </p>
              <p className="text-sm font-medium text-slate-300">
                Contact: ivo.svrljuga@principus.si | +386 70 887 405
              </p>
           </div>
        </footer>
      </main>

      <PearlModal 
        pearl={selectedPearl} 
        onClose={() => setSelectedPearl(null)} 
      />
    </div>
  );
};

export default App;
