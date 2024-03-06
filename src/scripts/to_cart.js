// Checks to make sure document is loaded before executing any of
//of the following Js
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Prepare "add to cart" buttons for use
function ready() {
    var addToCartButtons = document.getElementsByClassName('add-to-cart-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]")
    }
    localStorage.removeItem("debug");
}

function addToCartClicked(event) {
    var button = event.target
    var product = button.parentElement.parentElement
    console.log(product)
    var title = product.getElementsByClassName('product-name')[0].innerText
    console.log(title)
    var size = product.getElementsByClassName('product-size')[0].innerText
    console.log(size)
    var price = product.getElementsByClassName('product-price')[0].innerText
    console.log(price)
    var imageSrc = product.getElementsByClassName('product-image')[0].src
    console.log(imageSrc)
    addItemToCart(title, size, price, imageSrc,)
}

let cart = JSON.parse(localStorage.getItem("cart"))

export function addItemToCart(title, size, price, imageSrc) {
    let product = {
        itemTitle: title,
        itemSize: size,
        itemPrice: price,
        itemImg: imageSrc
    }
    if (cart.length == 0) {
        cart.push(product);
    } else {
        let res = cart.find(element => element.itemTitle == product.itemTitle);
        if (res == undefined) {
            cart.push(product)
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}