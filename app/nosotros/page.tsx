"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useInView } from "framer-motion"

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function AboutPage() {
  const timeline = [
    {
      year: "2015",
      title: "La Semilla",
      description: "Iniciamos con un pequeño huerto familiar, experimentando con variedades locales y tradicionales.",
      image: "/modern-minimalist-product-photography.jpg",
    },
    {
      year: "2018",
      title: "Crecimiento",
      description:
        "Expandimos nuestros cultivos para incluir flores comestibles exóticas, respondiendo a la demanda de chefs innovadores.",
      image: "/brote-de-cilantro-microgreens.jpg",
    },
    {
      year: "2021",
      title: "Sostenibilidad",
      description: "Implementamos sistemas de riego eficientes y prácticas 100% orgánicas certificadas.",
      image: "/calendula-flores-comestibles.jpg",
    },
    {
      year: "2025",
      title: "Armonizando tus Platillos",
      description:
        "Consolidados como proveedores líderes de alta gama, llevando la belleza natural a las mejores mesas.",
      image: "/petalos-de-rosa.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Nuestra Historia</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Más que cultivadores, somos curadores de sabores y estética. Descubre cómo hemos crecido junto a la
              gastronomía de vanguardia.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 container mx-auto px-4">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 h-full" />

            <div className="space-y-24">
              {timeline.map((item, index) => (
                <FadeInSection key={index}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 mt-1.5 md:mt-0" />

                    {/* Content Half */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:text-right flex flex-col justify-center">
                      <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:text-left"}>
                        <span className="text-primary font-bold text-lg tracking-wider">{item.year}</span>
                        <h3 className="font-serif text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Image Half */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0">
                      <div
                        className={`relative h-[300px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-500 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                      >
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
