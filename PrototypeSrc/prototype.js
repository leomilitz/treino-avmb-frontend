var user;
var userField = document.getElementById("userId");
var pwdField  = document.getElementById("userPwd");

function makeLogin() {
    if (user != null) 
        user.loginUser();
}

function makeRegister () {
    if (userField.value != null || pwdField.value != null) {
        user = new Usuario();
        user.registerUser();
        alert("Register succeded!");
        clearFields();   
    }
    else 
        alert("Fill all the fields to register.");
}

function clearFields() {
    userField.value = '';
    pwdField.value  = '';
}

function Usuario() {
    this.user     = '';
    this.password = '';
}

Usuario.prototype = {
    registerUser: function() {
        this.user     = userField.value;
        this.password = pwdField.value;
    },

    loginUser: function() {    
        if (userField.value == this.user && pwdField.value == this.password)
            alert("Login succeded!");
        else
            alert("Login Failed");
    }
}