

function verifyuserName(){
    let userName = document.getElementById("userName").value;
    let regExuserName = /^[A-Za-z]+$/;
    return regExuserName.test(userName);
}

function verifyuserLastName(){
    let lastName = document.getElementById("lastName").value;
    let regExuserLastName = /^[A-Za-z]+$/;
    return regExuserLastName.test(lastName);
}

function verifyuserTelephone(){
    let userTelephone = document.getElementById("userTelephone").value;
    let regExuserTelephone = /^[0-9]{8}$/;
    return regExuserTelephone.test(userTelephone);
}

function verifyuserEmail(){
    let userEmail = document.getElementById("userEmail").value;
    let regExuserEmail = /^[A-Za-z0-9._-]+@[a-zA-Z0-9+.-]+\.[a-zA-Z]{2,4}$/;
    return regExuserEmail.test(userEmail);
}

function validateForm(){
   if (verifyuserName() && verifyuserLastName() && verifyuserTelephone() &&  verifyuserEmail()){
    return (alert("its valid"));
   }
   else {
    return (alert("its invalid"));
   }
}



