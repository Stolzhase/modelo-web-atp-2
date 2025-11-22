import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Silla Moderna",
    category: "Mobiliario",
    price: 299,
    image: "/modern-chair-product-photography.jpg",
  },
  {
    id: 2,
    name: "Mesa de Centro",
    category: "Mobiliario",
    price: 449,
    image: "/modern-coffee-table-product-photography.jpg",
  },
  {
    id: 3,
    name: "Lámpara de Pie",
    category: "Iluminación",
    price: 189,
    image: "/modern-floor-lamp-product-photography.jpg",
  },
  {
    id: 4,
    name: "Estantería Minimalista",
    category: "Almacenamiento",
    price: 349,
    image: "/minimalist-bookshelf-product-photography.jpg",
  },
  {
    id: 5,
    name: "Sofá Modular",
    category: "Mobiliario",
    price: 899,
    image: "/modular-sofa-product-photography.jpg",
  },
  {
    id: 6,
    name: "Escritorio Ejecutivo",
    category: "Oficina",
    price: 549,
    image: "/executive-desk-product-photography.jpg",
  },
]

export function ProductGrid() {
  return (
    <section id="productos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Productos destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explora nuestra selección curada de productos premium diseñados para elevar tu estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
