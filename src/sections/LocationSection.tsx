'use client';

import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';
import { security } from '@/lib/security';

export function LocationSection() {
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
    <section id="localizacao" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Nossa Localização — {selectedUnit.city}
            </h2>
            <p className="text-xl text-gray-600">
              Visite nosso centro e conheça de perto o ambiente acolhedor do Instituto.
            </p>
          </motion.div>

          {/* Map and Info */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96 md:h-full min-h-96"
            >
              {security.sanitizeIframeSrc(selectedUnit.mapEmbedUrl) ? (
                <iframe
                  src={selectedUnit.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização do Instituto em ${selectedUnit.city}`}
                ></iframe>
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Mapa indisponível</p>
                </div>
              )}
            </motion.div>

            {/* Info Box */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Address Card */}
              <motion.div
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100 p-6 space-y-4"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-gray-900">Endereço</h3>
                <address className="text-gray-700 not-italic space-y-2">
                  <p className="font-semibold">{selectedUnit.address}</p>
                  <p>
                    {selectedUnit.city} — {selectedUnit.state}
                  </p>
                  <p>CEP: {selectedUnit.cep}</p>
                </address>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-gray-900">Contato</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-gray-600">WhatsApp</span>
                    <motion.a
                      href={selectedUnit.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      {selectedUnit.whatsapp}
                    </motion.a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-gray-600">Instagram</span>
                    <motion.a
                      href={selectedUnit.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <FaInstagram className="w-4 h-4" />
                      Seguir
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-gray-900">Horários</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-semibold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold text-error">Fechado</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <p className="text-gray-600 text-lg">Pronto para sua consulta?</p>
            <motion.a
              href={selectedUnit.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
