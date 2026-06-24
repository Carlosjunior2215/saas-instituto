'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaMapPin } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';

export function ContactSection() {
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
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-50">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Tem dúvidas? Envie uma mensagem e nossa equipe responderá em breve.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8 max-w-2xl w-full">
              {/* Logo da Unidade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedUnit.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-24 w-48"
                >
                  <Image
                    src={selectedUnit.logo}
                    alt={`Instituto Blefaroplastia ${selectedUnit.city}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Informações de Contato</h3>
                <p className="text-lg text-secondary-600 font-semibold mb-4">{selectedUnit.city} — {selectedUnit.state}</p>
                <p className="text-gray-600 text-lg mb-8">
                  Fale conosco através de qualquer um dos canais abaixo. Estamos prontos para ajudar!
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {/* Phone */}
                <motion.a
                  href={selectedUnit.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                    <p className="text-gray-600">{selectedUnit.whatsapp}</p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaMapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                    <p className="text-gray-600">
                      {selectedUnit.address}
                      <br />
                      {selectedUnit.city} — {selectedUnit.state}
                      <br />
                      CEP: {selectedUnit.cep}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Horários */}
              <motion.div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
                <h4 className="font-semibold text-gray-900 mb-4">Horários de Atendimento</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Segunda a Sexta: 08:00 - 18:00</li>
                  <li>Sábado: 09:00 - 13:00</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
