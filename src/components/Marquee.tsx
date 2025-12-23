
import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  variant: 'primary' | 'dark';
  rotate?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, variant, rotate = 0 }) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-[#121212]';
  const textColor = 'text-white';
  const borderColor = variant === 'primary' ? 'border-white/10' : 'border-gray-800';

  return (
    <div 
      className={`relative z-20 py-6 md:py-10 overflow-hidden shadow-2xl ${bgColor} border-y ${borderColor}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }
        }}
        className="flex whitespace-nowrap items-center font-display font-extrabold text-3xl md:text-6xl tracking-widest uppercase"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span className={`mx-8 md:mx-16 ${textColor}`}>{item}</span>
            <span className="text-xl md:text-3xl opacity-50">♦</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
