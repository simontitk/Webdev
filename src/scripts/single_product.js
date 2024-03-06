import { createProductCard } from "../scripts/product_card.js";
import { createProducts } from "../scripts/products.js";
// import { addItemToCart } from "../scripts/to_cart.js";

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
productID = productID ? Number(productID) : 26;
const product = ALL_PRODUCTS.find(p => p.id === productID);

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



if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
}

const cart = JSON.parse(localStorage.getItem("cart"));


document.getElementById("cart-button").addEventListener("click", function () {
    let product = parseProduct();
    let quantity = quantityElement.value;
    for (let i = 0; i < quantity; i++) {
        if (!cart.some(item => item.itemTitle === product.itemTitle)) {
            cart.push(product);
        }
    }
    quantityElement.value = 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.itemTitle} added to cart!`);
});

function parseProduct() {
    return {
        "itemTitle": product.name,
        "itemSize": product.size,
        "itemPrice": product.price,
        "itemImg": product.picture
    };
}

