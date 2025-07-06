// Product data and management
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.5,
        reviews: 128,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
        features: ["Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Premium materials"],
        colors: ["Black", "White", "Silver"],
        sizes: [],
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "electronics",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.3,
        reviews: 89,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration. Track your health and fitness goals.",
        features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day battery"],
        colors: ["Black", "Blue", "Red"],
        sizes: ["Small", "Medium", "Large"],
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "Minimalist Desk Lamp",
        category: "home",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.7,
        reviews: 156,
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Sleek and modern desk lamp with adjustable brightness and color temperature. Perfect for any workspace or study area.",
        features: ["LED Technology", "Adjustable Brightness", "Color Temperature Control", "Touch Control"],
        colors: ["Black", "White", "Gold"],
        sizes: [],
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Organic Cotton T-Shirt",
        category: "fashion",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.4,
        reviews: 203,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Comfortable and sustainable organic cotton t-shirt. Soft fabric with a classic fit that's perfect for everyday wear.",
        features: ["100% Organic Cotton", "Pre-shrunk", "Comfortable Fit", "Sustainable"],
        colors: ["White", "Black", "Gray", "Navy"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true,
        featured: true
    },
    {
        id: 5,
        name: "Professional Camera Lens",
        category: "electronics",
        price: 799.99,
        originalPrice: 999.99,
        rating: 4.8,
        reviews: 67,
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-quality professional camera lens with exceptional clarity and precision. Perfect for photography enthusiasts and professionals.",
        features: ["Multi-coated glass", "Weather sealed", "Silent autofocus", "Image stabilization"],
        colors: ["Black"],
        sizes: [],
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: "Yoga Mat Premium",
        category: "sports",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.6,
        reviews: 189,
        image: "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Premium yoga mat with excellent grip and cushioning. Made from eco-friendly materials for your yoga and fitness practice.",
        features: ["Non-slip surface", "Eco-friendly", "Extra cushioning", "Portable"],
        colors: ["Purple", "Blue", "Green", "Pink"],
        sizes: ["Standard", "Extra Long"],
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: "Leather Messenger Bag",
        category: "fashion",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.5,
        reviews: 94,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Handcrafted leather messenger bag with vintage styling. Perfect for work, travel, or everyday use with multiple compartments.",
        features: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Vintage style"],
        colors: ["Brown", "Black", "Tan"],
        sizes: ["Medium", "Large"],
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: "Smart Home Hub",
        category: "electronics",
        price: 179.99,
        originalPrice: 229.99,
        rating: 4.2,
        reviews: 112,
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Central control hub for your smart home devices. Voice control, app integration, and seamless connectivity.",
        features: ["Voice control", "App integration", "Multiple device support", "Easy setup"],
        colors: ["White", "Black"],
        sizes: [],
        inStock: true,
        featured: false
    },
    {
        id: 9,
        name: "Ceramic Coffee Mug Set",
        category: "home",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        reviews: 78,
        image: "pic-2 mug.jpg",
        description: "Beautiful ceramic coffee mug set with modern design. Perfect for your morning coffee or tea. Dishwasher and microwave safe.",
        features: ["Ceramic material", "Dishwasher safe", "Microwave safe", "Modern design"],
        colors: ["White", "Blue", "Green"],
        sizes: [],
        inStock: true,
        featured: false
    },
    {
        id: 10,
        name: "Running Shoes",
        category: "sports",
        price: 129.99,
        originalPrice: 169.99,
        rating: 4.4,
        reviews: 234,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Comfortable running shoes with excellent support and cushioning. Perfect for daily runs, workouts, and casual wear.",
        features: ["Cushioned sole", "Breathable mesh", "Arch support", "Durable construction"],
        colors: ["Black", "White", "Blue", "Red"],
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: "Wireless Charging Pad",
        category: "electronics",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.1,
        reviews: 156,
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overheat protection.",
        features: ["Fast charging", "Qi compatible", "LED indicator", "Overheat protection"],
        colors: ["Black", "White"],
        sizes: [],
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: "Decorative Plant Pot",
        category: "home",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.6,
        reviews: 89,
        image: "https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Beautiful decorative plant pot with modern geometric design. Perfect for indoor plants and home decoration.",
        features: ["Ceramic material", "Drainage hole", "Modern design", "Various sizes"],
        colors: ["White", "Gray", "Terracotta"],
        sizes: ["Small", "Medium", "Large"],
        inStock: true,
        featured: false
    }
];

// Global variables
let currentPage = 1;
let productsPerPage = 12;
let filteredProducts = [...PRODUCTS_DATA];
let currentSort = 'default';
let currentCategory = '';
let currentPriceRange = 1000;

// Initialize products page
function initializeProductsPage() {
    if (window.location.pathname.includes('products.html')) {
        loadProducts();
        setupFilters();
    }
    
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFeaturedProducts();
    }
}

// Load all products with pagination
function loadProducts() {
    displayProducts(filteredProducts);
    setupPagination();
}

// Load featured products for homepage
function loadFeaturedProducts() {
    const featuredProducts = PRODUCTS_DATA.filter(product => product.featured);
    const featuredContainer = document.getElementById('featuredProducts');
    
    if (featuredContainer) {
        featuredContainer.innerHTML = '';
        
        featuredProducts.forEach(product => {
            const productCard = createProductCard(product);
            featuredContainer.appendChild(productCard);
        });
    }
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.originalPrice > product.price ? '<div class="product-badge">Sale</div>' : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.originalPrice > product.price ? 
                    `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" aria-label="Add to wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Add click event to navigate to product detail
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.product-actions')) {
            window.location.href = `product.html?id=${product.id}`;
        }
    });
    
    return card;
}

// Display products in grid
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Setup pagination
function setupPagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="changePage(${currentPage - 1})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            Previous
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button onclick="changePage(${i})" 
                        ${i === currentPage ? 'class="active"' : ''}>
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<span>...</span>';
        }
    }
    
    // Next button
    paginationHTML += `
        <button onclick="changePage(${currentPage + 1})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            Next
        </button>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayProducts(filteredProducts);
    setupPagination();
    
    // Scroll to top of products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Setup filters
function setupFilters() {
    const categoryFilter = document.getElementById('category');
    const sortFilter = document.getElementById('sort');
    const priceRange = document.getElementById('price-range');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', sortProducts);
    }
    
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            filterByPrice(this.value);
        });
    }
}

// Filter products by category
function filterProducts() {
    const categoryFilter = document.getElementById('category');
    currentCategory = categoryFilter ? categoryFilter.value : '';
    
    applyFilters();
}

// Filter products by price range
function filterByPrice(maxPrice) {
    currentPriceRange = parseInt(maxPrice);
    const priceDisplay = document.getElementById('price-display');
    
    if (priceDisplay) {
        priceDisplay.textContent = `$0 - $${currentPriceRange}`;
    }
    
    applyFilters();
}

// Apply all filters
function applyFilters() {
    filteredProducts = PRODUCTS_DATA.filter(product => {
        const matchesCategory = !currentCategory || product.category === currentCategory;
        const matchesPrice = product.price <= currentPriceRange;
        
        return matchesCategory && matchesPrice;
    });
    
    // Reset to first page when filters change
    currentPage = 1;
    
    // Apply current sort
    applySorting();
    
    displayProducts(filteredProducts);
    setupPagination();
}

// Sort products
function sortProducts() {
    const sortFilter = document.getElementById('sort');
    currentSort = sortFilter ? sortFilter.value : 'default';
    
    applySorting();
    displayProducts(filteredProducts);
    setupPagination();
}

// Apply sorting
function applySorting() {
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Default sort by featured first, then by ID
            filteredProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return a.id - b.id;
            });
    }
}

// Get product by ID
function getProductById(id) {
    return PRODUCTS_DATA.find(product => product.id === parseInt(id));
}

// Get all products
function getAllProducts() {
    return PRODUCTS_DATA;
}

// Load product details page
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        showToast('Product not found', 'error');
        window.location.href = 'products.html';
        return;
    }
    
    const product = getProductById(productId);
    
    if (!product) {
        showToast('Product not found', 'error');
        window.location.href = 'products.html';
        return;
    }
    
    displayProductDetails(product);
    loadRelatedProducts(product);
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('productBreadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Update page title
    document.title = `${product.name} - ModernShop`;
}

// Display product details
function displayProductDetails(product) {
    const productDetailGrid = document.getElementById('productDetailGrid');
    if (!productDetailGrid) return;
    
    productDetailGrid.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h1>${product.name}</h1>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.originalPrice > product.price ? 
                    `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <div class="product-description">
                <p>${product.description}</p>
            </div>
            ${product.features.length > 0 ? `
                <div class="product-features">
                    <h3>Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div class="product-options">
                ${product.colors.length > 0 ? `
                    <h3>Color:</h3>
                    <div class="color-options">
                        ${product.colors.map((color, index) => `
                            <div class="color-option ${index === 0 ? 'active' : ''}" 
                                 onclick="selectColor(this, '${color}')">${color}</div>
                        `).join('')}
                    </div>
                ` : ''}
                ${product.sizes.length > 0 ? `
                    <h3>Size:</h3>
                    <div class="size-options">
                        ${product.sizes.map((size, index) => `
                            <div class="size-option ${index === 0 ? 'active' : ''}" 
                                 onclick="selectSize(this, '${size}')">${size}</div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="quantity-selector">
                <label for="quantity">Quantity:</label>
                <div class="quantity-controls">
                    <button type="button" onclick="changeQuantity(-1)">-</button>
                    <input type="number" id="quantity" value="1" min="1" max="10">
                    <button type="button" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            <div class="product-detail-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">
                    Add to Wishlist
                </button>
            </div>
        </div>
    `;
}

// Load related products
function loadRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    if (!relatedProductsContainer) return;
    
    // Find products in the same category, excluding current product
    const relatedProducts = PRODUCTS_DATA
        .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
        .slice(0, 4);
    
    relatedProductsContainer.innerHTML = '';
    
    relatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        relatedProductsContainer.appendChild(productCard);
    });
}

// Select color option
function selectColor(element, color) {
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('active');
    });
    element.classList.add('active');
}

// Select size option
function selectSize(element, size) {
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('active');
    });
    element.classList.add('active');
}

// Change quantity
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) return;
    
    const currentValue = parseInt(quantityInput.value);
    const newValue = currentValue + change;
    
    if (newValue >= 1 && newValue <= 10) {
        quantityInput.value = newValue;
    }
}

// Add to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) {
        showToast('Product not found', 'error');
        return;
    }
    
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    // Get selected options
    const selectedColor = document.querySelector('.color-option.active')?.textContent || '';
    const selectedSize = document.querySelector('.size-option.active')?.textContent || '';
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            color: selectedColor,
            size: selectedSize
        });
    }
    
    saveCart(cart);
    showToast(`${product.name} added to cart!`, 'success');
    
    // Track event
    trackEvent('add_to_cart', {
        product_id: productId,
        product_name: product.name,
        quantity: quantity,
        price: product.price
    });
}

// Toggle wishlist
function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const isInWishlist = wishlist.includes(productId);
    
    if (isInWishlist) {
        const index = wishlist.indexOf(productId);
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist', 'success');
    }
    
    saveWishlist(wishlist);
    updateWishlistButtons();
}

// Get wishlist from localStorage
function getWishlist() {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist to localStorage
function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Update wishlist buttons
function updateWishlistButtons() {
    const wishlist = getWishlist();
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        const productId = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);
        const isInWishlist = wishlist.includes(productId);
        
        button.classList.toggle('active', isInWishlist);
    });
}

// Initialize products functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
    updateWishlistButtons();
});

// Export functions for global use
window.ProductsModule = {
    getAllProducts,
    getProductById,
    loadProductDetails,
    addToCart,
    toggleWishlist,
    filterProducts,
    sortProducts,
    filterByPrice,
    changePage,
    selectColor,
    selectSize,
    changeQuantity
};