'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        Coordonnées
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Email', value: 'email@exemple.com' },
          { label: 'Téléphone', value: '+33 6 12 34 56 78' },
          { label: 'Adresse', value: '123 Rue Exemple, 75000 Paris' },
          { label: 'LinkedIn', value: 'linkedin.com/in/username' }
        ].map((info, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-gray-200">
              <CardContent>
                <span className="font-medium text-gray-800">{info.label}:</span> {' '}
                <span className="text-gray-700">{info.value}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}