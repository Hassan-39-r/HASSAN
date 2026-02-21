
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import SecurityAuditor from './components/SecurityAuditor';
import { PROJECTS } from './constants';
import { Mail, Github, Linkedin, ShieldAlert, Cpu, Globe, Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Skills />

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter mono">Classified <span className="text-emerald-500">Operations</span></h2>
                <div className="w-20 h-1 bg-emerald-500"></div>
              </div>
              <div className="flex space-x-4">
                <span className="text-xs font-bold text-slate-600 mono uppercase tracking-widest">Filter: ALL_RECORDS</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <SecurityAuditor />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter mono">Open a <span className="text-emerald-500">Channel</span></h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  Need a security audit, technical consultation, or have an interesting project? Secure communications are open. Reach out via the encrypted form or direct channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase font-bold mono">Email</p>
                      <p className="text-slate-300 font-bold mono">hassan27462@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase font-bold mono">Secure Line</p>
                      <p className="text-slate-300 font-bold mono">+905385476507</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                      <Linkedin className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase font-bold mono">Professional</p>
                      <p className="text-slate-300 font-bold mono">linkedin.com/in/hassan-cyber</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 uppercase font-bold mono">Operator Name</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg focus:border-emerald-500 outline-none text-slate-300 mono text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 uppercase font-bold mono">Return Channel</label>
                      <input type="email" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg focus:border-emerald-500 outline-none text-slate-300 mono text-sm" placeholder="contact@domain.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase font-bold mono">Subject Clearance</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg focus:border-emerald-500 outline-none text-slate-300 mono text-sm" placeholder="Security Audit Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase font-bold mono">Encrypted Payload</label>
                    <textarea className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg focus:border-emerald-500 outline-none text-slate-300 h-32 resize-none mono text-sm" placeholder="Message content..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold uppercase tracking-widest transition-all rounded-lg mono">
                    Transmit Securely
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold tracking-tighter mono uppercase">Hassan.<span className="text-emerald-500">Sec</span></span>
          </div>
          
          <div className="text-xs text-slate-600 mono uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} Hassan // Authorized Personnel Only
          </div>
          
          <div className="flex items-center space-x-6">
             <div className="flex items-center space-x-2 text-[10px] text-emerald-500/40 mono font-bold">
               <Cpu className="w-3 h-3" />
               <span>SYSTEMS_NOMINAL</span>
             </div>
             <div className="flex items-center space-x-2 text-[10px] text-emerald-500/40 mono font-bold">
               <Globe className="w-3 h-3" />
               <span>IP_SHIELD_ON</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
