'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ } from '@/constants';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';

export function FAQSection() {
  const { selectedUnit } = useLocation();
  const [openId, setOpenId] = useState<number | null>(null);

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
    <section id="faq" className="py-20 md:py-32 bg-white">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={containerVariants} className="max-w-3xl mx-auto space-y-4">
            {FAQ.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <motion.button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full px-6 py-6 md:py-8 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  {/* Question */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {openId === item.id ? (
                      <FaMinus className="w-6 h-6 text-primary-600" />
                    ) : (
                      <FaPlus className="w-6 h-6 text-primary-600" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="px-6 py-6 md:py-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-t border-gray-200"
                      >
                        <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <p className="text-gray-600 text-lg">Não encontrou a resposta que procurava?</p>
            <motion.a
              href={selectedUnit.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
