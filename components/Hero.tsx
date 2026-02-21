
import React, { useEffect, useState } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '> Initializing Secure Tunnel...\n> Port 22: OPEN\n> Target: CYBER_DOMAIN\n> Engineer: HASSAN\n> Status: READY';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 scanline z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <ShieldAlert className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mono">Security Clearance: Level 5</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Architecting <span className="text-emerald-500">Unbreakable</span> Digital Defenses.
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm Hassan, a Cybersecurity Programmer dedicated to offensive security research and building robust defensive software. Specializing in threat mitigation and secure system architecture.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold uppercase tracking-widest transition-all cyber-glow rounded-sm mono">
              View Operations
            </a>
            <a href="#auditor" className="px-8 py-4 border border-slate-700 hover:border-emerald-500/50 text-white font-bold uppercase tracking-widest transition-all rounded-sm mono">
              Launch Audit
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-lg"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-sm overflow-hidden shadow-2xl terminal-gradient">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <pre className="text-emerald-400 whitespace-pre-wrap">
                {displayText}
                <span className="animate-pulse">_</span>
              </pre>
              
              <div className="mt-8 border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>CPU Usage: 12%</span>
                </div>
                <span>Session: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
