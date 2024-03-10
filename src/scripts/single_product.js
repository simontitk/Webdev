import { createProductCard } from "../scripts/product_card.js";
import { createProducts } from "../scripts/products.js";
import { attachAddToCartButtons } from "./add_to_cart.js";
import { createCart } from "./add_to_cart.js";
import { attachProductPages } from "../scripts/product_card.js";


const ALL_PRODUCTS = createProducts();

const getRandomIndices = (length, count) => {
    let indices = [];
    while (indices.length < count) {
        let randomIndex = Math.floor(Math.random() * length);
        if (indices.indexOf(randomIndex) === -1) indices.push(randomIndex);
    }
    return indices;
}

const insertProductCards = (selectedProducts) => {
    const productSection = document.querySelector(".suggested-items");
    const randomIndices = getRandomIndices(selectedProducts.length, 3);
    randomIndices.forEach(index => productSection.innerHTML += createProductCard(selectedProducts[index]))
}

insertProductCards(ALL_PRODUCTS);

const quantityElement = document.getElementById("quantity-input");
document.getElementById("minus-quantity").addEventListener("click", function () {
    let quantity = quantityElement.value;
    if (quantity > 1) {
        quantity--;
        quantityElement.value = quantity;
    }
});

document.getElementById("plus-quantity").addEventListener("click", function () {
    let quantity = quantityElement.value;
    quantity++;
    quantityElement.value = quantity;
});

let productID = localStorage.getItem("productId");

productID = ((undefined === productID) ?  26 : Number(productID));
const product = ALL_PRODUCTS.find(p => p.id === productID);


document.getElementById("name").textContent = `${product.name} ${product.size} ml`;
document.getElementById("price").textContent = `${product.price} DKK`;
document.getElementById("description").textContent = product.description;
document.getElementById("picture").src = `../../images/${product.picture}`;

for (let i = 1; i <= 5; i++) {
    const ratingImg = document.getElementById(`rating${i}`);
    if (i <= product.rating) {
        ratingImg.src = "../../assets/icons/droplet.png";
    } else {
        ratingImg.src = "../../assets/icons/empty-droplet.png";
    }
}

const cart = createCart()

const addToCartButton = document.querySelector(".add-to-cart-button");
addToCartButton.id = productID;
attachAddToCartButtons(cart, () => quantityElement.value);
attachProductPages();

