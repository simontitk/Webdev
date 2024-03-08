export function isLoggedIn() {
    if (!localStorage.getItem("isLoggedIn")){
        localStorage.setItem("isLoggedIn", "false")
    }

    return JSON.parse(localStorage.getItem("isLoggedIn"));
}

export function setLoggedIn() {
    localStorage.setItem("isLoggedIn", "true")
}

export function setLoggedOut() {
    localStorage.setItem("isLoggedIn", "false")
}
