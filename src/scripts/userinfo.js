function displayAccountInfo(){
        console.log('LocalStorage Data:', localStorage);
        //display the information in the various spans replace document, with where the info is stored
        document.getElementById('usernameHeading-profile').innerText = localStorage.getItem("usernameProfile") || '';
        document.getElementById('username').innerText = localStorage.getItem("usernameProfile");
        document.getElementById('emailProfile').innerText = localStorage.getItem("email");
        document.getElementById('nameProfile').innerText = localStorage.getItem("fname");
        document.getElementById('sNameProfile').innerText = localStorage.getItem("lname");
        document.getElementById('phoneNumberProfile').innerText = localStorage.getItem("phonenumber");
        document.getElementById('passwordProfile').innerText = localStorage.getItem("password");
        document.getElementById('addressHome').innerText = localStorage.getItem("addressHome");
        
        // document.getElementById('homeZipCode').innerText = accountInfoData.homezipcode;
        // document.getElementById('homeAddressCountry').innerText = accountInfoData.homecountry;
        // document.getElementById('officeAddressInfo').innerText = accountInfoData.officeaddress;
        // document.getElementById('officeZipCode').innerText = accountInfoData.officezipcode;
        // document.getElementById('officeAddressCountry').innerText = accountInfoData.officecountry;
    }

    function addUserName() { /* username showcased in profile - adjustments needed to work globally more functions?*/
        const userName = localStorage.usernameProfile;
        if (userName !== undefined && userName !== null) {
        document.getElementById("usernameHeading-profile").innerText =
            userName;
        } else {
            document.getElementById("usernameHeading-profile").innerText = '';
        }
    }


    function store() {
        // get values from form
        let inputFname = document.getElementById("fname").value;
        let inputLname = document.getElementById("lname").value;
        let inputUsername = document.getElementById("usernameProfile");
        let inputEmail = document.getElementById("email").value;
        let inputNumber = document.getElementById("phonenumber");
        let inputPassword = document.getElementById("password");
        let inputAddressHome = document.getElementById("addressHome").value;

        //Saves values to local storage
        localStorage.setItem("fname", inputFname);
        localStorage.setItem("lname", inputLname);
        localStorage.setItem("usernameProfile", inputUsername.value);
        localStorage.setItem("email", inputEmail);
        localStorage.setItem("phonenumber", inputNumber.value);
        localStorage.setItem("password", inputPassword.value);
        localStorage.setItem("addressHome", inputAddressHome);
}
 // attaching the event handler- addUserName function​​
    //resetLocal stored data.
    function resetLocalStorage() {
        localStorage.clear();
        document.getElementById("usernameHeading-profile").innerText = "";
    }

document.body.onload = function () {
    addUserName();
    displayAccountInfo();
    }