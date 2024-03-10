import { createCart } from "./add_to_cart.js";
import { createProducts } from "./products.js";

// Checks to make sure document is loaded before executing any of
//of the following Js
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Global Variables

function ready() {
    // loads cart items
    const cart = createCart()
    const productList = createProducts()

    for (var i = 0; i < cart.length; i++) {
        var product = productList[cart[i].id]
        var quantity = cart[i].quantity
        addItemToCart(product.id, product.name, product.size, product.quantity, product.price, product.picture, quantity)
        updateCartTotal()
    }
    
    // Prepares delete buttons for use 
    var removeCartItemButtons = document.getElementsByClassName('button-delete')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Prepares quantity selector values for use 
    var quantityInputs = document.getElementsByClassName('form-control')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

}

function removeCartItem(event) {
    const cart = createCart()
    var buttonClicked = event.target
    var rowToRemove = buttonClicked.parentElement.parentElement
    var id = rowToRemove.getElementsByClassName('basket-item-left-container')[0].id
    var temp = cart.filter(item => item.id != id)
    localStorage.setItem("cart", JSON.stringify(temp))
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    const cart = createCart()
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    var rowToUpdate = input.parentElement.parentElement.parentElement.parentElement
    var id = rowToUpdate.getElementsByClassName('basket-item-left-container')[0].id
    var productToUpdate = cart.find(matchById)
    productToUpdate.quantity = Number(input.value)

    function matchById(product) {
        return product.id == id
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartTotal()
}

function addItemToCart(id, title, size, amount, price, imageSrc, quantity) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('basket-item-row')
    var cartItemsContainer = document.getElementsByClassName('middle-cart-container')[0]
    var cartRowContents = `
        <div class="basket-item-left-container" id="${id}">
            <img class="basket-item-image" src="../../images/${imageSrc}">
            <div class="basket-item-name-container">
                <span class="basket-item-title">${title}</span>
                <span class="basket-item-size">${amount} x ${size}</span>
                <div class="input-group quantity-selector">
                    <input type="number" id="inputQuantitySelector" class="form-control" 
                        name="quantity" title="quantity" value="${quantity}" min="0" max="99" step="1">
                </div>
            </div>
        </div>
            <div class="basket-item-space"></div>
            <div class="basket-item-price-container">
                <span class="basket-item-price">${price}</span>
                <button class="button-delete" role="button">delete</button>
            </div>`
        cartRow.innerHTML = cartRowContents
    cartItemsContainer.append(cartRow)
    cartRow.getElementsByClassName('button-delete')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('middle-cart-container')[0]
    var cartRows = cartItemContainer.getElementsByClassName('basket-item-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('basket-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('form-control')[0]
        var price = parseFloat(priceElement.innerText.replace('DKK', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total*100) / 100
    document.getElementsByClassName('subtotal-price')[0].innerText = total + ' DKK'
}