var b = 0;
function fun() {
    b++;
    document.getElementById('num').innerHTML = b;
}

function func() {
   alert('Our listing price is yet to be officially released.\n\nPlease be patient, as we would sure update you of the date of listing.');
}

function cash() {
    window.location = 'withdraw.html';
}

function bin() {
    alert('This website is just a demo of the real thing.\n\nThe tasks are not functioning for now.')
}

function bed() {
    var beat = confirm('Do you want to delete your account or simply log out\n\nClick ok to delete your account or click cancel to simply log out.');
    if (beat == true) {
        localStorage.removeItem('key0');
        localStorage.removeItem('key1');
        localStorage.removeItem('key2');
        window.location = 'signup.html';
    }
    else {
        window.location = 'login.html';
    }
}

function there() {
    var sub = document.getElementById('sub');
    if (sub.style.width == '0%') {
        sub.style.width = '65%';
    }
    else {
        sub.style.width = '0%';
    }
}