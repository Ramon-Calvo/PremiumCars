import Link from 'next/link'
import { Car, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

const NAV_LINKS = [
  { href: '/vehiculos', label: 'Coches' },
  { href: '/como-funciona', label: 'Cómo funciona' },
  { href: '/financiacion', label: 'Financiación' },
  { href: '/contacto', label: 'Contacto' },
]

const LEGAL_LINKS = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/politica-de-cookies', label: 'Cookies' },
  { href: '/terminos', label: 'Términos' },
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter/X' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <Car className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-sm">
              Report<span className="text-orange-400">Motor</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-800 text-slate-500 hover:text-orange-400 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Premium Autos S.L. · CIF B-87654321 ·{' '}
            <a href="tel:+34604955023" className="hover:text-slate-400 transition-colors">
              604 955 023
            </a>{' '}
            ·{' '}
            <a href="mailto:info@autospremium.com" className="hover:text-slate-400 transition-colors">
              info@autospremium.com
            </a>
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 order-1 sm:order-2">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
