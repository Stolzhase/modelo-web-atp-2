export interface Product {
  id: number
  slug: string
  name: string
  category: string // 'flores', 'brotes', 'hortalizas'
  description: string
  image: string
  price?: number
}

export const products: Product[] = [
  // FLORES COMESTIBLES
  {
    id: 1,
    slug: "margarita-mini",
    name: "Margarita mini",
    category: "flores",
    description:
      "Delicadas y vibrantes, estas pequeñas flores tienen un sutil sabor herbáceo con notas ligeramente dulces. Son ideales para decorar postres, cócteles y ensaladas frescas.",
    image: "/margarita-mini-flores-comestibles.jpg",
    price: 120,
  },
  {
    id: 2,
    slug: "begonia-dragon",
    name: "Begonia dragón",
    category: "flores",
    description:
      "Sus pétalos carnosos tienen un sabor cítrico y refrescante con un toque ácido, similar al ruibarbo. Perfectas para ensaladas, platillos frutales o simplemente como un acento decorativo.",
    image: "/begonia-dragon-flores-comestibles.jpg",
    price: 135,
  },
  {
    id: 3,
    slug: "flor-de-miel-morada",
    name: "Flor de miel morada",
    category: "flores",
    description:
      "Pequeñas flores con un aroma embriagador y un sabor dulce con matices herbáceos. Ideales para infusionar en jarabes, postres y decorar platillos sofisticados.",
    image: "/flor-de-miel-morada.jpg",
    price: 150,
  },
  {
    id: 4,
    slug: "flor-de-miel-blanca",
    name: "Flor de miel blanca",
    category: "flores",
    description:
      "Similar a su versión morada, pero con un perfil más delicado y floral. Se usa para aromatizar bebidas, decorar postres y dar un toque sutil a ensaladas.",
    image: "/flor-de-miel-blanca.jpg",
    price: 150,
  },
  {
    id: 5,
    slug: "calendula",
    name: "Caléndula",
    category: "flores",
    description:
      "Sus pétalos aportan un color vibrante y un sabor ligeramente picante y cítrico. Se utilizan en ensaladas, arroces y sopas para aportar un toque de color y frescura.",
    image: "/calendula-flores-comestibles.jpg",
    price: 110,
  },
  {
    id: 6,
    slug: "clavelina",
    name: "Clavelina",
    category: "flores",
    description: "Pétalos coloridos con un toque especiado y sutilmente dulce. Ideales para repostería y bebidas.",
    image: "/clavelina-flores-comestibles.jpg",
    price: 125,
  },
  {
    id: 7,
    slug: "pensamiento-chico",
    name: "Pensamiento chico",
    category: "flores",
    description:
      "Pequeñas flores comestibles de colores vivos y sabor suave, ideales para decorar ensaladas, postres y cócteles, aportando un toque de elegancia y color.",
    image: "/pensamiento-flores-comestibles.jpg",
    price: 130,
  },
  {
    id: 8,
    slug: "begonia-imperial",
    name: "Begonia imperial",
    category: "flores",
    description:
      "Llamativa y exótica, con pétalos de textura jugosa y un sabor ácido con matices afrutados. Perfecta para equilibrar ensaladas, decorar platillos gourmet o añadir un giro cítrico a los postres.",
    image: "/begonia-imperial-flores.jpg",
    price: 140,
  },
  {
    id: 9,
    slug: "lavanda",
    name: "Lavanda",
    category: "flores",
    description:
      "Aromática y delicada, con notas florales y herbales. Perfecta para infusiones, repostería y platillos sofisticados.",
    image: "/lavanda-flores-comestibles.jpg",
    price: 160,
  },
  {
    id: 10,
    slug: "flor-de-cilantro",
    name: "Flor de Cilantro",
    category: "flores",
    description: "Sabor suave y fresco con un ligero toque a cilantro. Ideal para decorar sopas, ceviches y ensaladas.",
    image: "/flor-de-cilantro.jpg",
    price: 95,
  },
  {
    id: 11,
    slug: "flor-de-hinojo",
    name: "Flor de Hinojo",
    category: "flores",
    description: "Aromática y ligeramente anisada, perfecta para pescados, carnes y postres.",
    image: "/flor-de-hinojo.jpg",
    price: 105,
  },
  {
    id: 12,
    slug: "pensamiento-grande",
    name: "Pensamiento grande",
    category: "flores",
    description:
      "Flores más grandes con colores intensos y patrones llamativos. Su sabor es suave y ligeramente vegetal, adecuado para adornar platos principales, pasteles y ensaladas.",
    image: "/pensamiento-grande-flores.jpg",
    price: 145,
  },
  {
    id: 13,
    slug: "flor-de-sauco",
    name: "Flor de Sauco",
    category: "flores",
    description: "Notas florales y dulces con un toque cítrico. Excelente para jarabes, infusiones y cócteles.",
    image: "/flor-de-sauco.jpg",
    price: 155,
  },
  {
    id: 14,
    slug: "flor-de-bugambilia",
    name: "Flor de Bugambilia",
    category: "flores",
    description: "Pétalos vibrantes con un toque terroso y herbal. Tradicional en infusiones y decoraciones.",
    image: "/bugambilia-flores.jpg",
    price: 90,
  },
  {
    id: 15,
    slug: "flores-aretillos",
    name: "Flores Aretillos",
    category: "flores",
    description: "Flores llamativas con notas florales y un ligero dulzor. Ideales para platos gourmet.",
    image: "/flores-aretillos.jpg",
    price: 135,
  },
  {
    id: 16,
    slug: "flor-capuchina",
    name: "Flor capuchina/de mastuerzo",
    category: "flores",
    description:
      "Pétalos de colores vivos con un sabor picante similar al rábano. Ideales para ensaladas y platos frescos.",
    image: "/flor-capuchina-naranja.jpg",
    price: 115,
  },
  {
    id: 17,
    slug: "rosas-miniatura",
    name: "Rosas miniatura de colores",
    category: "flores",
    description:
      "Elegantes y aromáticas, con un delicado sabor floral. Usadas en repostería, infusiones y platos gourmet.",
    image: "/rosas-miniatura-colores.jpg",
    price: 170,
  },
  {
    id: 18,
    slug: "flor-de-borraja",
    name: "Flor de Borraja",
    category: "flores",
    description: "Azules y delicadas, con un ligero sabor a pepino. Perfectas para ensaladas y bebidas refrescantes.",
    image: "/flor-de-borraja-azul.jpg",
    price: 125,
  },
  {
    id: 19,
    slug: "petalos-de-rosa",
    name: "Pétalos de rosa",
    category: "flores",
    description:
      "Suaves y perfumados, con un sutil dulzor floral que los hace ideales para infusiones, mermeladas, postres y decoraciones elegantes.",
    image: "/petalos-de-rosa.jpg",
    price: 80,
  },
  {
    id: 20,
    slug: "violas-moradas",
    name: "Violas moradas",
    category: "flores",
    description:
      "Con un sabor delicado y matices florales, estas flores son ideales para embellecer cualquier platillo sin sobrecargar su sabor.",
    image: "/violas-moradas.jpg",
    price: 130,
  },
  {
    id: 21,
    slug: "crisantemos",
    name: "Crisantemos",
    category: "flores",
    description:
      "De pétalos llamativos y un sabor ligeramente amargo con toques especiados, los crisantemos se utilizan en infusiones, ensaladas y guisos asiáticos para aportar profundidad y aroma.",
    image: "/crisantemos-comestibles.jpg",
    price: 110,
  },
  {
    id: 22,
    slug: "violas-amarillas",
    name: "Violas amarillas",
    category: "flores",
    description:
      "Pequeñas y vistosas, con un sabor suave y ligeramente terroso. Aportan un toque alegre a ensaladas, bebidas y postres.",
    image: "/violas-amarillas.jpg",
    price: 130,
  },

  // BROTES
  {
    id: 23,
    slug: "brote-de-cilantro",
    name: "Brote de cilantro",
    category: "brotes",
    description: "Sabor fresco y más intenso que las hojas maduras. Ideal para guacamole, tacos y ensaladas.",
    image: "/brote-de-cilantro-microgreens.jpg",
    price: 85,
  },
  {
    id: 24,
    slug: "brote-de-chicharo",
    name: "Brote de chícharo",
    category: "brotes",
    description:
      "Dulce y crujiente, con un toque fresco similar al de los guisantes tiernos. Excelente para ensaladas y woks.",
    image: "/brote-de-chicharo-pea-shoots.jpg",
    price: 90,
  },
  {
    id: 25,
    slug: "brote-de-rabano",
    name: "Brote de rábano",
    category: "brotes",
    description:
      "Picante y vibrante, con un ligero toque especiado. Perfecto para darle intensidad a sándwiches y tacos.",
    image: "/brote-de-rabano-microgreens.jpg",
    price: 85,
  },
  {
    id: 26,
    slug: "brote-de-amaranto",
    name: "Brote de amaranto",
    category: "brotes",
    description:
      "Hojas pequeñas con un sabor terroso y un alto contenido de nutrientes. Ideales para ensaladas y platillos saludables.",
    image: "/brote-de-amaranto-microgreens.jpg",
    price: 95,
  },
  {
    id: 27,
    slug: "brote-de-arugula",
    name: "Brote de arugula",
    category: "brotes",
    description: "Intenso y picante, con un toque a nuez. Aporta carácter a ensaladas y pizzas.",
    image: "/brote-de-arugula-microgreens.jpg",
    price: 90,
  },
  {
    id: 28,
    slug: "brote-de-betabel",
    name: "Brote de betabel",
    category: "brotes",
    description:
      "Hojas pequeñas con un sutil dulzor terroso y vibrante color rojo. Aporta color y sabor a ensaladas y bowls.",
    image: "/brote-de-betabel-rojo-microgreens.jpg",
    price: 100,
  },
  {
    id: 29,
    slug: "brote-de-maiz",
    name: "Brote de maíz",
    category: "brotes",
    description: "Dulce y jugoso, con un toque crujiente. Perfecto para ensaladas y guarniciones frescas.",
    image: "/brote-de-maiz-microgreens.jpg",
    price: 110,
  },
  {
    id: 30,
    slug: "brote-de-perejil",
    name: "Brote de perejil",
    category: "brotes",
    description: "Sabor intenso y fresco. Aporta un toque herbal a cualquier platillo.",
    image: "/brote-de-perejil-microgreens.jpg",
    price: 85,
  },
  {
    id: 31,
    slug: "brote-de-albahaca",
    name: "Brote de albahaca",
    category: "brotes",
    description: "Aromático y con notas frescas. Perfecto para pizzas, pastas y ensaladas.",
    image: "/placeholder.svg?height=400&width=400",
    price: 95,
  },
  {
    id: 32,
    slug: "brote-de-melon",
    name: "Brote de melón",
    category: "brotes",
    description: "Dulce y refrescante, con un aroma frutal ligero. Excelente en ensaladas y decoraciones.",
    image: "/placeholder.svg?height=400&width=400",
    price: 105,
  },
  {
    id: 33,
    slug: "brote-de-menta",
    name: "Brote de menta",
    category: "brotes",
    description: "Fresco y vibrante, con notas refrescantes. Ideal para bebidas, postres y ensaladas.",
    image: "/placeholder.svg?height=400&width=400",
    price: 90,
  },
  {
    id: 34,
    slug: "brote-de-zanahoria",
    name: "Brote de zanahoria",
    category: "brotes",
    description: "Sabor herbáceo con un ligero dulzor. Ideal para sopas, ensaladas y platos decorativos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 95,
  },
  {
    id: 35,
    slug: "brote-de-mostaza",
    name: "Brote de mostaza",
    category: "brotes",
    description:
      "Hojas pequeñas con un sabor picante y ligeramente amargo, que recuerdan a la mostaza en su versión más fresca. Ideales para ensaladas, sándwiches y platos asiáticos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 85,
  },
  {
    id: 36,
    slug: "brote-de-col-morada",
    name: "Brote de col morada",
    category: "brotes",
    description:
      "Pequeñas hojas de un vibrante tono púrpura, con un sabor suave y ligeramente dulce. Perfecto para ensaladas coloridas y presentaciones elegantes.",
    image: "/placeholder.svg?height=400&width=400",
    price: 90,
  },
  {
    id: 37,
    slug: "perifollo",
    name: "Perifollo",
    category: "brotes",
    description:
      "Hierba de notas frescas y anisadas, similar al perejil pero con un aroma más delicado. Se usa en cocina francesa para realzar sabores sin opacarlos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 115,
  },
  {
    id: 38,
    slug: "brote-de-epazote",
    name: "Brote de epazote",
    category: "brotes",
    description:
      "Versión joven del epazote, con un sabor herbal e intenso, ideal para aportar un toque tradicional a guisos, salsas y platillos mexicanos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 85,
  },
  {
    id: 39,
    slug: "brote-de-menta-china",
    name: "Brote de menta china",
    category: "brotes",
    description:
      "Hojas tiernas con un aroma refrescante y un sabor ligeramente más especiado que la menta tradicional. Excelente para infusiones, postres y cocina asiática.",
    image: "/placeholder.svg?height=400&width=400",
    price: 95,
  },
  {
    id: 40,
    slug: "brote-de-apio",
    name: "Brote de apio",
    category: "brotes",
    description:
      "Brote del apio con un sabor más suave y notas herbáceas. Aporta frescura a ensaladas, sopas y guarniciones.",
    image: "/placeholder.svg?height=400&width=400",
    price: 85,
  },

  // HORTALIZAS Y HOJAS VERDES
  {
    id: 41,
    slug: "arugula",
    name: "Arúgula",
    category: "hortalizas",
    description:
      "Hojas de sabor intenso y ligeramente picante, con un toque a nuez. Perfecta para ensaladas, pizzas y acompañamientos frescos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 70,
  },
  {
    id: 42,
    slug: "albahaca-italiana",
    name: "Albahaca Italiana",
    category: "hortalizas",
    description:
      "Aromática y fresca, con notas dulces y especiadas. Esencial en la cocina mediterránea, perfecta para pestos, ensaladas y salsas.",
    image: "/placeholder.svg?height=400&width=400",
    price: 65,
  },
  {
    id: 43,
    slug: "albahaca-morada",
    name: "Albahaca morada",
    category: "hortalizas",
    description:
      "Variedad vibrante con hojas de color púrpura y un sabor más especiado que la albahaca tradicional. Ideal para platos asiáticos y decoraciones sofisticadas.",
    image: "/placeholder.svg?height=400&width=400",
    price: 75,
  },
  {
    id: 44,
    slug: "kale",
    name: "Berza/Kale",
    category: "hortalizas",
    description:
      "Hojas rizadas y robustas, ricas en nutrientes y con un sabor ligeramente terroso. Excelente para smoothies, ensaladas o salteados.",
    image: "/placeholder.svg?height=400&width=400",
    price: 60,
  },
  {
    id: 45,
    slug: "espinaca-baby",
    name: "Espinaca baby",
    category: "hortalizas",
    description:
      "Hojas pequeñas, tiernas y dulces, con un alto contenido de hierro y antioxidantes. Perfectas para ensaladas, batidos y platillos saludables.",
    image: "/placeholder.svg?height=400&width=400",
    price: 55,
  },
  {
    id: 46,
    slug: "arugula-baby",
    name: "Arúgula baby",
    category: "hortalizas",
    description:
      "Versión más tierna y suave de la arúgula tradicional, con un sabor delicado pero aún con ese toque especiado. Ideal para ensaladas y platos gourmet.",
    image: "/placeholder.svg?height=400&width=400",
    price: 75,
  },
  {
    id: 47,
    slug: "lechuga-italiana",
    name: "Lechuga italiana",
    category: "hortalizas",
    description:
      "Conocida como lechuga romana, presenta hojas alargadas de color verde intenso y textura crujiente. Su sabor es suave y ligeramente dulce.",
    image: "/placeholder.svg?height=400&width=400",
    price: 45,
  },
  {
    id: 48,
    slug: "bok-choi",
    name: "Bok Choi",
    category: "hortalizas",
    description:
      "Col china de hojas verdes y tallos blancos jugosos, con un sabor suave y ligeramente dulce. Perfecto para salteados, sopas y platos asiáticos.",
    image: "/placeholder.svg?height=400&width=400",
    price: 60,
  },
  {
    id: 49,
    slug: "pak-choi",
    name: "Pak Choi",
    category: "hortalizas",
    description:
      "Variedad pequeña del bok choi, con tallos verdes, con un sabor más tierno y textura crujiente. Ideal para guarniciones, woks y platos al vapor.",
    image: "/placeholder.svg?height=400&width=400",
    price: 65,
  },
  {
    id: 50,
    slug: "mizuna-verde",
    name: "Mizuna verde",
    category: "hortalizas",
    description:
      "Hoja verde de origen japonés con sabor suave y un toque de pimienta. Sus hojas dentadas y delicadas son perfectas para ensaladas, aportando una textura ligera y un sabor distintivo.",
    image: "/placeholder.svg?height=400&width=400",
    price: 70,
  },
]
