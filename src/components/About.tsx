
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start" aria-labelledby="about-heading">
      {/* Badge Section */}
      <div className="md:col-span-3 flex flex-col items-center md:items-start" aria-hidden="true">
        <div className="relative w-40 h-40">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path 
                id="curve" 
                fill="transparent" 
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
              />
              <text className="font-mono text-[9px] uppercase tracking-widest fill-gray-900 dark:fill-gray-100">
                <textPath href="#curve">
                  • Desarrollador • Diseñador • Creador • Visionario •
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-3xl">01</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-6 space-y-10">
        <motion.h2 
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter"
        >
          SOBRE MÍ
        </motion.h2>

        <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 space-y-6 font-light">
          <p>
            Soy un desarrollador de software con un enfoque principal en <span className="font-bold text-black dark:text-white italic">desarrollo front-end</span>. 
            Me encanta trabajar en la intersección entre creatividad y lógica, creando productos que resuelven problemas del mundo real.
          </p>
          <p>
            Tengo habilidad para crear productos web funcionales, fáciles de usar y estéticamente atractivos, desde sitios simples hasta aplicaciones web a gran escala.
          </p>
          <p>
            Cuando no estoy construyendo o explorando nuevas tecnologías, probablemente esté en casa disfrutando de Afrobeats o viendo una película de robos.
          </p>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none"
          aria-label="Descargar currículum en formato PDF"
        >
          DESCARGAR CV <Download size={16} />
        </motion.button>
      </div>

      {/* Status Bar */}
      <div className="md:col-span-3 space-y-8 pt-4">
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <span className="text-[10px] font-mono uppercase text-gray-400 dark:text-gray-500 block mb-3 tracking-widest">Disponibilidad</span>
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-bold text-sm dark:text-gray-200">Disponible para proyectos freelance</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Abierto a oportunidades alrededor del mundo</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors focus-visible:outline-primary"
            aria-label="Ir a la sección de contacto para iniciar una conversación"
          >
            HABLEMOS <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
