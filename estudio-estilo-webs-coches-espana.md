# Estudio de Estilo: Webs de Venta de Vehículos con Más Éxito en España
> Análisis realizado: Mayo 2026

---

## 1. Plataformas Analizadas

| Plataforma | Grupo / Empresa | Posicionamiento | Inventario aprox. |
|---|---|---|---|
| **coches.net** | Adevinta / Vocento | Líder mercado segunda mano | ~258.000 anuncios |
| **autocasion.com** | Sumauto (AutoScout24) | Segunda mano + Km0 + Nuevos | ~123.000 anuncios |
| **autoscout24.es** | AutoScout24 GmbH | Mayor mercado europeo | ~279.000 vehículos |
| **milanuncios.com** | Adevinta | Clasificados generalistas | +10.000 coches |
| **motor.es** | Motor Media Group | Medio editorial + venta | Portal de referencia |

---

## 2. Arquitectura de Información (Structure)

### 2.1 Estructura de Páginas Tipo

**HOME PAGE — Todos comparten el mismo patrón:**
```
[NAVBAR fijo con logo + buscador + CTA "Vende tu coche"]
[HERO con buscador prominente — filtros: Tipo / Marca / Precio / Localización]
[Accesos rápidos por categoría (SUV, Berlina, Compacto, Eléctrico...)]
[Grid de coches recomendados / destacados]
[Accesos por marca (logos)]
[Sección editorial / noticias]
[Footer extenso con SEO links]
```

**PÁGINA DE LISTADO:**
```
[Filtros laterales (desktop) / drawer (mobile)]
[Barra de ordenación + contador de resultados]
[Grid/lista de tarjetas de vehículos]
[Paginación]
```

**FICHA DE VEHÍCULO (detalle):**
```
[Galería de fotos (slider ancho completo o columna izquierda)]
[Título + precio destacado + botón contacto]
[Datos clave: año, km, combustible, cambio, CV, carrocería]
[Descripción del vendedor]
[Equipamiento]
[Panel de contacto / CTA sticky]
[Mapa ubicación]
[Vehículos similares]
```

---

## 3. Sistema de Color

### 3.1 Paletas por Plataforma

| Plataforma | Color principal | Acento / CTA | Fondos | Texto |
|---|---|---|---|---|
| **coches.net** | Azul `#0065FF` | Naranja/Rojo | Blanco `#FFFFFF`, Gris `#F5F5F5` | Gris oscuro `#333333` |
| **autocasion.com** | Rojo-naranja `#E84A2E` | Naranja `#FF6B35` | Blanco, Gris muy claro | Negro/Gris `#222222` |
| **autoscout24.es** | Naranja `#FF7701` | Naranja oscuro `#E86700` | Blanco, Gris `#F4F4F4` | Gris oscuro `#2D2D2D` |
| **milanuncios.com** | Verde `#1EB454` | Verde oscuro | Blanco | Gris `#444444` |
| **motor.es** | Rojo `#C8102E` | Rojo oscuro | Blanco, Gris claro | Negro |

### 3.2 Principios de Color Comunes
- **Fondo predominante: blanco** — Todos usan fondos blancos para máxima legibilidad y percepción de limpieza.
- **Color de acción (CTA)**: Naranja o rojo en todos. Genera urgencia y visibilidad.
- **Precio**: Siempre en color de marca, negrita, tamaño grande. Es el elemento más destacado visual.
- **Badges/etiquetas**: Colores semáforo — Verde (buen precio), Amarillo (precio normal), Rojo (precio alto). Autocasion y AutoScout24 utilizan esto explícitamente.
- **Fondos de sección alternos**: Gris muy claro `#F5F5F5` / `#FAFAFA` para separar bloques sin líneas.

---

## 4. Tipografía

### 4.1 Fuentes Detectadas / Comunes

| Uso | Tipografía | Tamaño típico | Peso |
|---|---|---|---|
| Logo/Marca | Custom / Sin serif | — | Bold |
| Títulos H1 (homepage hero) | Sans-serif moderna | 28–40px | Bold (700) |
| Nombre del vehículo | Sans-serif | 20–24px | SemiBold (600) |
| **Precio** | Sans-serif | **24–32px** | **Bold (700–900)** |
| Datos técnicos (km, año) | Sans-serif | 13–15px | Regular (400) |
| Body / Descripción | Sans-serif | 14–16px | Regular (400) |
| Labels/badges | Sans-serif | 11–13px | Medium (500) |

### 4.2 Familias Detectadas
- **coches.net / Adevinta**: Probablemente `Source Sans Pro` o fuente propia
- **AutoScout24**: Usa `AS24` (fuente propietaria, basada en sans geométrica)
- **Autocasion**: Sans-serif genérica tipo `Open Sans` o `Roboto`
- **Motor.es**: `Inter` o similar (uso de fuente de sistema)
- **Tendencia**: Todo el sector está migrando a **system-ui / -apple-system** para velocidad de carga.

### 4.3 Jerarquía Visual Clara
```
PRECIO ← Lo más grande y llamativo
  ↓
Nombre modelo
  ↓
Datos clave (año / km / combustible)
  ↓
Localización
  ↓
Descripción
```

---

## 5. Layout y Grid

### 5.1 Sistema de Rejilla

**Desktop (≥1200px):**
- Contenedor máximo: **1200px–1440px**
- Homepage: Grid de 3 o 4 columnas para tarjetas
- Listado: 2–3 columnas + sidebar de filtros (250–280px)
- Detalle de ficha: 2 columnas (foto 60% + datos 40%)

**Tablet (768px–1199px):**
- Grid de 2 columnas
- Filtros en drawer/modal

**Mobile (<768px):**
- 1 columna
- Barra de búsqueda ocupa 90% del ancho
- Filtros en bottom sheet o modal
- CTAs pegados al fondo ("Ver teléfono" / "Contactar")

### 5.2 Espaciado
- **Padding interno de tarjetas**: 12–16px
- **Gap entre tarjetas**: 16–24px
- **Secciones de página**: 48–80px entre bloques
- **Regla general**: Espaciado generoso — no abarrotar, transmitir confianza

---

## 6. Componentes UI Clave

### 6.1 El Buscador Hero
**El elemento más importante de cualquier web de coches española.**

Características comunes:
- Ocupa entre el 40-60% del viewport en desktop
- Fondo: imagen de coche de alta calidad en desenfoque o gradiente oscuro sobre fotografía
- Campos principales: **Marca / Modelo / Precio / Localización**
- CTA principal: Botón grande, color acento, texto "Buscar" o "Mostrar X resultados"
- Contador de resultados en tiempo real (coches.net: "258.375 resultados")
- Tabs o pills para cambiar entre: Segunda mano / Nuevo / Km0

### 6.2 Tarjeta de Vehículo (Card)
La unidad mínima de diseño. Consistente en todos:

```
┌─────────────────────────────┐
│  [IMAGEN 16:9 o 4:3]        │
│  [Badge: CERTIFICADO/Km0]   │
├─────────────────────────────┤
│  Marca Modelo Versión       │
│  ████ 24.900€ ████          │
│  ─────────────────          │
│  2022 · 45.000km · Diésel   │
│  📍 Madrid                  │
│  [Badge precio: Buen precio]│
└─────────────────────────────┘
```

**Principios de la tarjeta:**
- **Foto first**: La imagen ocupa 50-60% del espacio de la card
- **Precio siempre visible** y en negrita — nunca oculto
- **Datos técnicos en pills/badges** pequeños: año, km, combustible
- **Hover state**: sombra (box-shadow) o elevación sutil
- **Radio del borde**: 8–12px — aspecto moderno pero no excesivo

### 6.3 Panel de Filtros
- **Sidebar desktop**: Posición fija izquierda, scroll independiente
- **Filtros principales**: Precio (slider), Marca, Modelo, Año, Kilometraje, Combustible, Cambio, Carrocería, Provincia
- **Chips/tags activos** para ver los filtros aplicados y poder quitarlos
- **Contador de resultados actualizable** en tiempo real (sin reload de página)

### 6.4 CTAs (Calls to Action)
| CTA | Color | Posición | Texto típico |
|---|---|---|---|
| Búsqueda principal | Naranja/Rojo | Hero center | "Buscar" / "Mostrar X resultados" |
| Vender coche | Secundario (outline o verde) | Navbar | "Vende tu coche" |
| Contactar vendedor | Azul o acento | Ficha, sticky | "Ver teléfono" / "Contactar" |
| Favorito | Corazón gris → rojo | Esquina card | — |
| Tasación | CTA secundario | Header/Footer | "Tasa tu coche gratis" |

### 6.5 Badges y Trust Signals
Elemento diferenciador crucial para generar **confianza**:
- 🏅 **Certificado** (verificado por concesionario oficial)
- ✅ **Garantía 12/24 meses**
- 🔖 **Buen precio** / "Precio por encima del mercado" (semáforo)
- 🚗 **Km0** / **Demo** / **Segunda mano**
- ⭐ **Valoración del vendedor**
- 📋 **Historial de mantenimiento disponible**

---

## 7. UX Patterns (Patrones de Experiencia)

### 7.1 Búsqueda y Filtrado
- **Autocompletado** en campo de marca/modelo (typeahead)
- **Búsqueda semántica**: "Golf diesel Madrid" → interpreta intención
- **Búsqueda guardada**: Alertas por email cuando llega un coche que encaja
- **Ordenación**: Relevancia, precio asc/desc, más reciente, menor km

### 7.2 Galería de Fotos
- Mínimo recomendado: 8–15 fotos por anuncio
- Galería fullscreen con swipe
- Botón para ver en 360° (AutoScout24, coches.net)
- Thumbnails horizontales en desktop
- Indicador de número de fotos en la tarjeta

### 7.3 Comparativa de Precios
- Todos muestran **valoración del precio** vs mercado
- Gráfico de histograma de precios similares
- "Este coche está X% por debajo/encima del mercado"

### 7.4 Contacto con el Vendedor
- **Número de teléfono enmascarado** (se revela con clic — tracking)
- **Formulario de contacto** integrado (sin salir de la página)
- **Chat** con respuesta automatizada inicial
- **WhatsApp** integrado (milanuncios especialmente)

### 7.5 Elementos de Urgencia/Escasez
- "X personas mirando este coche ahora"
- "Publicado hace 2 horas"
- "Solo 1 disponible"
- Contador de visitas al anuncio

---

## 8. Secciones Editoriales / Contenido

Todas las webs exitosas **combinan marketplace con medio editorial:**

| Sección | Propósito | Frecuencia publicación |
|---|---|---|
| Noticias del sector | SEO + autoridad | Diaria |
| Pruebas de coches | SEO transaccional | Semanal |
| Guías de compra | Captura leads | Quincenal |
| Comparativas | SEO long-tail | Semanal |
| Precios de combustible | Retención/recurrencia | Diaria |
| Tasación online | Generación de leads vendedores | Siempre disponible |
| Rankings de ventas | SEO + autoridad | Mensual |

---

## 9. Mobile-First Design

### 9.1 Patrones Mobile
- **Buscador ocupa todo el viewport inicial**
- **Bottom navigation bar** (máx. 4 ítems): Inicio, Buscar, Favoritos, Perfil
- **Tarjetas en lista vertical** con foto a la izquierda (thumbnail pequeño) o tarjeta completa
- **Botón "Ver teléfono"** en posición sticky al fondo
- **Filtros en bottom sheet** deslizante
- **Infinite scroll** en listados (no paginación clásica)
- **Gestos swipe** en galería de fotos

### 9.2 Velocidad de Carga (Performance)
- Imágenes en formato **WebP** obligatorio
- Lazy loading de imágenes fuera del viewport
- **Core Web Vitals** son críticos: LCP < 2.5s
- Código crítico inline, resto diferido

---

## 10. Tendencias Actuales (2025–2026)

### 10.1 Diseño
- **Espaciado ultra-generoso** — Más espacio en blanco que antes
- **Rounded corners más suaves** (8–16px en contenedores, 24px en pills)
- **Sombras muy sutiles** (shadow elevation baja) en lugar de bordes
- **Modo oscuro** opcional (AutoScout24 lo implementa)
- **Micro-animaciones** en hover y transiciones de filtros
- **Gradientes suaves** en banners y CTAs

### 10.2 Funcionalidades
- **Valoración automática del precio** (IA comparativa)
- **Búsqueda por voz** (mobile)
- **Alertas personalizadas** push/email
- **Financiación integrada** en ficha de vehículo
- **Calculadora de cuota mensual** instantánea
- **Historial ITV/accidentes** (integración con DGT)
- **Reserva online** con pago de señal

### 10.3 SEO/Performance
- Páginas de aterrizaje por **marca + modelo + ciudad** (miles de combos)
- Schema.org markup para vehículos
- Páginas AMP en móvil (o equivalentes rápidos)
- URLs amigables: `/coches-segunda-mano/volkswagen-golf-madrid`

---

## 11. Comparativa Visual Resumida

| Aspecto | coches.net | autocasion | autoscout24 | milanuncios |
|---|---|---|---|---|
| **Diseño global** | Moderno, limpio | Moderno, cálido | Moderno, europeo | Funcional, denso |
| **Color principal** | Azul | Rojo-naranja | Naranja | Verde |
| **Densidad info** | Media-alta | Media | Media-baja | Alta |
| **Confianza visual** | Alta | Alta | Muy alta | Media |
| **Foco UX** | Búsqueda rápida | Valoración precio | Experiencia profesional | Precio y volumen |
| **Target** | Comprador masivo | Comprador informado | Semi-profesional | Cazaofertas |
| **Editorial** | Moderada | Moderada | Mínima | Sin editorial |

---

## 12. Recomendaciones para Proyecto Propio

Basado en el análisis, para una web de venta de vehículos competitiva en España:

### ✅ Imprescindible
1. **Buscador hero** con autocompletado y contador de resultados en tiempo real
2. **Precio como elemento más prominente** en tarjetas (tamaño >24px, bold)
3. **Valoración de precio** con comparativa de mercado (badge verde/amarillo/rojo)
4. **Galería de fotos de alta calidad** — mínimo 10 fotos por anuncio
5. **Filtros instantáneos** sin recarga de página (AJAX/React)
6. **Trust signals**: badges de certificado, garantía, historial
7. **Diseño mobile-first** — >60% del tráfico viene de móvil
8. **Tasación gratuita** como CTA para captación de vendedores

### 🎨 Paleta Recomendada
```css
--color-primary: #1A1A2E;     /* Azul muy oscuro — autoridad */
--color-accent: #FF6B2B;       /* Naranja — CTA y precio */
--color-success: #22C55E;      /* Verde — precio bueno / confianza */
--color-warning: #F59E0B;      /* Ámbar — precio normal */
--color-danger: #EF4444;       /* Rojo — precio alto */
--color-bg: #FFFFFF;           /* Blanco */
--color-surface: #F8FAFC;      /* Gris muy claro — fondos alternos */
--color-text: #1E293B;         /* Gris oscuro — texto principal */
--color-muted: #64748B;        /* Gris medio — texto secundario */
```

### 📐 Grid Recomendado
```css
/* Container */
max-width: 1280px;
padding: 0 24px;

/* Tarjetas listado */
grid-template-columns: repeat(3, 1fr); /* desktop */
grid-template-columns: repeat(2, 1fr); /* tablet */
grid-template-columns: 1fr;            /* mobile */
gap: 24px;
```

### 📝 Tipografía Recomendada
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Escala */
--text-xs:   12px;
--text-sm:   14px;
--text-base: 16px;
--text-lg:   18px;
--text-xl:   20px;
--text-2xl:  24px;
--text-3xl:  30px;
--text-4xl:  36px;

/* Precio — siempre */
font-size: 26–32px; font-weight: 700;
```

---

## 13. Conclusiones

Las webs de venta de coches con más éxito en España comparten **7 principios fundamentales**:

1. **Datos primero, diseño al servicio** — La información técnica es el protagonista
2. **Precio visible y comparado** — El usuario español necesita saber si está pagando bien
3. **Confianza construida visualmente** — Badges, certificaciones y valoraciones son esenciales
4. **Velocidad y simplicidad móvil** — El proceso de búsqueda debe ser fluidísimo
5. **Filtrado inmediato** — Sin esperas, sin recargas, con feedback instantáneo
6. **Contenido editorial + marketplace** — Las webs más exitosas son también medios
7. **CTAs para ambos lados** (compra Y venta) — El marketplace se alimenta de vendedores

> **El estilo dominante**: blanco + acento naranja/rojo, tipografía sans-serif moderna, 
> imágenes grandes, datos en pills/badges, espaciado generoso y precio en protagonismo absoluto.
