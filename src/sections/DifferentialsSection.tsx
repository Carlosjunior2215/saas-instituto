'use client';

import { motion } from 'framer-motion';
import { DIFFERENTIALS } from '@/constants';
import { useLocation } from '@/contexts/LocationContext';
import {
  FaHandsHolding,
  FaUserTie,
  FaBuilding,
  FaMicrochip,
  FaCalendarDays,
  FaLocationDot,
} from 'react-icons/fa6';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  humanized: FaHandsHolding,
  team: FaUserTie,
  structure: FaBuilding,
  technology: FaMicrochip,
  scheduling: FaCalendarDays,
  location: FaLocationDot,
};

export function DifferentialsSection() {
  const { selectedUnit } = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const iconKeys = ['humanized', 'team', 'structure', 'technology', 'scheduling', 'location'];

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Por Que Nos Escolher</h2>
            <p className="text-xl text-gray-600">
              Conheça os diferenciais que nos tornam a melhor escolha para sua saúde.
            </p>
          </motion.div>

          {/* Differentials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {DIFFERENTIALS.map((differential, index) => {
              const IconComponent = iconMap[iconKeys[index]];
              return (
                <motion.div
                  key={differential.id}
                  variants={itemVariants}
                  className="relative group"
                  whileHover={{ y: -10 }}
                >
                  {/* Card Background */}
                  <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100 p-8 h-full overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl mb-6 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {differential.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center space-y-4"
          >
            <h3 className="text-2xl font-bold">Preparado para começar?</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Agende sua consulta hoje e experimente o atendimento de qualidade que o Instituto oferece.
            </p>
            <motion.a
              href={selectedUnit.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Agora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
