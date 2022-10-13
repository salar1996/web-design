const $ = document;
const colors = $.querySelector(".themes").children;

Object.keys(colors).forEach(function(key){
   colors[key].addEventListener("click",function(event){
    let selectedColor = event.target.getAttribute("data-color");
    document.documentElement.style.setProperty("--theme-color", selectedColor);
   })
})

