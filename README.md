# Catálogo de Productos - Armonizando tus Platillos

Catálogo web estático de flores comestibles, brotes y hortalizas, optimizado para AWS S3.

## Características

### Modelo de Datos Relacional

El proyecto utiliza un modelo de datos relacional que permite:

- **Categorías**: Organización principal de productos (Flores, Brotes, Hortalizas)
- **Carpetas/Subcategorías**: Sistema jerárquico para organizar productos dentro de categorías
- **Productos**: Con referencias a categorías y carpetas, incluyendo tags para búsqueda avanzada
- **Relaciones**: Funciones helper para consultas relacionales eficientes

### Sistema de Catalogamiento

- **Filtros por categoría**: Navegación rápida entre tipos de productos
- **Filtros por carpeta**: Subcategorías dinámicas según la categoría seleccionada
- **Búsqueda avanzada**: Por nombre, descripción y tags
- **Vistas múltiples**: Grid y lista para diferentes preferencias
- **Productos destacados**: Sistema de featured products

### Integración con WhatsApp

En lugar de un carrito de compras tradicional, el sistema incluye:

- **Carrito flotante**: Botón siempre visible con contador de productos
- **Gestión de cantidades**: Agregar, quitar y modificar cantidades
- **Envío directo a WhatsApp**: Genera mensaje automático con el pedido
- **Número configurado**: 5680774434 (formato internacional)

## Estructura de Archivos

\`\`\`
lib/
  database-schema.ts          # Modelo relacional completo
  products-data.ts            # (Deprecado - usar database-schema.ts)

components/
  catalog-view.tsx            # Vista principal del catálogo con filtros
  product-card.tsx            # Tarjeta de producto con botón de agregar
  whatsapp-cart.tsx           # Carrito flotante con integración WhatsApp
  header.tsx                  # Encabezado del sitio
  hero.tsx                    # Sección hero
  footer.tsx                  # Pie de página
\`\`\`

## Modelo Relacional

### Interfaces

\`\`\`typescript
interface Category {
  id: string
  name: string
  slug: string
  description: string
  parentId?: string | null    // Para jerarquías futuras
  order: number
  folder?: string             // Para organización en carpetas
}

interface Folder {
  id: string
  name: string
  categoryId: string          // Referencia a Category
  parentFolderId?: string     // Para subcarpetas
  path: string                // Ruta: "flores/dulces"
  order: number
}

interface Product {
  id: number
  name: string
  slug: string
  categoryId: string          // Referencia a Category
  folderId?: string | null    // Referencia a Folder
  description: string
  image: string
  tags?: string[]             // Para búsquedas
  available: boolean
  featured?: boolean
  createdAt?: string
  updatedAt?: string
}
\`\`\`

### Funciones Helper

\`\`\`typescript
getCategoryById(categoryId: string): Category | undefined
getFolderById(folderId: string): Folder | undefined
getProductsByCategory(categoryId: string): Product[]
getProductsByFolder(folderId: string): Product[]
getFoldersByCategory(categoryId: string): Folder[]
getProductWithRelations(productId: number): ProductWithRelations
\`\`\`

## Organización Futura con Carpetas

El sistema está preparado para soportar organización jerárquica:

\`\`\`
flores/
  ├── dulces/
  │   ├── Margarita mini
  │   ├── Flor de miel morada
  │   └── Rosas miniatura
  └── citricas/
      ├── Begonia dragón
      ├── Caléndula
      └── Flor de Sauco

brotes/
  ├── picantes/
  │   ├── Brote de rábano
  │   └── Brote de arugula
  └── dulces/
      ├── Brote de chícharo
      └── Brote de betabel
\`\`\`

## Integración WhatsApp

### Configuración

El número de WhatsApp está configurado en `components/whatsapp-cart.tsx`:

\`\`\`typescript
const phoneNumber = "5215680774434" // Formato: código país + número
\`\`\`

### Formato del Mensaje

El sistema genera automáticamente un mensaje estructurado:

\`\`\`
¡Hola! Me gustaría hacer un pedido:

1. Margarita mini - Cantidad: 2
2. Brote de cilantro - Cantidad: 1
3. Arúgula - Cantidad: 3

¿Podrían confirmar disponibilidad y precio? ¡Gracias!
\`\`\`

### Uso desde Componentes

\`\`\`typescript
// Agregar producto al carrito
window.dispatchEvent(new CustomEvent("addToCart", { detail: product }))
\`\`\`

## Despliegue en AWS S3

Este proyecto está optimizado para ser un sitio estático en AWS S3:

1. **Build del proyecto**: `npm run build`
2. **Exportar estático**: El proyecto Next.js está configurado para exportación estática
3. **Subir a S3**: Subir la carpeta `out/` a tu bucket S3
4. **Configurar CloudFront** (opcional): Para CDN global

## Próximos Pasos

- Agregar más subcategorías/carpetas según necesidades
- Implementar sistema de favoritos
- Agregar galería de imágenes por producto
- Integrar con base de datos (Fase 2 del tutorial AWS)
- Agregar panel de administración

## Contacto

- **Teléfono**: 5680774434
- **Email**: maralvaflo@gmail.com
