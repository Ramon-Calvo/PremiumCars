import type { Metadata } from 'next'
import Link from 'next/link'
import { Cookie, Shield, BarChart2, Megaphone, Settings, ExternalLink } from 'lucide-react'
import CookiePrefsButton from './CookiePrefsButton'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Información detallada sobre el uso de cookies en Premium Autos (ReportMotor) conforme al RGPD y la LSSI-CE.',
  robots: { index: true, follow: true },
}

export default function PoliticaDeCookiesPage() {
  const updated = '24 de mayo de 2026'

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Política de Cookies</h1>
              <p className="text-xs text-slate-500 mt-0.5">Última actualización: {updated}</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            En cumplimiento del artículo 22.2 de la{' '}
            <strong>Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE)</strong>, el{' '}
            <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la{' '}
            <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>, informamos sobre el uso de cookies en
            este sitio web.
          </p>
        </div>

        {/* ─── Sección 1 ─────────────────────────────────────────────────── */}
        <Section title="1. ¿Qué es una cookie?">
          <p>
            Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del
            usuario al visitar una página. Las cookies permiten que el sitio recuerde información
            sobre tu visita (preferencias de idioma, sesión iniciada, etc.), lo que facilita la
            navegación y hace que el sitio resulte más útil.
          </p>
        </Section>

        {/* ─── Sección 2 ─────────────────────────────────────────────────── */}
        <Section title="2. Responsable del tratamiento">
          <ul className="text-sm text-slate-600 space-y-1 list-none">
            <li><strong>Identidad:</strong> Premium Autos S.L.</li>
            <li><strong>CIF:</strong> B-87654321</li>
            <li><strong>Domicilio:</strong> Ciudad Real</li>
            <li>
              <strong>Contacto DPD / Privacidad:</strong>{' '}
              <a href="mailto:info@autospremium.com" className="text-blue-600 hover:underline">
                info@autospremium.com
              </a>
            </li>
          </ul>
        </Section>

        {/* ─── Sección 3: tabla de cookies ────────────────────────────────── */}
        <Section title="3. Tipos de cookies utilizadas">

          {/* 3.1 Técnicas */}
          <CategoryCard
            icon={<Shield className="w-4 h-4 text-blue-600" />}
            title="3.1 Cookies técnicas / estrictamente necesarias"
            badge="No requieren consentimiento"
            badgeColor="blue"
          >
            <p>
              Estas cookies son imprescindibles para el funcionamiento del sitio. Sin ellas no es
              posible navegar o usar funcionalidades básicas. Quedan exentas de consentimiento al
              amparo del art. 22.2 LSSI-CE y el considerando 25 del RGPD.
            </p>
            <CookieTable rows={[
              { name: 'rm_cookie_consent', origin: 'Propia', duration: '12 meses', purpose: 'Almacena las preferencias de consentimiento de cookies del usuario.', transfer: 'No' },
              { name: 'next-auth.session-token', origin: 'Propia', duration: 'Sesión', purpose: 'Gestión de sesión autenticada (si aplica).', transfer: 'No' },
              { name: '__Host-next-auth*', origin: 'Propia', duration: 'Sesión', purpose: 'Seguridad CSRF / sesión.', transfer: 'No' },
            ]} />
          </CategoryCard>

          {/* 3.2 Analíticas */}
          <CategoryCard
            icon={<BarChart2 className="w-4 h-4 text-slate-500" />}
            title="3.2 Cookies analíticas / estadísticas"
            badge="Requieren consentimiento"
            badgeColor="amber"
          >
            <p>
              Nos permiten medir el número de visitas, las fuentes de tráfico y la interacción con
              el sitio para mejorar su rendimiento. Los datos se recogen de forma agregada y
              anonimizada. Solo se activan si el usuario otorga su consentimiento.
            </p>
            <CookieTable rows={[
              { name: '_ga', origin: 'Google Analytics (Google LLC)', duration: '2 años', purpose: 'Distingue usuarios únicos. Los datos se pueden transferir a EE. UU. bajo SCCs aprobadas por la CE.', transfer: 'EE. UU. (SCCs)' },
              { name: '_ga_XXXXXXXX', origin: 'Google Analytics', duration: '2 años', purpose: 'Persiste el estado de sesión de Google Analytics.', transfer: 'EE. UU. (SCCs)' },
              { name: '_gid', origin: 'Google Analytics', duration: '24 horas', purpose: 'Distingue usuarios (estadística diaria).', transfer: 'EE. UU. (SCCs)' },
            ]} />
          </CategoryCard>

          {/* 3.3 Marketing */}
          <CategoryCard
            icon={<Megaphone className="w-4 h-4 text-slate-500" />}
            title="3.3 Cookies de marketing / publicidad"
            badge="Requieren consentimiento"
            badgeColor="amber"
          >
            <p>
              Permiten mostrar anuncios relevantes según tus intereses y medir la efectividad de
              campañas publicitarias. Solo se activan con tu consentimiento previo.
            </p>
            <CookieTable rows={[
              { name: '_fbp', origin: 'Meta Platforms (Facebook Pixel)', duration: '3 meses', purpose: 'Identifica navegadores para la entrega y seguimiento de anuncios en Facebook/Instagram.', transfer: 'EE. UU. (SCCs)' },
              { name: 'fr', origin: 'Meta Platforms', duration: '3 meses', purpose: 'Publicidad segmentada en productos de Meta.', transfer: 'EE. UU. (SCCs)' },
              { name: '_gcl_au', origin: 'Google Ads (Google LLC)', duration: '3 meses', purpose: 'Seguimiento de conversiones en Google Ads.', transfer: 'EE. UU. (SCCs)' },
            ]} />
          </CategoryCard>
        </Section>

        {/* ─── Sección 4 ─────────────────────────────────────────────────── */}
        <Section title="4. Base jurídica del tratamiento">
          <p>
            El tratamiento de datos personales a través de cookies se fundamenta en:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">
            <li>
              <strong>Cookies técnicas:</strong> interés legítimo y necesidad contractual (art. 6.1.b
              y 6.1.f RGPD; exención art. 22.2 LSSI-CE).
            </li>
            <li>
              <strong>Cookies analíticas y de marketing:</strong> consentimiento libre, específico,
              informado e inequívoco del usuario (art. 6.1.a RGPD; art. 22.2 LSSI-CE).
            </li>
          </ul>
          <p className="mt-3">
            Las cookies analíticas y de marketing de terceros que implican transferencias
            internacionales (Google LLC, Meta Platforms Inc.) se realizan al amparo de las{' '}
            <strong>Cláusulas Contractuales Tipo (SCCs)</strong> aprobadas por la Comisión Europea
            el 4 de junio de 2021, conforme al art. 46 RGPD.
          </p>
        </Section>

        {/* ─── Sección 5 ─────────────────────────────────────────────────── */}
        <Section title="5. Derechos del usuario">
          <p>
            En virtud del RGPD y la LOPDGDD, tienes derecho a:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">
            <li><strong>Acceder</strong> a tus datos personales.</li>
            <li><strong>Rectificar</strong> datos inexactos.</li>
            <li><strong>Suprimir</strong> tus datos («derecho al olvido»).</li>
            <li><strong>Limitar</strong> el tratamiento.</li>
            <li><strong>Oponerte</strong> al tratamiento.</li>
            <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            <li>Presentar una <strong>reclamación ante la AEPD</strong> (www.aepd.es).</li>
          </ul>
          <p className="mt-3">
            Puedes ejercer tus derechos escribiendo a{' '}
            <a href="mailto:privacidad@reportmotor.es" className="text-blue-600 hover:underline">
              privacidad@reportmotor.es
            </a>{' '}
            adjuntando copia de tu DNI/NIE.
          </p>
        </Section>

        {/* ─── Sección 6 ─────────────────────────────────────────────────── */}
        <Section title="6. Cómo gestionar las cookies desde el navegador">
          <p>
            Independientemente de las preferencias que nos comuniques, puedes configurar o
            deshabilitar las cookies directamente en tu navegador:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
              { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-' },
              { name: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
              { name: 'Microsoft Edge', url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies' },
            ].map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            Ten en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento del sitio.
          </p>
        </Section>

        {/* ─── Sección 7 ─────────────────────────────────────────────────── */}
        <Section title="7. Modificar tus preferencias">
          <p>
            Puedes revisar o revocar tu consentimiento en cualquier momento haciendo clic en el
            botón siguiente:
          </p>
          <div className="mt-4">
            <CookiePrefsButton />
          </div>
        </Section>

        {/* ─── Sección 8 ─────────────────────────────────────────────────── */}
        <Section title="8. Actualizaciones de esta política">
          <p>
            ReportMotor Sales S.L. se reserva el derecho de modificar esta política para adaptarla
            a novedades legislativas, jurisprudenciales o técnicas. Los cambios relevantes se
            comunicarán mediante un nuevo banner de consentimiento.
          </p>
          <p className="mt-2">
            Versión vigente: <strong>1.0</strong> — {updated}.
          </p>
        </Section>

        {/* ─── Navegación legal ───────────────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-sm">
          <Link href="/privacidad" className="text-blue-600 hover:underline">
            Política de Privacidad
          </Link>
          <Link href="/aviso-legal" className="text-blue-600 hover:underline">
            Aviso Legal
          </Link>
          <Link href="/terminos" className="text-blue-600 hover:underline">
            Términos y Condiciones
          </Link>
        </div>

      </div>
    </div>
  )
}

// ─── Componentes auxiliares ───────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-base font-semibold text-slate-900 mb-3 pb-2 border-b border-slate-100">
        {title}
      </h2>
      <div className="text-sm text-slate-600 leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

function CategoryCard({
  icon,
  title,
  badge,
  badgeColor,
  children,
}: {
  icon: React.ReactNode
  title: string
  badge: string
  badgeColor: 'blue' | 'amber'
  children: React.ReactNode
}) {
  const badgeClass =
    badgeColor === 'blue'
      ? 'bg-blue-50 text-blue-700 border border-blue-200'
      : 'bg-amber-50 text-amber-700 border border-amber-200'

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        </div>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0 ${badgeClass}`}>
          {badge}
        </span>
      </div>
      <div className="text-sm text-slate-600 space-y-3">{children}</div>
    </div>
  )
}

type CookieRow = {
  name: string
  origin: string
  duration: string
  purpose: string
  transfer: string
}

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-100 mt-3">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50 text-slate-500 font-medium">
            <th className="text-left px-3 py-2 whitespace-nowrap">Nombre</th>
            <th className="text-left px-3 py-2 whitespace-nowrap">Proveedor</th>
            <th className="text-left px-3 py-2 whitespace-nowrap">Duración</th>
            <th className="text-left px-3 py-2">Finalidad</th>
            <th className="text-left px-3 py-2 whitespace-nowrap">Transferencia</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.name} className="bg-white hover:bg-slate-50/60 transition-colors">
              <td className="px-3 py-2 font-mono text-slate-700 whitespace-nowrap">{r.name}</td>
              <td className="px-3 py-2 text-slate-600">{r.origin}</td>
              <td className="px-3 py-2 text-slate-600 whitespace-nowrap">{r.duration}</td>
              <td className="px-3 py-2 text-slate-600">{r.purpose}</td>
              <td className="px-3 py-2 text-slate-600 whitespace-nowrap">{r.transfer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
