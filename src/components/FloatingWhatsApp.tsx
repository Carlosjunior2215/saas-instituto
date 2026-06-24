'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';
import { security } from '@/lib/security';

export function FloatingWhatsApp() {
  const { selectedUnit } = useLocation();

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Validar URL antes de usar
  const whatsappUrl = security.isValidHttpUrl(selectedUnit.whatsappLink)
    ? selectedUnit.whatsappLink
    : '';

  if (!whatsappUrl) {
    return null; // Não renderizar se URL inválida
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      animate="pulse"
      variants={pulseVariants}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </motion.a>
  );
}
