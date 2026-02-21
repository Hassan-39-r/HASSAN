
import React from 'react';
import { SKILLS } from '../constants';
import { ShieldCheck, Code2, Terminal, Info } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'security', label: 'Security Domain', icon: ShieldCheck },
    { id: 'tools', label: 'Arsenal', icon: Terminal },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter mono">Core <span className="text-emerald-500">Capabilities</span></h2>
          <div className="w-20 h-1 bg-emerald-500"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <cat.icon className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl font-bold uppercase tracking-widest mono text-slate-300">{cat.label}</h3>
              </div>
              
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat.id).map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-slate-400 group-hover:text-emerald-400 transition-colors mono">
                          {skill.name}
                        </span>
                        <Info className="w-3 h-3 text-slate-700 group-hover:text-emerald-500 transition-colors" />
                      </div>
                      <span className="text-xs text-slate-600 mono">{skill.level}%</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-0 mb-3 w-64 p-4 bg-slate-900 border border-emerald-500/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                      <div className="font-bold text-emerald-500 text-xs mb-1 uppercase tracking-widest mono">
                        {skill.name}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed mono">
                        {skill.description}
                      </p>
                      <div className="absolute top-full left-4 w-2 h-2 bg-slate-900 border-r border-b border-emerald-500/30 transform rotate-45 -translate-y-1"></div>
                    </div>

                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500/60 transition-all duration-1000 group-hover:bg-emerald-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
