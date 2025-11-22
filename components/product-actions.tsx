"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

interface ProductActionsProps {
  productName: string
  productPrice: number
}

export function ProductActions({ productName, productPrice }: ProductActionsProps) {
  const [quantity, setQuantity] = useState("10")

  const handleWhatsAppClick = () => {
    const total = productPrice * Number.parseInt(quantity)
    const message = `Hola! Me interesa ordenar el siguiente producto:
    
Producto: *${productName}*
Cantidad: *${quantity} unidades*
Total estimado: *$${total}*

¿Me podrían confirmar disponibilidad? Gracias.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/525680774434?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Cantidad</label>
        <Select value={quantity} onValueChange={setQuantity}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Seleccionar cantidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 unidades</SelectItem>
            <SelectItem value="25">25 unidades</SelectItem>
            <SelectItem value="50">50 unidades</SelectItem>
            <SelectItem value="100">100 unidades</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        size="lg"
        className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 px-8 shadow-md hover:shadow-lg transition-all"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Pedir por WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground text-center md:text-left pt-2">
        * Serás redirigido a WhatsApp para completar tu pedido directamente con nosotros.
      </p>
    </div>
  )
}
