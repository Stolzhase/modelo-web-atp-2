"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Contact Bar */}
        <div className="hidden md:flex justify-end items-center gap-6 text-sm text-muted-foreground mb-2">
          <a href="tel:+525680774434" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-3 w-3" />
            <span>5680774434</span>
          </a>
          <a
            href="mailto:maralvaflo@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>maralvaflo@gmail.com</span>
          </a>
        </div>

        <nav className="flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Armonizando tus Platillos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              Inicio
            </Link>
            <Link
              href="/colecciones"
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              Colecciones
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              Nosotros
            </Link>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/colecciones">Ver Catálogo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/colecciones"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Colecciones
            </Link>
            <Link
              href="/nosotros"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <div className="pt-4 border-t flex flex-col gap-3">
              <a href="tel:+525680774434" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>5680774434</span>
              </a>
              <a href="mailto:maralvaflo@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>maralvaflo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
