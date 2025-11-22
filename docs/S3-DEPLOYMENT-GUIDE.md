# Guía Completa de Deployment en Amazon S3

## ¿Por qué S3 y no EC2?

Tu idea original era usar S3 para almacenar datos y EC2 para mostrar la página. Sin embargo, para un sitio web **estático** como este catálogo, **NO necesitas EC2**.

### Arquitectura Correcta para tu Caso:

\`\`\`
┌─────────────────────────────────────────────────┐
│  OPCIÓN 1: Solo Sitio Estático (RECOMENDADO)   │
│  ✅ Más barato (casi gratis)                    │
│  ✅ Más rápido                                  │
│  ✅ Más simple de mantener                      │
└─────────────────────────────────────────────────┘

Usuario → CloudFront (CDN) → S3 Bucket (HTML/CSS/JS)
                                    ↓
                            Imágenes de productos

Costo: ~$0.50 - $2 USD/mes para tráfico bajo
\`\`\`

\`\`\`
┌─────────────────────────────────────────────────┐
│  OPCIÓN 2: Con Base de Datos (FUTURO)          │
│  Para cuando necesites funcionalidad dinámica   │
└─────────────────────────────────────────────────┘

Usuario → CloudFront → S3 (Frontend estático)
                         ↓
                    API Gateway → Lambda → DynamoDB
                                            ↓
                                    Datos de productos

Costo: ~$5 - $15 USD/mes dependiendo del uso
\`\`\`

## Paso a Paso: Deployment en S3

### PASO 1: Preparar los Archivos

Tu proyecto actual tiene esta estructura:

\`\`\`
catalogo-estatico-aws/
├── index.html          ← Página principal
├── error.html          ← Página de error 404
├── styles.css          ← Estilos
├── data.js            ← Datos de productos
├── app.js             ← Lógica de la aplicación
└── [imágenes].jpg     ← Imágenes de productos
\`\`\`

**Todos estos archivos deben subirse a S3.**

### PASO 2: Crear y Configurar el Bucket S3

#### 2.1 Crear el Bucket

1. Ve a la consola de AWS: https://console.aws.amazon.com/s3/
2. Haz clic en "Create bucket"
3. Configuración:
   - **Bucket name**: `tu-dominio.com` (usa tu dominio exacto)
   - **Region**: Elige la más cercana a tus usuarios (ej: `us-east-1`)
   - **Block Public Access**: DESACTIVA todas las opciones (necesario para sitio web público)
   - Haz clic en "Create bucket"

#### 2.2 Habilitar Static Website Hosting

1. Entra a tu bucket
2. Ve a la pestaña "Properties"
3. Scroll hasta "Static website hosting"
4. Haz clic en "Edit"
5. Configuración:
   - **Static website hosting**: Enable
   - **Hosting type**: Host a static website
   - **Index document**: `index.html`
   - **Error document**: `error.html`
6. Guarda los cambios
7. **IMPORTANTE**: Copia la URL del endpoint (ej: `http://tu-dominio.s3-website-us-east-1.amazonaws.com`)

#### 2.3 Configurar Permisos del Bucket

1. Ve a la pestaña "Permissions"
2. En "Bucket policy", haz clic en "Edit"
3. Pega esta política (reemplaza `TU-BUCKET-NAME`):

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU-BUCKET-NAME/*"
    }
  ]
}
\`\`\`

4. Guarda los cambios

### PASO 3: Subir los Archivos

#### Opción A: Usando la Consola Web (Más Fácil)

1. Ve a la pestaña "Objects" de tu bucket
2. Haz clic en "Upload"
3. Arrastra TODOS los archivos del proyecto:
   - `index.html`
   - `error.html`
   - `styles.css`
   - `data.js`
   - `app.js`
   - Todas las imágenes `.jpg`
4. Haz clic en "Upload"

#### Opción B: Usando AWS CLI (Más Rápido para muchos archivos)

\`\`\`bash
# Instalar AWS CLI primero
# Windows: https://awscli.amazonaws.com/AWSCLIV2.msi
# Mac: brew install awscli
# Linux: sudo apt install awscli

# Configurar credenciales
aws configure

# Subir todos los archivos
aws s3 sync . s3://tu-dominio.com --exclude ".git/*" --exclude "node_modules/*"
\`\`\`

### PASO 4: Probar el Sitio

1. Abre la URL del endpoint que copiaste en el Paso 2.2
2. Deberías ver tu catálogo funcionando
3. Prueba:
   - Navegación
   - Búsqueda de productos
   - Filtros por categoría
   - Agregar productos al carrito
   - Botón de WhatsApp

### PASO 5: Conectar tu Dominio (Opcional pero Recomendado)

#### 5.1 Configurar CloudFront (CDN)

CloudFront hace tu sitio más rápido y permite HTTPS.

1. Ve a CloudFront: https://console.aws.amazon.com/cloudfront/
2. Haz clic en "Create distribution"
3. Configuración:
   - **Origin domain**: Selecciona tu bucket S3
   - **Origin path**: Deja vacío
   - **Viewer protocol policy**: Redirect HTTP to HTTPS
   - **Allowed HTTP methods**: GET, HEAD
   - **Cache policy**: CachingOptimized
   - **Alternate domain names (CNAMEs)**: `tu-dominio.com` y `www.tu-dominio.com`
   - **Custom SSL certificate**: Solicita un certificado en ACM (gratis)
4. Crea la distribución
5. **Copia el Domain Name** (ej: `d1234567890.cloudfront.net`)

#### 5.2 Configurar DNS

En tu proveedor de dominio (GoDaddy, Namecheap, etc.):

1. Crea un registro CNAME:
   - **Name**: `www`
   - **Value**: Tu CloudFront domain name
2. Crea un registro A (si tu proveedor lo permite) o ALIAS:
   - **Name**: `@` (dominio raíz)
   - **Value**: Tu CloudFront domain name

**Espera 10-30 minutos** para que los cambios DNS se propaguen.

### PASO 6: Actualizar el Sitio en el Futuro

Cada vez que hagas cambios:

\`\`\`bash
# Opción 1: Consola Web
# Ve a S3 → Tu bucket → Upload → Reemplaza los archivos

# Opción 2: AWS CLI (más rápido)
aws s3 sync . s3://tu-dominio.com --delete

# Opción 3: Invalidar caché de CloudFront (si usas CloudFront)
aws cloudfront create-invalidation --distribution-id TU-DISTRIBUTION-ID --paths "/*"
\`\`\`

## Costos Estimados

### Solo S3 (sin CloudFront):
- **Almacenamiento**: $0.023 por GB/mes
- **Transferencia**: $0.09 por GB (primeros 10 TB)
- **Requests**: $0.0004 por 1,000 requests

**Ejemplo**: Sitio de 100 MB con 1,000 visitas/mes = ~$0.50 USD/mes

### S3 + CloudFront:
- **S3**: Igual que arriba
- **CloudFront**: $0.085 por GB transferido
- **Requests**: $0.0075 por 10,000 requests

**Ejemplo**: Sitio de 100 MB con 1,000 visitas/mes = ~$1.50 USD/mes

### Comparación con EC2:
- **EC2 t2.micro**: $8.50 USD/mes (24/7)
- **Más complejo de mantener**
- **Requiere actualizaciones de seguridad**

**Conclusión**: S3 es 5-10x más barato y más simple para sitios estáticos.

## Migración Futura a Base de Datos

Cuando necesites funcionalidad dinámica (agregar/editar productos desde un admin):

### Opción 1: DynamoDB + Lambda (Serverless)

\`\`\`
Frontend (S3) → API Gateway → Lambda → DynamoDB
\`\`\`

**Ventajas**:
- Solo pagas por uso
- Escala automáticamente
- Sin servidores que mantener

**Costo**: ~$5-10 USD/mes para tráfico bajo

### Opción 2: RDS + Lambda

\`\`\`
Frontend (S3) → API Gateway → Lambda → RDS (PostgreSQL/MySQL)
\`\`\`

**Ventajas**:
- Base de datos relacional completa
- Más familiar si conoces SQL

**Costo**: ~$15-25 USD/mes (RDS t3.micro)

### Opción 3: Supabase (Recomendado para empezar)

\`\`\`
Frontend (S3) → Supabase (Base de datos + Auth + Storage)
\`\`\`

**Ventajas**:
- Tier gratuito generoso
- Base de datos PostgreSQL
- Autenticación incluida
- Panel de administración

**Costo**: Gratis hasta 500 MB, luego $25 USD/mes

## Checklist de Deployment

- [ ] Crear bucket S3 con el nombre de tu dominio
- [ ] Habilitar Static Website Hosting
- [ ] Configurar bucket policy para acceso público
- [ ] Subir todos los archivos (HTML, CSS, JS, imágenes)
- [ ] Probar el sitio con la URL del endpoint S3
- [ ] (Opcional) Crear distribución CloudFront
- [ ] (Opcional) Configurar dominio personalizado
- [ ] (Opcional) Configurar certificado SSL
- [ ] Probar todas las funcionalidades
- [ ] Configurar invalidación de caché (si usas CloudFront)

## Troubleshooting Común

### Error: "403 Forbidden"
**Causa**: Bucket policy incorrecta o archivos no públicos
**Solución**: Verifica la bucket policy del Paso 2.3

### Error: "404 Not Found"
**Causa**: Archivo `index.html` no está en la raíz del bucket
**Solución**: Asegúrate de que `index.html` esté en la raíz, no en una carpeta

### Las imágenes no cargan
**Causa**: Rutas de imágenes incorrectas
**Solución**: Las imágenes deben estar en la raíz del bucket con los nombres exactos en `data.js`

### El sitio se ve sin estilos
**Causa**: `styles.css` no se encuentra
**Solución**: Verifica que `styles.css` esté en la raíz del bucket

### CloudFront muestra versión antigua
**Causa**: Caché de CloudFront
**Solución**: Crea una invalidación: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`

## Recursos Adicionales

- [Documentación oficial de S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Guía de CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [Calculadora de precios de AWS](https://calculator.aws/)

## Próximos Pasos

1. **Ahora**: Despliega el sitio estático en S3
2. **Semana 1-2**: Prueba con usuarios reales, recopila feedback
3. **Mes 1**: Si necesitas agregar/editar productos dinámicamente, implementa DynamoDB + Lambda
4. **Mes 2+**: Considera agregar panel de administración con autenticación

¿Preguntas? Revisa esta guía cada vez que necesites recordar cómo funciona tu deployment.
