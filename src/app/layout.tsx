import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, UNITS } from '@/constants';
import { LocationProvider } from '@/contexts/LocationContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${SITE_NAME} - Excelência em Atendimento e Cuidado Especializado`,
  description: SITE_DESCRIPTION,
  keywords: [
    'psicologia',
    'psiquiatria',
    'neurologia',
    'pediatria',
    'terapia',
    'saúde mental',
    'atendimento especializado',
    'São Paulo',
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://instituto.com.br',
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Excelência em Atendimento e Cuidado Especializado`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://instituto.com.br'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Excelência em Atendimento e Cuidado Especializado`,
    description: SITE_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://instituto.com.br'}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F4C81" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            locations: UNITS.map((unit) => ({
              '@type': 'LocalBusiness',
              name: `${SITE_NAME} - ${unit.city}`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: unit.address,
                addressLocality: unit.city,
                addressRegion: unit.state,
                postalCode: unit.cep,
                addressCountry: 'BR',
              },
              telephone: unit.whatsapp,
              url: typeof window !== 'undefined' ? window.location.origin : '',
            })),
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-text dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <LocationProvider>
            <main>{children}</main>
          </LocationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
