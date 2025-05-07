'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const skills = ['PHP', 'Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'];
const knowHow = ['Optimisation SEO', 'Accessibilité', 'Tests unitaires', 'CI/CD'];

// Variants pour animer l’apparition en grille
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: delay,
    }
  })
};

// Variants pour chaque badge
const badgeVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300 }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { type: 'spring', stiffness: 500 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Compétences & Savoir-faire
      </h2>

      {/* Techniques */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">
          Techniques
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {skills.map((s) => (
            <motion.div
              key={s}
              className="inline-block"
              variants={badgeVariants}
              whileHover="hover"
            >
              <Badge className="bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200 transition duration-200">
                {s}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Savoir-faire */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-700">
          Savoir-faire
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {knowHow.map((k) => (
            <motion.div
              key={k}
              className="inline-block"
              variants={badgeVariants}
              whileHover="hover"
            >
              <Badge className="bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200 transition duration-200">
                {k}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
