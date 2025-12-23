import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  type: 'wide' | 'tall' | 'square';
  color?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, type, color }) => {
  const containerClass = {
    wide: "md:col-span-2 h-[450px]",
    tall: "md:row-span-2 h-[450px] md:h-full",
    square: "h-[450px]"
  }[type];

  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className={`group relative rounded-3xl overflow-hidden cursor-pointer ${containerClass} border border-gray-100 bg-white`}
    >
      {image ? (
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      ) : (
        <div className={`absolute inset-0 ${color || 'bg-gray-100'} flex items-center justify-center`}>
           <FolderOpen className="text-primary/20" size={120} />
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <motion.div 
          variants={{ 
            initial: { y: 20, opacity: 0.8 }, 
            hover: { y: 0, opacity: 1 } 
          }}
          transition={{ duration: 0.4, ease: "circOut" }}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-3xl font-display font-bold uppercase leading-tight">{title}</h3>
            <motion.div 
              variants={{ 
                initial: { rotate: 0, scale: 0.8 }, 
                hover: { rotate: 45, scale: 1 } 
              }}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </div>
          <p className="text-gray-300 text-sm max-w-sm mb-6 font-light line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags?.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase font-bold tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
