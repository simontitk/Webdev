import {storeUserInfo} from "../scripts/store_user_info.js";
import { setLoggedIn } from "./loggedIn.js";

const form = document.getElementById("registration-form");
form.onsubmit = (e) => {
    e.preventDefault();
    storeUserInfo();
    setLoggedIn();
    location.href = 'http://127.0.0.1:5500/src/templates/index.html';
}


// Check if the user is logged in
const isLoggedIn = false; // Change this based on your authentication logic

// Get the profile link element
const profileLink = document.getElementById('profileLink');

// Set the appropriate href based on the user's authentication status
if (isLoggedIn) {
  profileLink.href = './profile.html'; // Redirect to logged-in profile page
} else {
  profileLink.href = './login.html'; // Redirect to login page if not logged in
}

function login() {
    isLoggedIn = true;
}
