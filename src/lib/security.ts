// Utilidades de segurança

export const security = {
  // Validar URLs HTTPS
  isValidHttpUrl: (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
    } catch {
      return false;
    }
  },

  // Validar URLs Google Maps embed
  isValidGoogleMapsUrl: (url: string): boolean => {
    try {
      return url.startsWith('https://www.google.com/maps/embed');
    } catch {
      return false;
    }
  },

  // Mascarar número de telefone/WhatsApp
  maskPhoneNumber: (phone: string): string => {
    if (!phone || typeof phone !== 'string') return '';
    // Remover caracteres não-numéricos
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 6) return phone;
    // Retornar últimas 4 dígitos + asteriscos
    const lastFour = digits.slice(-4);
    return `****${lastFour}`;
  },

  // Mascarar nome de pessoa (apenas inicial + últimas letras)
  maskName: (name: string): string => {
    if (!name || typeof name !== 'string') return '';
    const parts = name.trim().split(' ');
    if (parts.length === 0) return '';
    // Primeira letra + ... + último nome
    const firstName = parts[0].charAt(0);
    const lastName = parts[parts.length - 1];
    return `${firstName}. ${lastName}`;
  },

  // Sanitizar dados do localStorage
  getFromLocalStorage: <T,>(
    key: string,
    validValues?: (T | string)[]
  ): T | null => {
    try {
      const value = localStorage.getItem(key);
      if (!value) return null;

      // Se há lista de valores válidos, validar
      if (validValues && !validValues.includes(value)) {
        console.warn(`Invalid localStorage value for key: ${key}`);
        return null;
      }

      return JSON.parse(value) as T;
    } catch {
      console.warn(`Failed to parse localStorage value for key: ${key}`);
      return null;
    }
  },

  // Sanitizar dados do sessionStorage
  getFromSessionStorage: <T,>(
    key: string,
    validValues?: (T | string)[]
  ): T | null => {
    try {
      const value = sessionStorage.getItem(key);
      if (!value) return null;

      // Se há lista de valores válidos, validar
      if (validValues && !validValues.includes(value)) {
        console.warn(`Invalid sessionStorage value for key: ${key}`);
        return null;
      }

      return JSON.parse(value) as T;
    } catch {
      console.warn(`Failed to parse sessionStorage value for key: ${key}`);
      return null;
    }
  },

  // Sanitizar IFrame src
  sanitizeIframeSrc: (src: string): string | null => {
    if (!src) return null;

    // Whitelist de domínios permitidos
    const allowedDomains = [
      'www.google.com',
      'google.com',
      'maps.google.com',
    ];

    try {
      const url = new URL(src);
      const isAllowed = allowedDomains.some((domain) =>
        url.hostname === domain || url.hostname.endsWith('.' + domain)
      );

      if (!isAllowed) {
        console.warn(`IFrame src not in whitelist: ${src}`);
        return null;
      }

      return src;
    } catch {
      console.warn(`Invalid IFrame src: ${src}`);
      return null;
    }
  },
};
