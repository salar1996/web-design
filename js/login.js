let userName = document.querySelector("#userName")
let password = document.querySelector("#passWord")
let userNameAlert = "* username must be more than 12 character!";
let passwordAlert = "* password must be more than 8 character!"
let userNameValid = "valid username!"
let passwordValod = "valid password!"

function checkUserName(){
    if (userName.value.length < 11 ){
        document.querySelector("#alert-username").innerHTML = userNameAlert;
        document.querySelector("#alert-username").style.color = "red"

    }else if (userName.value.length >= 11){
        document.querySelector("#alert-username").innerHTML = userNameValid;
        document.querySelector("#alert-username").style.color = "green"

    }
}

function checkPassWord(){
    if (password.value.length < 7 ){
        document.querySelector("#alert-password").innerHTML = passwordAlert;
        document.querySelector("#alert-password").style.color = "red"
    }else if (password.value.length >= 7){
        document.querySelector("#alert-password").innerHTML = passwordValod;
        document.querySelector("#alert-password").style.color = "green"
    }
}

function checkInfo(){
    checkUserName();
    checkPassWord();
    alert("you are successfully entered!")
}