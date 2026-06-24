'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocation } from '@/contexts/LocationContext';
import { FaEye, FaArrowRight } from 'react-icons/fa6';

const procedures = [
  {
    id: 1,
    title: 'Blefaroplastia Superior',
    description: 'Rejuvenescimento da pálpebra superior, eliminando excesso de pele e gordura.',
  },
  {
    id: 2,
    title: 'Blefaroplastia Inferior',
    description: 'Correção da pálpebra inferior, eliminando bolsas sob os olhos.',
  },
  {
    id: 3,
    title: 'Lifting de Sobrancelhas',
    description: 'Elevação das sobrancelhas para restaurar a posição natural.',
  },
];

export function SpecialtiesSection() {
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

  return (
    <section id="especialidades" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-50">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Nossas Especialidades</h2>
            <p className="text-xl text-gray-600">
              Especialistas em procedimentos oftalmoplásticos de excelência.
            </p>
          </motion.div>

          {/* Specialties with Image */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Procedures List */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {procedures.map((procedure) => (
                <motion.div
                  key={procedure.id}
                  variants={itemVariants}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-secondary-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                      <FaEye className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {procedure.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {procedure.description}
                      </p>
                    </div>
                    <FaArrowRight className="text-secondary-500 group-hover:text-secondary-600 transition-colors duration-300 mt-1" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/imagem/especialidades.png"
                alt="Nossas Especialidades"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-gray-600 text-lg mb-6">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <motion.a
              href={selectedUnit.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
