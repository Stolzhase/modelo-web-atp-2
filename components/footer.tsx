import { Phone, Mail, Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-serif text-2xl font-bold tracking-tight">Armonizando tus Platillos</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Flores comestibles, brotes y hortalizas de la más alta calidad para transformar tus platillos en obras de
              arte.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#productos" className="hover:text-foreground transition-colors">
                  Flores Comestibles
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-foreground transition-colors">
                  Brotes
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-foreground transition-colors">
                  Hortalizas y Hojas Verdes
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-foreground transition-colors">
                  Todos los productos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <a href="tel:5680774434">5680774434</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <a href="mailto:maralvaflo@gmail.com">maralvaflo@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#nosotros" className="hover:text-foreground transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Envíos y entregas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Armonizando tus Platillos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
