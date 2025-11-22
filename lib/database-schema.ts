// Categorías principales
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  parentId?: string | null // Para permitir subcategorías en el futuro
  order: number
  folder?: string // Para organización en carpetas
}

// Subcategorías o carpetas de organización
export interface Folder {
  id: string
  name: string
  categoryId: string
  parentFolderId?: string | null // Para jerarquías de carpetas
  path: string // Ruta completa: "flores/rosas" o "brotes/hierbas"
  order: number
}

// Productos con referencias a categorías y carpetas
export interface Product {
  id: number
  name: string
  slug: string
  categoryId: string // Referencia a Category
  folderId?: string | null // Referencia opcional a Folder
  description: string
  image: string
  tags?: string[] // Para búsquedas y filtros adicionales
  available: boolean
  featured?: boolean
  createdAt?: string
  updatedAt?: string
}

// Datos relacionales
export const categories: Category[] = [
  {
    id: "flores",
    name: "Flores Comestibles",
    slug: "flores-comestibles",
    description: "Sabores que florecen. Un toque de color, aroma y sabor.",
    order: 1,
  },
  {
    id: "brotes",
    name: "Brotes",
    slug: "brotes",
    description: "Pequeños, pero llenos de vida. Frescura, nutrición y sabor en su máxima expresión.",
    order: 2,
  },
  {
    id: "hortalizas",
    name: "Hortalizas y Hojas Verdes",
    slug: "hortalizas-hojas-verdes",
    description: "La esencia del huerto. Hojas frescas y tiernas.",
    order: 3,
  },
]

// Ejemplo de carpetas/subcategorías para organización futura
export const folders: Folder[] = [
  {
    id: "flores-dulces",
    name: "Flores Dulces",
    categoryId: "flores",
    path: "flores/dulces",
    order: 1,
  },
  {
    id: "flores-citricas",
    name: "Flores Cítricas",
    categoryId: "flores",
    path: "flores/citricas",
    order: 2,
  },
  {
    id: "brotes-picantes",
    name: "Brotes Picantes",
    categoryId: "brotes",
    path: "brotes/picantes",
    order: 1,
  },
  {
    id: "brotes-dulces",
    name: "Brotes Dulces",
    categoryId: "brotes",
    path: "brotes/dulces",
    order: 2,
  },
  {
    id: "lechugas",
    name: "Lechugas",
    categoryId: "hortalizas",
    path: "hortalizas/lechugas",
    order: 1,
  },
  {
    id: "hierbas",
    name: "Hierbas Aromáticas",
    categoryId: "hortalizas",
    path: "hortalizas/hierbas",
    order: 2,
  },
]

export const products: Product[] = [
  // FLORES COMESTIBLES
  {
    id: 1,
    name: "Margarita mini",
    slug: "margarita-mini",
    categoryId: "flores",
    folderId: "flores-dulces",
    description:
      "Delicadas y vibrantes, estas pequeñas flores tienen un sutil sabor herbáceo con notas ligeramente dulces. Son ideales para decorar postres, cócteles y ensaladas frescas.",
    image: "/margarita-mini-flores-comestibles.jpg",
    tags: ["dulce", "decorativa", "postres"],
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Begonia dragón",
    slug: "begonia-dragon",
    categoryId: "flores",
    folderId: "flores-citricas",
    description:
      "Sus pétalos carnosos tienen un sabor cítrico y refrescante con un toque ácido, similar al ruibarbo. Perfectas para ensaladas, platillos frutales o simplemente como un acento decorativo.",
    image: "/begonia-dragon-flores-comestibles.jpg",
    tags: ["cítrico", "ácido", "ensaladas"],
    available: true,
  },
  {
    id: 3,
    name: "Flor de miel morada",
    slug: "flor-de-miel-morada",
    categoryId: "flores",
    folderId: "flores-dulces",
    description:
      "Pequeñas flores con un aroma embriagador y un sabor dulce con matices herbáceos. Ideales para infusionar en jarabes, postres y decorar platillos sofisticados.",
    image: "/flor-de-miel-morada.jpg",
    tags: ["dulce", "aromática", "jarabes"],
    available: true,
    featured: true,
  },
  {
    id: 4,
    name: "Flor de miel blanca",
    slug: "flor-de-miel-blanca",
    categoryId: "flores",
    folderId: "flores-dulces",
    description:
      "Similar a su versión morada, pero con un perfil más delicado y floral. Se usa para aromatizar bebidas, decorar postres y dar un toque sutil a ensaladas.",
    image: "/flor-de-miel-blanca.jpg",
    tags: ["dulce", "delicada", "bebidas"],
    available: true,
  },
  {
    id: 5,
    name: "Caléndula",
    slug: "calendula",
    categoryId: "flores",
    folderId: "flores-citricas",
    description:
      "Sus pétalos aportan un color vibrante y un sabor ligeramente picante y cítrico. Se utilizan en ensaladas, arroces y sopas para aportar un toque de color y frescura.",
    image: "/calendula-flores-comestibles.jpg",
    tags: ["picante", "cítrico", "colorida"],
    available: true,
  },
  {
    id: 6,
    name: "Clavelina",
    slug: "clavelina",
    categoryId: "flores",
    folderId: "flores-dulces",
    description: "Pétalos coloridos con un toque especiado y sutilmente dulce. Ideales para repostería y bebidas.",
    image: "/clavelina-flores-comestibles.jpg",
    tags: ["especiada", "dulce", "repostería"],
    available: true,
  },
  {
    id: 7,
    name: "Pensamiento chico",
    slug: "pensamiento-chico",
    categoryId: "flores",
    description:
      "Pequeñas flores comestibles de colores vivos y sabor suave, ideales para decorar ensaladas, postres y cócteles, aportando un toque de elegancia y color.",
    image: "/pensamiento-flores-comestibles.jpg",
    tags: ["decorativa", "suave", "elegante"],
    available: true,
  },
  {
    id: 8,
    name: "Begonia imperial",
    slug: "begonia-imperial",
    categoryId: "flores",
    folderId: "flores-citricas",
    description:
      "Llamativa y exótica, con pétalos de textura jugosa y un sabor ácido con matices afrutados. Perfecta para equilibrar ensaladas, decorar platillos gourmet o añadir un giro cítrico a los postres.",
    image: "/begonia-imperial-flores.jpg",
    tags: ["ácido", "afrutado", "gourmet"],
    available: true,
    featured: true,
  },
  {
    id: 9,
    name: "Lavanda",
    slug: "lavanda",
    categoryId: "flores",
    description:
      "Aromática y delicada, con notas florales y herbales. Perfecta para infusiones, repostería y platillos sofisticados.",
    image: "/lavanda-flores-comestibles.jpg",
    tags: ["aromática", "herbal", "infusiones"],
    available: true,
  },
  {
    id: 10,
    name: "Flor de Cilantro",
    slug: "flor-de-cilantro",
    categoryId: "flores",
    description: "Sabor suave y fresco con un ligero toque a cilantro. Ideal para decorar sopas, ceviches y ensaladas.",
    image: "/flor-de-cilantro.jpg",
    tags: ["fresca", "cilantro", "ceviches"],
    available: true,
  },
  {
    id: 11,
    name: "Flor de Hinojo",
    slug: "flor-de-hinojo",
    categoryId: "flores",
    description: "Aromática y ligeramente anisada, perfecta para pescados, carnes y postres.",
    image: "/flor-de-hinojo.jpg",
    tags: ["anisada", "aromática", "pescados"],
    available: true,
  },
  {
    id: 12,
    name: "Pensamiento grande",
    slug: "pensamiento-grande",
    categoryId: "flores",
    description:
      "Flores más grandes con colores intensos y patrones llamativos. Su sabor es suave y ligeramente vegetal, adecuado para adornar platos principales, pasteles y ensaladas.",
    image: "/pensamiento-grande-flores.jpg",
    tags: ["decorativa", "vegetal", "llamativa"],
    available: true,
  },
  {
    id: 13,
    name: "Flor de Sauco",
    slug: "flor-de-sauco",
    categoryId: "flores",
    folderId: "flores-citricas",
    description: "Notas florales y dulces con un toque cítrico. Excelente para jarabes, infusiones y cócteles.",
    image: "/flor-de-sauco.jpg",
    tags: ["cítrico", "dulce", "cócteles"],
    available: true,
  },
  {
    id: 14,
    name: "Flor de Bugambilia",
    slug: "flor-de-bugambilia",
    categoryId: "flores",
    description: "Pétalos vibrantes con un toque terroso y herbal. Tradicional en infusiones y decoraciones.",
    image: "/bugambilia-flores.jpg",
    tags: ["terrosa", "herbal", "tradicional"],
    available: true,
  },
  {
    id: 15,
    name: "Flores Aretillos",
    slug: "flores-aretillos",
    categoryId: "flores",
    description: "Flores llamativas con notas florales y un ligero dulzor. Ideales para platos gourmet.",
    image: "/flores-aretillos.jpg",
    tags: ["dulce", "gourmet", "llamativa"],
    available: true,
  },
  {
    id: 16,
    name: "Flor capuchina/de mastuerzo",
    slug: "flor-capuchina",
    categoryId: "flores",
    description:
      "Pétalos de colores vivos con un sabor picante similar al rábano. Ideales para ensaladas y platos frescos.",
    image: "/flor-capuchina-naranja.jpg",
    tags: ["picante", "rábano", "ensaladas"],
    available: true,
  },
  {
    id: 17,
    name: "Rosas miniatura de colores",
    slug: "rosas-miniatura",
    categoryId: "flores",
    folderId: "flores-dulces",
    description:
      "Elegantes y aromáticas, con un delicado sabor floral. Usadas en repostería, infusiones y platos gourmet.",
    image: "/rosas-miniatura-colores.jpg",
    tags: ["elegante", "aromática", "repostería"],
    available: true,
    featured: true,
  },
  {
    id: 18,
    name: "Flor de Borraja",
    slug: "flor-de-borraja",
    categoryId: "flores",
    description: "Azules y delicadas, con un ligero sabor a pepino. Perfectas para ensaladas y bebidas refrescantes.",
    image: "/flor-de-borraja-azul.jpg",
    tags: ["pepino", "refrescante", "azul"],
    available: true,
  },
  {
    id: 19,
    name: "Pétalos de rosa",
    slug: "petalos-de-rosa",
    categoryId: "flores",
    folderId: "flores-dulces",
    description:
      "Suaves y perfumados, con un sutil dulzor floral que los hace ideales para infusiones, mermeladas, postres y decoraciones elegantes.",
    image: "/petalos-de-rosa.jpg",
    tags: ["perfumado", "dulce", "mermeladas"],
    available: true,
  },
  {
    id: 20,
    name: "Violas moradas",
    slug: "violas-moradas",
    categoryId: "flores",
    description:
      "Con un sabor delicado y matices florales, estas flores son ideales para embellecer cualquier platillo sin sobrecargar su sabor.",
    image: "/violas-moradas.jpg",
    tags: ["delicada", "decorativa", "suave"],
    available: true,
  },
  {
    id: 21,
    name: "Crisantemos",
    slug: "crisantemos",
    categoryId: "flores",
    description:
      "De pétalos llamativos y un sabor ligeramente amargo con toques especiados, los crisantemos se utilizan en infusiones, ensaladas y guisos asiáticos para aportar profundidad y aroma.",
    image: "/crisantemos-comestibles.jpg",
    tags: ["amargo", "especiado", "asiático"],
    available: true,
  },
  {
    id: 22,
    name: "Violas amarillas",
    slug: "violas-amarillas",
    categoryId: "flores",
    description:
      "Pequeñas y vistosas, con un sabor suave y ligeramente terroso. Aportan un toque alegre a ensaladas, bebidas y postres.",
    image: "/violas-amarillas.jpg",
    tags: ["terrosa", "suave", "alegre"],
    available: true,
  },

  // BROTES
  {
    id: 23,
    name: "Brote de cilantro",
    slug: "brote-de-cilantro",
    categoryId: "brotes",
    folderId: "hierbas",
    description: "Sabor fresco y más intenso que las hojas maduras. Ideal para guacamole, tacos y ensaladas.",
    image: "/brote-de-cilantro-microgreens.jpg",
    tags: ["fresco", "intenso", "mexicano"],
    available: true,
    featured: true,
  },
  {
    id: 24,
    name: "Brote de chícharo",
    slug: "brote-de-chicharo",
    categoryId: "brotes",
    folderId: "brotes-dulces",
    description:
      "Dulce y crujiente, con un toque fresco similar al de los guisantes tiernos. Excelente para ensaladas y woks.",
    image: "/brote-de-chicharo-pea-shoots.jpg",
    tags: ["dulce", "crujiente", "asiático"],
    available: true,
  },
  {
    id: 25,
    name: "Brote de rábano",
    slug: "brote-de-rabano",
    categoryId: "brotes",
    folderId: "brotes-picantes",
    description:
      "Picante y vibrante, con un ligero toque especiado. Perfecto para darle intensidad a sándwiches y tacos.",
    image: "/brote-de-rabano-microgreens.jpg",
    tags: ["picante", "especiado", "intenso"],
    available: true,
    featured: true,
  },
  {
    id: 26,
    name: "Brote de amaranto",
    slug: "brote-de-amaranto",
    categoryId: "brotes",
    description:
      "Hojas pequeñas con un sabor terroso y un alto contenido de nutrientes. Ideales para ensaladas y platillos saludables.",
    image: "/brote-de-amaranto-microgreens.jpg",
    tags: ["terroso", "nutritivo", "saludable"],
    available: true,
  },
  {
    id: 27,
    name: "Brote de arugula",
    slug: "brote-de-arugula",
    categoryId: "brotes",
    folderId: "brotes-picantes",
    description: "Intenso y picante, con un toque a nuez. Aporta carácter a ensaladas y pizzas.",
    image: "/brote-de-arugula-microgreens.jpg",
    tags: ["picante", "nuez", "intenso"],
    available: true,
  },
  {
    id: 28,
    name: "Brote de betabel",
    slug: "brote-de-betabel",
    categoryId: "brotes",
    folderId: "brotes-dulces",
    description:
      "Hojas pequeñas con un sutil dulzor terroso y vibrante color rojo. Aporta color y sabor a ensaladas y bowls.",
    image: "/brote-de-betabel-rojo-microgreens.jpg",
    tags: ["dulce", "terroso", "colorido"],
    available: true,
  },
  {
    id: 29,
    name: "Brote de maíz",
    slug: "brote-de-maiz",
    categoryId: "brotes",
    folderId: "brotes-dulces",
    description: "Dulce y jugoso, con un toque crujiente. Perfecto para ensaladas y guarniciones frescas.",
    image: "/brote-de-maiz-microgreens.jpg",
    tags: ["dulce", "jugoso", "crujiente"],
    available: true,
  },
  {
    id: 30,
    name: "Brote de perejil",
    slug: "brote-de-perejil",
    categoryId: "brotes",
    folderId: "hierbas",
    description: "Sabor intenso y fresco. Aporta un toque herbal a cualquier platillo.",
    image: "/brote-de-perejil-microgreens.jpg",
    tags: ["fresco", "herbal", "intenso"],
    available: true,
  },
  {
    id: 31,
    name: "Brote de albahaca",
    slug: "brote-de-albahaca",
    categoryId: "brotes",
    folderId: "hierbas",
    description: "Aromático y con notas frescas. Perfecto para pizzas, pastas y ensaladas.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["aromático", "fresco", "italiano"],
    available: true,
  },
  {
    id: 32,
    name: "Brote de melón",
    slug: "brote-de-melon",
    categoryId: "brotes",
    folderId: "brotes-dulces",
    description: "Dulce y refrescante, con un aroma frutal ligero. Excelente en ensaladas y decoraciones.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["dulce", "frutal", "refrescante"],
    available: true,
  },
  {
    id: 33,
    name: "Brote de menta",
    slug: "brote-de-menta",
    categoryId: "brotes",
    folderId: "hierbas",
    description: "Fresco y vibrante, con notas refrescantes. Ideal para bebidas, postres y ensaladas.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["fresco", "refrescante", "bebidas"],
    available: true,
  },
  {
    id: 34,
    name: "Brote de zanahoria",
    slug: "brote-de-zanahoria",
    categoryId: "brotes",
    description: "Sabor herbáceo con un ligero dulzor. Ideal para sopas, ensaladas y platos decorativos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["herbáceo", "dulce", "decorativo"],
    available: true,
  },
  {
    id: 35,
    name: "Brote de mostaza",
    slug: "brote-de-mostaza",
    categoryId: "brotes",
    folderId: "brotes-picantes",
    description:
      "Hojas pequeñas con un sabor picante y ligeramente amargo, que recuerdan a la mostaza en su versión más fresca. Ideales para ensaladas, sándwiches y platos asiáticos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["picante", "amargo", "asiático"],
    available: true,
  },
  {
    id: 36,
    name: "Brote de col morada",
    slug: "brote-de-col-morada",
    categoryId: "brotes",
    description:
      "Pequeñas hojas de un vibrante tono púrpura, con un sabor suave y ligeramente dulce. Perfecto para ensaladas coloridas y presentaciones elegantes.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["dulce", "colorido", "elegante"],
    available: true,
  },
  {
    id: 37,
    name: "Perifollo",
    slug: "perifollo",
    categoryId: "brotes",
    folderId: "hierbas",
    description:
      "Hierba de notas frescas y anisadas, similar al perejil pero con un aroma más delicado. Se usa en cocina francesa para realzar sabores sin opacarlos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["anisado", "delicado", "francés"],
    available: true,
  },
  {
    id: 38,
    name: "Brote de epazote",
    slug: "brote-de-epazote",
    categoryId: "brotes",
    folderId: "hierbas",
    description:
      "Versión joven del epazote, con un sabor herbal e intenso, ideal para aportar un toque tradicional a guisos, salsas y platillos mexicanos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["herbal", "intenso", "mexicano"],
    available: true,
  },
  {
    id: 39,
    name: "Brote de menta china",
    slug: "brote-de-menta-china",
    categoryId: "brotes",
    folderId: "hierbas",
    description:
      "Hojas tiernas con un aroma refrescante y un sabor ligeramente más especiado que la menta tradicional. Excelente para infusiones, postres y cocina asiática.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["refrescante", "especiado", "asiático"],
    available: true,
  },
  {
    id: 40,
    name: "Brote de apio",
    slug: "brote-de-apio",
    categoryId: "brotes",
    description:
      "Brote del apio con un sabor más suave y notas herbáceas. Aporta frescura a ensaladas, sopas y guarniciones.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["suave", "herbáceo", "fresco"],
    available: true,
  },

  // HORTALIZAS Y HOJAS VERDES
  {
    id: 41,
    name: "Arúgula",
    slug: "arugula",
    categoryId: "hortalizas",
    description:
      "Hojas de sabor intenso y ligeramente picante, con un toque a nuez. Perfecta para ensaladas, pizzas y acompañamientos frescos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["picante", "nuez", "ensaladas"],
    available: true,
  },
  {
    id: 42,
    name: "Albahaca Italiana",
    slug: "albahaca-italiana",
    categoryId: "hortalizas",
    folderId: "hierbas",
    description:
      "Aromática y fresca, con notas dulces y especiadas. Esencial en la cocina mediterránea, perfecta para pestos, ensaladas y salsas.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["aromática", "dulce", "mediterránea"],
    available: true,
    featured: true,
  },
  {
    id: 43,
    name: "Albahaca morada",
    slug: "albahaca-morada",
    categoryId: "hortalizas",
    folderId: "hierbas",
    description:
      "Variedad vibrante con hojas de color púrpura y un sabor más especiado que la albahaca tradicional. Ideal para platos asiáticos y decoraciones sofisticadas.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["especiada", "colorida", "asiática"],
    available: true,
  },
  {
    id: 44,
    name: "Berza/Kale",
    slug: "kale",
    categoryId: "hortalizas",
    description:
      "Hojas rizadas y robustas, ricas en nutrientes y con un sabor ligeramente terroso. Excelente para smoothies, ensaladas o salteados.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["nutritivo", "terroso", "saludable"],
    available: true,
  },
  {
    id: 45,
    name: "Espinaca baby",
    slug: "espinaca-baby",
    categoryId: "hortalizas",
    description:
      "Hojas pequeñas, tiernas y dulces, con un alto contenido de hierro y antioxidantes. Perfectas para ensaladas, batidos y platillos saludables.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["tierna", "dulce", "nutritiva"],
    available: true,
  },
  {
    id: 46,
    name: "Arúgula baby",
    slug: "arugula-baby",
    categoryId: "hortalizas",
    description:
      "Versión más tierna y suave de la arúgula tradicional, con un sabor delicado pero aún con ese toque especiado. Ideal para ensaladas y platos gourmet.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["tierna", "delicada", "gourmet"],
    available: true,
  },
  {
    id: 47,
    name: "Lechuga italiana",
    slug: "lechuga-italiana",
    categoryId: "hortalizas",
    folderId: "lechugas",
    description:
      "Conocida como lechuga romana, presenta hojas alargadas de color verde intenso y textura crujiente. Su sabor es suave y ligeramente dulce.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["crujiente", "dulce", "romana"],
    available: true,
  },
  {
    id: 48,
    name: "Bok Choi",
    slug: "bok-choi",
    categoryId: "hortalizas",
    description:
      "Col china de hojas verdes y tallos blancos jugosos, con un sabor suave y ligeramente dulce. Perfecto para salteados, sopas y platos asiáticos.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["dulce", "jugoso", "asiático"],
    available: true,
  },
  {
    id: 49,
    name: "Pak Choi",
    slug: "pak-choi",
    categoryId: "hortalizas",
    description:
      "Variedad pequeña del bok choi, con tallos verdes, con un sabor más tierno y textura crujiente. Ideal para guarniciones, woks y platos al vapor.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["tierno", "crujiente", "asiático"],
    available: true,
  },
  {
    id: 50,
    name: "Mizuna verde",
    slug: "mizuna-verde",
    categoryId: "hortalizas",
    description:
      "Hoja verde de origen japonés con sabor suave y un toque de pimienta. Sus hojas dentadas y delicadas son perfectas para ensaladas, aportando una textura ligera y un sabor distintivo.",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["suave", "pimienta", "japonés"],
    available: true,
  },
]

// Funciones helper para consultas relacionales
export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((cat) => cat.id === categoryId)
}

export function getFolderById(folderId: string): Folder | undefined {
  return folders.find((folder) => folder.id === folderId)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryId === categoryId)
}

export function getProductsByFolder(folderId: string): Product[] {
  return products.filter((product) => product.folderId === folderId)
}

export function getFoldersByCategory(categoryId: string): Folder[] {
  return folders.filter((folder) => folder.categoryId === categoryId)
}

export function getProductWithRelations(productId: number) {
  const product = products.find((p) => p.id === productId)
  if (!product) return null

  return {
    ...product,
    category: getCategoryById(product.categoryId),
    folder: product.folderId ? getFolderById(product.folderId) : null,
  }
}
