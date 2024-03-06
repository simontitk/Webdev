export function createHeader() {
    return (
        `<div class="header-container">
            <button id="header-hamburger">&#9776;</button>
            <div class="header-logo"><a href="./index.html">HydroHomies</a></div>
            <div class="header-lists" id="header-navlinks">
                <ul class="header-links">
                    <li><a href="./all_products.html">Products</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
                <ul class="header-links">
                    <li><a href="./profile.html"><img src="../../assets/icons/profile.png" alt="profile-picture" height="36px" ></a></li>
                    <li><a href="./index.html"><img src="../../assets/icons/exit.png" alt="exit-picture" height="36px" ></a></li>
                    <li><a href="./shopping_cart.html"><img src="../../assets/icons/shopping-cart.png" alt="shopping-cart-picture" height="36px" ></a></li>
                </ul>
            </div>
        </div>`
    )
}