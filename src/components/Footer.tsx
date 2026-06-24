'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_NAME, SOCIAL_LINKS, NAV_ITEMS } from '@/constants';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';

const socialIcons: Record<string, React.ReactNode> = {
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  FaWhatsapp: <FaWhatsapp />,
};

export function Footer() {
  const { selectedUnit } = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedUnit.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative h-20 w-32 mb-4"
              >
                <Image
                  src={selectedUnit.logo}
                  alt={`Instituto Blefaroplastia ${selectedUnit.city}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <p className="text-white/80 text-sm">
              Excelência em atendimento e cuidado especializado para seu bem-estar.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={selectedUnit.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={selectedUnit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <p className="font-medium text-white mb-1">WhatsApp</p>
                <a
                  href={selectedUnit.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {selectedUnit.whatsapp}
                </a>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Localidade</p>
                <p>
                  {selectedUnit.city} — {selectedUnit.state}
                </p>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Endereço</h3>
            <address className="text-sm text-white/80 not-italic">
              <p className="font-medium text-white mb-2">{selectedUnit.address}</p>
              <p>
                {selectedUnit.city} — {selectedUnit.state}
              </p>
              <p>CEP: {selectedUnit.cep}</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>&copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
