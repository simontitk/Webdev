
export function storeUserInfo() {
    console.log("SHIT")
    let inputFname = document.getElementById("firstName").value;
    let inputLname = document.getElementById("lastName").value;
    let inputUsername = document.getElementById("userName").value;
    let inputEmail = document.getElementById("email").value;
    let inputNumber = document.getElementById("phoneNumber").value;
    let inputPassword = document.getElementById("password").value;
    let inputAddressHome = document.getElementById("address").value;
    let inputCity = document.getElementById("city").value;

    localStorage.setItem("firstName", inputFname);
    localStorage.setItem("lastName", inputLname);
    localStorage.setItem("userName", inputUsername);
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("phoneNumber", inputNumber);
    localStorage.setItem("password", inputPassword);
    localStorage.setItem("address", inputAddressHome);
    localStorage.setItem("city", inputCity);
}