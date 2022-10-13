const $ = document;

const mainInput = $.getElementById("main-input");
const addButton = $.getElementById("add-button");
const eraseButton = $.getElementById("erase-button");
const itemArea = $.getElementById("notes");
const selectColor = $.querySelector(".choose-color");
const colors = $.querySelector("#select-color").children[1].children;
const colors2 = $.querySelectorAll(".color");
const colors3 = $.querySelectorAll(".pick-color");
let toDoItems = [];
let dataId = 0;

//////////////////////////////// to use forEach you must use querySelectorAll() method!
// var test3 = colors;
// Object.keys(test3).forEach(function(key) {

//     console.log(test3[key]);
  
//   });
window.addEventListener("load", loadItems);

mainInput.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        addNewItem();
    }
});

addButton.addEventListener("click",addNewItem);

eraseButton.addEventListener("click",function(){
    mainInput.value = "";
    mainInput.style.backgroundColor = "#fff"
    mainInput.style.color = "#333";
});

colors3.forEach(function(item){
    item.addEventListener("click", function(event){
        let pickColor = window.getComputedStyle(item).backgroundColor;
        mainInput.style.backgroundColor = pickColor;
        mainInput.style.color = "white"
        mainInput.focus();
    })
})


function addNewItem (){
        var newInput = mainInput.value.trim();
        if(newInput){
            mainInput.value = "";

            var newItem = $.createElement("div");
            newItem.setAttribute("draggable", true);
            newItem.classList.add("items");
            newItem.innerHTML ="<span>" +  newInput + "</span><ul class=\"icon-box\"><li><i class=\"fa-solid fa-trash icons\"></i></li><li><i class=\"fa-solid fa-check icons\"></i></li><li><i class=\"fa-solid fa-brush icons\"></i></li></ul>"

            // set functions to new items
            newItem.children[1].children[0].addEventListener("click", removeItem);
            newItem.children[1].children[1].addEventListener("click", checkItem);
            newItem.children[1].children[2].addEventListener("click", colorChange);
            // style to new items
            if(mainInput.style.backgroundColor != "rgb(255, 255, 255)"){
                newItem.style.backgroundColor = mainInput.style.backgroundColor;
                newItem.style.color = "white";
            }
            mainInput.style.backgroundColor = "#fff"
            mainInput.style.color = "#333";
            // set items to localStorage
            let prevToDoes = JSON.parse(localStorage.getItem("toDoItems"));
            if(prevToDoes && prevToDoes.length !== 0){
                toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
                dataId = JSON.parse(localStorage.getItem("toDoItems"))[toDoItems.length-1].id + 1 ;
            }

            toDoItems.push({html: newItem.innerHTML, style: "background-color: " + newItem.style.backgroundColor + "; " + "color: " +  newItem.style.color + ";", id: dataId});
            newItem.setAttribute("data-id", dataId);
            dataId++;
            localStorage.setItem("toDoItems",JSON.stringify(toDoItems));
            itemArea.append(newItem);
        }
}

/////////////////////////////////////////////// refactoring event remove
// let toDoItem = $.querySelector("#notes");
// toDoItem.addEventListener("click", function(event){
//     let selectElementToBeDeleted = event.target.parentElement;
//     let iconClassName = event.target.parentElement.classList;
//     let isTrashIcon = false;
//     iconClassName.forEach(function(item){
//         if (item === "fa-trash"){
//             isTrashIcon = true;
//             return;
//         }
//     })
//     console.log(isTrashIcon)
//     if(isTrashIcon){
//         selectElementToBeDeleted.parentElement.parentElement.parentElement.remove();
//     }
// });


function removeItem (event){
    let getElement = event.target.parentElement.parentElement.parentElement.parentElement;
    if(getElement.className === "items"){
        getElement.style.backgroundColor = "#f2634b";
        getElement.style.animation = "fadeout 1s";
    
        setTimeout(function(){
            getElement.remove();
        }, 900)
    }
            ////set remove items to localStorage
            let loadPrevItems = JSON.parse(localStorage.getItem("toDoItems"));
            let ItemID = loadPrevItems.findIndex(function(item){
                return item.id == getElement.getAttribute("data-id");
            })
            loadPrevItems.splice(ItemID,1)
            localStorage.setItem("toDoItems", JSON.stringify(loadPrevItems))
}; //////////////////////////////////////////////////////////////////////////////////////END of removeItem();

function checkItem (event){
    let checkElem = event.target.parentElement.parentElement.parentElement;
    if(checkElem.className === "items"){
        if(checkElem.style.backgroundColor === "rgb(95, 187, 74)"){
            checkElem.style.backgroundColor = "rgba(0, 0, 0, .8)";
        }else{
            checkElem.style.backgroundColor = "rgb(95, 187, 74)";
            checkElem.style.color = "white";
        }

             ////set check items to localStorage
     let loadPrevItems = JSON.parse(localStorage.getItem("toDoItems"));
     let ItemID = loadPrevItems.findIndex(function(item){
            return item.id == checkElem.getAttribute("data-id");
            })
     loadPrevItems[ItemID].style = "background-color: " + checkElem.style.backgroundColor + "; " + "color: " +  checkElem.style.color + ";";
     localStorage.setItem("toDoItems", JSON.stringify(loadPrevItems));
    }


}

function colorChange (event){
    let checkElem = event.target.parentElement.parentElement.parentElement;
    if(!checkElem.children[1].className){
        checkElem = checkElem.parentElement;
    }
    if(checkElem.parentElement.className === "box"){
        selectColor.style.display = "block";

        selectColor.addEventListener("click", function(){
            selectColor.style.display = "none";
        })}


/////////////////////////////////// if you dont use querySelectorAll method, you shild do this way to apply addEventListener to your child Elements
        // Object.keys(colors).forEach(function(key){
        //     colors[key].addEventListener("click", function(event){
        //        const colorSelected = window.getComputedStyle(colors[key]).backgroundColor
        //        checkElem.style.backgroundColor = colorSelected;
        //     })
        // })

        //// this added to be different to other valus!
        checkElem.style.backgroundColor = "rgb(17, 34, 51)";
        let colorSelected;
        colors2.forEach(function(item){
            item.addEventListener("click",function(event){
                colorSelected = window.getComputedStyle(item).backgroundColor;
                if(checkElem.style.backgroundColor === "rgb(17, 34, 51)"){
                    checkElem.style.backgroundColor = colorSelected;
                    checkElem.style.color = "white";
                                 ////set colorChange items to localStorage
     let loadPrevItems = JSON.parse(localStorage.getItem("toDoItems"));
     let ItemID = loadPrevItems.findIndex(function(item){
            return item.id == checkElem.getAttribute("data-id");
            })
     loadPrevItems[ItemID].style = "background-color: " + window.getComputedStyle(checkElem).backgroundColor + "; " + "color: white;";
     localStorage.setItem("toDoItems", JSON.stringify(loadPrevItems));
                }
            })

        })

}


function loadItems (){
    if(localStorage.getItem("toDoItems")){
        let oldToDo = JSON.parse(localStorage.getItem("toDoItems"));

        oldToDo.forEach(function(item){
            // load prev items
            var oldItem = $.createElement("div");
            oldItem.setAttribute("draggable", true);
            oldItem.setAttribute("data-id",item.id);
            dataId++;
            oldItem.classList.add("items");
            oldItem.innerHTML = item.html;
            oldItem.style = item.style;
            itemArea.append(oldItem);
            //set function to prev items
            oldItem.children[1].children[0].addEventListener("click", removeItem);
            oldItem.children[1].children[1].addEventListener("click", checkItem);
            oldItem.children[1].children[2].addEventListener("click", colorChange);

        })
    }
}
