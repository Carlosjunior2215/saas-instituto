'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLocationDot, FaChevronDown } from 'react-icons/fa6';
import { useLocation } from '@/contexts/LocationContext';

export function UnitSelector() {
  const { selectedUnit, setSelectedUnit, units } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectUnit = (unitId: string) => {
    setSelectedUnit(unitId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Selector Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors text-primary-600 font-medium text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Selecionar unidade"
        aria-expanded={isOpen}
      >
        <FaLocationDot className="w-4 h-4" />
        <span>{selectedUnit.city}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FaChevronDown className="w-3 h-3" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 z-50 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-max"
          >
            {units.map((unit) => (
              <motion.button
                key={unit.id}
                onClick={() => handleSelectUnit(unit.id)}
                className={`w-full flex items-center gap-2 px-4 py-3 text-left transition-colors ${
                  selectedUnit.id === unit.id
                    ? 'bg-secondary-100 text-secondary-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ x: 4 }}
              >
                <FaLocationDot className="w-4 h-4 flex-shrink-0" />
                <span>
                  {unit.city} — {unit.state}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
