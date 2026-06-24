'use client';

import { motion } from 'framer-motion';

export function StructureSection() {

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
    <section id="estrutura" className="py-20 md:py-32 bg-white">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Nossa Estrutura</h2>
            <p className="text-xl text-gray-600">
              Conheça nossas modernas instalações e ambientes preparados para oferecer conforto e
              segurança.
            </p>
          </motion.div>


          {/* Info Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100 p-8 md:p-12 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">Ambiente Moderno e Acolhedor</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nossas instalações foram projetadas com foco em conforto, higiene e bem-estar dos
              pacientes. Todos os ambientes contam com tecnologia de ponta, climatização adequada e
              design que promove tranquilidade.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {['Ambientes climatizados', 'Acessibilidade completa', 'Estacionamento', 'WiFi'].map(
                (feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    {feature}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
