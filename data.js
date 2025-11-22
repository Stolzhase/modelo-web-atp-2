const categories = [
  {
    id: "flores",
    name: "Flores Comestibles",
    slug: "flores-comestibles",
    description: "Sabores que florecen. Un toque de color, aroma y sabor.",
  },
  {
    id: "brotes",
    name: "Brotes",
    slug: "brotes",
    description: "Pequeños, pero llenos de vida. Frescura, nutrición y sabor en su máxima expresión.",
  },
  {
    id: "hortalizas",
    name: "Hortalizas y Hojas Verdes",
    slug: "hortalizas-hojas-verdes",
    description: "La esencia del huerto. Hojas frescas y tiernas.",
  },
]

const products = [
  // FLORES COMESTIBLES
  {
    id: 1,
    name: "Margarita mini",
    categoryId: "flores",
    description:
      "Delicadas y vibrantes, estas pequeñas flores tienen un sutil sabor herbáceo con notas ligeramente dulces. Son ideales para decorar postres, cócteles y ensaladas frescas.",
    image: "margarita-mini-flores-comestibles.jpg",
    tags: ["dulce", "decorativa", "postres"],
  },
  {
    id: 2,
    name: "Begonia dragón",
    categoryId: "flores",
    description:
      "Sus pétalos carnosos tienen un sabor cítrico y refrescante con un toque ácido, similar al ruibarbo. Perfectas para ensaladas, platillos frutales o simplemente como un acento decorativo.",
    image: "begonia-dragon-flores-comestibles.jpg",
    tags: ["cítrico", "ácido", "ensaladas"],
  },
  {
    id: 3,
    name: "Flor de miel morada",
    categoryId: "flores",
    description:
      "Pequeñas flores con un aroma embriagador y un sabor dulce con matices herbáceos. Ideales para infusionar en jarabes, postres y decorar platillos sofisticados.",
    image: "flor-de-miel-morada.jpg",
    tags: ["dulce", "aromática", "jarabes"],
  },
  {
    id: 4,
    name: "Flor de miel blanca",
    categoryId: "flores",
    description:
      "Similar a su versión morada, pero con un perfil más delicado y floral. Se usa para aromatizar bebidas, decorar postres y dar un toque sutil a ensaladas.",
    image: "flor-de-miel-blanca.jpg",
    tags: ["dulce", "delicada", "bebidas"],
  },
  {
    id: 5,
    name: "Caléndula",
    categoryId: "flores",
    description:
      "Sus pétalos aportan un color vibrante y un sabor ligeramente picante y cítrico. Se utilizan en ensaladas, arroces y sopas para aportar un toque de color y frescura.",
    image: "calendula-flores-comestibles.jpg",
    tags: ["picante", "cítrico", "colorida"],
  },
  {
    id: 6,
    name: "Clavelina",
    categoryId: "flores",
    description: "Pétalos coloridos con un toque especiado y sutilmente dulce. Ideales para repostería y bebidas.",
    image: "clavelina-flores-comestibles.jpg",
    tags: ["especiada", "dulce", "repostería"],
  },
  {
    id: 7,
    name: "Pensamiento chico",
    categoryId: "flores",
    description:
      "Pequeñas flores comestibles de colores vivos y sabor suave, ideales para decorar ensaladas, postres y cócteles, aportando un toque de elegancia y color.",
    image: "pensamiento-flores-comestibles.jpg",
    tags: ["decorativa", "suave", "elegante"],
  },
  {
    id: 8,
    name: "Begonia imperial",
    categoryId: "flores",
    description:
      "Llamativa y exótica, con pétalos de textura jugosa y un sabor ácido con matices afrutados. Perfecta para equilibrar ensaladas, decorar platillos gourmet o añadir un giro cítrico a los postres.",
    image: "begonia-imperial-flores.jpg",
    tags: ["ácido", "afrutado", "gourmet"],
  },
  {
    id: 9,
    name: "Lavanda",
    categoryId: "flores",
    description:
      "Aromática y delicada, con notas florales y herbales. Perfecta para infusiones, repostería y platillos sofisticados.",
    image: "lavanda-flores-comestibles.jpg",
    tags: ["aromática", "herbal", "infusiones"],
  },
  {
    id: 10,
    name: "Flor de Cilantro",
    categoryId: "flores",
    description: "Sabor suave y fresco con un ligero toque a cilantro. Ideal para decorar sopas, ceviches y ensaladas.",
    image: "flor-de-cilantro.jpg",
    tags: ["fresca", "cilantro", "ceviches"],
  },
  {
    id: 11,
    name: "Flor de Hinojo",
    categoryId: "flores",
    description: "Aromática y ligeramente anisada, perfecta para pescados, carnes y postres.",
    image: "flor-de-hinojo.jpg",
    tags: ["anisada", "aromática", "pescados"],
  },
  {
    id: 12,
    name: "Pensamiento grande",
    categoryId: "flores",
    description:
      "Flores más grandes con colores intensos y patrones llamativos. Su sabor es suave y ligeramente vegetal, adecuado para adornar platos principales, pasteles y ensaladas.",
    image: "pensamiento-grande-flores.jpg",
    tags: ["decorativa", "vegetal", "llamativa"],
  },
  {
    id: 13,
    name: "Flor de Sauco",
    categoryId: "flores",
    description: "Notas florales y dulces con un toque cítrico. Excelente para jarabes, infusiones y cócteles.",
    image: "flor-de-sauco.jpg",
    tags: ["cítrico", "dulce", "cócteles"],
  },
  {
    id: 14,
    name: "Flor de Bugambilia",
    categoryId: "flores",
    description: "Pétalos vibrantes con un toque terroso y herbal. Tradicional en infusiones y decoraciones.",
    image: "bugambilia-flores.jpg",
    tags: ["terrosa", "herbal", "tradicional"],
  },
  {
    id: 15,
    name: "Flores Aretillos",
    categoryId: "flores",
    description: "Flores llamativas con notas florales y un ligero dulzor. Ideales para platos gourmet.",
    image: "flores-aretillos.jpg",
    tags: ["dulce", "gourmet", "llamativa"],
  },
  {
    id: 16,
    name: "Flor capuchina",
    categoryId: "flores",
    description:
      "Pétalos de colores vivos con un sabor picante similar al rábano. Ideales para ensaladas y platos frescos.",
    image: "flor-capuchina-naranja.jpg",
    tags: ["picante", "rábano", "ensaladas"],
  },
  {
    id: 17,
    name: "Rosas miniatura",
    categoryId: "flores",
    description:
      "Elegantes y aromáticas, con un delicado sabor floral. Usadas en repostería, infusiones y platos gourmet.",
    image: "rosas-miniatura-colores.jpg",
    tags: ["elegante", "aromática", "repostería"],
  },
  {
    id: 18,
    name: "Flor de Borraja",
    categoryId: "flores",
    description: "Azules y delicadas, con un ligero sabor a pepino. Perfectas para ensaladas y bebidas refrescantes.",
    image: "flor-de-borraja-azul.jpg",
    tags: ["pepino", "refrescante", "azul"],
  },
  {
    id: 19,
    name: "Pétalos de rosa",
    categoryId: "flores",
    description:
      "Suaves y perfumados, con un sutil dulzor floral que los hace ideales para infusiones, mermeladas, postres y decoraciones elegantes.",
    image: "petalos-de-rosa.jpg",
    tags: ["perfumado", "dulce", "mermeladas"],
  },
  {
    id: 20,
    name: "Violas moradas",
    categoryId: "flores",
    description:
      "Con un sabor delicado y matices florales, estas flores son ideales para embellecer cualquier platillo sin sobrecargar su sabor.",
    image: "violas-moradas.jpg",
    tags: ["delicada", "decorativa", "suave"],
  },
  {
    id: 21,
    name: "Crisantemos",
    categoryId: "flores",
    description:
      "De pétalos llamativos y un sabor ligeramente amargo con toques especiados, los crisantemos se utilizan en infusiones, ensaladas y guisos asiáticos.",
    image: "crisantemos-comestibles.jpg",
    tags: ["amargo", "especiado", "asiático"],
  },
  {
    id: 22,
    name: "Violas amarillas",
    categoryId: "flores",
    description:
      "Pequeñas y vistosas, con un sabor suave y ligeramente terroso. Aportan un toque alegre a ensaladas, bebidas y postres.",
    image: "violas-amarillas.jpg",
    tags: ["terrosa", "suave", "alegre"],
  },

  // BROTES
  {
    id: 23,
    name: "Brote de cilantro",
    categoryId: "brotes",
    description: "Sabor fresco y más intenso que las hojas maduras. Ideal para guacamole, tacos y ensaladas.",
    image: "brote-de-cilantro-microgreens.jpg",
    tags: ["fresco", "intenso", "mexicano"],
  },
  {
    id: 24,
    name: "Brote de chícharo",
    categoryId: "brotes",
    description:
      "Dulce y crujiente, con un toque fresco similar al de los guisantes tiernos. Excelente para ensaladas y woks.",
    image: "brote-de-chicharo-pea-shoots.jpg",
    tags: ["dulce", "crujiente", "asiático"],
  },
  {
    id: 25,
    name: "Brote de rábano",
    categoryId: "brotes",
    description:
      "Picante y vibrante, con un ligero toque especiado. Perfecto para darle intensidad a sándwiches y tacos.",
    image: "brote-de-rabano-microgreens.jpg",
    tags: ["picante", "especiado", "intenso"],
  },
  {
    id: 26,
    name: "Brote de amaranto",
    categoryId: "brotes",
    description:
      "Hojas pequeñas con un sabor terroso y un alto contenido de nutrientes. Ideales para ensaladas y platillos saludables.",
    image: "brote-de-amaranto-microgreens.jpg",
    tags: ["terroso", "nutritivo", "saludable"],
  },
  {
    id: 27,
    name: "Brote de arugula",
    categoryId: "brotes",
    description: "Intenso y picante, con un toque a nuez. Aporta carácter a ensaladas y pizzas.",
    image: "brote-de-arugula-microgreens.jpg",
    tags: ["picante", "nuez", "intenso"],
  },
  {
    id: 28,
    name: "Brote de betabel",
    categoryId: "brotes",
    description:
      "Hojas pequeñas con un sutil dulzor terroso y vibrante color rojo. Aporta color y sabor a ensaladas y bowls.",
    image: "brote-de-betabel-rojo-microgreens.jpg",
    tags: ["dulce", "terroso", "colorido"],
  },

  // HORTALIZAS
  {
    id: 29,
    name: "Arúgula",
    categoryId: "hortalizas",
    description:
      "Hojas de sabor intenso y ligeramente picante, con un toque a nuez. Perfecta para ensaladas, pizzas y acompañamientos frescos.",
    image: "placeholder.svg",
    tags: ["picante", "nuez", "ensaladas"],
  },
  {
    id: 30,
    name: "Albahaca Italiana",
    categoryId: "hortalizas",
    description:
      "Aromática y fresca, con notas dulces y especiadas. Esencial en la cocina mediterránea, perfecta para pestos, ensaladas y salsas.",
    image: "placeholder.svg",
    tags: ["aromática", "dulce", "mediterránea"],
  },
]
