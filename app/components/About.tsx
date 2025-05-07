import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
      >
        À propos de moi
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-700 leading-relaxed max-w-2xl"
      >
        Salut! Je suis un développeur web spécialisé en PHP et Next.js avec TypeScript. J'ai plus de 5 ans d'expérience dans la création d'applications robustes et performantes.
      </motion.p>
    </section>
  );
}