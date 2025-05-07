'use client';

import './styles/globals.css';
import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: ReactNode;
}

// Variants for page sections container
const layoutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Variants for each section
const sectionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function RootLayoutClient({ children }: Props) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <div className="container mx-auto p-6">
          <motion.div
            variants={layoutVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Header />
            </motion.div>

            <motion.main className="mt-8 space-y-12" variants={layoutVariants}>
              {React.Children.map(children, (child, i) => (
                <motion.section
                  key={i}
                  variants={sectionVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white shadow-sm rounded-lg p-6"
                >
                  {child}
                </motion.section>
              ))}
            </motion.main>

            <Footer />
          </motion.div>
        </div>
      </body>
    </html>
  );
}
