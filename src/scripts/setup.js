import { createFooter } from "./footer.js"
import { createHeader } from "./header.js"
import { isLoggedIn } from "./loggedIn.js";
import { setLoggedOut } from "./loggedIn.js";

document.getElementById("footer").innerHTML = createFooter();
document.getElementById("header").innerHTML = createHeader();

if (isLoggedIn()) {
    document.getElementById("logout-button").onclick = () => {
        setLoggedOut();
        location.reload();
    }
}

const navLinks = document.getElementById("header-navlinks");
document.getElementById("header-hamburger").onclick = () => {
    console.log(navLinks)
    navLinks.classList.toggle("hidden");
}