import { createProducts } from "../scripts/products.js"
import { createProductCard } from "../scripts/product_card.js"
import { attachProductPages } from "../scripts/product_card.js";
import { attachAddToCartButtons } from "./add_to_cart.js";
import { createCart } from "./add_to_cart.js";


// grabbing toggle buttons and the corresponding panels in the sidebar's filters

const toggleHeaders = document.querySelectorAll(".filter-header");
const collapsibleFilterInputs = document.querySelectorAll(".collapsible-filter-inputs");
const toggleArrows = document.querySelectorAll(".toggle-button");
for (let i = 0; i < toggleHeaders.length; i++) {
    toggleHeaders[i].onclick = () => {
        collapsibleFilterInputs[i].classList.toggle("collapsed-filter-inputs");
        toggleArrows[i].classList.toggle("toggle-button-transformed");
    };
}


// populating the product display and filtering it

const CART = createCart();
const PRODUCTS = createProducts();
const categoryCheckboxes = [...document.querySelectorAll(".category-checkbox")];
const minPriceInput = document.getElementById("min-price-input");
const maxPriceInput = document.getElementById("max-price-input");
const minVolumeInput = document.getElementById("min-volume-input");  
const maxVolumeInput = document.getElementById("max-volume-input");          
const minRatingInput = document.getElementById("min-rating-input");  
const maxRatingInput = document.getElementById("max-rating-input");  
const filterButton = document.getElementById("filter-button");
const resetFilterButton = document.getElementById("reset-filter-button");
const productSection = document.querySelector(".product-section");
const selectedCategory = localStorage.getItem("selectedCategory");

const insertProductCards = (products) => {
    productSection.innerHTML = products
        .map(product => createProductCard(product))
        .reduce((result, productHtml) => result + productHtml, "");
}


const filterProducts = (products) => {
    let minPrice = Number(minPriceInput.value);
    let maxPrice = Number(maxPriceInput.value) || 1000;
    let minVolume = Number(minVolumeInput.value);    
    let maxVolume = Number(maxVolumeInput.value) || 10000;
    let minRating = Number(minRatingInput.value);    
    let maxRating = Number(maxRatingInput.value) || 5;
    let selectedCategories = new Set(categoryCheckboxes.filter(cb => cb.checked).map(cb => cb.value));
    return products.filter(product => {
        return (
            (product.price <= maxPrice) && 
            (product.price >= minPrice) &&
            (product.size <= maxVolume) &&
            (product.size >= minVolume) &&
            (product.rating <= maxRating) &&
            (product.rating >= minRating) &&
            (product.categories.some(cat => selectedCategories.has(cat)))
        );
    });
}

filterButton.onclick = () => {
    let filteredProducts = filterProducts(PRODUCTS);
    insertProductCards(filteredProducts);
    attachProductPages();
    attachAddToCartButtons(CART);
};

resetFilterButton.onclick = () => {
    categoryCheckboxes.forEach(checkbox => checkbox.checked = true);
    [...document.querySelectorAll(".filter-input")].forEach(input => input.value = "");
}

if (selectedCategory) {
    categoryCheckboxes.filter(cb => cb.value !== selectedCategory).forEach(cb => cb.checked = false);
    localStorage.removeItem("selectedCategory");
    insertProductCards(filterProducts(PRODUCTS));
} else {
    insertProductCards(PRODUCTS);
}

attachProductPages();
attachAddToCartButtons(CART);
