export function createProductCard(product) {
    return (
        `<div class="product-card">
            <div class="product-name-container">
                <div class="product-img-container">
                    <img 
                        src="../../images/${product.picture}" 
                        alt="${product.description}"
                        height="260px"
                        class="product-image">
                </div>
                <span class="product-name">${product.name}</span>
                <span class="product-size">${product.quantity} x ${product.size} ml</span>
            </div>
            <div class="product-purchase-container">
                <span class="product-price">${product.price} DKK</span>
                <button class="add-to-cart-button">
                    <img src="../../assets/icons/shopping-cart.png" width="50px" height="50px" alt="">
                </button>
            </div>
        </div>`
    );
}