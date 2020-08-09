var formx = document.getElementById("myform");

function validate() {
    
    var phn = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;
    var repass = document.getElementById("re-password").value;
    var acc = document.getElementById("account").value;
    var patt = /^\d{10}$/;
    var chkphn = patt.test(phn);
    var pattern = /^\d{14}$/;
    var chkacc = pattern.test(acc);
    
    if ((chkphn == true) && (chkacc == true) && (pass == repass) && (String(pass).length >= 8)) {
         window.location.replace = "https://akashlukhi123.github.io/Safe_Pay/index.html";
    }
    else { 
        console.log("provide correct informations");
    }
}

function phonevalidate() {
    var phn = document.getElementById("phone").value;
    var patt = /^\d{10}$/;
    var chkphn = patt.test(phn);

    if (chkphn == false) {
        var tag = document.createElement("p");
        var text = document.createTextNode("Mobile Number must be 10 digit*");
        tag.style.fontSize = "10pt";
        tag.style.color = "red";
        tag.appendChild(text);
        var element = document.getElementById("phone-p");
        element.removeChild(element.childNodes[2]);
        element.appendChild(tag);
    }
    else {
        var element = document.getElementById("phone-p").innerHTML = "<p></p>";
    }
}


function passwordvalidate() {
    var pass = document.getElementById("password").value;

    if (String(pass).length < 8) {
        var tag = document.createElement("p");
        var text = document.createTextNode("Password must be at least 8 digit*");
        tag.style.fontSize = "10pt";
        tag.style.color = "red";
        tag.appendChild(text);
        var element = document.getElementById("pass-p");
        element.removeChild(element.childNodes[2]);
        element.appendChild(tag);
    }
    else {
        var element = document.getElementById("pass-p").innerHTML = "<p></p>";
    }
}


function repasswordvalidate() {
    var repass = document.getElementById("re-password").value;
    var pass = document.getElementById("password").value;

    if (pass != repass) {
        var tag = document.createElement("p");
        var text = document.createTextNode("Both passwords are must be Same*");
        tag.style.fontSize = "10pt";
        tag.style.color = "red";
        tag.appendChild(text);
        var element = document.getElementById("repass-p");
        element.removeChild(element.childNodes[2]);
        element.appendChild(tag);
    }
    else {
        var element = document.getElementById("repass-p").innerHTML = "<p></p>";
    }
}


function accountvalidate() {
    var acc = document.getElementById("account").value;
    var patt = /^\d{14}$/;
    var chkacc = patt.test(acc);

    if (chkacc == false) {
        var tag = document.createElement("p");
        var text = document.createTextNode("Account Number must be 14 digit*");
        tag.style.fontSize = "10pt";
        tag.style.color = "red";
        tag.appendChild(text);
        var element = document.getElementById("account-p");
        element.removeChild(element.childNodes[2]);
        element.appendChild(tag);
    }
    else {
        var element = document.getElementById("account-p").innerHTML = "<p></p>";
    }
}
