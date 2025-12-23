
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const fullText = "Construyendo interfaces digitales de alto rendimiento.";
  const typedText = useTypewriter(fullText);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Animación para separar FRONT y END con el scroll
  const frontX = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const endX = useTransform(scrollYProgress, [0, 0.6], [0, 300]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.6], [80, 600]);
  const frontColor = useTransform(scrollYProgress, [0, 0.4], ['#000000', '#9CA3AF']);
  const endColor = useTransform(scrollYProgress, [0, 0.4], ['#000000', '#9CA3AF']);
  const frontZIndex = useTransform(scrollYProgress, [0, 0.4], [10, 50]);

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] pt-40 pb-20 px-6 md:px-12 overflow-x-visible overflow-y-hidden flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto w-full relative">
        {/* Rotated Profile Image Container - Background */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
          className="absolute top-[15%] right-0 md:right-[5%] w-48 h-64 md:w-80 md:h-[420px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl z-[-1] pointer-events-none border border-white/20 dark:opacity-30 opacity-60 hidden sm:block"
        >
          <img 
            src="https://picsum.photos/id/64/800/1000" 
            alt="Retrato" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </motion.div>

        {/* Top Horizontal Line */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 1, ease: "circOut" }}
          className="w-24 h-[1px] bg-gray-400 mb-12 origin-left relative z-10"
        />

        <div className="relative z-30 overflow-visible">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-[7vw] md:text-[6vw] leading-[0.95] tracking-tight uppercase mb-4 overflow-visible relative z-30"
          >
            <motion.span 
              className="block whitespace-nowrap overflow-visible relative z-30"
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              DESARROLLADOR
            </motion.span>
            
            {/* Contenedor para FRONT y END con línea */}
            <div className="relative flex items-center justify-center gap-2 my-6">
              <motion.span 
                className="block relative whitespace-nowrap"
                style={{ 
                  x: frontX,
                  color: frontColor,
                  zIndex: frontZIndex
                }}
              >
                FRONT
              </motion.span>
              
              {/* Línea horizontal entre FRONT y END */}
              <motion.div 
                className="h-[3px] bg-gray-900 dark:bg-gray-100"
                style={{ width: lineWidth }}
              />
              
              <motion.span 
                className="block relative whitespace-nowrap"
                style={{ 
                  x: endX,
                  color: endColor
                }}
              >
                END
              </motion.span>
            </div>
          </motion.h1>

          <div className="mt-8 font-mono text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-sm relative z-30">
            {typedText}<span className="animate-pulse">_</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
