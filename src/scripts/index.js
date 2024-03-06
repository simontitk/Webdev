import {createProductCard} from "../scripts/product_card.js"
import {createProducts} from "../scripts/products.js"

const offers = document.getElementById("offers");
const PRODUCTS = createProducts().slice(0, 3);
offers.innerHTML = PRODUCTS.map(product => createProductCard(product)).reduce((result, productHtml) => result + productHtml, "");
