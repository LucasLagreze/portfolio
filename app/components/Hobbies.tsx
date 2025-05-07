'use client';
import { motion } from 'framer-motion';
import React from 'react';

const hobbies = ['Jiujitsu', 'Cuisine', 'Voyage', 'Randonnée'];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        Loisirs
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="list-disc list-inside text-gray-700 space-y-2"
      >
        {hobbies.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </motion.ul>
    </section>
  );
}