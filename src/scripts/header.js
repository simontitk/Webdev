import {isLoggedIn} from './loggedIn.js'

export function createHeader() {
    let profileLink = isLoggedIn()? './profile.html' : './login.html';

    return (
        `<div class="header-container">
            <div class="header-logo"><a href="">HydroHomies</a></div>
            <div class="header-lists">
                <ul class="header-links">
                    <li><a href="./all_products.html">Products</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
                <ul class="header-links">
                    <li><a id="profileLink" href="${profileLink}"><img src="../../assets/icons/profile.png" alt="profile-picture" height="36px" ></a></li>
                    <li><a href="./index.html"><img src="../../assets/icons/exit.png" alt="exit-picture" height="36px" ></a></li>
                    <li><a href="./shopping_cart.html"><img src="../../assets/icons/shopping-cart.png" alt="shopping-cart-picture" height="36px" ></a></li>
                </ul>
            </div>
        </div>`
    )
}