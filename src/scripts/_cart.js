import { createCart } from "./add_to_cart.js";
import { createProducts } from "./products.js";

const PRODUCTS = createProducts();
let cart = createCart();
let cartDisplay = document.querySelector(".middle-cart-container");
let priceDisplay = document.querySelector(".subtotal-price");

function renderCart() {
    cart.forEach(item => {
        let quantity = item.quantity;
        let product = PRODUCTS[item.id];
        let productHtml = renderCartItem(product, quan);
        cartDisplay.append(productHtml);

        let quantitySelector = document.querySelector(`#quantity-selector-${item.id}"`);
        quantitySelector.onchange = {}
        
        let removeItemButton = document.querySelector(`#${item.id}`);
        removeItemButton.onclick = () => {
            document.querySelector(`#cart-item-${item.id}`).remove();
            cart = cart.filter(itemToKeep => item.id != itemToKeep.id);
        }



    });
}



function renderCartItem(product) {
    return (
        `<div class="basket-item-left-container" id="cart-item-${id}">
            <img class="basket-item-image" src="../../images/${imageSrc}">
             <div class="basket-item-name-container">
                <span class="basket-item-title">${title}</span>
                <span class="basket-item-size">${amount} x ${size}</span>
                <div class="input-group quantity-selector">
                    <input 
                        type="number" 
                        id="quantity-selector-${id}"
                        class="form-control" 
                        name="quantity" title="quantity" 
                        value="${quantity}" 
                        min="0" 
                        max="99" 
                        step="1">
                </div>
            </div>
        </div>
        <div class="basket-item-space"></div>
        <div class="basket-item-price-container">
            <span class="basket-item-price">${price}</span>
            <button class="button-delete" id="delete-button-${product.id}" role="button">delete</button>
        </div>`
    );
}