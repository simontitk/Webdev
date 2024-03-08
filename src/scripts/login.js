import { isLoggedIn } from "./loggedIn.js";
import { setLoggedIn } from "./loggedIn.js";

  document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();

    // Get the email and password input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve stored email and password from local storage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    // Select the message box container
    let messageBox = document.getElementById("messageBox");

    // Clear any existing messages
    messageBox.innerHTML = "";

    // Check if the stored email and password are not null
    if (storedEmail == undefined || storedPassword == undefined) {
      messageBox.innerHTML =
        '<div class="error-message">No account found. Please sign up.</div>';
    } else {
      // Check if the input email and password match the stored values
      if (email === storedEmail && password === storedPassword) {
        messageBox.innerHTML =
          '<div class="success-message">Login successful!</div>';
        setLoggedIn()
        window.location.href = "./index.html"; // Redirect upon successful login
      } else {
        messageBox.innerHTML =
          '<div class="error-message">Invalid email or password. Please try again.</div>';
      }
    }
    } 
  ;


