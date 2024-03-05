if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // Prepares delte buttonsfor use 
    var removeCartItemButtons = document.getElementsByClassName('button-delete')
    console.log(removeCartItemButtons)
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
    // Prepare "add to cart" buttons for use
    var addToCartButtons = document.getElementsByClassName('???')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
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

function addToCartClicked(event) {
    var button = event.target
    var product = button.parentElement.parentElement
    var title = product.getElementsByClassName('nameOfProductNameClass')[0].innterText
    var price = product.getElementsByClassName('nameOfPriceClass')[0].innerText
    var imageSrc = produt.getElementsByClassName('nameOfImageClass')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('basket-item-row')
    var cartItemsContainer = document.getElementsByClassName('middle-cart-container')[0]
    //checks if item is already is in cart and gives an alert and does not add the item if so
    var cartItemNames = cartItems.getElementsByTagName('h2')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already in the cart')
            return
        }
    }
    // puts in html with values of newly added item
    var cartRowContents = `
            <img class="basket-item-image" src="${imageSrc}">
            <div class="basket-item-name">
                <h2>${title}</h2>
                <div class="input-group quantity-selector">
                    <input type="number" id="inputQuantitySelector" class="form-control" 
                        data-bs-step="counter" name="quantity" title="quantity" value="2" 
                        min="0" max="99" step="1" data-bs-round="0">
                </div>
            </div>
            <div class="basket-item-space"></div>
            <div class="basket-item-price">
                <h3>${price}</h3>
                <button class="button-delete" role="button">delete</button>
            </div>`
        cartRow.innerHTML = cartRowContents
    cartItemsContainer.append(cartRow)
    cartRow.getElementsByClassName('button-delete')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quan)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('middle-cart-container')[0]
    var cartRows = cartItemContainer.getElementsByClassName('basket-item-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByTagName('h3')[0]
        var quantityElement = cartRow.getElementsByClassName('form-control')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total*100) / 100
    document.getElementsByClassName('subtotal-price')[0].innerText = '€' + total
}
