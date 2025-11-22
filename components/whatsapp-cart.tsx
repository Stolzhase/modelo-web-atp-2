"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X, MessageCircle, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/database-schema"

interface CartItem {
  product: Product
  quantity: number
}

export function WhatsAppCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleAddToCart = (event: Event) => {
      const customEvent = event as CustomEvent<Product>
      const product = customEvent.detail
      addToCart(product)
    }

    window.addEventListener("addToCart", handleAddToCart)
    return () => window.removeEventListener("addToCart", handleAddToCart)
  }, [])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { product, quantity: 1 }]
    })
    // Abrir el carrito automáticamente cuando se agrega un producto
    setIsOpen(true)
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + delta
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null),
    )
  }

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return ""

    let message = "¡Hola! Me gustaría hacer un pedido:\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} - Cantidad: ${item.quantity}\n`
    })

    message += "\n¿Podrían confirmar disponibilidad y precio? ¡Gracias!"

    return encodeURIComponent(message)
  }

  const sendWhatsAppOrder = () => {
    const phoneNumber = "5215680774434" // Formato internacional sin + ni espacios
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Botón flotante del carrito */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" onClick={() => setIsOpen(!isOpen)} className="rounded-full h-14 w-14 shadow-lg relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 rounded-full">
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>

      {/* Panel del carrito */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-h-[600px] z-50 shadow-2xl flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold">Tu Pedido</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Tu carrito está vacío</p>
                <p className="text-sm mt-1">Agrega productos para hacer tu pedido</p>
              </div>
            ) : (
              cart.map((item) => (
                <Card key={item.product.id} className="p-3">
                  <div className="flex gap-3">
                    <img
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6 ml-auto"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-4 border-t space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total de productos:</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <Button onClick={sendWhatsAppOrder} className="w-full gap-2" size="lg">
                <MessageCircle className="h-5 w-5" />
                Enviar pedido por WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Te redirigiremos a WhatsApp para confirmar tu pedido
              </p>
            </div>
          )}
        </Card>
      )}
    </>
  )
}
