import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
  devIndicators: {
    position: 'bottom-right',
  },
  // Permitir acesso local em desenvolvimento
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.15.31'],
  // Headers de segurança
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'geolocation=(), microphone=(), camera=(), accelerometer=(), gyroscope=(), magnetometer=(), usb=()',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self' https:; font-src 'self' data:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
        },
      ],
    },
  ],
};

export default nextConfig;
