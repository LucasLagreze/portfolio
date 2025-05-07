'use client';
import { motion } from 'framer-motion';
import React from 'react';

const languages = [
  { lang: 'Français', niveau: 'Natif' },
  { lang: 'Anglais', niveau: 'Courant' }
];

export default function Languages() {
  return (
    <section id="languages" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        Langues
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="list-disc list-inside text-gray-700 space-y-2"
      >
        {languages.map((l, i) => (
          <li key={i}>{l.lang} – {l.niveau}</li>
        ))}
      </motion.ul>
    </section>
  );
}