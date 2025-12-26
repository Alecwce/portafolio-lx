import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const EmailContact: React.FC = () => {
  const email = "iialex221@gmail.com";

  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      {/* Main Email Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="relative group"
      >
        {/* Animated Glow Background */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Email Container */}
        <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-2 border-gray-200 dark:border-zinc-700 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Email Icon */}
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center mb-8"
          >
            <div className="p-6 bg-gradient-to-br from-primary to-purple-600 rounded-2xl shadow-xl">
              <Mail className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 mb-6"
          >
            Escríbeme directamente
          </motion.p>

          {/* Email Address with Gradient Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href={`mailto:${email}`}
              className="block text-center font-display font-bold text-3xl md:text-5xl lg:text-6xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-gray-100 dark:via-primary dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                {email}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailContact;
