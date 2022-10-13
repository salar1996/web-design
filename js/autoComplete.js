const courses = [
    "جاوا اسکریپت",
    "پایتون",
    "طراحی وب",
    "جاوا",
    "اچ تی ام ال",
    "فرانت اند",
    "بک اند",
    "JSON",
    "Java Script",
    "HTML",
    "css",
    "JQuery",
    "node js",
    "react js",
    "angular js",
    "pyton",
    "php",
    "asp .net",
    "android",
    "ios",
    "windows",
    "linux",
    "mac os",
    "web design",
    "back-end",
    "front-end",
    "laravel",
    "c#",
    "c++",
    "Django"
];

const $ = document;
const mainInput = $.querySelector("#main-input");
const ResultBox = $.querySelector(".autocom-box");


mainInput.addEventListener("keyup", checkForSuggestion);


function checkForSuggestion() {
    let wordInserted = mainInput.value.toLowerCase();
    ResultBox.innerHTML = "";


    let suggestion;
    if (wordInserted.length === 1) {
        suggestion = courses.filter(function (item) {
            return item.toLocaleLowerCase().startsWith(wordInserted)
        })
    } else if (wordInserted.length === 0) {
        $.querySelector(".search-input").classList.remove("active");
        suggestion = [];
    } else {
        suggestion = courses.filter(function (item) {
            return item.toLocaleLowerCase().includes(wordInserted)
        })
    }

    if (suggestion.length > 0) {
        $.querySelector(".search-input").classList.add("active");
        suggestion.forEach(function (suggest) {
            //// primary way (using "")
            // ResultBox.insertAdjacentHTML("beforeend", '<li onclick="fillWithSuggestion(event)">' + suggest + '</li>');

            // new way (using ``)
            ResultBox.insertAdjacentHTML("beforeend", `<li onclick="fillWithSuggestion(event)">  ${suggest}  </li>`);
        })
    } else if (suggestion.length === 0 && wordInserted.length !== 0) {
        $.querySelector(".search-input").classList.add("active");
        ResultBox.insertAdjacentHTML("beforeend", '<li>' + wordInserted + '</li>');
    }
}


function fillWithSuggestion(event) {
    let courseSelected = event.target.innerHTML;
    mainInput.value = courseSelected;
    checkForSuggestion();
    $.querySelector(".search-input").classList.remove("active");
}