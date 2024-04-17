import {createProductCard} from "../scripts/product_card.js"
import {createProducts} from "../scripts/products.js"
import { attachProductPages } from "../scripts/product_card.js";
import { attachAddToCartButtons } from "./add_to_cart.js";
import { createCart } from "./add_to_cart.js";

const OFFERS = document.getElementById("offers");
const PRODUCTS = createProducts().slice(0, 3);
const CART = createCart();
OFFERS.innerHTML = PRODUCTS.map(product => createProductCard(product)).reduce((result, productHtml) => result + productHtml, "");


attachProductPages();
attachAddToCartButtons(CART);

document.querySelectorAll(".category-card").forEach(
    category => category.onclick = () => {
        localStorage.setItem("selectedCategory", category.id);
        location.href = '../templates/all_products.html'; 
    }
);
