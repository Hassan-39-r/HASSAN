
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900/50 border border-slate-800 p-8 hover:border-emerald-500/30 transition-all duration-300 rounded-lg">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
        <Folder className="w-12 h-12 text-emerald-500" />
      </div>
      
      <div className="flex gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-bold uppercase mono border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-emerald-400 transition-colors mono">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      
      <div className="flex items-center space-x-4">
        <button className="text-slate-500 hover:text-emerald-500 transition-colors">
          <Github className="w-5 h-5" />
        </button>
        <button className="text-slate-500 hover:text-emerald-500 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
