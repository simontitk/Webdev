import { storeUserInfo } from "./store_user_info.js";


export function getUserInfo() {
    return {
        userName: localStorage.getItem("userName"),
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        password: localStorage.getItem("password"),
        address: localStorage.getItem("address"),
        city: localStorage.getItem("city")
    }
}


function displayAccountInfo(user) {
    document.getElementById('usernameHeading-profile').innerText = user["userName"] || "";
    document.getElementById('username-display').innerText = user["userName"];
    document.getElementById('email-display').innerText = user["email"];
    document.getElementById('firstname-display').innerText = user["firstName"];
    document.getElementById('lastname-display').innerText = user["lastName"];
    document.getElementById('phonenumber-display').innerText = user["phoneNumber"];
    document.getElementById('password-display').innerText = user["password"];
    document.getElementById('address-display').innerText = user["address"];
    document.getElementById('city-display').innerText = user["city"];
}

const submitbutton = document.getElementById("submit-user-info-changes");
submitbutton.onclick = () => {
    storeUserInfo();
}

document.addEventListener('DOMContentLoaded', () => {
    const user = getUserInfo();
    displayAccountInfo(user);
})
