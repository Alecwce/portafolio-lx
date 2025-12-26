
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter"
          >
            PROYECTOS <br/> <span className="text-primary italic">DESTACADOS</span>
          </motion.h2>
          <span className="font-mono text-sm text-gray-400 tracking-widest">( 2023 — 2025 )</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
