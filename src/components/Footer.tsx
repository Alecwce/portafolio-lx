
import React from 'react';
import { motion } from 'framer-motion';
import EmailContact from './EmailContact';

interface FooterProps {
  time: string;
}

const Footer: React.FC<FooterProps> = ({ time }) => {
  return (
    <footer id="contact" className="relative pt-40 pb-20 px-6 md:px-12 bg-[#F8F8F8] dark:bg-zinc-950 overflow-hidden" aria-labelledby="contact-heading">
      {/* Large Gradient Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2 
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display font-bold mb-12 uppercase tracking-tighter"
        >
          TRABAJEMOS <span className="text-primary italic">JUNTOS</span>
        </motion.h2>

        <EmailContact />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto pt-20 border-t border-gray-200 dark:border-zinc-800 mt-32">
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-400">Redes sociales</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'LinkedIn', url: '#' },
                { name: 'Twitter (X)', url: '#' },
                { name: 'Github', url: '#' },
                { name: 'Instagram', url: '#' }
              ].map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="text-2xl font-display font-bold hover:text-primary transition-colors uppercase tracking-tight"
                  aria-label={`Visitar mi perfil de ${social.name}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-400">Ubicación</h4>
              <p className="text-3xl font-display font-bold uppercase">CHUPACA, PE</p>
              <p className="text-gray-500 font-mono text-sm uppercase" aria-label={`Hora local en Chupaca, Perú: ${time}`}>Hora local: {time}</p>
            </div>
          </div>
        </div>

        <div className="mt-40 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 border-t border-gray-100 dark:border-zinc-800 pt-10">
          <p>© 2025 ALEXWCE</p>
          <p>DISEÑADO Y DESARROLLADO CON ❤️ POR ALEXWCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
