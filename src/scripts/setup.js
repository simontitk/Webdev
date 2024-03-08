import { createFooter } from "./footer.js"
import { createHeader } from "./header.js"

document.getElementById("footer").innerHTML = createFooter();
document.getElementById("header").innerHTML = createHeader();
const navLinks = document.getElementById("header-navlinks");
document.getElementById("header-hamburger").onclick = () => {
    console.log(navLinks)
    navLinks.classList.toggle("hidden");
}