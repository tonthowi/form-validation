function validateForm() {

    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var passwordRetype = document.myForm.retype-password.value;

    if(name == "" || name == null) {
        document.getElementById("error-name").innerHTML="Please write your name.";
        return false;
    }
    else if(email == "" ) {
        document.getElementById("error-email").innerHTML="Please input your email.";
        return false;
    }
    else if(password < 6 ){
        document.getElementById("error-password").innerHTML="Password must contain at least 6 characters.";
        return false;
    }
    
}