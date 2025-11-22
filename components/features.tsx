import { Truck, Shield, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envío gratuito",
    description: "En pedidos superiores a $50",
  },
  {
    icon: Shield,
    title: "Garantía extendida",
    description: "2 años de protección completa",
  },
  {
    icon: Clock,
    title: "Entrega rápida",
    description: "3-5 días hábiles",
  },
  {
    icon: Award,
    title: "Calidad premium",
    description: "Productos certificados",
  },
]

export function Features() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
