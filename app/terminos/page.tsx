import type { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | ReportMotor Sales',
  description:
    'Condiciones generales de compraventa y uso del servicio de ReportMotor Sales.',
  robots: { index: true, follow: true },
}

export default function TerminosPage() {
  const updated = '24 de mayo de 2026'

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Términos y Condiciones</h1>
              <p className="text-xs text-slate-500 mt-0.5">Última actualización: {updated}</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Las presentes condiciones generales regulan la contratación de los servicios y la
            compraventa de vehículos a través del sitio web de ReportMotor Sales, S.L. La
            aceptación de estas condiciones es requisito previo imprescindible para la realización
            de cualquier reserva o compra.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">

          {/* 1. Partes */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              1. Partes del contrato
            </h2>
            <p>
              <strong>Vendedor:</strong> ReportMotor Sales, S.L., con CIF B-12345678, domicilio
              en Calle Ejemplo, 1, 28001 Madrid (en adelante, «ReportMotor»).
            </p>
            <p className="mt-2">
              <strong>Comprador:</strong> Persona física o jurídica mayor de 18 años que realiza
              una reserva o adquiere un vehículo a través del Sitio (en adelante, «el Cliente»).
            </p>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              2. Objeto del contrato
            </h2>
            <p>
              ReportMotor pone a disposición del Cliente un catálogo de vehículos de segunda mano
              sometidos a un proceso de inspección y certificación de 200 puntos. Cada vehículo
              incluye historial DGT verificado, garantía de 12 meses y posibilidad de financiación.
            </p>
          </section>

          {/* 3. Proceso de compra */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              3. Proceso de compra y reserva
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-600">
              <li>El Cliente selecciona el vehículo de interés y solicita información o reserva online.</li>
              <li>Para formalizar la reserva se abonará una señal de <strong>150 €</strong> mediante tarjeta bancaria o transferencia. Esta señal reserva el vehículo durante <strong>5 días hábiles</strong>.</li>
              <li>El Cliente puede visitar el vehículo en nuestras instalaciones o solicitar una visita presencial previa a la entrega.</li>
              <li>Una vez acordadas las condiciones finales, ambas partes firman el contrato de compraventa.</li>
              <li>El precio restante deberá abonarse antes de la entrega del vehículo.</li>
            </ol>
          </section>

          {/* 4. Precios */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              4. Precios y forma de pago
            </h2>
            <p>
              Todos los precios indicados en el Sitio incluyen el IVA vigente. Los precios pueden
              variar sin previo aviso, siendo vinculante el precio confirmado en el contrato de
              compraventa.
            </p>
            <p className="mt-2">
              Se admiten los siguientes medios de pago: transferencia bancaria, tarjeta de débito
              o crédito, y financiación a través de nuestras entidades colaboradoras. El pago en
              efectivo queda limitado al importe máximo establecido por la normativa antioblanqueo
              de capitales (actualmente 1.000 € para consumidores).
            </p>
          </section>

          {/* 5. Devolución */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              5. Derecho de desistimiento y devolución de 7 días
            </h2>
            <p>
              ReportMotor ofrece un período de devolución voluntario de <strong>7 días naturales</strong>{' '}
              desde la entrega del vehículo. Para ejercer este derecho, el vehículo deberá:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600">
              <li>Presentar el mismo estado en el que fue entregado (sin daños nuevos ni uso excesivo).</li>
              <li>Haber recorrido un máximo de <strong>500 km</strong> desde la entrega.</li>
              <li>Acompañarse de toda la documentación y accesorios originales.</li>
            </ul>
            <p className="mt-2">
              La señal de 150 € será íntegramente devuelta si el Cliente ejercita el desistimiento
              antes de la firma del contrato de compraventa. Una vez firmado el contrato, si el
              Cliente desiste sin causa justificada, perderá la señal.
            </p>
            <p className="mt-2">
              El derecho de devolución de 7 días no aplica a vehículos comprados para uso
              profesional o empresarial.
            </p>
          </section>

          {/* 6. Garantía */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              6. Garantía
            </h2>
            <p>
              Todos los vehículos incluyen <strong>12 meses de garantía</strong> en los sistemas
              mecánicos y eléctricos principales (motor, caja de cambios, transmisión, dirección,
              frenos y sistemas electrónicos de gestión del motor). La garantía cubre piezas y
              mano de obra.
            </p>
            <p className="mt-2">Quedan expresamente excluidos de la garantía:</p>
            <ul className="mt-1 list-disc list-inside space-y-1 text-slate-600">
              <li>Desgaste normal (neumáticos, frenos, embrague, filtros, etc.).</li>
              <li>Daños por accidente, negligencia, modificaciones o reparaciones no autorizadas.</li>
              <li>Elementos estéticos (tapicería, lunetas, retrovisores).</li>
            </ul>
          </section>

          {/* 7. Financiación */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              7. Financiación
            </h2>
            <p>
              ReportMotor actúa como intermediario de crédito no exclusivo entre el Cliente y las
              entidades financieras colaboradoras. La concesión de financiación está sujeta a la
              aprobación de la entidad financiera. ReportMotor no responde de las condiciones
              finales del préstamo, que se detallarán en el contrato con la entidad financiera.
            </p>
          </section>

          {/* 8. Responsabilidad */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              8. Limitación de responsabilidad
            </h2>
            <p>
              ReportMotor no asume responsabilidad por daños indirectos, pérdidas de negocio,
              lucro cesante o cualquier daño consecuente derivado de la compraventa, más allá del
              precio efectivamente pagado por el vehículo.
            </p>
          </section>

          {/* 9. Legislación */}
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              9. Legislación aplicable y resolución de conflictos
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española, en particular el
              Real Decreto Legislativo 1/2007 (Ley de Consumidores y Usuarios) y el Código Civil.
              Para la resolución de disputas, las partes se someten a los tribunales de Madrid,
              sin perjuicio del fuero imperativo que corresponda al consumidor.
            </p>
            <p className="mt-2">
              El consumidor puede acceder a la plataforma de resolución de litigios en línea de
              la UE en{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
