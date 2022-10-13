const keyBoardKeys = document.querySelectorAll("li");
const title = document.querySelector("h1");

Object.keys(keyBoardKeys).forEach(function(key){
   keyBoardKeys[key].addEventListener("click", function(event){
    if(event.target.id.length === 1){
        title.innerHTML += event.target.id;
        document.getElementById(event.target.id).classList.add("hit");
        document.getElementById(event.target.id).addEventListener("animationend", function(){
            document.getElementById(event.target.id).classList.remove("hit");    
        })
    }else if(event.target.id === "BACKSPACE" && title.innerHTML != ""){
        title.innerHTML = title.innerHTML.slice(0,-1);
    }
   })
});

document.body.addEventListener("keydown", function(event){
    event.preventDefault();
    let keyPress = event.key.toUpperCase();

    if(keyPress === "BACKSPACE" && title.innerHTML != ""){
        title.innerHTML = title.innerHTML.slice(0,-1)
    }else{
        if(document.getElementById(keyPress)){
            document.getElementById(keyPress).classList.add("hit");
            document.getElementById(keyPress).addEventListener("animationend", function(){
                document.getElementById(keyPress).classList.remove("hit");  
            });
        };

        if(keyPress.length == 1){
            title.innerHTML += keyPress;
        }
}});


