import type { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad | ReportMotor Sales',
  description:
    'Política de privacidad de Premium Autos S.L. conforme al RGPD y la LOPDGDD.',
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  const updated = '24 de mayo de 2026'

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Política de Privacidad</h1>
              <p className="text-xs text-slate-500 mt-0.5">Última actualización: {updated}</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            En Premium Autos S.L. tratamos los datos personales de conformidad con el
            Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). A continuación
            encontrará toda la información sobre cómo recogemos, usamos y protegemos sus datos.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">

          {/* 1. Responsable */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              1. Responsable del tratamiento
            </h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Identidad', 'Premium Autos S.L.'],
                  ['CIF', 'B-87654321'],
                  ['Dirección', 'Ciudad Real'],
                  ['Email DPO', 'info@autospremium.com'],
                  ['Teléfono', '+34 604 955 023'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-2 pr-4 font-medium text-slate-600 w-40 shrink-0">{label}</td>
                    <td className="py-2 text-slate-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 2. Finalidades */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              2. Finalidades y base jurídica del tratamiento
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50 text-xs text-slate-600 uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-3 py-2">Finalidad</th>
                    <th className="text-left px-3 py-2">Base jurídica</th>
                    <th className="text-left px-3 py-2">Conservación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Gestión de la relación precontractual y contractual (reservas, compraventas)', 'Ejecución de contrato (art. 6.1.b RGPD)', '5 años desde fin de relación'],
                    ['Atención de consultas y solicitudes de información', 'Interés legítimo (art. 6.1.f RGPD)', '1 año desde la consulta'],
                    ['Envío de comunicaciones comerciales (con consentimiento)', 'Consentimiento (art. 6.1.a RGPD)', 'Hasta revocación del consentimiento'],
                    ['Cumplimiento de obligaciones legales (contabilidad, fiscalidad)', 'Obligación legal (art. 6.1.c RGPD)', '6 años (Código de Comercio)'],
                    ['Análisis estadístico del sitio web (analytics)', 'Consentimiento mediante cookies', 'Según política de cookies'],
                  ].map(([fin, base, cons]) => (
                    <tr key={fin}>
                      <td className="px-3 py-2">{fin}</td>
                      <td className="px-3 py-2 text-slate-600">{base}</td>
                      <td className="px-3 py-2 text-slate-500">{cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Destinatarios */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              3. Destinatarios de los datos
            </h2>
            <p>
              Los datos personales no serán cedidos a terceros salvo obligación legal o cuando sea
              necesario para la prestación del servicio contratado. Las categorías de destinatarios
              son:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
              <li>Entidades financieras colaboradoras para la gestión de financiación de vehículos.</li>
              <li>Gestorías y administraciones públicas para trámites de matriculación y transferencia.</li>
              <li>Proveedores tecnológicos (hosting, CRM, analytics) con los que se han suscrito los correspondientes contratos de encargo de tratamiento.</li>
              <li>Administraciones Públicas cuando así lo exija la normativa vigente.</li>
            </ul>
            <p className="mt-3">
              No se realizan transferencias internacionales de datos fuera del Espacio Económico
              Europeo, salvo que el proveedor esté acogido a garantías adecuadas (decisión de
              adecuación, cláusulas contractuales tipo o certificación, etc.).
            </p>
          </section>

          {/* 4. Derechos */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              4. Derechos de los interesados
            </h2>
            <p>
              Puede ejercer los siguientes derechos enviando un escrito a{' '}
              <strong>privacidad@reportmotorsales.com</strong> o a nuestra dirección postal, junto
              con copia de su DNI/NIE:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                ['Acceso', 'Conocer qué datos tratamos sobre usted'],
                ['Rectificación', 'Corregir datos inexactos o incompletos'],
                ['Supresión', 'Solicitar el borrado de sus datos («derecho al olvido»)'],
                ['Oposición', 'Oponerse a determinados tratamientos'],
                ['Limitación', 'Restringir el tratamiento en ciertos casos'],
                ['Portabilidad', 'Recibir sus datos en formato estructurado'],
              ].map(([derecho, desc]) => (
                <div key={derecho} className="bg-slate-50 rounded-lg p-3">
                  <p className="font-medium text-slate-800">{derecho}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Si considera que el tratamiento de sus datos vulnera la normativa, puede presentar
              una reclamación ante la{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Agencia Española de Protección de Datos (AEPD)
              </a>
              .
            </p>
          </section>

          {/* 5. Seguridad */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              5. Medidas de seguridad
            </h2>
            <p>
              ReportMotor Sales, S.L. ha adoptado las medidas técnicas y organizativas necesarias
              para garantizar la seguridad e integridad de los datos personales y evitar su
              alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo
              establecido en el artículo 32 del RGPD. Toda la información transmitida a través
              del Sitio está cifrada mediante protocolo TLS/HTTPS.
            </p>
          </section>

          {/* 6. Menores */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              6. Menores de edad
            </h2>
            <p>
              Los servicios ofrecidos en el Sitio no están dirigidos a menores de 14 años. En
              aplicación del artículo 8 del RGPD y el artículo 7 de la LOPDGDD, si detectamos
              que hemos recogido datos de un menor sin el consentimiento paterno/materno o
              tutelar requerido, procederemos a eliminarlos de inmediato.
            </p>
          </section>

          {/* 7. Modificaciones */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              7. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho a actualizar la presente Política de Privacidad cuando
              sea necesario. Cualquier cambio relevante le será notificado a través del Sitio.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
