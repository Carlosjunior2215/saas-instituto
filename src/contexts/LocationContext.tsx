'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Unit } from '@/types';
import { UNITS } from '@/constants';

interface LocationContextType {
  selectedUnit: Unit;
  setSelectedUnit: (unitId: string) => void;
  units: Unit[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedUnit, setSelectedUnitState] = useState<Unit>(UNITS[0]);

  useEffect(() => {
    // Ler do localStorage ao montar - com validação de segurança
    const savedUnitId = localStorage.getItem('instituto-unit');

    if (savedUnitId && typeof savedUnitId === 'string') {
      // Validar que o savedUnitId existe na lista de unidades (previne injeção)
      const unit = UNITS.find((u) => u.id === savedUnitId);
      if (unit) {
        setSelectedUnitState(unit);
        return;
      }
    }

    // Não fazer geolocalização automática sem consentimento do usuário (LGPD/GDPR)
    // Usar Goiânia como fallback padrão
    setSelectedUnitState(UNITS[0]);
  }, []);

  const setSelectedUnit = (unitId: string) => {
    const unit = UNITS.find((u) => u.id === unitId);
    if (unit) {
      setSelectedUnitState(unit);
      localStorage.setItem('instituto-unit', unit.id);
    }
  };

  return (
    <LocationContext.Provider value={{ selectedUnit, setSelectedUnit, units: UNITS }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation deve ser usado dentro de LocationProvider');
  }
  return context;
}
