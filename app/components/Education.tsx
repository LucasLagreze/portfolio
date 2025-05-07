'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface Edu {
  diplome: string;
  etablissement: string;
  periode: string;
}
const education: Edu[] = [
  { diplome: 'Master Informatique', etablissement: 'Université X', periode: '2017 - 2019' },
  { diplome: 'Licence Informatique', etablissement: 'Université Y', periode: '2014 - 2017' }
];

export default function Education() {
  return (
    <section id="education" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        Parcours universitaire
      </motion.h2>
      <div className="space-y-4">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-medium text-gray-800">{ed.diplome}</h3>
            <p className="text-gray-600">{ed.etablissement}</p>
            <p className="italic text-gray-500">{ed.periode}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}