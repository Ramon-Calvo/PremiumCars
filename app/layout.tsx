import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CookieBanner from '@/components/ui/CookieBanner'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.reportmotor.es'),
  title: {
    default: 'ReportMotor Sales | Coches de Segunda Mano Certificados',
    template: '%s | ReportMotor Sales',
  },
  description:
    'Compra tu próximo coche de segunda mano con total seguridad. Más de 14.000 vehículos certificados, historial DGT verificado, financiación en 30 minutos y entrega a domicilio en toda España.',
  keywords: ['coches segunda mano', 'vehículos ocasión', 'coches certificados', 'comprar coche'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'ReportMotor Sales',
    url: 'https://www.reportmotor.es',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reportmotor',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'ReportMotor Sales',
    legalName: 'Premium Autos S.L.',
    url: 'https://www.reportmotor.es',
    logo: 'https://www.reportmotor.es/logo.png',
    description: 'Coches de segunda mano certificados con historial DGT verificado, garantía 12 meses y financiación en 30 minutos.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad Real',
      addressCountry: 'ES',
    },
    telephone: '+34604955023',
    email: 'info@autospremium.com',
    sameAs: [
      'https://www.instagram.com/reportmotor',
      'https://www.facebook.com/reportmotor',
    ],
  }

  return (
    <html lang="es" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
