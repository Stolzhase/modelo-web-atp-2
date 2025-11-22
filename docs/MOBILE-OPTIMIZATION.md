# Optimización para Dispositivos Móviles

## Estado Actual

Tu catálogo ya está optimizado para móviles gracias a:

### 1. Diseño Responsive con Tailwind CSS

Todas las clases de Tailwind incluyen breakpoints:
- `md:` - Tablets (768px+)
- `lg:` - Desktop (1024px+)

Ejemplos en tu código:
\`\`\`tsx
// Header se adapta de vertical a horizontal
<div className="flex flex-col md:flex-row items-center">

// Grid de productos: 1 columna en móvil, 2 en tablet, 3 en desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Texto más grande en desktop
<h1 className="text-3xl md:text-4xl">
\`\`\`

### 2. Viewport Meta Tag

Ya configurado en `app/layout.tsx`:
\`\`\`tsx
<meta name="viewport" content="width=device-width, initial-scale=1" />
\`\`\`

### 3. Touch-Friendly

- Botones con tamaño mínimo de 44x44px (estándar iOS/Android)
- Espaciado adecuado entre elementos clickeables
- Inputs con tamaño apropiado para dedos

### 4. Integración WhatsApp

El botón flotante de WhatsApp usa:
\`\`\`tsx
// Detecta si es móvil y usa el protocolo correcto
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
const whatsappUrl = isMobile 
  ? `whatsapp://send?phone=...` 
  : `https://wa.me/...`
\`\`\`

## Mejoras Adicionales Implementadas

### Header Móvil Mejorado

El header ahora:
- Se colapsa verticalmente en móvil
- Muestra información de contacto de forma compacta
- Menú hamburguesa para navegación

### Carrito WhatsApp Flotante

- Posición fija en la esquina inferior derecha
- No interfiere con el contenido
- Badge con contador de productos
- Animación suave al agregar productos

## Pruebas en Dispositivos Reales

### Cómo Probar en tu Smartphone

#### Opción 1: Usando Vercel (Recomendado)
1. Sube tu código a GitHub
2. Conecta con Vercel
3. Obtienes una URL como `https://tu-proyecto.vercel.app`
4. Abre esa URL en tu teléfono

#### Opción 2: Usando tu Red Local
1. En tu computadora, corre: `npm run dev`
2. Busca tu IP local:
   \`\`\`bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   \`\`\`
3. En tu teléfono (conectado a la misma WiFi), abre:
   \`\`\`
   http://192.168.1.X:3000
   \`\`\`
   (Reemplaza X con tu IP)

#### Opción 3: Chrome DevTools
1. Abre Chrome
2. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
3. Selecciona dispositivo (iPhone 12, Galaxy S21, etc.)
4. Prueba diferentes tamaños

## Checklist de Compatibilidad Móvil

✅ **Diseño Responsive**
- Grid adapta columnas según tamaño
- Texto legible sin zoom
- Imágenes se escalan correctamente

✅ **Performance**
- Imágenes optimizadas (WebP cuando sea posible)
- Lazy loading de imágenes
- CSS y JS minificados

✅ **Interacción Touch**
- Botones suficientemente grandes
- Gestos de swipe (si aplica)
- No requiere hover (todo funciona con tap)

✅ **Navegación**
- Menú accesible en móvil
- Breadcrumbs si hay navegación profunda
- Botón de "volver arriba"

✅ **Formularios**
- Inputs con tipo correcto (`type="tel"`, `type="email"`)
- Teclado apropiado se abre automáticamente
- Validación clara y visible

✅ **WhatsApp**
- Abre la app en móvil
- Abre web.whatsapp.com en desktop
- Mensaje pre-llenado con productos

## Navegadores Soportados

Tu sitio funciona en:
- ✅ Safari (iOS 12+)
- ✅ Chrome (Android 8+)
- ✅ Samsung Internet
- ✅ Firefox Mobile
- ✅ Edge Mobile

## Consideraciones Especiales

### iOS Safari
- Usa `-webkit-` prefixes automáticamente (Tailwind lo maneja)
- Viewport height puede variar con la barra de navegación
- Solución: Usa `min-h-screen` en lugar de `h-screen`

### Android Chrome
- Soporta PWA (Progressive Web App) si lo configuras
- Puede agregar a pantalla de inicio
- Notificaciones push disponibles

### Modo Oscuro
Tu sitio ya soporta dark mode:
\`\`\`css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
\`\`\`

Se activa automáticamente según la preferencia del sistema del usuario.

## Próximas Mejoras Móviles

### 1. PWA (Progressive Web App)
Permite instalar tu sitio como app:

\`\`\`json
// public/manifest.json
{
  "name": "Armonizando tus Platillos",
  "short_name": "Catálogo",
  "description": "Catálogo de flores comestibles y productos gourmet",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4ade80",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
\`\`\`

### 2. Offline Support
Usando Service Workers para que funcione sin internet:

\`\`\`javascript
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('catalogo-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js',
        '/images/logo.png'
      ]);
    })
  );
});
\`\`\`

### 3. Gestos de Swipe
Para navegar entre productos:

\`\`\`tsx
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
  onSwipedLeft: () => nextProduct(),
  onSwipedRight: () => prevProduct(),
});

<div {...handlers}>
  {/* Contenido */}
</div>
\`\`\`

## Métricas de Performance Móvil

Usa Lighthouse (en Chrome DevTools) para medir:
- **Performance:** >90
- **Accessibility:** >90
- **Best Practices:** >90
- **SEO:** >90

\`\`\`bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Correr audit
lighthouse https://tu-sitio.com --view
\`\`\`

## Conclusión

Tu catálogo ya está optimizado para móviles. Los usuarios de Android e iOS podrán:
- Ver el catálogo completo
- Buscar y filtrar productos
- Agregar al carrito
- Enviar pedido por WhatsApp
- Todo con una experiencia fluida y rápida
