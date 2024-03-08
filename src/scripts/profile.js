import { storeUserInfo } from "./store_user_info.js";
import { getUserInfo } from "./store_user_info.js";

function unhidePassword() {
    // Get references to the checkbox and the span
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const hiddenSpan = document.getElementById('password-display');

    // Add an event listener to the checkbox to toggle the visibility of the span
    toggleCheckbox.addEventListener('change', function() {
        hiddenSpan.style.visibility = toggleCheckbox.checked ? 'visible' : 'hidden';
    });
}


function displayAccountInfo(user) {
    document.getElementById('usernameHeading-profile').innerText = user["firstName"] || "";
    document.getElementById('username-display').innerText = user["userName"];
    document.getElementById('email-display').innerText = user["email"];
    document.getElementById('firstname-display').innerText = user["firstName"];
    document.getElementById('lastname-display').innerText = user["lastName"];
    document.getElementById('phonenumber-display').innerText = user["phoneNumber"];
    document.getElementById('password-display').innerText = user["password"];
    document.getElementById('address-display').innerText = user["address"];
    document.getElementById('city-display').innerText = user["city"];
}

const paymentMethods = {
    "optionText": 0,
    "creditCard": 1,
    "paypal": 2,
    "mobilepay": 3
}

const paymentMethodSelection = document.getElementById("PaymentMethods");
paymentMethodSelection.selectedIndex = paymentMethods[localStorage.getItem("paymentMethod")];
paymentMethodSelection.onchange = () => {
    localStorage.setItem("paymentMethod", paymentMethodSelection.value);
}

const submitbutton = document.getElementById("submit-user-info-changes");
submitbutton.onclick = () => {
    storeUserInfo();
}

document.addEventListener('DOMContentLoaded', () => {
    const user = getUserInfo();
    displayAccountInfo(user);
    unhidePassword();
})
