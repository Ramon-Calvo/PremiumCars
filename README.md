# ReportMotor Sales

Plataforma de compraventa de coches de segunda mano certificados. Proyecto de portfolio desarrollado con Next.js 15, React 19 y Tailwind CSS v4.

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (configuración CSS-first)
- **TypeScript** (strict)
- **Supabase** (base de datos y autenticación)
- **Framer Motion** (animaciones)
- **Three.js / React Three Fiber** (visor 3D de vehículos)
- **Zustand** (gestión de estado)

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con hero, buscador, catálogo destacado y testimonios |
| `/vehiculos` | Listado con filtros por marca, combustible, precio y año |
| `/vehiculo/[id]` | Ficha de vehículo con visor 3D, calculadora de financiación y reserva online |
| `/como-funciona` | Proceso de compra en 4 pasos, garantías y FAQ |
| `/financiacion` | Información de financiación, ejemplos y FAQ |
| `/vender` | Tasación gratuita con formulario de venta |
| `/contacto` | Formulario de contacto |
| `/politica-de-cookies` | Política de cookies (RGPD / LSSI-CE) |
| `/aviso-legal` | Aviso legal (LSSI-CE) |
| `/privacidad` | Política de privacidad (RGPD / LOPDGDD) |
| `/terminos` | Términos y condiciones de compraventa |

## Características

- ✅ Diseño responsive (mobile-first)
- ✅ Cookie banner AEPD/RGPD compliant con consentimiento granular
- ✅ SEO optimizado (metadata, Open Graph, Twitter Card)
- ✅ Páginas legales completas
- ✅ Tema claro con paleta azul/naranja
- ✅ Visor 3D de vehículos (Three.js)
- ✅ Calculadora de financiación interactiva
- ✅ Reserva online con Zustand
- ✅ 404 personalizado

## Desarrollo local

```bash
npm install --legacy-peer-deps
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Sin las variables de Supabase, la app usa datos de demostración (`lib/demo-data.ts`).

## Deploy

Compatible con [Vercel](https://vercel.com) sin configuración adicional.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
