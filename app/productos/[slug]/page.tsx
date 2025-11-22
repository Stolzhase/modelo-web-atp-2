import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products-data"
import { ArrowLeft, Check } from "lucide-react"
import { ProductActions } from "@/components/product-actions"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  // Related products from same category
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 container mx-auto px-4">
        <Link
          href="/colecciones"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver al catálogo
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-secondary/20">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-md overflow-hidden bg-secondary/10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={product.image || "/placeholder.svg"} // Using same image as placeholder for gallery
                    alt={`${product.name} vista ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{product.category}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">{product.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-3xl font-bold text-foreground">${product.price}</span>
              <span className="text-sm text-muted-foreground">/ por unidad</span>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg border border-border mb-8">
              <h3 className="font-medium mb-4">Características:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" /> Frescura garantizada
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" /> Cultivo sostenible
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" /> Ideal para alta cocina
                </li>
              </ul>
            </div>

            {/* Client Side Actions (Quantity & WhatsApp) */}
            <ProductActions productName={product.name} productPrice={product.price || 0} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t pt-16">
            <h2 className="font-serif text-3xl font-bold mb-8">También te podría gustar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/productos/${rp.slug}`} className="group block">
                  <div className="relative aspect-square rounded-md overflow-hidden mb-3">
                    <Image
                      src={rp.image || "/placeholder.svg"}
                      alt={rp.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif font-bold group-hover:text-primary transition-colors">{rp.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{rp.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
