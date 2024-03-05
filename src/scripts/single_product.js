import { createProductCard } from "../scripts/product_card.js";
import { createProducts } from "../scripts/products.js";

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

let intervalId;


document.getElementById("minus-quantity").addEventListener("click", function () {
    const quantityElement = document.getElementById("quantity-input");
    let quantity = quantityElement.value;
    if (quantity > 1) {
        quantity--;
        quantityElement.value = quantity;
    }
});

document.getElementById("minus-quantity").addEventListener("mousedown", function () {
    const quantityElement = document.getElementById("quantity-input");
    intervalId = setInterval(function () {
        let quantity = quantityElement.value;
        if (quantity > 1) {
            quantity--;
            quantityElement.value = quantity;
        } else {
            clearInterval(intervalId);
        }
    }, 200);
});

document.getElementById("minus-quantity").addEventListener("mouseup", function () {
    clearInterval(intervalId);
});

document.getElementById("minus-quantity").addEventListener("mouseleave", function () {
    clearInterval(intervalId);
});


document.getElementById("plus-quantity").addEventListener("click", function () {
    const quantityElement = document.getElementById("quantity-input");
    let quantity = quantityElement.value;
    quantity++
    quantityElement.value = quantity;
});



document.getElementById("plus-quantity").addEventListener("mousedown", function () {
    const quantityElement = document.getElementById("quantity-input");
    intervalId = setInterval(function () {
        let quantity = quantityElement.value;
        if (quantity < 999) {
            quantity++;
            quantityElement.value = quantity;
        } else {
            clearInterval(intervalId);
        }
    }, 200);
});

document.getElementById("plus-quantity").addEventListener("mouseup", function () {
    clearInterval(intervalId);
});

document.getElementById("plus-quantity").addEventListener("mouseleave", function () {
    clearInterval(intervalId);
});


document.getElementById("cart-button").addEventListener("click", function () {
    const quantity = Number(document.getElementById("quantity").textContent);
    localStorage.setItem("addedQuantity", quantity);
    window.location.href = "./shopping_cart.html";
    console.log(quantity);
});



const product = ALL_PRODUCTS.find(p => p.id === 26);

document.getElementById("name").textContent = product.name;
document.getElementById("price").textContent = `${product.price} DKK`;
document.getElementById("size").textContent = `Volume: ${product.size} ml`;
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

const heartButton = document.querySelector(".heart-button");
heartButton.addEventListener("click", function () {
    if (this.textContent === "❤") {
        this.textContent = "♡";
        this.style.fontSize = "40px";
    } else {
        this.textContent = "❤";
        this.style.fontSize = "30px";
    }
});