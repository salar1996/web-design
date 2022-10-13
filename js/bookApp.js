const $ = document;
const submit = $.querySelector("#submit");
const title = $.querySelector("#title");
const code = $.querySelector("#code");
const author = $.querySelector("#author");
const instock = $.querySelector("#instock");
const stock = $.querySelector("#stock");
const operations = $.querySelector(".operations");
const bookList = $.querySelector("#book-list");
let bookInfo = [];
let bookTitle;
let bookCode;
let bookAutor;
let bookStock;
let newBook;

//// functions
function submitHandler(event) {
    event.preventDefault();
    checkInfo();
};

let warningAlarm;
function warning(element) {
    if(element.parentElement.children[2]){
        element.parentElement.children[2].remove();
    }

    warningAlarm = document.createElement("p");
    warningAlarm.classList.add("warning");
    warningAlarm.innerHTML = "** لطفاً اطلاعات وارد شده را به درستی وارد نمایید!";

    element.style.boxShadow = "0 0 2px 0 red";
    element.parentElement.append(warningAlarm);
    element.addEventListener("focus", function () {
        element.parentElement.children[2].remove();
        element.style = "";
    })
}


function checkInfo() {

    if (!code.value) {
        warning(code);
        code.addEventListener("blur", function () {
            if (!code.value) {
                warning(code);
            }
        })
    }


    if (!title.value) {
        warning(title);
        title.addEventListener("blur", function () {
            if (!title.value) {
                warning(title);
            }
        })
    }

    if (!author.value) {
        warning(author);
        author.addEventListener("blur", function () {
            if (!author.value) {
                warning(author);
            }
        })
    }

    if(instock.value != "false" && !stock.value){
        warning(stock);
        stock.addEventListener("blur", function () {
            if (!stock.value) {
                warning(stock);
            }
        })
    }

    if(code.value && title.value){
        bookTitle = title.value;
        bookCode = code.value;
        bookAutor = author.value;
        if(stock.value){
            bookStock = stock.value;
        }else {
            bookStock = 0;
        }

        code.value = "";
        title.value = "";
        author.value = "";
        if(instock.value != "false"){
            stock.value = "";
            stock.parentElement.classList.add("d-none");
            instock.value = "false";
            instock.checked = false;

        }
    }    

    
    newBook = {
        code: bookCode,
        title: bookTitle,
        autor: bookAutor,
        stock: bookStock,
    }

    if(localStorage.getItem("books") && localStorage.getItem("books") != []){
        bookInfo = JSON.parse(localStorage.getItem("books"));
    }
    bookInfo.push(newBook);
    localStorage.setItem("books",JSON.stringify(bookInfo));

    loadBooks();

}

let newItem;
function loadBooks(){
    bookList.innerHTML = "";
    newBook = JSON.parse(localStorage.getItem("books"));
    if(newBook){
        newBook.forEach(function(book){
            newItem = document.createElement("tr");
            newItem.innerHTML = "<td><ul class=\"operations\"><li class=\"trash\"><i class=\"fas fa-trash\"></i></li><li class=\"ckeck\"><i class=\"fas fa-check\"></i></li><li class=\"brush\"><i class=\"fas fa-brush\"></i></li></ul></td><td>" + book.code + "</td><td>" + book.title + "</td><td>" + book.autor + "</td><td><i class=\"fas fa-check\"></i></td><td>" + book.stock + "</td>";
            bookList.append(newItem);
        });
    
        $.querySelectorAll(".trash").forEach(function(icon){
            icon.addEventListener("click", removeBook)
        })
    }else{
        bookInfo.innerHTML = "";
    }
}

function removeBook(event){
    let selectedItemCode = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].innerHTML;
    bookInfo = JSON.parse(localStorage.getItem("books"));
    let localStorageIndex = bookInfo.findIndex(function(book){
        return book.code === selectedItemCode;
    });

    bookInfo.splice(localStorageIndex,1);
    localStorage.setItem("books", JSON.stringify(bookInfo));
    loadBooks();
}

//// events
window.addEventListener("load", loadBooks)
submit.addEventListener("click", submitHandler);
instock.addEventListener("change", function(){
    if(instock.value === "false"){
        stock.parentElement.classList.remove("d-none");
        instock.value = true;
        instock.setAttribute("ckecked","checked");

    }else{
        stock.parentElement.classList.add("d-none");
        instock.value = "false";
        instock.removeAttribute("ckecked");
    }    
});


