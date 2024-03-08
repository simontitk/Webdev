import {isLoggedIn} from './loggedIn.js'
import { getUserInfo } from './store_user_info.js';

export function createHeader() {
    let loggedIn = isLoggedIn();
    let profileLink = loggedIn? './profile.html' : './login.html';
    let user = getUserInfo();
    let name = loggedIn ? ("Hi, "+ user.firstName) : "";
    let logOutButton = loggedIn? `<li><a href="./index.html" id="logout-button"><img src="../../assets/icons/exit.png" alt="exit-picture" height="36px" ></a><span class="header-button-label"> &nbsp; Logout</span></li>` : ""

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
                    <li id="header-name"><span>${name}</span></li>
                    <li><a id="profileLink" href="${profileLink}"><img src="../../assets/icons/profile.png" alt="profile-picture" height="36px"><span class="header-button-label"> &nbsp; Profile</span></a></li>
                    <li><a href="./shopping_cart.html"><img src="../../assets/icons/shopping-cart.png" alt="shopping-cart-picture" height="36px" ><span class="header-button-label"> &nbsp; Cart</span></a></li>
                    ${logOutButton}
                </ul>
            </div>
        </div>`
    )
}