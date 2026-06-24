'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaCalendarAlt, FaInfo } from 'react-icons/fa';
import { useLocation } from '@/contexts/LocationContext';

export function HeroSection() {
  const { selectedUnit } = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-primary-600 font-semibold text-lg"
                variants={itemVariants}
              >
                Bem-vindo ao Instituto
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Excelência em{' '}
                <span className="text-gradient">Atendimento e Cuidado</span>{' '}
                Especializado
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Uma instituição preparada para oferecer atendimento humanizado, estrutura moderna e
              profissionais qualificados em diversas áreas da saúde.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={selectedUnit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalendarAlt className="w-5 h-5" />
                Agendar Consulta
              </motion.a>
              <motion.button
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaInfo className="w-5 h-5" />
                Conhecer Instituto
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-sm text-gray-600">Anos de Experiência</p>
              </div>
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-600">50+</p>
                <p className="text-sm text-gray-600">Profissionais</p>
              </div>
              <div className="flex flex-col">
                <p className="text-3xl font-bold text-primary-600">10k+</p>
                <p className="text-sm text-gray-600">Pacientes Atendidos</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:flex h-full min-h-500 items-center justify-center"
          >
            <motion.div
              className="relative w-full h-full max-w-md"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Logo Image */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedUnit.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center p-8"
                  >
                    <Image
                      src={selectedUnit.logo}
                      alt={`Instituto Blefaroplastia ${selectedUnit.city}`}
                      fill
                      className="object-contain p-8"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FaArrowDown className="w-6 h-6 text-primary-600 opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}
