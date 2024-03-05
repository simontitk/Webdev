import {createProducts} from "../scripts/products.js"
import {createProductCard} from "../scripts/product_card.js"


// grabbing toggle buttons and the corresponding panels in the sidebar's filters

const toggleButtons = document.querySelectorAll(".filter-header");
const collapsibleFilterInputs = document.querySelectorAll(".collapsible-filter-inputs");
for (let i=0; i<toggleButtons.length; i++) {
    toggleButtons[i].onclick = () => {
        collapsibleFilterInputs[i].classList.toggle("collapsed-filter-inputs");
    };
}


// populating the product display and filtering it

const PRODUCTS = createProducts();

const insertProductCards = (selectedProducts) => {
    const productSection = document.querySelector(".product-section");
    selectedProducts.forEach(product => productSection.innerHTML+=createProductCard(product))
}

insertProductCards(PRODUCTS);

const categoryCheckboxes = [...document.querySelectorAll(".category-checkbox")];
const minPriceInput = document.getElementById("min-price-input");
const maxPriceInput = document.getElementById("max-price-input");
const minVolumeInput = document.getElementById("min-volume-input");  
const maxVolumeInput = document.getElementById("max-volume-input");          
const minRatingInput = document.getElementById("min-rating-input");  
const maxRatingInput = document.getElementById("max-rating-input");  
const filterButton = document.getElementById("filter-button");


filterButton.onclick = () => {
    let selectedCategories = categoryCheckboxes
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    console.log(selectedCategories);
};