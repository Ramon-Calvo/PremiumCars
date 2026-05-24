import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CookieBanner from '@/components/ui/CookieBanner'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.reportmotorsales.com'),
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
    url: 'https://www.reportmotorsales.com',
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
  return (
    <html lang="es" className={inter.className}>
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
