
// Function to display Error Messages
function printErr(elementID, errMsg) {
    document.getElementById(elementID).innerHTML= errMsg;
}

function validateForm() {
    // Retrieve form values
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var mobile = document.myForm.mobile.value;
    var password = document.myForm.password.value;
    var retypePassword = document.myForm.retypePassword.value;

    // Defining error variables with a default value
    var nameError = emailError = mobileError = passError = retypePassError = true;

    //Validate Name
    if (name == "") {
        printErr("nameError", "Name cannot be blank");
    } else {
        // Regular expression for basic human name validation
        var regex = /^[a-zA-Z\s]+$/;

        if (regex.test(name) ===false) {
            printErr("nameError", "You mispelled your name with alien characters");
        } else {
            printErr ("nameError", "");
            nameError = false;
        }
    }

    //Validate Email
    if(email == "") {
        printErr("emailError", "We need your email to proceeed");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;

        if (regex.test(email) === false) {
            printErr ("emailError", "It looks like you were invented new email format")
        } else {
            printErr ("emailError", "");
            emailError = false;
        }
    }

    //Validate Mobile Number
    if(mobile == "") {
        printErr ("mobileError", "Can we have your number please");
    } else {
        // Regular expression for mobile number validation
        var regex = /^[1-9]\d{10}$/;

        if(regex.test(mobile) === false) {
            printErr ("mobileError", "Your mobile should only have 11 number and numbers only")
        } else {
            printErr ("mobileError", "");
            mobileError = false;
        }
    }

    //Validate Password
    if(password =="") {
        printErr ("passError", "We need a password to continue");      
    } else {
        // Regular expression for password validation contains at least 8 characters, at least 1 number,
        // and both lower and uppercase letters and a special characters.
        var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

        if(regex.test(password) === false) {
            printErr ("passError", "Minimal 8 characters, at least contain 1 number lower and uppercase and a special characters");
        } else {
            printErr ("passError", "");
            passError = false;
        }

    }

    //Validate Password Confirmation
    if(retypePassword == "") {
        printErr ("retypePassError", "Please confirm your password");
    } else {
        if(retypePassword !== password) {
            printErr ("retypePassError", "Password did not match");
        } else {
            printErr ("retypePassError", "");
            retypePassError = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameError || emailError || mobileError || passError || retypePassError) == true) {
        return false;
    } else {

        // Creating a from input data for preview
        var data = "Please check your input data. \n" +
        "Name:" + name + "\n" +
        "Email:" + email + "\n" +
        "Mobile Number:" + mobile + "\n";
        alert(data);
    }
}