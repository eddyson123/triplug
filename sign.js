function fun() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    atpos = email.indexOf('@');
    dotpos = email.lastIndexOf('.');
    if (user == "" && email == "" && pass == "") {
        alert('Enter your username, email and password.');
        return false;
    }
    if (user.length > 0 && email.length == "" && pass == "") {
        alert('Enter your email and password to proceed.');
        return false;
    }
    if (user.length > 0 && email.length > 0 && pass == "") {
        alert('Enter your password to proceed.\n\nIt must be eight characters and above.');
        return false;
    }
    if (user== "" && email == "" && pass.length > 0) {
        alert('Enter your username and email to proceed.');
        return false;
    }
    if (user == "" && email.length > 0 && pass.length > 0) {
        alert('Enter your username to proceed.');
        return false;
    }
    if (user.length > 0 && email == "" && pass.length > 0) {
        alert('Enter your email to proceed.');
        return false;
    }
    if (user == "" && email.length > 0 && pass == "") {
        alert('Enter your username and password to proceed');
        return false;
    }
    if (user.length < 3) {
        alert('Your username must be three characters and above.\n\nNumbers can be included as well.');
        return false;
    }
    if (atpos < 1 || dotpos - atpos < 2) {
        alert('Enter a valid email to proceed.');
        return false;
    }
    if (pass.length < 8) {
        alert('Password is not secure.\n\nIt must be eight characters and above.');
        return false;
    }
    else {
        var there = confirm('Do you want to proceed with the following credentials you entered.');
        if (there == true) {
            localStorage.setItem('key0', user);
            localStorage.setItem('key1', email);
            localStorage.setItem('key2', pass);
            return true;
        }
        else {
            return false;
        }
    }
}

function func() {
    var hut = localStorage.getItem('key0');
    var hoot = localStorage.getItem('key2');
    var hit = document.getElementById('use').value;
    var bit = document.getElementById('pas').value;
    if (hit == "" && bit == "") {
        alert('Please login with your credentials as the spaces provided cannot be blank.');
        return false;
    }
    if (hut == null && hoot == null) {
        alert('You are yet to create an account with us.');
        window.location = "signup.html";
        return false;
    }
    if (hit != hut && bit != hoot) {
        alert('Your username and password does not match with the one you signed up with.');
        return false;
    }
    if (hit != hut && bit == hoot) {
        alert('The username you entered does not match with one you signed up with.');
        return false;
    }
    if (hit == hut && bit != hoot) {
        alert('The password you entered does not match with the one you signed up with.');
        return false;
    }
}