# Guía Completa de Deployment en AWS

## Índice
1. [Arquitectura Recomendada](#arquitectura-recomendada)
2. [Opción 1: Sitio Estático (Recomendado)](#opción-1-sitio-estático-recomendado)
3. [Opción 2: Con Base de Datos Dinámica](#opción-2-con-base-de-datos-dinámica)
4. [Comparación de Costos](#comparación-de-costos)
5. [Paso a Paso Detallado](#paso-a-paso-detallado)

---

## Arquitectura Recomendada

### ⚠️ Aclaración Importante sobre tu Idea Original

Tu idea era:
- **S3 para almacenar info de productos** ❌ (S3 no es una base de datos)
- **EC2 para mostrar la página** ❌ (Innecesario y costoso para un sitio estático)

### ✅ Arquitectura Correcta para tu Caso

Para un catálogo web estático como el que tienes, la mejor arquitectura es:

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    OPCIÓN 1: ESTÁTICO                    │
│                  (Más Simple y Económico)                │
└─────────────────────────────────────────────────────────┘

Usuario → CloudFront (CDN) → S3 Bucket (Sitio Web)
                                    ↓
                            Archivos HTML/CSS/JS
                            Imágenes de productos
                            Datos en JSON/TS
\`\`\`

**Ventajas:**
- 💰 Casi gratis (Free Tier cubre mucho)
- ⚡ Súper rápido (CDN global)
- 🔧 Fácil de mantener
- 📈 Escala automáticamente
- 🔒 Seguro por defecto

**Desventajas:**
- Los datos están "hardcodeados" en el código
- Para actualizar productos, necesitas resubir archivos

---

## Opción 1: Sitio Estático (Recomendado)

### ¿Qué es un Sitio Estático?

Un sitio estático es una página web donde todo el contenido está pre-generado en archivos HTML, CSS y JavaScript. No necesita un servidor ejecutando código constantemente.

**Tu catálogo actual ES un sitio estático** porque:
- Los productos están definidos en `lib/database-schema.ts`
- No hay base de datos real
- Todo se renderiza en el navegador del usuario

### Componentes AWS Necesarios

#### 1. **Amazon S3 (Simple Storage Service)**
- **Qué es:** Un "disco duro en la nube" para guardar archivos
- **Para qué lo usas:** Almacenar todos los archivos de tu sitio web
- **Costo:** ~$0.023 por GB/mes (primeros 50 GB gratis el primer año)

#### 2. **Amazon CloudFront (CDN)**
- **Qué es:** Una red de servidores distribuidos globalmente
- **Para qué lo usas:** Entregar tu sitio rápidamente desde el servidor más cercano al usuario
- **Costo:** 1 TB gratis de transferencia por mes (Free Tier permanente)

#### 3. **AWS Certificate Manager (Opcional)**
- **Qué es:** Servicio para certificados SSL/HTTPS
- **Para qué lo usas:** Tener HTTPS (candadito verde) en tu dominio
- **Costo:** Gratis

#### 4. **Route 53 (Opcional)**
- **Qué es:** Servicio de DNS
- **Para qué lo usas:** Conectar tu dominio (ej: mitienda.com) con tu sitio
- **Costo:** $0.50/mes por zona hospedada + $0.40 por millón de consultas

---

## Paso a Paso Detallado

### Fase 1: Preparar tu Sitio para Deployment

#### 1.1 Exportar tu Sitio Next.js como Estático

Tu proyecto actual usa Next.js. Para convertirlo en archivos estáticos:

\`\`\`bash
# En tu terminal local (no en AWS todavía)
npm run build
\`\`\`

Esto genera una carpeta `out/` con todos los archivos HTML/CSS/JS listos para subir.

**Archivos que se generan:**
\`\`\`
out/
├── index.html              # Página principal
├── _next/
│   ├── static/            # JavaScript y CSS
│   └── ...
├── images/                # Tus imágenes de productos
└── ...
\`\`\`

#### 1.2 Verificar que Todo Funciona Localmente

\`\`\`bash
# Instalar un servidor local simple
npm install -g serve

# Probar el sitio estático
serve out

# Abre http://localhost:3000 en tu navegador
\`\`\`

---

### Fase 2: Configurar AWS S3

#### 2.1 Crear una Cuenta AWS

1. Ve a https://aws.amazon.com
2. Crea una cuenta (necesitas tarjeta de crédito, pero no te cobrarán si usas Free Tier)
3. Activa MFA (autenticación de dos factores) para seguridad

#### 2.2 Crear un Bucket S3

**¿Qué es un Bucket?** Es como una carpeta en la nube donde guardas archivos.

**Pasos en la Consola AWS:**

1. Ve a **S3** en la consola AWS
2. Click en **"Create bucket"**
3. Configuración:
   \`\`\`
   Bucket name: mi-catalogo-productos
   (Debe ser único globalmente, nadie más puede tener ese nombre)
   
   Region: US East (N. Virginia) us-east-1
   (Recomendado para CloudFront)
   
   Block Public Access: DESMARCAR "Block all public access"
   ⚠️ Importante: Tu sitio necesita ser público para que la gente lo vea
   
   Bucket Versioning: Disabled (o Enabled si quieres historial)
   
   Default encryption: Enabled (SSE-S3)
   \`\`\`

4. Click **"Create bucket"**

#### 2.3 Configurar el Bucket para Hosting Web

1. Entra a tu bucket recién creado
2. Ve a la pestaña **"Properties"**
3. Scroll hasta **"Static website hosting"**
4. Click **"Edit"**
5. Configuración:
   \`\`\`
   Static website hosting: Enable
   Hosting type: Host a static website
   Index document: index.html
   Error document: 404.html (opcional)
   \`\`\`
6. **Guarda** y copia la URL que te da (ej: http://mi-catalogo-productos.s3-website-us-east-1.amazonaws.com)

#### 2.4 Configurar Permisos del Bucket

Para que la gente pueda ver tu sitio, necesitas una "Bucket Policy":

1. Ve a la pestaña **"Permissions"**
2. Scroll hasta **"Bucket policy"**
3. Click **"Edit"**
4. Pega esta política (reemplaza `mi-catalogo-productos` con tu nombre de bucket):

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mi-catalogo-productos/*"
    }
  ]
}
\`\`\`

**¿Qué hace esto?** Permite que cualquiera (`"Principal": "*"`) pueda leer (`"Action": "s3:GetObject"`) todos los archivos de tu bucket.

---

### Fase 3: Subir tu Sitio a S3

#### 3.1 Opción A: Subir Manualmente (Para Empezar)

1. En la consola S3, entra a tu bucket
2. Click **"Upload"**
3. Arrastra TODOS los archivos de la carpeta `out/` (no la carpeta, los archivos dentro)
4. Click **"Upload"**
5. Espera a que termine (puede tardar según el tamaño)

#### 3.2 Opción B: Usar AWS CLI (Más Profesional)

**Instalar AWS CLI:**
\`\`\`bash
# En tu computadora local
# macOS
brew install awscli

# Windows
# Descarga desde: https://aws.amazon.com/cli/

# Linux
sudo apt-get install awscli
\`\`\`

**Configurar credenciales:**
\`\`\`bash
aws configure

# Te pedirá:
AWS Access Key ID: [Tu Access Key]
AWS Secret Access Key: [Tu Secret Key]
Default region name: us-east-1
Default output format: json
\`\`\`

**¿Cómo obtener las Keys?**
1. En AWS Console, ve a **IAM** (Identity and Access Management)
2. Click en tu usuario
3. Pestaña **"Security credentials"**
4. Click **"Create access key"**
5. Guarda el Access Key ID y Secret Access Key (solo se muestran una vez)

**Subir archivos con CLI:**
\`\`\`bash
# Desde la carpeta de tu proyecto
aws s3 sync out/ s3://mi-catalogo-productos/ --delete

# Explicación:
# sync: Sincroniza archivos (solo sube lo que cambió)
# out/: Tu carpeta local con el sitio
# s3://mi-catalogo-productos/: Tu bucket
# --delete: Elimina archivos en S3 que ya no existen localmente
\`\`\`

**Verificar que funcionó:**
\`\`\`bash
# Listar archivos en tu bucket
aws s3 ls s3://mi-catalogo-productos/
\`\`\`

---

### Fase 4: Configurar CloudFront (CDN)

#### ¿Por qué CloudFront?

Sin CloudFront:
- Tu sitio se sirve desde un solo servidor en Virginia
- Usuarios en México/España/etc. tienen latencia alta
- No tienes HTTPS fácilmente

Con CloudFront:
- Tu sitio se replica en 400+ ubicaciones globales
- Usuarios reciben el sitio desde el servidor más cercano
- HTTPS gratis
- Caché = menos carga en S3 = más rápido y barato

#### 4.1 Crear una Distribución CloudFront

1. Ve a **CloudFront** en la consola AWS
2. Click **"Create distribution"**
3. Configuración:

\`\`\`
Origin domain: mi-catalogo-productos.s3.us-east-1.amazonaws.com
(Selecciona tu bucket S3 del dropdown)

Origin path: (dejar vacío)

Name: mi-catalogo-productos-origin

Origin access: Public
(Porque ya configuramos el bucket como público)

Viewer protocol policy: Redirect HTTP to HTTPS
(Fuerza HTTPS para seguridad)

Allowed HTTP methods: GET, HEAD, OPTIONS

Cache policy: CachingOptimized
(Recomendado para sitios estáticos)

Price class: Use all edge locations (best performance)
(O "Use only North America and Europe" para ahorrar)

Alternate domain name (CNAME): mitienda.com
(Solo si tienes un dominio propio)

Custom SSL certificate: (dejar por defecto por ahora)

Default root object: index.html
\`\`\`

4. Click **"Create distribution"**
5. **Espera 10-15 minutos** mientras CloudFront se despliega globalmente

#### 4.2 Obtener tu URL de CloudFront

Una vez desplegado, verás algo como:
\`\`\`
https://d1234abcd5678.cloudfront.net
\`\`\`

**¡Esa es la URL de tu sitio!** Compártela y funcionará rápido en todo el mundo.

---

### Fase 5: Configurar Dominio Propio (Opcional)

#### 5.1 Comprar un Dominio

Opciones:
- **Route 53** (AWS): $12-15/año para .com
- **Namecheap**: $8-10/año
- **Google Domains**: $12/año
- **GoDaddy**: $15-20/año

#### 5.2 Configurar Route 53

1. Ve a **Route 53** en AWS
2. Click **"Create hosted zone"**
3. Domain name: `mitienda.com`
4. Type: Public hosted zone
5. Click **"Create"**

#### 5.3 Conectar Dominio con CloudFront

1. En Route 53, entra a tu hosted zone
2. Click **"Create record"**
3. Configuración:
   \`\`\`
   Record name: (vacío para root domain, o "www" para www.mitienda.com)
   Record type: A
   Alias: Yes
   Route traffic to: Alias to CloudFront distribution
   Choose distribution: [Tu distribución CloudFront]
   \`\`\`
4. Click **"Create records"**

#### 5.4 Actualizar Nameservers en tu Registrar

Route 53 te da 4 nameservers como:
\`\`\`
ns-123.awsdns-12.com
ns-456.awsdns-34.net
ns-789.awsdns-56.org
ns-012.awsdns-78.co.uk
\`\`\`

Ve a donde compraste tu dominio y actualiza los nameservers a estos.

**Espera 24-48 horas** para que se propague globalmente.

---

## Opción 2: Con Base de Datos Dinámica

### ¿Cuándo Necesitas Esto?

Si en el futuro quieres:
- Actualizar productos sin resubir archivos
- Que los clientes creen cuentas
- Procesar pagos
- Inventario en tiempo real
- Panel de administración

### Arquitectura Dinámica

\`\`\`
┌─────────────────────────────────────────────────────────┐
│              OPCIÓN 2: SITIO DINÁMICO                    │
│            (Para Funcionalidad Avanzada)                 │
└─────────────────────────────────────────────────────────┘

Usuario → CloudFront → S3 (Frontend estático)
                           ↓
                    API Gateway → Lambda Functions
                           ↓
                    DynamoDB (Base de datos)
\`\`\`

### Componentes Adicionales

#### 1. **AWS Lambda**
- **Qué es:** Código que se ejecuta solo cuando lo necesitas (serverless)
- **Para qué:** Manejar lógica de negocio (agregar productos, procesar pedidos)
- **Costo:** 1 millón de requests gratis/mes

#### 2. **API Gateway**
- **Qué es:** Puerta de entrada para tus APIs
- **Para qué:** Exponer endpoints REST para tu frontend
- **Costo:** 1 millón de requests gratis el primer año

#### 3. **DynamoDB**
- **Qué es:** Base de datos NoSQL serverless
- **Para qué:** Almacenar productos, pedidos, usuarios
- **Costo:** 25 GB gratis + 200 millones de requests/mes

#### 4. **Cognito (Opcional)**
- **Qué es:** Servicio de autenticación
- **Para qué:** Login de usuarios, cuentas
- **Costo:** 50,000 usuarios activos gratis/mes

### Ejemplo de Estructura DynamoDB

\`\`\`javascript
// Tabla: Products
{
  "PK": "PRODUCT#001",
  "SK": "METADATA",
  "name": "Margarita mini",
  "category": "flores-comestibles",
  "folder": "flores/dulces",
  "description": "Delicadas y vibrantes...",
  "price": 45.00,
  "available": true,
  "imageUrl": "https://d1234.cloudfront.net/images/margarita.jpg",
  "tags": ["flores", "dulce", "decoración"],
  "createdAt": "2025-01-15T10:30:00Z",
  "updatedAt": "2025-01-20T14:22:00Z"
}

// Tabla: Orders
{
  "PK": "ORDER#12345",
  "SK": "METADATA",
  "customerName": "Juan Pérez",
  "phone": "5551234567",
  "items": [
    {
      "productId": "PRODUCT#001",
      "quantity": 2,
      "price": 45.00
    }
  ],
  "total": 90.00,
  "status": "pending",
  "createdAt": "2025-01-27T15:45:00Z"
}
\`\`\`

### Paso a Paso para Opción Dinámica

#### 1. Crear Tabla DynamoDB

\`\`\`bash
aws dynamodb create-table \
  --table-name CatalogoProducts \
  --attribute-definitions \
    AttributeName=PK,AttributeType=S \
    AttributeName=SK,AttributeType=S \
  --key-schema \
    AttributeName=PK,KeyType=HASH \
    AttributeName=SK,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
\`\`\`

#### 2. Crear Función Lambda para Obtener Productos

\`\`\`javascript
// lambda/getProducts.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'CatalogoProducts',
    FilterExpression: 'available = :available',
    ExpressionAttributeValues: {
      ':available': true
    }
  };
  
  try {
    const result = await dynamodb.scan(params).promise();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result.Items)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
\`\`\`

#### 3. Configurar API Gateway

1. Ve a **API Gateway** en AWS
2. Click **"Create API"** → **REST API**
3. Nombre: `CatalogoAPI`
4. Click **"Create"**
5. **Crear Resource:**
   - Click **"Actions"** → **"Create Resource"**
   - Resource Name: `products`
   - Resource Path: `/products`
6. **Crear Method:**
   - Selecciona `/products`
   - Click **"Actions"** → **"Create Method"** → **GET**
   - Integration type: Lambda Function
   - Lambda Function: `getProducts`
   - Click **"Save"**
7. **Deploy API:**
   - Click **"Actions"** → **"Deploy API"**
   - Stage: `prod`
   - Click **"Deploy"**
8. Copia la **Invoke URL**: `https://abc123.execute-api.us-east-1.amazonaws.com/prod`

#### 4. Actualizar Frontend para Usar API

\`\`\`typescript
// lib/api.ts
const API_URL = 'https://abc123.execute-api.us-east-1.amazonaws.com/prod';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return response.json();
}

// components/catalog-view.tsx
import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';

export function CatalogView() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadProducts();
  }, []);
  
  // ... resto del componente
}
\`\`\`

---

## Comparación de Costos

### Opción 1: Sitio Estático (S3 + CloudFront)

**Escenario:** 10,000 visitantes/mes, 100 MB de archivos

| Servicio | Costo Mensual | Free Tier |
|----------|---------------|-----------|
| S3 Storage (100 MB) | $0.002 | ✅ Gratis (primeros 5 GB) |
| S3 Requests (10k GET) | $0.004 | ✅ Gratis (primeros 20k) |
| CloudFront (10 GB transfer) | $0.85 | ✅ Gratis (primeros 1 TB) |
| Route 53 (opcional) | $0.50 | ❌ |
| **TOTAL** | **~$0.00 - $0.50/mes** | |

### Opción 2: Sitio Dinámico (+ Lambda + DynamoDB)

**Escenario:** 10,000 visitantes/mes, 50k API calls

| Servicio | Costo Mensual | Free Tier |
|----------|---------------|-----------|
| S3 + CloudFront | $0.00 | ✅ |
| Lambda (50k invocations) | $0.00 | ✅ Gratis (1M/mes) |
| API Gateway (50k requests) | $0.18 | ⚠️ Parcial |
| DynamoDB (1 GB, 50k reads) | $0.00 | ✅ Gratis (25 GB) |
| Route 53 | $0.50 | ❌ |
| **TOTAL** | **~$0.68/mes** | |

### Opción 3: EC2 (NO Recomendado para tu Caso)

**Escenario:** Servidor t2.micro 24/7

| Servicio | Costo Mensual | Free Tier |
|----------|---------------|-----------|
| EC2 t2.micro | $8.50 | ⚠️ 750 hrs/mes primer año |
| EBS Storage (8 GB) | $0.80 | ✅ 30 GB gratis |
| Data Transfer (10 GB) | $0.90 | ⚠️ Parcial |
| **TOTAL** | **~$10.20/mes** | |

**¿Por qué NO usar EC2?**
- Más caro
- Tienes que mantener el servidor (actualizaciones, seguridad)
- No escala automáticamente
- Puede caerse si hay mucho tráfico
- Necesitas conocimientos de DevOps

---

## Mantenimiento y Actualizaciones

### Actualizar Productos (Opción 1: Estático)

1. Edita `lib/database-schema.ts` en tu código
2. Rebuild el sitio: `npm run build`
3. Sube los nuevos archivos:
   \`\`\`bash
   aws s3 sync out/ s3://mi-catalogo-productos/ --delete
   \`\`\`
4. Invalida el caché de CloudFront:
   \`\`\`bash
   aws cloudfront create-invalidation \
     --distribution-id E1234ABCD5678 \
     --paths "/*"
   \`\`\`

### Actualizar Productos (Opción 2: Dinámico)

1. Usa la consola DynamoDB o un script:
   \`\`\`javascript
   const AWS = require('aws-sdk');
   const dynamodb = new AWS.DynamoDB.DocumentClient();
   
   async function addProduct(product) {
     await dynamodb.put({
       TableName: 'CatalogoProducts',
       Item: {
         PK: `PRODUCT#${product.id}`,
         SK: 'METADATA',
         ...product
       }
     }).promise();
   }
   \`\`\`

2. O crea un panel de administración web

---

## Monitoreo y Logs

### CloudWatch (Incluido Gratis)

1. Ve a **CloudWatch** en AWS
2. **Logs:** Ver errores de Lambda
3. **Metrics:** Ver tráfico de CloudFront, S3, etc.
4. **Alarms:** Recibir alertas si algo falla

### Métricas Importantes

- **CloudFront Requests:** Cuánta gente visita tu sitio
- **S3 Bucket Size:** Cuánto espacio usas
- **Lambda Errors:** Si hay problemas en tu API
- **DynamoDB Throttles:** Si necesitas más capacidad

---

## Seguridad

### Mejores Prácticas

1. **Nunca compartas tus Access Keys**
2. **Usa IAM Roles en lugar de Keys cuando sea posible**
3. **Habilita MFA en tu cuenta root**
4. **Usa HTTPS siempre (CloudFront lo hace automático)**
5. **Habilita CloudTrail para auditoría**
6. **Configura AWS Budgets para alertas de costos**

### Configurar Presupuesto

1. Ve a **AWS Budgets**
2. Click **"Create budget"**
3. Budget type: Cost budget
4. Amount: $5/mes (o lo que quieras)
5. Alert threshold: 80%
6. Email: tu correo
7. Click **"Create"**

Recibirás un email si gastas más de $4 (80% de $5).

---

## Troubleshooting Común

### Problema: "403 Forbidden" al acceder a S3

**Solución:** Verifica la Bucket Policy (Fase 2.4)

### Problema: CloudFront muestra contenido viejo

**Solución:** Invalida el caché
\`\`\`bash
aws cloudfront create-invalidation \
  --distribution-id E1234ABCD5678 \
  --paths "/*"
\`\`\`

### Problema: Imágenes no cargan

**Solución:** Verifica que las rutas en tu código coincidan con S3
\`\`\`typescript
// Correcto
<img src="/images/producto.jpg" />

// Incorrecto (no uses rutas absolutas locales)
<img src="file:///Users/tu/proyecto/images/producto.jpg" />
\`\`\`

### Problema: WhatsApp no abre en móvil

**Solución:** Usa `https://wa.me/` en lugar de `whatsapp://`

---

## Próximos Pasos

### Corto Plazo (1-2 semanas)
1. ✅ Deploy básico en S3
2. ✅ Configurar CloudFront
3. ✅ Probar en móvil
4. ✅ Compartir URL con clientes

### Mediano Plazo (1-3 meses)
1. Comprar dominio propio
2. Configurar Route 53
3. Agregar Google Analytics
4. Optimizar imágenes (WebP, lazy loading)

### Largo Plazo (3-6 meses)
1. Migrar a arquitectura dinámica (DynamoDB)
2. Crear panel de administración
3. Integrar pagos (Stripe)
4. Sistema de inventario

---

## Recursos Adicionales

- **Documentación AWS S3:** https://docs.aws.amazon.com/s3/
- **Documentación CloudFront:** https://docs.aws.amazon.com/cloudfront/
- **AWS Free Tier:** https://aws.amazon.com/free/
- **Calculadora de Costos AWS:** https://calculator.aws/
- **AWS Well-Architected Framework:** https://aws.amazon.com/architecture/well-architected/

---

## Resumen Ejecutivo

**Para tu catálogo actual (estático):**
1. Usa S3 + CloudFront (Opción 1)
2. Costo: ~$0-1/mes
3. Tiempo de setup: 2-3 horas
4. Dificultad: Baja

**Para el futuro (dinámico):**
1. Agrega Lambda + DynamoDB + API Gateway
2. Costo: ~$1-5/mes
3. Tiempo de migración: 1-2 semanas
4. Dificultad: Media

**NO uses EC2** a menos que tengas requisitos muy específicos que lo justifiquen.

---

¿Preguntas? Revisa este documento cada vez que necesites recordar cómo funciona tu infraestructura AWS.
