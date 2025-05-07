'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center md:justify-between py-8 px-4 bg-white shadow-md rounded-lg">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-shrink-0"
      >
        <Image
          src="/images/photo-profil.jpg"
          alt="Photo de profil"
          width={120}
          height={120}
          className="rounded-full ring-2 ring-primary"
        />
      </motion.div>
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-primary"
        >
          Lucas Lagreze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-1 text-lg text-secondary"
        >
          Développeur Web • PHP / Next.js
        </motion.p>
      </div>
    </header>
  );
}
