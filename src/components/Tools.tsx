
import React from 'react';
import { Code2, Palette, Globe, Layers, Database, GitBranch } from 'lucide-react';

const ToolItem = ({ name, icon: Icon, desc }: { name: string, icon: any, desc: string }) => (
  <div className="flex flex-col items-center p-8 group transition-all duration-300">
    <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <span className="text-xs font-bold uppercase tracking-widest mb-1">{name}</span>
    <span className="text-[10px] text-gray-400 font-mono uppercase">{desc}</span>
  </div>
);

const Tools: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-mono text-[10px] tracking-[0.5em] text-gray-400 uppercase mb-16">TECHNIQUES & TOOLS</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <ToolItem name="HTML5" icon={Globe} desc="Structure" />
          <ToolItem name="CSS3" icon={Palette} desc="Design" />
          <ToolItem name="JS" icon={Code2} desc="Logic" />
          <ToolItem name="REACT" icon={Layers} desc="Component" />
          <ToolItem name="NODE" icon={Database} desc="Back-End" />
          <ToolItem name="GIT" icon={GitBranch} desc="Version" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
