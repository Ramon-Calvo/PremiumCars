import type { Metadata } from 'next'
import { Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal | ReportMotor Sales',
  description:
    'Aviso legal e información corporativa de Premium Autos S.L. conforme a la LSSI-CE.',
  robots: { index: true, follow: true },
}

export default function AvisoLegalPage() {
  const updated = '24 de mayo de 2026'

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Scale className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Aviso Legal</h1>
              <p className="text-xs text-slate-500 mt-0.5">Última actualización: {updated}</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se pone a disposición
            del usuario la siguiente información sobre el titular del sitio web.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">

          {/* 1. Datos identificativos */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              1. Datos identificativos del titular
            </h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Razón social', 'Premium Autos S.L.'],
                  ['CIF', 'B-87654321'],
                  ['Domicilio social', 'Ciudad Real'],
                  ['Registro Mercantil', 'Registro Mercantil de Ciudad Real'],
                  ['Email de contacto', 'info@autospremium.com'],
                  ['Teléfono', '+34 604 955 023'],
                  ['Sitio web', 'www.reportmotor.es'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-2 pr-4 font-medium text-slate-600 w-48 shrink-0">{label}</td>
                    <td className="py-2 text-slate-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web{' '}
              <strong>www.reportmotor.es</strong> (en adelante, «el Sitio»), titularidad de
              Premium Autos S.L. El acceso al Sitio implica la aceptación plena y sin reservas
              de las presentes condiciones.
            </p>
            <p className="mt-2">
              El Sitio tiene por objeto la intermediación y comercialización de vehículos de segunda
              mano certificados, así como la prestación de servicios de información y asesoramiento
              en la compraventa de automóviles.
            </p>
          </section>

          {/* 3. Propiedad intelectual */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              3. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del Sitio —incluyendo, sin limitación, textos, fotografías,
              gráficos, imágenes, iconos, tecnología, software, marcas, logotipos y demás material
              audiovisual— son titularidad de ReportMotor Sales, S.L. o de sus licenciantes, y
              están protegidos por la legislación española e internacional sobre propiedad
              intelectual e industrial.
            </p>
            <p className="mt-2">
              Queda expresamente prohibida la reproducción, distribución, comunicación pública,
              transformación o cualquier otra forma de explotación, total o parcial, de dichos
              contenidos sin la autorización escrita previa del titular.
            </p>
          </section>

          {/* 4. Responsabilidad */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              4. Exclusión de responsabilidad
            </h2>
            <p>
              ReportMotor Sales, S.L. no se responsabiliza de los daños y perjuicios de cualquier
              naturaleza que pudieran derivarse del uso del Sitio, incluyendo fallos técnicos,
              interrupción del servicio, datos incorrectos facilitados por el usuario o accesos no
              autorizados producidos por terceros.
            </p>
            <p className="mt-2">
              La información sobre los vehículos publicados en el Sitio se facilita a título
              orientativo. Las características técnicas definitivas y el precio final se confirmarán
              en el momento de la formalización del contrato de compraventa.
            </p>
            <p className="mt-2">
              El Sitio puede contener enlaces a terceros. ReportMotor Sales, S.L. no controla ni
              se responsabiliza del contenido de dichos sitios externos.
            </p>
          </section>

          {/* 5. Legislación */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              5. Legislación y jurisdicción aplicable
            </h2>
            <p>
              El presente Aviso Legal se rige por la legislación española. Para la resolución de
              cualquier controversia derivada del acceso o uso del Sitio, las partes se someten a
              los Juzgados y Tribunales de Madrid (España), con renuncia expresa a cualquier otro
              fuero que pudiera corresponderles.
            </p>
            <p className="mt-2">
              En cumplimiento del Reglamento (UE) n.º 524/2013, se informa al usuario de que la
              Comisión Europea dispone de una plataforma de resolución de litigios en línea
              accesible en:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          {/* 6. Modificaciones */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              6. Modificaciones
            </h2>
            <p>
              ReportMotor Sales, S.L. se reserva el derecho a modificar en cualquier momento el
              presente Aviso Legal. Las modificaciones serán efectivas desde el momento de su
              publicación en el Sitio.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
