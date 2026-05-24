'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie, ChevronDown, ChevronUp, Shield } from 'lucide-react'

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type CookieConsent = {
  necessary: true          // Siempre true, no se puede desactivar
  analytics: boolean       // Google Analytics u otras herramientas estadísticas
  marketing: boolean       // Publicidad personalizada, redes sociales
  version: string          // Versión de la política para invalidar consents antiguos
  timestamp: string        // ISO 8601 — para registro RGPD
}

const CONSENT_KEY = 'rm_cookie_consent'
const CONSENT_VERSION = '1.0'  // Incrementar si cambia la política de cookies

// ─── Utilidades ───────────────────────────────────────────────────────────────

function saveConsent(consent: CookieConsent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
}

function loadConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed: CookieConsent = JSON.parse(raw)
    // Invalidar si la versión no coincide (nueva política)
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // Mostrar solo si no hay consentimiento previo válido
  useEffect(() => {
    const existing = loadConsent()
    if (!existing) {
      // Pequeño delay para no bloquear el LCP
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  if (!visible) return null

  // ─── Acciones ───────────────────────────────────────────────────────────────

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    })
    setVisible(false)
  }

  const rejectNonEssential = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    })
    setVisible(false)
  }

  const saveCustom = () => {
    saveConsent({
      necessary: true,
      analytics,
      marketing,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    })
    setVisible(false)
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    /* Fondo semi-transparente solo en mobile para mejorar lectura */
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[9999] p-3 sm:p-4"
    >
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/15 overflow-hidden">
        {/* Franja superior decorativa */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-orange-400" />

        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-slate-900 text-sm mb-1">
                Usamos cookies para mejorar tu experiencia
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                ReportMotor Sales S.L. utiliza cookies propias y de terceros según lo establecido
                en la{' '}
                <Link
                  href="/politica-de-cookies"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  Política de Cookies
                </Link>
                . Las cookies técnicas son necesarias para el funcionamiento del sitio. Las demás
                requieren tu consentimiento previo conforme al RGPD y la LSSI-CE.
              </p>
            </div>
          </div>

          {/* Panel de configuración granular (expandible) */}
          {showDetails && (
            <div className="mb-4 border border-slate-100 rounded-xl divide-y divide-slate-100">
              {/* Necesarias */}
              <div className="flex items-center justify-between px-4 py-3 gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Cookies técnicas / necesarias
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Imprescindibles para la navegación segura. No requieren consentimiento (art. 22.2 LSSI-CE).
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    Siempre activas
                  </span>
                </div>
              </div>

              {/* Analíticas */}
              <div className="flex items-center justify-between px-4 py-3 gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Cookies analíticas
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Nos ayudan a medir el tráfico y mejorar el sitio (p. ej. Google Analytics). No
                    identifican usuarios individuales.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAnalytics((v) => !v)}
                  role="switch"
                  aria-checked={analytics}
                  className={`relative w-11 h-6 rounded-full transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    analytics ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      analytics ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between px-4 py-3 gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Cookies de marketing / publicidad
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Permiten mostrarte anuncios relevantes en otras plataformas (p. ej. Meta Pixel,
                    Google Ads).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMarketing((v) => !v)}
                  role="switch"
                  aria-checked={marketing}
                  className={`relative w-11 h-6 rounded-full transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    marketing ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      marketing ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Botones de acción — AEPD: "Aceptar" y "Rechazar" con igual prominencia visual */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* Rechazar no esenciales — prominencia IGUAL que "Aceptar todas" */}
            <button
              type="button"
              onClick={rejectNonEssential}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Rechazar no esenciales
            </button>

            {/* Personalizar */}
            {showDetails ? (
              <button
                type="button"
                onClick={saveCustom}
                className="flex-1 py-2.5 px-4 rounded-xl border border-blue-300 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Guardar mi selección
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="flex items-center justify-center gap-1.5 flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Personalizar
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Aceptar todas — prominencia IGUAL (mismo tamaño, distinto color CTA) */}
            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Aceptar todas
            </button>
          </div>

          {/* Nota RGPD mínima */}
          <p className="text-xs text-slate-400 mt-3 text-center">
            Puedes cambiar tus preferencias en cualquier momento desde nuestra{' '}
            <Link
              href="/politica-de-cookies"
              className="underline underline-offset-2 hover:text-slate-600"
            >
              Política de Cookies
            </Link>
            . Responsable: ReportMotor Sales S.L. · Finalidad: gestión de preferencias de cookies.
          </p>
        </div>
      </div>
    </div>
  )
}
