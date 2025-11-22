"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/database-schema"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const handleAddToCart = () => {
    window.dispatchEvent(new CustomEvent("addToCart", { detail: product }))
  }

  if (viewMode === "list") {
    return (
      <Card className="group overflow-hidden border-border hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden bg-primary/5 rounded-md">
            <img
              src={product.image || "/placeholder.svg?height=200&width=200&query=flores comestibles"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.featured && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Destacado</Badge>
            )}
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">{product.categoryId}</p>
              <h3 className="text-xl font-serif font-semibold text-foreground">{product.name}</h3>
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-2 bg-transparent flex-1">
                <Leaf className="h-4 w-4" />
                Ver detalles
              </Button>
              <Button size="sm" onClick={handleAddToCart} className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Agregar
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-primary/5">
        <img
          src={product.image || "/placeholder.svg?height=400&width=400&query=flores comestibles"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        {product.featured && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Destacado</Badge>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">{product.categoryId}</p>
          <h3 className="text-lg font-serif font-semibold text-balance leading-tight">{product.name}</h3>
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="gap-2 bg-transparent flex-1">
            <Leaf className="h-4 w-4" />
            Detalles
          </Button>
          <Button size="sm" onClick={handleAddToCart} className="gap-2 flex-1">
            <ShoppingCart className="h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>
    </Card>
  )
}
