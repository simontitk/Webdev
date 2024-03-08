
export function storeUserInfo() {
    let inputFname = document.getElementById("firstName").value;
    let inputLname = document.getElementById("lastName").value;
    let inputUsername = document.getElementById("userName").value;
    let inputEmail = document.getElementById("email").value;
    let inputNumber = document.getElementById("phoneNumber").value;
    let inputPassword = document.getElementById("password").value;
    let inputAddressHome = document.getElementById("address").value;
    let inputCity = document.getElementById("city").value;

    if (inputFname) localStorage.setItem("firstName", inputFname);
    if (inputLname) localStorage.setItem("lastName", inputLname);
    if (inputUsername) localStorage.setItem("userName", inputUsername);
    if (inputEmail) localStorage.setItem("email", inputEmail);
    if (inputNumber) localStorage.setItem("phoneNumber", inputNumber);
    if (inputPassword) localStorage.setItem("password", inputPassword);
    if (inputAddressHome) localStorage.setItem("address", inputAddressHome);
    if (inputCity) localStorage.setItem("city", inputCity);
    localStorage.setItem("paymentMethod", "Select Payment Method");
}

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