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
    let cart = JSON.parse(localStorage.getItem("cart"))
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        addItemToCart(product.itemTitle, product.itemSize, product.itemPrice, product.itemImg)
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
    let cart = JSON.parse(localStorage.getItem("cart"))
    var buttonClicked = event.target
    var rowToRemove = buttonClicked.parentElement.parentElement
    var title = rowToRemove.getElementsByClassName('basket-item-title')[0].innerText
    var temp = cart.filter(item => item.itemTitle != title)
    localStorage.setItem("cart", JSON.stringify(temp))
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addItemToCart(title, size, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('basket-item-row')
    var cartItemsContainer = document.getElementsByClassName('middle-cart-container')[0]
    // //checks if item is already is in cart and gives an alert and does not add the item if so
    // var cartItemNames = cartItemsContainer.getElementsByClassName('basket-item-title')
    // for (var i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText == title) {
    //         alert('This item is already in the cart')
    //         return
    //     }
    // }
    // puts in html with values of newly added item
    var cartRowContents = `
        <div class="basket-item-left-container">
            <img class="basket-item-image" src="${imageSrc}">
            <div class="basket-item-name-container">
                <span class="basket-item-title">${title}</span>
                <span class="basket-item-size">${size}</span>
                <div class="input-group quantity-selector">
                    <input type="number" id="inputQuantitySelector" class="form-control" 
                        name="quantity" title="quantity" value="1" min="0" max="99" step="1">
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
