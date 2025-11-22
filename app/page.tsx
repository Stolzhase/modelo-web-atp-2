import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const categories = [
    {
      id: "flores",
      title: "Flores Comestibles",
      description: "Un toque de color, aroma y sabor para transformar tus platillos.",
      image: "/margarita-mini-flores-comestibles.jpg",
      link: "/colecciones?category=flores",
    },
    {
      id: "brotes",
      title: "Brotes & Microgreens",
      description: "Pequeños pero llenos de vida. Frescura y nutrición concentrada.",
      image: "/brote-de-cilantro-microgreens.jpg",
      link: "/colecciones?category=brotes",
    },
    {
      id: "hortalizas",
      title: "Hortalizas y Hojas",
      description: "La esencia del huerto. Texturas tiernas y sabores inconfundibles.",
      image: "/placeholder.svg?height=600&width=400&text=Hortalizas",
      link: "/colecciones?category=hortalizas",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Gourmet+Banner"
              alt="Fondo Gourmet"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Sabores que Florecen
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Cultivamos ingredientes de alta gama para chefs exigentes. Transforma cada plato en una experiencia
              sensorial única.
            </p>
            <Link
              href="/colecciones"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors animate-in fade-in zoom-in duration-1000 delay-500"
            >
              Explorar Catálogo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestras Colecciones</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group relative h-[500px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{category.title}</h3>
                  <p className="text-white/90 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                    Ver Productos
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured/Intro Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Del campo a tu cocina</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                En Armonizando tus Platillos, nos dedicamos a cultivar las flores, brotes y hortalizas más exquisitas.
                Cada producto es seleccionado cuidadosamente para asegurar la máxima frescura y calidad, permitiéndote
                crear presentaciones visualmente impactantes y sabores memorables.
              </p>
              <Link
                href="/nosotros"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Conoce nuestra historia <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/modern-minimalist-product-photography.jpg"
                alt="Cocina Gourmet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
