'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface Project {
  titre: string;
  desc: string;
  lien?: string;
}
const schoolProjects: Project[] = [
  { titre: 'Projet universitaire A', desc: 'Application de gestion de bibliothèque en PHP.' },
  { titre: 'Projet universitaire B', desc: 'Site e-commerce simplifié en Next.js.' }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        Projets d'école
      </motion.h2>
      <div className="space-y-6">
        {schoolProjects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-medium text-gray-800">{p.titre}</h3>
            <p className="mt-2 text-gray-700">{p.desc}</p>
            {p.lien && (
              <a href={p.lien} className="mt-3 inline-block text-blue-600 hover:underline">
                Voir le projet
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}