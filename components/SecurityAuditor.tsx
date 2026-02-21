
import React, { useState } from 'react';
import { auditCode } from '../services/gemini';
import { AuditResult } from '../types';
import { Scan, AlertTriangle, CheckCircle, ShieldAlert, Loader2 } from 'lucide-react';

const SecurityAuditor: React.FC = () => {
  const [code, setCode] = useState('');
  const [results, setResults] = useState<AuditResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAudit = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setError('');
    try {
      const auditResults = await auditCode(code);
      setResults(auditResults);
    } catch (err) {
      setError('Failed to analyze code. Please ensure your API key is valid.');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'text-red-500 border-red-500/20 bg-red-500/10';
      case 'high': return 'text-orange-500 border-orange-500/20 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10';
      default: return 'text-blue-500 border-blue-500/20 bg-blue-500/10';
    }
  };

  return (
    <section id="auditor" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter mono">AI Code <span className="text-emerald-500">Guardian</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powered by Gemini, this tool performs an instant security audit on your snippets to detect vulnerabilities before deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
             <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
               <div className="flex items-center space-x-2 text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <span className="text-xs uppercase tracking-widest mono">input.src</span>
               </div>
               <button 
                onClick={handleAudit}
                disabled={loading || !code}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold uppercase text-xs tracking-widest transition-all rounded-sm mono flex items-center space-x-2"
               >
                 {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Scan className="w-4 h-4" />}
                 <span>{loading ? 'Analyzing...' : 'Execute Audit'}</span>
               </button>
             </div>
             
             <textarea 
               value={code}
               onChange={(e) => setCode(e.target.value)}
               placeholder="// Paste your code here to audit for vulnerabilities..."
               className="w-full h-80 bg-transparent text-emerald-400 font-mono text-sm resize-none focus:outline-none placeholder:text-slate-800"
             />

             {error && <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs mono">{error}</div>}
          </div>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
            {results.length === 0 && !loading ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-slate-800 rounded-xl p-12">
                <ShieldAlert className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-sm uppercase tracking-widest mono">No Vulnerabilities Detected Yet</p>
                <p className="text-xs mt-2 text-center">Paste code and run analysis to populate findings.</p>
              </div>
            ) : null}

            {results.map((res, idx) => (
              <div key={idx} className={`p-5 rounded-lg border flex items-start space-x-4 transition-all hover:translate-x-1 ${getSeverityColor(res.severity)}`}>
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-bold uppercase tracking-tight mono text-slate-100">{res.vulnerability}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border bg-slate-950 font-bold mono">
                      {res.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 leading-relaxed">{res.description}</p>
                  <div className="flex items-center space-x-2 text-[10px] text-emerald-400 mono uppercase font-bold">
                    <CheckCircle className="w-3 h-3" />
                    <span>REC: {res.recommendation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAuditor;
