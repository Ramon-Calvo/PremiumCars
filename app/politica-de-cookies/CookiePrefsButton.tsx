'use client'

import { Settings } from 'lucide-react'

const CONSENT_KEY = 'rm_cookie_consent'

export default function CookiePrefsButton() {
  const handleReset = () => {
    try {
      localStorage.removeItem(CONSENT_KEY)
    } catch {
      // noop
    }
    // Recargar la página para que aparezca el banner de nuevo
    window.location.reload()
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-300 bg-blue-50 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <Settings className="w-4 h-4" />
      Gestionar mis preferencias de cookies
    </button>
  )
}
