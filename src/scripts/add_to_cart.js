
export function createCart () {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    return JSON.parse(localStorage.getItem("cart"));
}

export function attachAddToCartButtons (cart, getQuantity=()=>1) {
    document.querySelectorAll(".add-to-cart-button").forEach(
        button => button.onclick = () => {
                let cartItem = {
                    "id": Number(button.id),
                    "quantity": Number(getQuantity())
                }
               if (!cart.some(item => item.id === cartItem.id)) {
                    cart.push(cartItem);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert(`Item added to cart!`);
                } else {
                    alert(`Item already in cart!`)
                }
            });
}
