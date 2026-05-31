'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Car } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/vehiculos', label: 'Coches' },
  { href: '/como-funciona', label: 'Cómo funciona' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Solo en la homepage el navbar es transparente con texto blanco al inicio
  const isHeroPage = pathname === '/'
  const isTransparent = isHeroPage && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              Report<span className="text-orange-500">Motor</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? isTransparent ? 'text-white bg-white/15' : 'text-blue-600 bg-blue-50'
                    : isTransparent ? 'text-white/85 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/vender"
              className={`text-sm transition-colors ${isTransparent ? 'text-white/75 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Vender mi coche
            </Link>
            <Link
              href="/vehiculos"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-orange-200"
            >
              Ver coches →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              isTransparent
                ? 'text-white/85 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — CSS slide via max-height transition */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-slate-200 shadow-lg transition-[max-height,opacity] duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-200 mt-2 flex flex-col gap-2">
            <Link
              href="/vender"
              className="px-4 py-3 rounded-xl text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              Vender mi coche
            </Link>
            <Link
              href="/vehiculos"
              className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all text-center"
            >
              Ver todos los coches →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
