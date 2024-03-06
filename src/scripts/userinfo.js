function displayAccountInfo(){

        //display the information in the various spans replace document, with where the info is stored
        document.getElementById('usernameHeading-profile').innerText = localStorage.getItem("usernameProfile") || '';
        document.getElementById('username').innerText = localStorage.getItem("usernameProfile");
        document.getElementById('emailProfile').innerText = localStorage.getItem("email");
        document.getElementById('nameProfile').innerText = localStorage.getItem("fname");
        document.getElementById('sNameProfile').innerText = localStorage.getItem("lname");
        document.getElementById('phoneNumberProfile').innerText = localStorage.getItem("phonenumber");
        document.getElementById('passwordProfile').innerText = localStorage.getItem("password");
        
        document.getElementById('homeAddressInfo').innerText = accountInfoData.homeaddress;
        document.getElementById('homeZipCode').innerText = accountInfoData.homezipcode;
        document.getElementById('homeAddressCountry').innerText = accountInfoData.homecountry;
        document.getElementById('officeAddressInfo').innerText = accountInfoData.officeaddress;
        document.getElementById('officeZipCode').innerText = accountInfoData.officezipcode;
        document.getElementById('officeAddressCountry').innerText = accountInfoData.officecountry;
    }

    function addUserName() { /* username showcased in profile - adjustments needed to work globally */
        const userName = localStorage.usernameProfile;
        if (userName !== undefined && userName !== null) {
        document.getElementById("usernameHeading-profile").innerText =
            userName;
        } else {
            document.getElementById("usernameHeading-profile").innerText = '';
        }
    }


    function store() {
        // get first name
        let inputFname = document.getElementById("fname");
        // save first name
        localStorage.setItem("fname", inputFname.value);
        // get last name
        let inputLname = document.getElementById("lname");
        // save last name
        localStorage.setItem("lname", inputLname.value);
        //
        let inputUsername = document.getElementById("usernameProfile");
        //
        localStorage.setItem("usernameProfile", inputUsername.value);
        //
        let inputEmail = document.getElementById("email");
        //
        localStorage.setItem("email", inputEmail.value);
        //
        let inputNumber = document.getElementById("phonenumber");
        //
        localStorage.setItem("phonenumber", inputNumber.value);
        //
        let inputPassword = document.getElementById("password");
        //
        localStorage.setItem("password", inputPassword.value);
}
    document.body.onload = addUserName(); // attaching the event handler- addUserName function​​
    //resetLocal stored data.
    function resetLocalStorage() {
        localStorage.clear();
        document.getElementById("usernameHeading-profile").innerText = "";
    }

document.body.onload = function () {
    addUserName();
    displayAccountInfo();
    }