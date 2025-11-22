"use client"

import { useState, useMemo, useEffect } from "react"
import { Search, Grid3x3, List, FolderOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products, categories, getFoldersByCategory } from "@/lib/database-schema"
import { WhatsAppCart } from "@/components/whatsapp-cart"

export function CatalogView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categoryOptions = [{ id: "all", name: "Todos los productos", slug: "all" }, ...categories]

  const availableFolders = useMemo(() => {
    if (selectedCategory === "all") return []
    return getFoldersByCategory(selectedCategory)
  }, [selectedCategory])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory

      const matchesFolder = !selectedFolder || product.folderId === selectedFolder

      return matchesSearch && matchesCategory && matchesFolder && product.available
    })
  }, [searchQuery, selectedCategory, selectedFolder])

  // Resetear folder cuando cambia la categoría
  useEffect(() => {
    setSelectedFolder(null)
  }, [selectedCategory])

  return (
    <>
      <section id="productos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Nuestro Catálogo</h2>
                <p className="text-muted-foreground">{filteredProducts.length} productos disponibles</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="rounded-full"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {availableFolders.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-4 border-l-2 border-primary/20">
                  <FolderOpen className="h-4 w-4 text-muted-foreground mt-2" />
                  <Button
                    size="sm"
                    variant={selectedFolder === null ? "default" : "ghost"}
                    onClick={() => setSelectedFolder(null)}
                    className="rounded-full"
                  >
                    Todas
                  </Button>
                  {availableFolders.map((folder) => (
                    <Button
                      key={folder.id}
                      size="sm"
                      variant={selectedFolder === folder.id ? "default" : "ghost"}
                      onClick={() => setSelectedFolder(folder.id)}
                      className="rounded-full"
                    >
                      {folder.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </div>
      </section>

      <WhatsAppCart />
    </>
  )
}
