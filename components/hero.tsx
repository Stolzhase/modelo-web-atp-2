export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            Flores Comestibles, Brotes y Hortalizas
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">"Sabores que florecen"</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Un toque de color, aroma y sabor. Nuestros productos transforman cualquier platillo en una obra de arte.
          </p>
        </div>
      </div>
    </section>
  )
}
