import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionsPage({ searchParams }: { searchParams: { category?: string } }) {
  const initialCategory = searchParams.category || "todos"

  // Group products for "todos" view or filter
  const getFilteredProducts = (cat: string) => {
    if (cat === "todos") return products
    return products.filter((p) => p.category === cat)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra selección de ingredientes premium cultivados para elevar tus creaciones culinarias.
          </p>
        </div>

        <Tabs defaultValue={initialCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 p-1">
              <TabsTrigger value="todos" className="font-serif px-6">
                Todos
              </TabsTrigger>
              <TabsTrigger value="flores" className="font-serif px-6">
                Flores
              </TabsTrigger>
              <TabsTrigger value="brotes" className="font-serif px-6">
                Brotes
              </TabsTrigger>
              <TabsTrigger value="hortalizas" className="font-serif px-6">
                Hortalizas
              </TabsTrigger>
            </TabsList>
          </div>

          {["todos", "flores", "brotes", "hortalizas"].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue} className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {getFilteredProducts(tabValue).map((product) => (
                  <Link
                    key={product.id}
                    href={`/productos/${product.slug}`}
                    className="group flex flex-col bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{product.description}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider hover:underline">
                          Ver Detalle
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
