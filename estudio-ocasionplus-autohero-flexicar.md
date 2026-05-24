# Análisis en Profundidad: OcasionPlus · Autohero · Flexicar
> Estudio de diseño, UX y estrategia digital — Mayo 2026

---

## Ficha de Identidad

| | **OcasionPlus** | **Autohero** | **Flexicar** |
|---|---|---|---|
| **URL** | ocasionplus.com | autohero.com/es | flexicar.es |
| **Grupo** | Grupo Portoalegre | Auto1 Group (Alemania) | Grupo Flexicar |
| **Tipo** | Red física + web | 100% online | Red física + web |
| **Tagline** | "Coches de segunda mano, vehículos de ocasión y kilómetro 0" | "Comprar un coche: Por fin, fácil" | "La mayor red de concesionarios de ocasión de España" |
| **Stock** | ~14.100 coches | ~4.600 en España / +20.000 total | ~24.310 coches |
| **Centros físicos** | 100 centros en España | 5 puntos de recogida (Alicante, Barcelona, Bilbao, Madrid, Valencia) | Red extensa (todas las provincias) |
| **Países** | España | 9 países (europeo) | España |
| **Garantía** | Estándar | 12 meses gratis + Premium hasta 3 años | 12 meses |
| **Devolución** | 15 días / 1.000 km | **21 días / 500 km** | No especificada en web |

---

## 1. OcasionPlus — Análisis Detallado

### 1.1 Identidad Visual

**Paleta de colores:**
```
Color principal:  Azul marino / navy     — autoridad, confianza
Acento / CTA:     Naranja/rojo           — acción, urgencia
Fondo:            Blanco                 — limpieza, amplitud
Texto:            Negro / gris oscuro    — legibilidad máxima
Iconografía:      Azul + naranja         — consistente con marca
```

**Logo:** SVG vectorial, posicionado en esquina superior izquierda. Simple y reconocible.

**Tipografía:** Sans-serif moderna, sin decoración. Jerarquía bien marcada entre secciones.

---

### 1.2 Estructura de la Home

```
[NAVBAR]
  Logo | COMPRAR COCHE | VENDER MI COCHE | KM0 | COCHES CON DESCUENTO | ALQUILAR | MOTOS

[HERO]
  Buscador:
  ┌─────────────────────────────────────────────────────────────────────┐
  │  [Marca ▼]  [Modelo ▼]  [Precio: slider 0€ ─────── +40.000€]       │
  │                                    [VER 14.101 COCHES →]            │
  └─────────────────────────────────────────────────────────────────────┘
  Badge Google Reviews ★★★★½ — visible en el hero

[SECCIÓN: ¿Qué tipo de coche buscas?]
  Iconos ilustrados por carrocería:
  Turismo | SUV/Todoterreno | Monovolumen | Familiar | Industrial |
  Cabrio | Coupé | Camper | Pickup

[SECCIÓN: Búsquedas más frecuentes]
  Pills/chips clicables:
  "En Oferta" | "Económicos (< 10k€)" | "Kilómetro 0" | "Premium (+30k€)" |
  "IVA deducible" | "Siete plazas" | etc.

[SECCIÓN: Búsqueda por provincia y concesionario]
  Tabs de provincias (ÁLAVA, ALBACETE, ALICANTE...) — toda España

[SECCIÓN: Compramos tu coche]
  2 columnas con imagen + beneficios:
  ◀ Col 1: "Vende tu coche al mejor precio" + 5 ✓ + CTA "TASA TU COCHE GRATIS"
  ▶ Col 2: "Gestionamos la venta de tu coche" + 3 ✓ + CTA "IR A GESTIÓN DE VENTA"

[SECCIÓN: Nuestras mejores ofertas]
  Carrusel horizontal de tarjetas con:
  CTA: "VER TODOS →"

[SECCIÓN: Todas las marcas]
  Logos con nombre: Toyota | Audi | Fiat | Mercedes | Seat | BMW | Nissan...
  CTA: "VER TODAS LAS MARCAS"

[SECCIÓN: Ventajas de comprar en OcasionPlus]
  6 bloques con icono SVG + título + texto:
  1. Relación calidad-precio  — +16.000 coches
  2. 100 centros              — revisión en +200 puntos de control
  3. Transparencia            — Carfax + prueba odometría
  4. Garantía                 — 15 días / 1.000 km de prueba
  5. Financiación             — hasta el 100% sin entrada, en 30 min
  6. Postventa                — departamento de atención dedicado

[SECCIÓN: Ventajas de vender]
  3 bloques similares: Mejor precio | Rápido y sencillo | Tasación Online

[FOOTER]
  Amplio. Horario de atención | Redes sociales | Links por servicio/categoría
```

---

### 1.3 Tarjeta de Vehículo (Card)

```
┌──────────────────────────────────────┐
│  [FOTO del vehículo]                 │
│  [♡ Favorito]  [Badge: OFERTA/KM0]  │
├──────────────────────────────────────┤
│  Nissan JUKE 1.0 DIG-T Tekna DCT    │
│  ──────────────────────────────────  │
│  ~~19.990€~~    18.173€             │  ← precio tachado + precio real
│  desde 298€/mes                      │  ← cuota mensual siempre visible
│  ──────────────────────────────────  │
│  [🏷 ECO]  2021 · 52.955 Km         │
│  Gasolina · Automático               │
│  📍 Madrid - Getafe                  │
│  Único propietario                   │
└──────────────────────────────────────┘
```

**Elementos distintivos:**
- **Precio tachado visible** cuando hay descuento
- **Cuota mensual siempre presente** — reduce la barrera psicológica del precio
- **Etiqueta ambiental DGT** en badge
- **"Único propietario"** como dato de confianza
- Numeración del slider de carrusel (1, 2, 3... 20 posiciones)

---

### 1.4 Trust Signals (Señales de Confianza)

| Signal | Implementación |
|---|---|
| **Certificado Carfax** | Historial completo del vehículo incluido |
| **Odometría verificada** | Prueba de km reales (anti-fraude) |
| **200 puntos de control** | Revisión mecánica exhaustiva |
| **15 días de prueba** | Única empresa del sector con este plazo |
| **Financiación 30 min** | Proceso rápido como argumento de venta |
| **Google Reviews** | Badge con estrellas en el hero |
| **+5.000 valoraciones** | Número de reseñas positivas mencionado |
| **+100.000 clientes** | Prueba social por volumen |

---

### 1.5 Diferenciadores Clave

1. **100 centros físicos** — El más amplio argumento de proximidad geográfica
2. **Certificado Carfax** — Único en el sector que lo menciona explícitamente en homepage
3. **15 días / 1.000 km de prueba** — Posicionado como "único en el sector"
4. **WhatsApp para tasación** — Canal moderno para captación de vendedores
5. **Etiqueta ambiental DGT** filtrable — Adapatado a restricciones ZBE actuales

---

## 2. Autohero — Análisis Detallado

### 2.1 Identidad Visual

**Paleta de colores:**
```
Color principal:  Blanco puro            — modernidad, tecnología
Acento / CTA:     Naranja intenso        — e-commerce, confianza
Texto:            Negro / gris oscuro    — contrastes legibles
Fondos sección:   Gris muy claro        — separación de bloques
Iconografía:      Naranja + verde check  — positivo, seguro
```

**Estilo general:** Diseño de **e-commerce de tecnología** más que de concesionario tradicional. Se asemeja más a Amazon o una fintech que a un portal de coches. El carrito de compra en el header es el símbolo más revelador de esta filosofía.

**Logo:** SVG blanco sobre fondo oscuro en el header. Limpio, sans-serif.

---

### 2.2 Estructura de la Home

```
[NAVBAR — con elementos de e-commerce]
  Logo | [♡ Favoritos 0] | [🔍 Búsquedas guardadas] | [🛒 Carrito] | [👤 Cuenta] | [⚙ Servicios]
  [Chatbot flotante] + [WhatsApp flotante]

[HERO — imagen de coche de alta calidad + mensaje]
  Titular: "Comprar un coche: Por fin, fácil"
  CTAs:    [Encuentra tu coche] + [¿Cuánto vale tu coche?]
  Reviews: ⭐ Trustpilot + ⭐ Google

[SECCIÓN: Busca por carrocerías populares]
  8 pills con icono:
  SUV | Furgoneta/Monovolumen | Compacto | Familiar | Cabrio | Berlina | Coupé/Sport | Pickup
  CTA: "Ver todas"

[SECCIÓN: Busca por marcas populares]
  10 logos: Mercedes | Toyota | Audi | BMW | Volkswagen | Seat | Hyundai | Peugeot | Kia | Renault
  CTA: "Ver todas"

[SECCIÓN: Sin preocupaciones desde el primer clic hasta la entrega]
  Mosaico de fotos de clientes reales — humanización de la marca

[SECCIÓN: Encuentra coches que se ajusten a tu presupuesto]
  Tabs de presupuesto:
  [Hasta 15.000€] [Hasta 20.000€] [Hasta 25.000€] [Hasta 30.000€] [Más de 30.000€]
  + Grid de modelos populares como links de texto

[SECCIÓN: Cómo funciona — 4 pasos ilustrados]
  1. Reserva     → fotos detalladas, verificación online
  2. Pago        → financiación, pago en entrega, trade-in
  3. Entrega     → a domicilio o puntos de recogida (5 ciudades)
  4. Disfruta    → 21 días / 500 km garantía devolución + 1 año garantía

[SECCIÓN: App CTA — "Comprar un coche: Por fin, fácil - ahora en la app"]
  4 cards: Financiación | Garantía | Entrega | Calidad
  + Badges App Store / Google Play

[SECCIÓN: Consejo de compra — Blog editorial]
  Cards de artículos: "TOP 7 coches 7 plazas" | "Mejor coche híbrido" | etc.

[FOOTER]
  Sencillo. 5 columnas: Sobre Autohero | Comprar/Renovar | Ventajas | Otros | Newsletter
  Ubicaciones físicas: Alicante | Barcelona | Bilbao | Madrid | Valencia
```

---

### 2.3 Tarjeta de Vehículo

```
┌──────────────────────────────────────┐
│  [FOTO del vehículo]                 │
│  [♡ Favorito]  [Badge: INSPECTED]   │
├──────────────────────────────────────┤
│  VW Golf 1.5 TSI Evo Life            │
│  ──────────────────────────────────  │
│  18.900€                             │  ← precio único, sin tachado
│  desde 289€/mes (financiado)         │  ← cuota visible
│  ──────────────────────────────────  │
│  2021 · 35.000 km · Gasolina        │
│  Automático · Berlina               │
│  📍 Madrid                           │
│  [✅ Garantía 1 año]  [↩ 21 días]   │
└──────────────────────────────────────┘
```

**Elementos distintivos:**
- Sin precio tachado — precio único claro
- **Badges de garantía siempre en la tarjeta**
- UI más minimalista que competidores españoles
- Rating/reviews del coche (si disponible)

---

### 2.4 Sistema de Garantía — Diferenciador Máximo

Autohero es la plataforma con el sistema de garantía **más elaborado visualmente** del sector:

```
GARANTÍA BÁSICA (incluida, gratis)
  ✅ 12 meses o 10.000 km
  ✅ Motor y transmisión
  ❌ Resto de componentes

GARANTÍA PREMIUM (desde 299€)
  ✅ Hasta 3 años / 60.000 km
  ✅ Motor + transmisión + dirección + frenos
  ✅ Sistema eléctrico + electrónica confort
  ✅ Aire acondicionado + refrigeración
  ✅ Combustible + escape + seguridad
  ✅ Sin franquicia — pago directo al taller
  ✅ Válida en toda Europa
```

**Página de garantía interactiva:** Diagrama 3D del coche con las partes clicables que muestran coste medio de reparación sin garantía (ej: Alternador: 450–900€ / Con Garantía: 0€). **Esto es conversión pura — hace tangible el valor.**

---

### 2.5 Proceso de Compra Online

```
FLUJO COMPLETO (sin ir a un concesionario):

1. Encuentra → Filtros + fotos 360° + especificaciones
2. Añade al carrito → Carrito de compra tipo e-commerce
3. Verifica identidad → Número de teléfono + DNI online
4. Elige cómo pagar:
   - Financiación (pre-aprobación sin afectar CIRBE)
   - Transferencia antes de entrega
   - Pago en la entrega (transferencia inmediata)
5. Elige entrega:
   - A domicilio (grúa Autohero)
   - Punto de recogida (5 ciudades)
6. Recibe y prueba 21 días
   → Si no convence: devolución total sin preguntas
```

---

### 2.6 Trust Signals Autohero

| Signal | Implementación |
|---|---|
| **Trustpilot** | Badge con rating en el hero |
| **Google Reviews** | Badge con rating en el hero |
| **41k+ clientes satisfechos** | Número en página "Cómo funciona" |
| **Fotos de clientes reales** | Mosaico en homepage |
| **Testimonios con casos reales** | Nombre + coche + problema + coste cubierto |
| **1 año garantía gratis** | En cada tarjeta y página de detalle |
| **21 días devolución** | En cada tarjeta y página de detalle |
| **Inspeccionados y reacondicionados** | Badge en tarjetas |
| **Auto1 Group — líder europeo** | Credibilidad corporativa en footer |

---

### 2.7 Diferenciadores Clave Autohero

1. **Carrito de compra** — El único en el sector que usa metáfora de e-commerce real
2. **Garantía Premium interactiva** — Diagrama 3D con costes de reparación reales
3. **21 días / 500 km de devolución** — El período más largo del sector español
4. **Pre-aprobación financiación sin afectar CIRBE** — Argumento emocional potentísimo
5. **Grúa icónica** — La grúa de entrega es un elemento de marca reconocible
6. **Presencia europea (Auto1)** — Escala continental como argumento de confianza
7. **App con compra completa** — El proceso de compra está en la app

---

## 3. Flexicar — Análisis Detallado

### 3.1 Identidad Visual

**Paleta de colores:**
```
Color principal:  Verde #00873A (aproximado) — confianza, cercanía, frescura
Acento / CTA:     Verde oscuro / botones     — consistencia monocromática
Fondo:            Blanco                     — claridad
Texto:            Negro / gris              — legibilidad
Fondos alternativos: Gris muy claro         — separación secciones
```

**Estilo general:** Más **cálido y cercano** que Autohero, más **limpio y moderno** que la media española. El verde genera asociaciones con crecimiento, confianza y naturaleza — diferente al rojo/naranja de la competencia.

---

### 3.2 Estructura de la Home

```
[NAVBAR]
  Logo | [☰ Menú] | [👤 Acceso] | [🏷 Ofertas] | [Compra tu coche] | [Vende tu coche]

[HERO]
  Buscador:
  ┌────────────────────────────────────────────────────────────────────┐
  │  [Marca ▼]   [Modelo ▼]   [Precio: slider 0€ ──── 50.000€]       │
  │                                  [Ver coches (24310)]              │
  └────────────────────────────────────────────────────────────────────┘

[SECCIÓN: Elige tu tipo de coche]
  Iconos por carrocería (misma estructura que OcasionPlus):
  Turismo | SUV y 4x4 | Monovolumen | Familiar | Deportivo | Cabrio | Furgoneta | Compacto | Pick up

[SECCIÓN: Búsquedas frecuentes]
  4 chips: Coches Económicos | Coches Kilómetro 0 | Coches Premium | Coches en oferta

[SECCIÓN: Búsqueda por provincia y concesionario]
  Selector de provincia con icono de mapa

[SECCIÓN INTEGRADA EN LISTADO: Compramos tu coche]
  5 checkmarks + CTA | 3 checkmarks para gestión de venta

[SECCIÓN: Descubre todas nuestras ofertas]
  Grid de tarjetas — ordenado por "Ofertas primero" por defecto
  Banner intermedio: "Flexicarte paga más — ¡Vende tu coche con nosotros!"

[SECCIÓN: Últimas noticias]
  Cards de blog con imagen, título, autor, fecha y categoría

[SECCIÓN SEO: Concesionario de coches Flexicar]
  3 subsecciones de texto: Por qué Flexicar | Tienda confiable | Online fácil
  + Extensa lista de concesionarios por provincia

[FOOTER]
  Muy extenso — SEO optimizado en extremo:
  Por marcas | Por provincia | Por carrocería | Por combustible |
  Por transmisión | Marcas Km0 | Por plazas | Por precio | Otros
```

---

### 3.3 Tarjeta de Vehículo

```
┌──────────────────────────────────────┐
│  [FOTO del vehículo]                 │
│  [♡ Favorito]                       │
├──────────────────────────────────────┤
│  ~~14.990€~~                         │  ← precio original
│  Desde 201€/mes*                     │  ← cuota en segunda línea
│                                      │
│  12.890€                             │  ← precio oferta grande
│  ──────────────────────────────────  │
│  SEAT                                │  ← marca uppercase + pequeño
│  Ibiza                               │  ← modelo grande
│  1.0 MPI 59kW (80CV) Reference      │  ← versión completa
│  ──────────────────────────────────  │
│  2023  ·  87.968 km                  │
│  Gasolina  ·  Manual                 │
│  Vigo - A Paz                        │  ← concesionario exacto
└──────────────────────────────────────┘
```

**Patrón tipográfico único de Flexicar:**
- La **marca** en mayúsculas pequeñas (uppercase, pequeño)
- El **modelo** grande y en negrita (es el protagonista)
- La **versión técnica** completa debajo
- Esto crea una jerarquía diferente al resto del sector

---

### 3.4 Trust Signals Flexicar

| Signal | Implementación |
|---|---|
| **Certificación de 110 puntos** | Mencionada en texto de listado |
| **Seguridad Jurídica** | "Libre de cargas, embargos o reservas de dominio" |
| **Garantía 12 meses** | Obligatoria en todos los vehículos |
| **Historial de mantenimiento** | Verificación con datos DGT + ITV |
| **Odómetro verificado** | Cruce documental |
| **Opiniones Google** | Reseñas de clientes reales con nombre |
| **Banner "¿Hablamos?"** | Teléfono visible dentro del listado (910 970 017) |
| **Entrega a domicilio** | Red logística propia |

---

### 3.5 Diferenciadores Clave Flexicar

1. **La mayor red física de España** — Argumento principal en el tagline
2. **24.310 coches** — El mayor stock del análisis
3. **110 puntos de certificación** — Número específico genera credibilidad
4. **Seguridad Jurídica total** — "Libre de cargas, embargos y reservas de dominio" — directo al miedo del comprador particular
5. **Motor editorial propio** (motor.flexicar.es) — Blog separado con marca propia
6. **Tasación instantánea integrada** — CTA de venta dentro del listado de compra
7. **Banner "¿Hablamos?"** dentro del listing — Teléfono visible en flujo de búsqueda

---

## 4. Análisis Comparativo

### 4.1 Paletas y Estilo

| Aspecto | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| **Color primario** | Azul navy | Blanco/Naranja | Verde |
| **CTA color** | Naranja/Rojo | Naranja | Verde oscuro |
| **Estilo** | Concesionario moderno | Tech / e-commerce | Red de confianza |
| **Densidad visual** | Media | Baja-media | Media-alta |
| **Fotografía hero** | Buscador + imagen | Coche lifestyle grande | Buscador simple |
| **Iconografía** | SVG por carrocería | SVG minimalista | SVG por carrocería |

---

### 4.2 Buscador Hero — Diferencias Clave

| | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| **Campos visibles** | Marca + Modelo + Precio | — (no en hero) | Marca + Modelo + Precio |
| **Slider de precio** | 0€ — +40.000€ | Por tabs (5 rangos) | 0€ — 50.000€ |
| **Contador resultado** | VER 14.101 COCHES | "279.358 vehículos" (en search) | Ver coches (24310) |
| **Google Reviews** | ★ Visible en hero | ★ Visible en hero | No en hero |
| **Posición** | Centro del viewport | Lateral / secundario | Centro del viewport |

---

### 4.3 Tarjeta de Vehículo — Diferencias Clave

| | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| **Precio tachado** | ✅ Sí | ❌ No | ✅ Sí |
| **Cuota mensual** | ✅ "desde 298€/mes" | ✅ "desde 289€/mes" | ✅ "Desde 201€/mes*" |
| **Posición precio** | Grande, negrita | Grande, negrita | Grande + tachado arriba |
| **Marca/Modelo** | Juntos en línea | Juntos en línea | Marca pequeña / Modelo grande |
| **Concesionario** | Ciudad + nombre | Ciudad | Ciudad + nombre sucursal |
| **Badges garantía** | Etiqueta ambiental | ✅ Garantía + devolución | No en tarjeta |
| **Propietario único** | ✅ Dato visible | — | — |

---

### 4.4 Sistema de Garantía

```
AUTOHERO    ████████████████████████████████  MEJOR DEL SECTOR
            21 días devolución + 1 año gratis + Premium 3 años

OCASIONPLUS ████████████████████              DIFERENCIADO
            15 días / 1.000 km de prueba (único en concesionarios)

FLEXICAR    ████████████                      ESTÁNDAR AVANZADO
            12 meses obligatoria + inspección 110 puntos
```

---

### 4.5 Flujo de Compra

| | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| **Compra 100% online** | Parcial | **✅ Total** | Parcial |
| **Entrega a domicilio** | Gestión concesionario | **✅ Grúa propia** | ✅ Red propia |
| **Financiación online** | Sí (30 min) | Sí (pre-aprobación sin CIRBE) | Sí |
| **Trade-in digital** | Sí (tasación WhatsApp) | **✅ Calculadora online** | Sí (tasación) |
| **Carrito de compra** | ❌ No | **✅ Sí** | ❌ No |
| **Devolución** | 15 días / 1.000 km | **21 días / 500 km** | — |

---

### 4.6 SEO Footers

Los tres tienen footers muy extensos con miles de combinaciones de URL:

| | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| **Por marca** | ✅ | ✅ | ✅ |
| **Por modelo** | ✅ (top 3 por marca) | ✅ | ✅ |
| **Por provincia** | ✅ | ✅ (5 ciudades) | ✅ (todas) |
| **Por carrocería** | ✅ | ✅ | ✅ |
| **Por combustible** | ✅ | — | ✅ |
| **Por transmisión** | — | — | ✅ |
| **Por precio** | ✅ | ✅ (tabs) | ✅ |
| **Por plazas** | ✅ | — | ✅ |
| **Por etiqueta DGT** | ✅ (0, B, C, ECO) | — | — |

---

## 5. Patrones de UX Específicos

### 5.1 Cuota Mensual — El Truco de los Tres

Todos muestran la cuota mensual prominentemente. Esto es deliberado:

```
En lugar de:  "Este coche cuesta 18.900€"
Muestran:     "desde 289€/mes"

Objetivo:     Reducir la barrera psicológica del precio total
              haciendo la compra comparable a un gasto mensual conocido
```

### 5.2 Vender desde la Página de Compra

Los tres integran CTAs de venta dentro del flujo de compra:
- OcasionPlus: Sección completa "Compramos tu coche" en home
- Autohero: "¿Cuánto vale tu coche?" en el hero junto a "Encuentra tu coche"
- Flexicar: Banner "Flexicarte paga más" dentro del listado de coches

**Esto muestra que el inventario se alimenta de los mismos compradores.**

### 5.3 Botón de Compra / CTA Principal

```
OcasionPlus: "VER 14.101 COCHES"          → énfasis en volumen / cantidad
Autohero:    "Encuentra tu coche"          → énfasis en match / relevancia
Flexicar:    "Ver coches (24310)"          → énfasis en stock / elección
```

### 5.4 Sección de Confianza / How It Works

**Autohero** es el que más desarrolla este elemento — página completa "/how-it-works/" con:
- Pasos ilustrados (Reserva → Pago → Entrega → Disfruta)
- Fotos de clientes reales con nombre y coche
- Contadores animados (41k+ clientes, 20k+ coches, 9 países)

**OcasionPlus** y **Flexicar** lo resuelven con **iconos + texto corto** en la home (más tradicional).

### 5.5 Contacto y Atención al Cliente

| Canal | OcasionPlus | Autohero | Flexicar |
|---|---|---|---|
| Teléfono | ✅ En footer (horarios) | — | ✅ Visible en listing (910 605 222) |
| WhatsApp | ✅ Para tasación | ✅ Icono flotante | — |
| Chatbot | — | ✅ Chatbot flotante | — |
| Email | — | — | ✅ CTA "Envíanos un email" |
| "¿Quieres que te llamemos?" | — | — | ✅ CTA en footer |
| Horario visible | ✅ Lun-Sáb 9:30-20:30 / Dom 10-20:30 | — | ✅ L-S 9-20:30h / D 10-14h + 16:30-20:30h |

---

## 6. Análisis de Mensajes / Copywriting

### 6.1 Taglines y Valores

| | Mensaje Principal | Promesa |
|---|---|---|
| **OcasionPlus** | "Coches de segunda mano, vehículos de ocasión y kilómetro 0" | Variedad y expertise |
| **Autohero** | "Comprar un coche: Por fin, fácil" | Eliminación de la fricción |
| **Flexicar** | "La mayor red de concesionarios de ocasión de España" | Escala y proximidad |

### 6.2 Argumentos de Venta Únicos (USP)

```
OCASIONPLUS:
"OcasionPlus se convierte en la única empresa de compra-venta de coches
de segunda mano que ofrece 15 días o 1.000 kilómetros de prueba"
→ Posicionamiento de exclusividad

AUTOHERO:
"El año pasado, casi cincuenta mil personas dejaron que una de nuestras
icónicas grúas Autohero les llevara su nuevo coche directamente a la
puerta de su casa."
→ Prueba social + imagen de marca icónica (la grúa)

FLEXICAR:
"Por cada vehículo nuevo que se vende, se compran más de dos coches de
ocasión. Esta tendencia no es casualidad; el ahorro medio oscila entre
los 8.000€ y los 15.000€ en modelos de gama media y alta."
→ Datos del mercado para validar la decisión del cliente
```

---

## 7. Puntos Fuertes y Débiles

### OcasionPlus ✅❌

**Puntos fuertes:**
- Red física más equilibrada (100 centros)
- Certificado Carfax como diferenciador único
- Badge Google Reviews en el hero (excelente conversión)
- Período de prueba de 15 días exclusivo en el sector
- Tasación por WhatsApp (canal moderno)

**Puntos débiles:**
- Buscador limitado a solo Marca + Modelo + Precio (sin tipo de carrocería)
- Navegación principal muy larga (8 ítems en el nav)
- Menor stock que Flexicar (~14k vs ~24k)
- Diseño menos impactante visualmente que Autohero

---

### Autohero ✅❌

**Puntos fuertes:**
- Experiencia de compra 100% digital — la más avanzada
- Carrito de compra tipo e-commerce — máxima modernidad
- 21 días de devolución — mayor garantía del sector
- Página de garantía interactiva con diagrama 3D
- Trustpilot + Google integrados en hero
- Pre-aprobación financiación sin CIRBE — argumento decisivo
- Grúa de entrega como elemento de marca memorable

**Puntos débiles:**
- Menor stock en España (4.600 vs 24.310 de Flexicar)
- Solo 5 puntos de recogida físicos (cobertura geográfica menor)
- Proceso online puede generar desconfianza en segmento tradicional
- Precio sin descuento tachado (pierde impacto visual)

---

### Flexicar ✅❌

**Puntos fuertes:**
- Mayor stock del análisis (~24.310 coches)
- Red física en todas las provincias — máxima cobertura
- Certificación de 110 puntos con lenguaje de seguridad jurídica
- Tipografía de tarjeta única (Marca pequeña / Modelo protagonista)
- Footer SEO más completo (mayor visibilidad orgánica)
- Teléfono visible dentro del listing (reducción de fricción de contacto)

**Puntos débiles:**
- Color verde poco diferenciador en digital (no genera urgencia de compra)
- No destaca el período de devolución (punto débil vs Autohero)
- Buscador hero básico (mismo que OcasionPlus)
- Menor presencia de reviews/social proof en el hero

---

## 8. Resumen Visual del ADN de Cada Marca

```
OCASIONPLUS:
┌─────────────────────────────────────────────────────────────────┐
│  "Estoy cerca de ti. Puedo comprarte y venderte el coche.       │
│   Tienes la seguridad del Carfax y 15 días para arrepentirte." │
│   AZUL NAVY + NARANJA | Concesionario de proximidad con tech    │
└─────────────────────────────────────────────────────────────────┘

AUTOHERO:
┌─────────────────────────────────────────────────────────────────┐
│  "Olvídate del concesionario. Compra online, te lo llevamos     │
│   a casa y tienes 21 días para devolvérselo a nuestra grúa." │
│   BLANCO + NARANJA | Tech first, e-commerce puro               │
└─────────────────────────────────────────────────────────────────┘

FLEXICAR:
┌─────────────────────────────────────────────────────────────────┐
│  "Somos la mayor red de España. Hay un Flexicar cerca de ti.    │
│   110 puntos de inspección. Juridicamente seguro. Confiable."  │
│   VERDE | Red física + seguridad + mayor stock disponible      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. Lecciones Aplicables al Diseño de un Proyecto Propio

### 9.1 De OcasionPlus
- ✅ Colocar el **badge de Google Reviews directamente en el hero** (sobre o bajo el buscador)
- ✅ Usar **iconos SVG de carrocería** como shortcuts de categoría (más intuitivo que texto)
- ✅ Mostrar **"Único propietario"** como dato en las tarjetas
- ✅ Integrar la **etiqueta ambiental DGT** como filtro y badge visible
- ✅ Ofrecer dos CTAs de venta diferenciados: **"Compramos"** vs **"Gestionamos"**

### 9.2 De Autohero
- ✅ Usar **precio tachado + cuota mensual** siempre en las tarjetas
- ✅ Mostrar **badges de garantía y devolución** en cada tarjeta de listado
- ✅ Crear una página **"Cómo funciona"** con pasos numerados e ilustrados
- ✅ Integrar **pre-aprobación de financiación sin CIRBE** como argumento diferenciador
- ✅ Hacer la **garantía tangible** — comparar coste de reparación vs coste de garantía
- ✅ Usar **fotos de clientes reales** (no stock) para humanizar la marca
- ✅ Integrar **Trustpilot + Google Reviews** en el hero, no solo en el footer

### 9.3 De Flexicar
- ✅ Usar **precio tachado visible** en tarjeta junto al precio final
- ✅ Mostrar el **concesionario exacto** (no solo ciudad) en la tarjeta
- ✅ Incluir un **teléfono visible dentro del listado** (no solo en el footer)
- ✅ Usar **"Seguridad Jurídica"** como argumento — "libre de cargas y embargos"
- ✅ Meter el **CTA de venta dentro del listado** ("¿Quieres vender? Tasación aquí")
- ✅ Optimizar el **footer SEO en múltiples dimensiones** (combustible, transmisión, plazas...)

### 9.4 Paleta Síntesis Recomendada

```css
/* Basado en análisis de las 3 webs */

/* Colores que funcionan en el sector */
--color-hero-bg:      #0D1B2A;   /* Azul oscuro: autoridad y confianza nocturna */
--color-cta-primary:  #FF6B2B;   /* Naranja: acción, urgencia (líder del sector) */
--color-price:        #1A1A2E;   /* Casi negro: legibilidad máxima para precios */
--color-price-offer:  #E53E3E;   /* Rojo: precio destacado / oferta */
--color-cuota:        #2D7D46;   /* Verde: cuota mensual — sensación de ahorro */
--color-trust:        #2B6CB0;   /* Azul medio: badges de garantía / certificados */
--color-badge-good:   #22C55E;   /* Verde: buen precio */
--color-badge-mid:    #F59E0B;   /* Ámbar: precio normal */
--color-badge-high:   #EF4444;   /* Rojo: precio alto */
--color-bg:           #FFFFFF;
--color-surface:      #F8FAFC;
```
