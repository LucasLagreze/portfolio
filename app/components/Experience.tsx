'use client';

import { motion } from 'framer-motion';

interface Exp {
  poste: string;
  entreprise: string;
  periode: string;
  details: string[];
}
const experiences: Exp[] = [ /* … */ ];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-primary mb-8"
      >
        Expériences professionnelles
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ translateY: -4, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
            className="bg-white border-l-4 border-primary rounded-lg p-6"
          >
            <h3 className="text-xl font-medium text-gray-800">
              {exp.poste} &mdash; <span className="text-gray-600">{exp.entreprise}</span>
            </h3>
            <time className="block text-sm text-secondary mt-1 mb-4">
              {exp.periode}
            </time>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
