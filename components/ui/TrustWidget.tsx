import { ShieldCheck, FileCheck, AlertCircle } from 'lucide-react'

const TRUST_ITEMS = [
  {
    icon: FileCheck,
    title: 'Historial DGT Verificado',
    description:
      'Cruzamos los datos del vehículo con la DGT, informes de ITV y el historial del fabricante. Cada kilómetro es real.',
    badge: '200 puntos de control',
  },
  {
    icon: AlertCircle,
    title: 'Sin Cargas ni Embargos',
    description:
      'Verificamos que el vehículo esté libre de cargas, embargos, reservas de dominio y deudas antes de la venta.',
    badge: 'Seguridad jurídica total',
  },
  {
    icon: ShieldCheck,
    title: 'Certificado Estructural',
    description:
      'Inspección técnica de chasis, carrocería y elementos de seguridad. Sin accidentes ocultos ni reparaciones no declaradas.',
    badge: 'Garantía 12 meses',
  },
]

export default function TrustWidget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {TRUST_ITEMS.map(({ icon: Icon, title, description, badge }) => (
        <div
          key={title}
          className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl p-5 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{description}</p>
              <span className="inline-block text-[0.65rem] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
                {badge}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
