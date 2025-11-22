let cart = []
let currentCategory = "all"
let currentView = "grid"
let searchQuery = ""
const products = [
  // Example products data
  {
    id: 1,
    name: "Product 1",
    categoryId: "1",
    description: "Description 1",
    tags: ["tag1", "tag2"],
    image: "image1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    categoryId: "2",
    description: "Description 2",
    tags: ["tag3", "tag4"],
    image: "image2.jpg",
  },
]
const categories = [
  // Example categories data
  { id: "1", name: "Category 1" },
  { id: "2", name: "Category 2" },
]

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  renderProducts()
  setupEventListeners()
  loadCartFromStorage()
}

// Event Listeners
function setupEventListeners() {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })

  // Search
  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase()
    renderProducts()
  })

  // Category filters
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentCategory = btn.dataset.category
      renderProducts()
    })
  })

  // View toggle
  const viewButtons = document.querySelectorAll(".view-btn")
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentView = btn.dataset.view
      updateView()
    })
  })

  // Cart
  const cartBtn = document.getElementById("cartBtn")
  const cartPanel = document.getElementById("cartPanel")
  const closeCart = document.getElementById("closeCart")
  const sendWhatsApp = document.getElementById("sendWhatsApp")

  cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("active")
  })

  closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("active")
  })

  sendWhatsApp.addEventListener("click", sendWhatsAppOrder)
}

// Render products
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid")
  const noResults = document.getElementById("noResults")

  let filteredProducts = products

  // Filter by category
  if (currentCategory !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.categoryId === currentCategory)
  }

  // Filter by search
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery)),
    )
  }

  if (filteredProducts.length === 0) {
    productsGrid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  productsGrid.style.display = "grid"
  noResults.style.display = "none"

  productsGrid.innerHTML = filteredProducts
    .map((product) => {
      const category = categories.find((c) => c.id === product.categoryId)
      return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='placeholder.svg'">
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${category.name}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="product-tags">
                        ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Agregar al pedido
                    </button>
                </div>
            </div>
        `
    })
    .join("")
}

// Update view
function updateView() {
  const productsGrid = document.getElementById("productsGrid")
  productsGrid.className = `products-grid ${currentView}-view`
}

// Cart functions
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.productId === productId)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({ productId, quantity: 1 })
  }

  updateCart()
  saveCartToStorage()

  // Open cart panel
  document.getElementById("cartPanel").classList.add("active")
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId)
  updateCart()
  saveCartToStorage()
}

function updateQuantity(productId, delta) {
  const item = cart.find((item) => item.productId === productId)
  if (!item) return

  item.quantity += delta

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    updateCart()
    saveCartToStorage()
  }
}

function updateCart() {
  const cartItems = document.getElementById("cartItems")
  const cartFooter = document.getElementById("cartFooter")
  const cartBadge = document.getElementById("cartBadge")
  const totalItems = document.getElementById("totalItems")

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Update badge
  if (totalCount > 0) {
    cartBadge.style.display = "flex"
    cartBadge.textContent = totalCount
  } else {
    cartBadge.style.display = "none"
  }

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Tu carrito está vacío</p>
                <p class="cart-empty-subtitle">Agrega productos para hacer tu pedido</p>
            </div>
        `
    cartFooter.style.display = "none"
  } else {
    cartItems.innerHTML = cart
      .map((item) => {
        const product = products.find((p) => p.id === item.productId)
        return `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image" onerror="this.src='placeholder.svg'">
                    <div class="cart-item-content">
                        <div class="cart-item-name">${product.name}</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${product.id})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `
      })
      .join("")
    cartFooter.style.display = "block"
    totalItems.textContent = totalCount
  }
}

function sendWhatsAppOrder() {
  if (cart.length === 0) return

  let message = "¡Hola! Me gustaría hacer un pedido:\n\n"

  cart.forEach((item, index) => {
    const product = products.find((p) => p.id === item.productId)
    message += `${index + 1}. ${product.name} - Cantidad: ${item.quantity}\n`
  })

  message += "\n¿Podrían confirmar disponibilidad y precio? ¡Gracias!"

  const phoneNumber = "5215680774434"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}

// Local storage
function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCart()
  }
}
