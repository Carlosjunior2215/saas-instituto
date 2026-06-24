'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';

const unitTeams: Record<string, Array<{id: number; location: string; name: string; crm: string; image: string}>> = {
  goiania: [
    {
      id: 1,
      location: 'GOIÂNIA',
      name: 'Julia Somenzari',
      crm: 'CRM-GO 360338',
      image: '/imagem/GOIÂNIA.jpeg',
    },
    {
      id: 2,
      location: 'GOIÂNIA',
      name: 'Matheus Mendes Trigueiro',
      crm: 'CRM-GO 27244',
      image: '/imagem/GOIÂNIA1.jpeg',
    },
  ],
  natal: [
    {
      id: 1,
      location: 'NATAL',
      name: 'Matheus Augusto Albuquerque Costa',
      crm: 'CRM 14984',
      image: '/imagem/NATAL.jpeg',
    },
  ],
  cuiaba: [
    {
      id: 1,
      location: 'CUIABÁ',
      name: 'Giordana Gregório Fritsch',
      crm: 'CRM-MT 15725',
      image: '/imagem/CUIABÁ.jpeg',
    },
  ],
  recife: [
    {
      id: 1,
      location: 'RECIFE',
      name: 'Rayssa Barbosa Lacerda',
      crm: 'CRM-PE 34839',
      image: '/imagem/RECIFE.jpeg',
    },
  ],
};

export function TeamSection() {
  const { selectedUnit } = useLocation();
  const teamMembers = unitTeams[selectedUnit.id] || unitTeams.goiania;

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
    <section id="equipe" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-50">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">
              Conheça os profissionais altamente qualificados que cuidam de você.
            </p>
          </motion.div>

          {/* Team Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUnit.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="flex justify-center flex-wrap gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group relative w-full max-w-sm"
                  whileHover={{ y: -5 }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                    {/* Image Container */}
                    <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-primary-200 to-secondary-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                          selectedUnit.id === 'recife' || selectedUnit.id === 'cuiaba' ? 'object-center' : 'object-top'
                        }`}
                      />

                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex gap-2">
                          <motion.a
                            href="#"
                            className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={`mailto:${member.name.toLowerCase().replace(/\s/g, '.')}@instituto.com.br`}
                            className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="E-mail"
                          >
                            <FaEnvelope className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <p className="text-secondary-600 font-semibold text-sm mb-2">{member.location}</p>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-primary-600 font-semibold text-sm">{member.crm}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
