
import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
      aria-label="Navegación principal"
    >
      <div className="font-display font-bold text-sm md:text-lg tracking-widest uppercase" aria-label="Logo de marca">
        Alexwce
      </div>
      
      <div className="hidden md:flex gap-12 font-medium text-xs tracking-widest uppercase" role="menubar">
        <a href="#work" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Proyectos</a>
        <a href="#about" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Sobre mí</a>
        <a href="#contact" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Contacto</a>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />
        <button 
          className="hidden md:block text-xs font-bold tracking-widest cursor-pointer hover:underline focus-visible:outline-white"
          aria-label="Explorar más secciones"
        >
          EXPLORAR
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
