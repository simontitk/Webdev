export function createProductCard(product) {
    return (
        `<div class="product-card">
            <div class="rating-icon">
                <img src="../../assets/icons/droplet.png" alt="icon of a water droplet" width="50px">
            </div>
            <div class="rating-number">
                 ${product.rating}
            </div>
            <div class="product-display" id=${product.id}>
                <div class="product-img-container">
                    <img 
                        src="../../images/${product.picture}" 
                        alt="${product.description}"
                        height="260px"
                        class="product-image">
                </div>
                <div class="product-name-container">
                    <span class="product-name">${product.name}</span>
                    <span class="product-size">${product.quantity} x ${product.size} ml</span>
                </div>
            </div>
            <div class="product-purchase-container">
                <span class="product-price">${product.price} DKK</span>
                <button class="add-to-cart-button" id="${product.id}">
                    Add to cart
                </button>
            </div>
        </div>`
    );
}

export function attachProductPages() {
    document.querySelectorAll(".product-display").forEach(display => {
        display.onclick = () => {
            localStorage.setItem("productId", display.id);
            location.href = '../templates/single_product.html';
        }
    });
}