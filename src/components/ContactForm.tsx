import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un correo electrónico válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log("Form data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-20">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center p-12 bg-green-50 rounded-3xl border border-green-100 text-green-700"
          >
            <CheckCircle2 size={64} className="mb-6" />
            <h3 className="text-3xl font-display font-bold uppercase mb-2">¡Mensaje enviado!</h3>
            <p className="font-light">Me pondré en contacto contigo lo antes posible.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 ml-2">Tu nombre</label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  className={`w-full px-6 py-4 bg-white dark:bg-zinc-900 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-zinc-700'} rounded-2xl dark:text-white placeholder:dark:text-gray-500 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-light`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-red-500 text-[10px] font-mono mt-1 ml-2">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 ml-2">Tu correo</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className={`w-full px-6 py-4 bg-white dark:bg-zinc-900 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-zinc-700'} rounded-2xl dark:text-white placeholder:dark:text-gray-500 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-light`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-red-500 text-[10px] font-mono mt-1 ml-2">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 ml-2">Mensaje</label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                className={`w-full px-6 py-4 bg-white dark:bg-zinc-900 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-zinc-700'} rounded-2xl dark:text-white placeholder:dark:text-gray-500 focus:ring-2 focus:ring-primary/20 outline-none transition-all font-light resize-none`}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <p className="text-red-500 text-[10px] font-mono mt-1 ml-2">{errors.message.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-black text-white rounded-2xl font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-wait"
            >
              {isSubmitting ? "Enviando..." : <>Enviar mensaje <Send size={18} /></>}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
