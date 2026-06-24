'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaX, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_NAME, NAV_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';
import { useLocation } from '@/contexts/LocationContext';
import { UnitSelector } from './UnitSelector';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedUnit } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md-elegant'
          : 'bg-gradient-to-b from-white/80 to-transparent'
      )}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedUnit.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative h-16 w-40"
              >
                <Image
                  src={selectedUnit.logo}
                  alt={`Instituto Blefaroplastia ${selectedUnit.city}`}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-semibold text-primary-900 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Unit Selector */}
            <UnitSelector />

            {/* Social Links */}
            <motion.a
              href={selectedUnit.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary-600 hover:text-secondary-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href={selectedUnit.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Agendar consulta via WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FaX className="w-6 h-6 text-primary-600" />
            ) : (
              <FaBars className="w-6 h-6 text-primary-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-gray-100 space-y-3">
            {/* Unit Selector Mobile */}
            <div className="px-4">
              <UnitSelector />
            </div>

            {/* Navigation Items */}
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Social Links Mobile */}
            <div className="px-4 py-3 flex gap-4">
              <motion.a
                href={selectedUnit.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-primary-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>

            {/* WhatsApp Button Mobile */}
            <div className="px-4 pb-4">
              <motion.a
                href={selectedUnit.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors shadow-md"
                aria-label="Agendar consulta via WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
                Agendar Consulta
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
