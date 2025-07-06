// Shopping cart functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
});

// Load cart items and display them
function loadCartItems() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartElement = document.getElementById('emptyCart');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCartElement) {
            emptyCartElement.style.display = 'block';
        }
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    if (emptyCartElement) {
        emptyCartElement.style.display = 'none';
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItemsContainer.appendChild(cartItem);
    });
    
    updateCartSummary();
}

// Create cart item HTML
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p class="cart-item-details">
                ${item.color ? `Color: ${item.color}` : ''}
                ${item.size ? `Size: ${item.size}` : ''}
            </p>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button type="button" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <input type="number" value="${item.quantity}" min="1" max="10" 
                           onchange="setCartItemQuantity(${item.id}, this.value)">
                    <button type="button" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
        <div class="cart-item-actions">
            <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `;
    
    return cartItem;
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity <= 10) {
        item.quantity = newQuantity;
        saveCart(cart);
        loadCartItems();
        
        // Track event
        trackEvent('update_cart_quantity', {
            product_id: productId,
            quantity: newQuantity
        });
    }
}

// Set cart item quantity directly
function setCartItemQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    const newQuantity = parseInt(quantity);
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity <= 10) {
        item.quantity = newQuantity;
        saveCart(cart);
        loadCartItems();
        
        // Track event
        trackEvent('set_cart_quantity', {
            product_id: productId,
            quantity: newQuantity
        });
    }
}

// Remove item from cart
function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    
    saveCart(updatedCart);
    loadCartItems();
    
    showToast('Item removed from cart', 'info');
    
    // Track event
    trackEvent('remove_from_cart', {
        product_id: productId
    });
}

// Clear entire cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        saveCart([]);
        loadCartItems();
        showToast('Cart cleared', 'info');
        
        // Track event
        trackEvent('clear_cart');
    }
}

// Update cart summary
function updateCartSummary() {
    const cart = getCart();
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (!subtotalElement || !shippingElement || !taxElement || !totalElement) return;
    
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Calculate shipping (free shipping over $100)
    const shipping = subtotal > 100 ? 0 : 9.99;
    
    // Calculate tax (8% tax rate)
    const tax = subtotal * 0.08;
    
    // Calculate total
    const total = subtotal + shipping + tax;
    
    // Update display
    subtotalElement.textContent = formatPrice(subtotal);
    shippingElement.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
    taxElement.textContent = formatPrice(tax);
    totalElement.textContent = formatPrice(total);
}

// Proceed to checkout
function checkout() {
    const cart = getCart();
    
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    // Calculate total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Simulate checkout process
    const checkoutData = {
        items: cart,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        timestamp: new Date().toISOString()
    };
    
    // In a real application, this would send data to a payment processor
    showToast('Redirecting to checkout...', 'info');
    
    // Track event
    trackEvent('initiate_checkout', {
        value: total,
        currency: 'USD',
        items: cart.map(item => ({
            product_id: item.id,
            product_name: item.name,
            quantity: item.quantity,
            price: item.price
        }))
    });
    
    // Simulate redirect delay
    setTimeout(() => {
        // In a real app, this would redirect to a payment page
        alert('This is a demo. In a real application, you would be redirected to a secure payment page.');
        
        // For demo purposes, we'll simulate a successful purchase
        simulateSuccessfulPurchase(checkoutData);
    }, 1500);
}

// Simulate successful purchase
function simulateSuccessfulPurchase(checkoutData) {
    // Clear cart
    saveCart([]);
    
    // Save order to localStorage (in a real app, this would be sent to a server)
    const orders = getOrders();
    const newOrder = {
        id: Date.now(),
        ...checkoutData,
        status: 'completed'
    };
    orders.push(newOrder);
    saveOrders(orders);
    
    // Show success message
    showToast('Order placed successfully!', 'success');
    
    // Track event
    trackEvent('purchase', {
        transaction_id: newOrder.id,
        value: checkoutData.total,
        currency: 'USD'
    });
    
    // Redirect to homepage
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Get orders from localStorage
function getOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

// Save orders to localStorage
function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Add multiple items to cart (for bulk operations)
function addMultipleToCart(items) {
    const cart = getCart();
    let itemsAdded = 0;
    
    items.forEach(({ productId, quantity = 1, color = '', size = '' }) => {
        const product = getProductById(productId);
        if (!product) return;
        
        const existingItem = cart.find(item => 
            item.id === productId && 
            item.color === color && 
            item.size === size
        );
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                color: color,
                size: size
            });
        }
        
        itemsAdded++;
    });
    
    saveCart(cart);
    
    if (itemsAdded > 0) {
        showToast(`${itemsAdded} item(s) added to cart!`, 'success');
    }
}

// Get cart item count
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Get cart total value
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Apply discount code
function applyDiscount(code) {
    const validCodes = {
        'SAVE10': 0.10,
        'WELCOME20': 0.20,
        'HOLIDAY15': 0.15
    };
    
    const discount = validCodes[code.toUpperCase()];
    
    if (discount) {
        const cart = getCart();
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountAmount = subtotal * discount;
        
        // Store discount info
        localStorage.setItem('appliedDiscount', JSON.stringify({
            code: code.toUpperCase(),
            percentage: discount,
            amount: discountAmount
        }));
        
        showToast(`Discount applied! You saved ${formatPrice(discountAmount)}`, 'success');
        updateCartSummary();
        
        // Track event
        trackEvent('apply_discount', {
            code: code.toUpperCase(),
            discount_amount: discountAmount
        });
        
        return true;
    } else {
        showToast('Invalid discount code', 'error');
        return false;
    }
}

// Remove discount
function removeDiscount() {
    localStorage.removeItem('appliedDiscount');
    showToast('Discount removed', 'info');
    updateCartSummary();
}

// Get applied discount
function getAppliedDiscount() {
    const discount = localStorage.getItem('appliedDiscount');
    return discount ? JSON.parse(discount) : null;
}

// Estimate shipping cost
function estimateShipping(zipCode) {
    // Simulate shipping cost calculation based on zip code
    const shippingRates = {
        'express': 19.99,
        'standard': 9.99,
        'economy': 4.99
    };
    
    // In a real app, this would call a shipping API
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (subtotal > 100) {
        return {
            express: shippingRates.express,
            standard: 0, // Free standard shipping
            economy: 0   // Free economy shipping
        };
    }
    
    return shippingRates;
}

// Save cart for later (wishlist functionality)
function saveForLater(productId) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    const wishlist = getWishlist();
    
    // Add to wishlist if not already there
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        saveWishlist(wishlist);
    }
    
    // Remove from cart
    cart.splice(itemIndex, 1);
    saveCart(cart);
    
    showToast('Item saved for later', 'info');
    loadCartItems();
}

// Move item from wishlist to cart
function moveToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    // Add to cart
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            color: '',
            size: ''
        });
    }
    
    saveCart(cart);
    
    // Remove from wishlist
    const wishlist = getWishlist();
    const wishlistIndex = wishlist.indexOf(productId);
    if (wishlistIndex > -1) {
        wishlist.splice(wishlistIndex, 1);
        saveWishlist(wishlist);
    }
    
    showToast('Item moved to cart', 'success');
    updateCartCount();
}

// Export functions for global use
window.CartModule = {
    loadCartItems,
    updateCartItemQuantity,
    setCartItemQuantity,
    removeFromCart,
    clearCart,
    checkout,
    addMultipleToCart,
    getCartItemCount,
    getCartTotal,
    applyDiscount,
    removeDiscount,
    getAppliedDiscount,
    estimateShipping,
    saveForLater,
    moveToCart
};