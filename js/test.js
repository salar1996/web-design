

// document.write('<table>')
// var j = 0;
// do {
//     document.write(
//         '    <tr>\n' +
//         '        <th>' +  names[j] + '</th>' +
//         '        <th>' +  family[j] + '</th>' +
//         '        <th>' +  phones[j] + '</th>' +
//         '    </tr>'
//
//     )
//     j++;
// } while (j<=3);

// document.write('<hr/>');
//
// var k=1;
// if (k%2 == 0){
//     document.write('even');
// }else {
//     document.write('odd')
// };
//
// for (var i=1 ; i<40 ; i++){
//     if (i % 5 == 0){
//         document.writeln(i)
//     }
// }

var testy = 'test22';
switch (testy){
    case "salaaam" : alert("salaaam");
    break;
    case 'test' : alert('test');
    break;
}
// var adad = prompt('enter a number');
// if (adad <=5 ){
//     alert('fuck!')
// }else{
//     alert('salaaaam!')
// }




function sl(i , j){
    document.writeln(j)
    document.writeln(i)
};

// sl('salar', 'salam');

// function  s1 (i , j){
//     var k = Number(i)+Number(j);
//     return k;
// }
//
// var i = prompt('enter first number');
// var j = prompt('enter secund number');
// alert(s1(i ,j));


// var ele = document.getElementsByTagName('div');
// for (i=0 ; i<=ele.length ; i++){
//
//     ele[i].innerHTML = 'salar';
// }


// var tts = document.getElementById('test-class');
// for (var i = 0 ; i <= tts.childNodes.length ; i++) {
//     if (tts.childNodes[i].nodeType != 1) {
//        continue;
//     }
//     alert(tts.childNodes[i].nodeName);



/* childnodes &  node type
var j = document.getElementById('test-class');
var i = 0;
do{
    if (j.childNodes[i].nodeType != 1 ){
        i++;
    }else{
        continue;
    }
    alert(j.childNodes[i].innerHTML)
    i++;
}while (i<= j.childNodes.length);
*/

// var userAge = prompt("سن خود را وارد نمایید" );
// var userMomAge = prompt("سن مادرتان را وارد نمایید:|")
// alert("your mid age:" + "\""+ (+userAge + +userMomAge) /2     + "\"" );
// alert('میانگین اعداد وارد شده برابر است با : ' + "\"" + (num1 + num2 + num3)/3 + "\""  )



// var userAge = +prompt("how many old you are?");

// while (isNaN(userAge)){
//     alert("سن وارد شده باید عدد باشد!");
//     userAge = +prompt("how many old you are?");
// }

// if(userAge < 18){
//         alert("you are not permited!")
// }else{
//         alert("you are permitted")
// }


// * check user age and sex
// *
// var userAge = +prompt("how old you are?");
// while(isNaN(userAge)){
//     alert("ENTER NUMBER!")
//     num1 = +prompt("how old you are");
// }
// var userSex = prompt("you are \" male \" or \" female \" ?");
// while(userSex != "male" && userSex != "female"){
//         alert("just enter \" mail \" or \" female \" !")
//         userSex = prompt("you are \" male \" or \" female \" ?");
// }
// if(userAge < 18 || userSex == "female"){
//     alert("you are not authorised!")
// }else{
//     alert("ok! you can enter the site!")
// }
// *

// * turnary condition
// userAge < 18 || userSex == "female"  ? alert("you are not authorised!") : alert("ok! you can enter the site!");

function evenOrOdd (number){
    var baghimandeh = number%2;
    switch(baghimandeh){
        case 0:
            alert("your number is \"even\"")
            break;
        case 1:
            alert("your number is \"odd\"")
            break;
        default:
            alert("you are not entered a number");
    }
}


function checkLenth (str , num){
    if (str.length < num)  {
        return false;
    }else {
       return true;
    }
}


// check username & password
//*
// var userName = prompt("Enter username!");
// if (checkLenth(userName , 3) == false) {
//     alert('username must be more than 3 character!');
//     userName = prompt("Enter username!"); 
// }
// var passWord = prompt("Enter password!");
// if (checkLenth(passWord , 8) == false) {
//     alert('password must be more than 8 character!');
//     passWord = prompt("Enter password!"); 
// }
// alert("your username & password saved!");


function captchaProduct(i){
    var captcha = String(Math.floor(Math.random()*10));
    while (captcha == 0){
        captcha = String(Math.floor(Math.random()*10));
    }
    for (j=1 ; j<= (i-1) ; j++){
        var random = String(Math.floor(Math.random()*10));
        var captcha = captcha + random;
    }
    return captcha;
}

// every method
// var usersAge = [18, 22 , 45 , 40, 19 , 10]
// var isUserAge = usersAge.every(function(ages){
//     return ages >= 18;
// })

// if (isUserAge == true){
//     alert("preparing to ring!")
// }else{
//     alert("you Are not allowed to hava a call!")
// }


// check special character in users
// var users = [
//     {name:"ali", family: "torabi" , age: 25 , phone:09354557879},
//     {name: "salar", family: "torabi" , age: 27 , phone:09352838975},
//     {name: "alireza", family: "torabi" , age: 50 , phone:09122039768}
// ]
// var isInUser = users.some(function(checkUserName){
//     return checkUserName.name == "hassan";
// })
// alert(isInUser);


// بررسی کلمه آینه ای
// var userword = prompt("کلمه ای را برای بررسی وارد نمایید!")
// while(isNaN(userword) == false ){
//     alert("فقط کلمه وارد کنید دیکه!");
//     userword = prompt("کلمه ای را برای بررسی وارد نمایید!")
// }
// var arrayUserWord = userword.split("");
// userword = arrayUserWord.join("");
// reverseWord = reverseWord.join("");
// if (userword === reverseWord){
//     alert("کلمه آینه ای است!")
// }else{
//     alert("کلمه عادی است!")
// }



// تمرین نمایش شهر های هر استان
// var states = {
//     tehran: ["tehran", "eslamshahr", "shahriar", 'ghale', 'sharhe rey'],
//     alborz: ["karaj", "fardis", "gohardasht", 'soheilie', 'chaloos'],
//     hamedan: ["hamedan", "famenin", "kaboodar ahang", "bahar", "lalejin"]
// }
// var userCityChoise = prompt("enter a state name");
// userCityChoise = userCityChoise.toLowerCase();
// while(states[userCityChoise] === undefined){
//     alert("we dont have this state information!")
//     userCityChoise = prompt("enter a state name");
//     userCityChoise = userCityChoise.toLowerCase();
// } 
// console.log(states[userCityChoise])



// تمرین آزمون تستی
// var score = 0;
// var questions = [
//     {id:1, q: "what is capital of Iran: \n\n1. tehran \n2. tabriaz\n3.shiraz\n4.qom", answer: 1},
//     {id:1, q: "what is capital of Iraq: \n\n1. najaf \n2. basreh\n3.baqdad\n4.karbala", answer: 3},
//     {id:1, q: "what is capital of Turkey: \n\n1. Istanbol \n2. Ankara\n3.Noor\n4.kerman", answer: 2},   
// ]

// var answers = [];
// var scores = [];
// for(var i = 0 ; i < questions.length ; i++){
//     var userAnswer = +prompt(questions[i].q)
//     while(userAnswer != 1 && userAnswer != 2 && userAnswer != 3  && userAnswer != 4){
//         alert("enter a valid number!")
//         userAnswer = +prompt(questions[1].q)
//     }
//     answers.push(userAnswer);
//     if(questions[i].answer === userAnswer){
//         scores.push(1);
//     }else{
//         scores.push(0);
//     }
// }

// var finalScore = 0;
// scores.forEach(function(item){
//     finalScore += item;
// })

// alert("your score is : " + finalScore)
// console.log(answers)


// find password with username
// var usersData = [
//     {id: 1 , username:"salar" , password:"12345eefw6"},
//     {id: 2 , username:"yashar" , password:"654ef321"},
//     {id: 3 , username:"alireza" , password:"3513854dd"},
//     {id: 4 , username:"ziba" , password:"wew3434@er"},
//     {id: 5 , username:"hamodreza" , password:"626959"},
// ]


// var userUsername = prompt("enter username to recover your passwors!");

// var findUserData = usersData.find(function(user){
//     return user.username === userUsername;
// })

// if(findUserData.password === undefined){
//     alert("sorry we dont have this username!")
// }else {
//     alert("your password is: " + findUserData.password)
// }




// //timer exercise
// var timerMinute = +prompt("set minute");
// var timerSeconds = +prompt("set seconds");
// var totalTime = timerMinute*60 + timerSeconds;
// var timer = setInterval( function(){
//     if(totalTime === 0){
//         clearInterval(timer);
//         alert("your time is up!")
//     }
//     console.log(totalTime)
//     totalTime--
// },1000)


// //set timeout
// var userPhoto = false;
// setTimeout(function(){
//     if(!userPhoto){
//         alert("you must upload a picture!")
//     }
// } ,5000)



function turnON() {
    if(document.querySelector("button").innerText === "light is off!"){
        document.querySelector("button").innerText = "light is on!"
    }else if(document.querySelector("button").innerText === "light is on!"){
        document.querySelector("button").innerText = "light is off!"
    }
}


/////////////////////////////////////////////////////////////////////////
const getMenuBar = document.getElementById("menu-bar");
document.addEventListener("scroll", function(event){
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop >= 100){
        getMenuBar.style.backgroundColor = "#222"
        getMenuBar.style.color = "#fff"
        getMenuBar.style.height = "50px"
        getMenuBar.style.position = "fixed";
        getMenuBar.style.top = "0";

    }else if(document.documentElement.scrollTop < 100){
        getMenuBar.style.backgroundColor = "#222"
        getMenuBar.style.backgroundColor = "#fff"
        getMenuBar.style.color = "rgb(34, 34, 34)"
        getMenuBar.style.height = "40px"
        getMenuBar.style.position = "relative";

    }
})
