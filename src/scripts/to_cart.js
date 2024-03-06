// Checks to make sure document is loaded before executing any of the following Js

document.addEventListener("DOMContentLoaded", ready);

// Prepare "add to cart" buttons for use

function ready() {

    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const cart = JSON.parse(localStorage.getItem("cart"));
    document.querySelectorAll(".add-to-cart-button").forEach(
        button => button.onclick = (event) => addToCartClicked(event.target)
    );

    function addToCartClicked(toCartButton) {
        let productCard = toCartButton.parentElement.parentElement;
        let product = parseProductCard(productCard);
            if (!cart.some(item => item.itemTitle === product.itemTitle)) {
            cart.push(product);
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.itemTitle} added to cart!`);
    }

    function parseProductCard(productCard) {
        return {
            "itemTitle": productCard.querySelector(".product-name").innerText,
            "itemSize": productCard.querySelector(".product-size").innerText,
            "itemPrice": productCard.querySelector(".product-price").innerText,
            "itemImg": productCard.querySelector(".product-image").src
        };
    }
    
}