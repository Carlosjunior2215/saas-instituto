'use client';

import { motion } from 'framer-motion';
import { WHY_TRUST } from '@/constants';
import {
  FaHeartPulse,
  FaUserTie,
  FaBullseye,
  FaBuilding,
  FaHandsHolding,
  FaCircleCheck,
} from 'react-icons/fa6';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHeartPulse,
  FaUserTie,
  FaBullseye,
  FaBuilding,
  FaHandsHolding,
  FaCircleCheck,
};

export function WhyTrustSection() {
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

  return (
    <section id="confianca" className="py-20 md:py-32 bg-primary-700">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-300">
              {WHY_TRUST.title}
            </h2>
            <p className="text-xl text-primary-100">
              Confira os números e diferenciais que comprovam nossa excelência
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {WHY_TRUST.reasons.map((reason) => {
              const IconComponent = iconMap[reason.icon];
              return (
                <motion.div
                  key={reason.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Card Background */}
                  <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl border border-secondary-500 p-8 h-full overflow-hidden">
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary-400/10 to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <motion.div
                        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-primary-900" />
                        )}
                      </motion.div>

                      {/* Stat */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary-300 mb-2">
                          {reason.stat}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-primary-200 leading-relaxed text-lg">
                        {reason.description}
                      </p>
                    </div>

                    {/* Bottom Border Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlight Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-2xl p-8 md:p-12 text-center space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900">
              ✨ Transformação com Segurança e Naturalidade
            </h3>
            <p className="text-primary-800 text-lg max-w-2xl mx-auto">
              Mais de uma década dedicados a transformar olhares com metodologia própria,
              experiência comprovada e resultados naturais que falam por si.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
