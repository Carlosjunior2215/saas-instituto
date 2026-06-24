'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa6';

const aboutItems = [
  {
    icon: FaBullseye,
    title: 'Missão',
    description: 'Oferecer atendimento humanizado, integral e de qualidade, promovendo saúde e bem-estar de nossos pacientes.',
  },
  {
    icon: FaEye,
    title: 'Visão',
    description: 'Ser uma instituição de referência em excelência clínica, reconhecida pelo comprometimento com o cuidado humanizado.',
  },
  {
    icon: FaHeart,
    title: 'Valores',
    description: 'Humanização, Qualidade, Ética, Respeito, Inovação e Responsabilidade social.',
  },
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="sobre" className="py-20 md:py-32 bg-white">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Sobre o Instituto</h2>
            <p className="text-xl text-gray-600">
              Conheça nossa história, missão e valores que guiam nosso trabalho.
            </p>
          </motion.div>

          {/* History with Image */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Text Content */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Especialização em Cirurgias Oftalmoplásticas</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                O Instituto Blefaroplastia Brasil é especialista em procedimentos oftalmoplásticos de excelência,
                oferecendo soluções transformadoras para o rejuvenescimento da região ocular. Com uma equipe de
                cirurgiões oftalmológicos altamente treinados e tecnologia de ponta, realizamos mais de 200 cirurgias
                mensalmente, mantendo os mais altos padrões de segurança e qualidade.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nossas especialidades — blefaroplastia superior, blefaroplastia inferior e lifting de sobrancelhas —
                são executadas com precisão cirúrgica e abordagem humanizada, transformando o olhar e restaurando a
                confiança de cada paciente. Utilizamos técnicas inovadoras que garantem resultados naturais e duradouros.
              </p>
            </div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-80 md:h-full rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/imagem/sobreBlefaro.png"
                alt="Especialização em Blefaroplastia"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {aboutItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg-elegant transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
