# AGENTS.md — Emanuel Rigo Portfolio

Este documento define las reglas de diseño, estructura y comportamiento que deben respetarse en cada iteración del portfolio.

---

# 1. Identidad Visual (Design Tokens)

## Paleta de Colores

- Superficie Principal: `#121414` → Dark Mode profundo.
- Color de Acento / Primario: `#facc15`
  - Uso permitido:
    - CTA principales
    - estados activos
    - highlights
    - indicadores visuales

- Bordes y Separadores:
  - `#37393a`
  - variantes sutiles del gris para profundidad.

## Tipografía

- Fuente global: `Montserrat`.
- Headings:
  - `Headline-md`
  - Peso: `700`

- Labels:
  - Uppercase
  - Tracking alto
  - Peso medio

## Formas

- Border Radius:
  - Tarjetas → `16px`
  - Botones → `12px`
  - Inputs → `12px`

---

# 2. Estructura del Layout (Alta Fidelidad)

## Desktop (≥ 1024px)

Layout obligatorio:

- Sidebar fija izquierda
- Área principal derecha
- TopNav fija

Estructura:

[ Sidebar ] [ Content ]

### Sidebar

Debe permanecer:

- `fixed`
- `h-screen`

Contiene:

- Foto perfil
- Borde de acento
- Indicador online
- Nombre
- Rol
- Redes sociales

Hover:

- Sutil
- Sin animaciones exageradas.

### Top Navigation

Debe permanecer:

- `sticky`
- `top-0`
- `backdrop-blur`

### Área de Contenido

Regla obligatoria:

- El viewport principal NO debe scrollear.
- Solo componentes internos pueden tener:
  - `overflow-y-auto`

Ejemplos:

- Feed de proyectos
- Certificados
- Timeline
- Experiencia

---

# 3. Responsive Design (OBLIGATORIO)

El portfolio debe ser completamente responsive.

## Tablet (768px–1023px)

- Sidebar puede colapsarse.
- Mantener navegación visible.
- Evitar pérdida de jerarquía visual.

Layout:

[ Sidebar Compacta ]
[ Content ]

## Mobile (<768px)

Permitir adaptación del dashboard:

Layout:

[ TopNav ]
[ Content ]

Reglas:

- Sidebar → Drawer o menú hamburguesa.
- Se permite scroll vertical completo.
- Nunca generar scroll horizontal.
- Mantener jerarquía visual y espaciados.

Contenido:

- Máximo ancho útil.
- Padding consistente.
- Texto siempre legible.

---

# 4. Componentes

## Tarjetas de Proyecto

- Background:
  - `surface-container-low`

- Imagen:
  - Aspect ratio consistente
  - Rounded

- Hover:
  - Elevación suave
  - Escala máxima: `1.02`

- Tags:
  - Fondo sutil
  - Texto claro

## Botones

### Primary

- Fondo amarillo
- Texto oscuro
- Elevación en hover

### Ghost

- Fondo transparente
- Hover sutil

---

# 5. Motion & Interacciones

Animaciones:

- Cortas (`150–250ms`)
- Suaves (`ease-out`)

Evitar:

- rebotes
- efectos distractivos
- animaciones largas

Preferir:

- fade
- scale leve
- translate mínimo

---

# 6. Restricciones Negativas

NO:

- cambiar el amarillo de acento sin autorización explícita.
- romper layout Sidebar + Content en desktop.
- usar fuentes serif.
- introducir scroll horizontal.
- usar más de un color primario.
- usar componentes con estética distinta al sistema.
- agregar fondos extremadamente brillantes.

---

# 7. Prioridad de Reglas

Orden de prioridad:

1. Responsive
2. Fidelidad estructural
3. Identidad visual
4. Animaciones
5. Componentes

Si una regla entra en conflicto:
priorizar usabilidad y responsive.
